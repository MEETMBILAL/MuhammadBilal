import { NextResponse } from "next/server";
import { checkRateLimit, extractClientIp } from "@/lib/rateLimit";
import { validateEnquiryPayload } from "@/lib/securityValidation";

// Maximum allowable request body size: 64 KB (prevents payload-flooding / memory exhaustion)
const MAX_PAYLOAD_BYTES = 64 * 1024;

// Rate Limit Config: 5 submissions per 15 minutes per IP; 30 min cooldown on repeated abuse
const RATE_LIMIT_CONFIG = {
  maxRequests: 5,
  windowMs: 15 * 60 * 1000,
  cooldownMs: 30 * 60 * 1000,
};

export async function POST(request: Request) {
  const clientIp = extractClientIp(request);

  try {
    // 1. Content-Type Enforcement
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Invalid Content-Type. Expected application/json." },
        { status: 415 }
      );
    }

    // 2. Body Size Verification (Header Inspection + Stream Size Guard)
    const contentLength = request.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { success: false, message: "Payload size exceeds maximum allowable limit (64 KB)." },
        { status: 413 }
      );
    }

    // 3. Distributed / Sliding Window Rate Limiting Check
    const rateCheck = await checkRateLimit(`enquiry:${clientIp}`, RATE_LIMIT_CONFIG);
    if (!rateCheck.allowed) {
      const retryAfter = rateCheck.retryAfterSeconds || 60;
      return NextResponse.json(
        {
          success: false,
          message: rateCheck.isCooldown
            ? "Submission rate limit exceeded. Please wait 30 minutes before trying again."
            : `Too many submissions from your address. Please retry in ${retryAfter} seconds.`,
          retryAfter,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfter),
            "X-RateLimit-Limit": String(RATE_LIMIT_CONFIG.maxRequests),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(rateCheck.resetSeconds),
          },
        }
      );
    }

    // 4. Safe JSON Parsing (Guards against malformed payloads or stream bombs)
    let rawBody: any;
    try {
      const text = await request.text();
      if (text.length > MAX_PAYLOAD_BYTES) {
        return NextResponse.json(
          { success: false, message: "Payload size exceeds maximum allowable limit." },
          { status: 413 }
        );
      }
      rawBody = JSON.parse(text);
    } catch (parseErr) {
      return NextResponse.json(
        { success: false, message: "Malformed JSON payload in request." },
        { status: 400 }
      );
    }

    // 5. Anti-Spam Honeypot Verification (Silently absorbs automated form-filler bots)
    if (rawBody.honeypot && String(rawBody.honeypot).trim() !== "") {
      return NextResponse.json(
        { success: true, message: "Enquiry logged successfully." },
        { status: 200 }
      );
    }

    // 6. Strict Server-Side Validation, Type Checking & Sanitization
    const { isValid, sanitized, errors } = validateEnquiryPayload(rawBody);
    if (!isValid || !sanitized) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please correct the specified fields.",
          errors,
        },
        { status: 422 }
      );
    }

    // 7. Format Audit Telemetry (Without Exposing PII in Logs)
    const referenceId = `ENQ-${Date.now().toString(36).toUpperCase()}`;
    const timestamp = new Date().toISOString();

    // Redacted log: Captures project parameters for audit without printing client emails to public log stores
    console.info(`[PROJECT_ENQUIRY] Ref: ${referenceId} | IP: ${clientIp.slice(0, 7)}*** | Type: ${sanitized.projectType} | Timeline: ${sanitized.timeline}`);

    // 8. Secure Outbound Webhook Dispatch (Server-Side Only)
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.startsWith("https://")) {
      try {
        // Enforce 4-second timeout on outbound notification webhook
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 4000);

        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            text: `*New Project Enquiry [${referenceId}]*\n*Client:* ${sanitized.name} (${sanitized.email})\n*Company:* ${sanitized.company || "None"}\n*Type:* ${sanitized.projectType}\n*Timeline:* ${sanitized.timeline}\n*Budget:* ${sanitized.budgetRange}\n*Requirements:* ${sanitized.requirements.join(", ") || "None"}\n*Description:* ${sanitized.description}`,
          }),
        });
        clearTimeout(timeoutId);
      } catch (webhookErr) {
        // Fail gracefully; webhook failure should not block client receipt
        console.error("[WEBHOOK_DISPATCH_TIMEOUT_OR_FAILED]", referenceId);
      }
    }

    // 9. Safe Client Response
    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: "Your project brief has been securely received. I will review and reply within 24 hours.",
        receivedSummary: {
          referenceId,
          projectType: sanitized.projectType,
          timeline: sanitized.timeline,
          recipientEmail: sanitized.email,
        },
      },
      {
        status: 200,
        headers: {
          "X-RateLimit-Limit": String(RATE_LIMIT_CONFIG.maxRequests),
          "X-RateLimit-Remaining": String(rateCheck.remaining),
        },
      }
    );
  } catch (error) {
    // Never expose stack traces or internal implementation paths
    console.error("[API_ENQUIRY_INTERNAL_EXCEPTION]", error);
    return NextResponse.json(
      {
        success: false,
        message: "A secure server error occurred while processing your brief. Please email directly at dmbilaldev@gmail.com.",
      },
      { status: 500 }
    );
  }
}

// Explicitly reject all HTTP methods other than POST with 405 Method Not Allowed
export async function GET() {
  return NextResponse.json({ success: false, message: "Method Not Allowed" }, { status: 405, headers: { Allow: "POST" } });
}

export async function PUT() {
  return NextResponse.json({ success: false, message: "Method Not Allowed" }, { status: 405, headers: { Allow: "POST" } });
}

export async function DELETE() {
  return NextResponse.json({ success: false, message: "Method Not Allowed" }, { status: 405, headers: { Allow: "POST" } });
}

export async function PATCH() {
  return NextResponse.json({ success: false, message: "Method Not Allowed" }, { status: 405, headers: { Allow: "POST" } });
}