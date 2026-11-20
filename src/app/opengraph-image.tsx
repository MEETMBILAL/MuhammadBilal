import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhammad Bilal // Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0E0E10",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          border: "2px solid #2F2F36",
        }}
      >
        {/* Top Header Tag */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            color: "#8E8E93",
            fontSize: "18px",
            letterSpacing: "2px",
          }}
        >
          <span>MUHAMMAD BILAL // FULL STACK DEVELOPER</span>
          <span style={{ color: "#C47A46" }}>BAHAWALPUR, PK · REMOTE WORLDWIDE</span>
        </div>

        {/* Central Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#EDEDEB",
              lineHeight: 1.05,
              letterSpacing: "-1.5px",
            }}
          >
            Building full-stack systems that actually ship.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#9999A0",
              lineHeight: 1.4,
              maxWidth: "950px",
            }}
          >
            React · Next.js · TypeScript · Python · Django · SaaS MVP Development
          </div>
        </div>

        {/* Bottom Verification Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1E1E22",
            paddingTop: "24px",
            color: "#56565E",
            fontSize: "16px",
          }}
        >
          <span>dmbilal.vercel.app</span>
          <span>github.com/MEETMBILAL · linkedin.com/in/meetmbilal</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}