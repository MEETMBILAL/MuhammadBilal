import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const rawBase = process.env.NEXT_PUBLIC_SITE_URL || "https://dmbilal.vercel.app";
  const baseUrl = rawBase.startsWith("http://") || rawBase.startsWith("https://")
    ? rawBase
    : `https://${rawBase}`;
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}#capabilities`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}#work`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}#process`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#experience`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}#contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}