/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 1. Intellectual Property & Source Code Protection:
  // Disables public production source maps so unminified TS/React source files are never accessible via DevTools
  productionBrowserSourceMaps: false,

  // 2. Remove identifying server headers
  poweredByHeader: false,

  // 3. Security Headers Matrix (HSTS, CSP, Framing, Permissions, Referrer)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Enforce HTTPS across all subdomains with 2-year max-age and preload readiness
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Prevent MIME-sniffing attacks
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Frame Protection against Clickjacking (DENY framing)
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // Strict Referrer Policy: Send full referrer to same-origin, only origin on cross-origin HTTPS
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Restrict hardware and privacy-invasive browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=(), payment=()",
          },
          // Cross-Origin Isolation & Resource Policies
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "same-origin",
          },
          // Content Security Policy (CSP):
          // Enforces strict asset origin control while permitting verified Vercel & Google Analytics/Fonts
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              "frame-ancestors 'none'",
              "form-action 'self'",
              "base-uri 'self'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
      // API Specific Security & Cache Control Headers
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;