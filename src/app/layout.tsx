import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { JsonLdSchemas } from "@/components/JsonLdSchemas";
import { KnowledgeGraphFaq } from "@/components/KnowledgeGraphFaq";
import { ConsentAnalyticsProvider } from "@/components/ConsentAnalyticsProvider";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0E0E10",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dmbilal.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Muhammad Bilal // Full Stack Developer (React, Next.js, Django)",
    template: "%s | Muhammad Bilal",
  },
  description:
    "Hire Muhammad Bilal, a Full Stack Developer specializing in React, Next.js, and Python/Django. Shipped production SaaS platforms, AI estimation engines, and client web applications. Based in Bahawalpur, Pakistan — available for remote projects worldwide.",
  keywords: [
    "Full stack developer in Pakistan",
    "React developer for hire",
    "Next.js developer",
    "Freelance web developer",
    "Website development services",
    "SaaS MVP development",
    "Business website development",
    "Custom web application development",
    "Frontend developer for projects",
    "Web developer in Bahawalpur",
    "Django REST developer",
    "Muhammad Bilal developer",
    "meetmbilal",
  ],
  authors: [{ name: "Muhammad Bilal", url: siteUrl }],
  creator: "Muhammad Bilal",
  publisher: "Muhammad Bilal",
  applicationName: "Muhammad Bilal Portfolio",
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Muhammad Bilal // Full Stack Developer",
    title: "Muhammad Bilal // Full Stack Developer (React, Next.js, Django)",
    description:
      "Full Stack Developer specializing in React, Next.js, and Python/Django. Shipped 6 production platforms including EVT SaaS. Available for remote projects worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Bilal // Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and Python/Django. Shipped production SaaS platforms and web applications.",
    creator: "@meetmbilal",
  },
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Bahawalpur",
    "geo.position": "30.5928;71.7458",
    ICBM: "30.5928, 71.7458",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} scroll-smooth`}>
      <head>
        <JsonLdSchemas />
        <KnowledgeGraphFaq />
      </head>
      <body className="min-h-screen bg-surface-base text-type-primary font-sans selection:bg-surface-overlay selection:text-type-primary">
        <ConsentAnalyticsProvider />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}