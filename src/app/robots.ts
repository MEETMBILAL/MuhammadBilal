import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const rawBase = process.env.NEXT_PUBLIC_SITE_URL || "https://dmbilal.vercel.app";
  const baseUrl = rawBase.startsWith("http://") || rawBase.startsWith("https://")
    ? rawBase
    : `https://${rawBase}`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "Amazonbot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}