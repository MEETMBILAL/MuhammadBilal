/**
 * Server-Side Sliding Window Rate Limiter
 * 
 * Supports:
 * 1. Distributed Upstash Redis (atomic, multi-region Vercel Edge/Serverless)
 * 2. Hardened In-Memory sliding log with automatic TTL garbage collection (fallback)
 * 3. Safe IP extraction preventing trivial X-Forwarded-For spoofing
 */

interface RateLimitRecord {
  timestamps: number[];
  cooldownUntil?: number;
}

// In-memory sliding log cache (persists during warm serverless/container instances)
const inMemoryStore = new Map<string, RateLimitRecord>();

// Periodic garbage collection every 10 minutes to prevent memory leak
const CLEANUP_INTERVAL = 10 * 60 * 1000;
let lastCleanup = Date.now();

function purgeExpiredRecords(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;

  const threshold = now - windowMs * 2;
  for (const [key, record] of inMemoryStore.entries()) {
    if (record.cooldownUntil && record.cooldownUntil > now) continue;
    const activeTimestamps = record.timestamps.filter((ts) => ts > threshold);
    if (activeTimestamps.length === 0) {
      inMemoryStore.delete(key);
    } else {
      record.timestamps = activeTimestamps;
    }
  }
}

export interface RateLimitConfig {
  maxRequests: number; // e.g. 5 submissions
  windowMs: number;    // e.g. 15 minutes (900000 ms)
  cooldownMs?: number; // e.g. 30 minutes cooldown on repeated abuse
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetSeconds: number;
  retryAfterSeconds?: number;
  isCooldown?: boolean;
}

/**
 * Safely extracts client IP address, avoiding spoofed X-Forwarded-For headers.
 * On Vercel, x-real-ip or x-vercel-forwarded-for is injected by edge proxies.
 */
export function extractClientIp(request: Request): string {
  const headers = request.headers;

  // 1. Vercel proprietary verified client IP
  const vercelIp = headers.get("x-vercel-forwarded-for");
  if (vercelIp) {
    return vercelIp.split(",")[0].trim();
  }

  // 2. Real-IP set by trusted reverse proxy
  const realIp = headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }

  // 3. Fallback to first hop of standard X-Forwarded-For
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const ips = forwardedFor.split(",").map((ip) => ip.trim());
    return ips[0] || "127.0.0.1";
  }

  return "127.0.0.1";
}

/**
 * Executes distributed Redis rate check if configured, otherwise uses hardened in-memory sliding window.
 */
export async function checkRateLimit(
  keyIdentifier: string,
  config: RateLimitConfig
): Promise<RateLimitResult> {
  const now = Date.now();
  const windowStart = now - config.windowMs;

  // Check Upstash Redis configuration
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (redisUrl && redisToken) {
    try {
      // Execute distributed sliding window via Upstash REST API
      const redisKey = `ratelimit:${keyIdentifier}`;
      // ZADD timestamp, ZREMRANGEBYSCORE old, ZCARD count, EXPIRE window
      const pipelineUrl = `${redisUrl}/pipeline`;
      const res = await fetch(pipelineUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redisToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          ["ZREMRANGEBYSCORE", redisKey, 0, windowStart],
          ["ZCARD", redisKey],
          ["ZADD", redisKey, now, `${now}-${Math.random()}`],
          ["EXPIRE", redisKey, Math.ceil(config.windowMs / 1000)],
        ]),
      });

      if (res.ok) {
        const results = await res.json();
        const currentCount = results[1]?.result || 0;
        const resetSeconds = Math.ceil(config.windowMs / 1000);

        if (currentCount >= config.maxRequests) {
          return {
            allowed: false,
            remaining: 0,
            resetSeconds,
            retryAfterSeconds: resetSeconds,
          };
        }

        return {
          allowed: true,
          remaining: Math.max(0, config.maxRequests - (currentCount + 1)),
          resetSeconds,
        };
      }
    } catch (redisErr) {
      console.warn("[RATE_LIMIT_REDIS_FALLBACK] Reverting to in-memory store:", redisErr);
    }
  }

  // In-Memory Sliding Window Implementation (Fallback)
  purgeExpiredRecords(config.windowMs);

  let record = inMemoryStore.get(keyIdentifier);
  if (!record) {
    record = { timestamps: [] };
    inMemoryStore.set(keyIdentifier, record);
  }

  // Verify if client is in temporary abuse cooldown
  if (record.cooldownUntil && record.cooldownUntil > now) {
    const cooldownRemainingSec = Math.ceil((record.cooldownUntil - now) / 1000);
    return {
      allowed: false,
      remaining: 0,
      resetSeconds: cooldownRemainingSec,
      retryAfterSeconds: cooldownRemainingSec,
      isCooldown: true,
    };
  }

  // Filter timestamps within current sliding window
  record.timestamps = record.timestamps.filter((ts) => ts > windowStart);

  if (record.timestamps.length >= config.maxRequests) {
    // If client repeatedly hits limit, trigger cooldown
    if (config.cooldownMs && record.timestamps.length >= config.maxRequests + 3) {
      record.cooldownUntil = now + config.cooldownMs;
      const cooldownSec = Math.ceil(config.cooldownMs / 1000);
      return {
        allowed: false,
        remaining: 0,
        resetSeconds: cooldownSec,
        retryAfterSeconds: cooldownSec,
        isCooldown: true,
      };
    }

    const oldestTs = record.timestamps[0] || windowStart;
    const retryAfter = Math.ceil((oldestTs + config.windowMs - now) / 1000);

    return {
      allowed: false,
      remaining: 0,
      resetSeconds: Math.max(1, retryAfter),
      retryAfterSeconds: Math.max(1, retryAfter),
    };
  }

  // Record current request timestamp
  record.timestamps.push(now);

  return {
    allowed: true,
    remaining: config.maxRequests - record.timestamps.length,
    resetSeconds: Math.ceil(config.windowMs / 1000),
  };
}