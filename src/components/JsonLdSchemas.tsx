import React from "react";

export function JsonLdSchemas() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dmbilal.vercel.app";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Muhammad Bilal",
    alternateName: ["meetmbilal", "dmbilal"],
    url: siteUrl,
    telephone: "+92-309-3146450",
    email: "mailto:dmbilaldev@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bahawalpur",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Army Public School & College (APSNMC), Bahawalpur",
    },
    sameAs: [
      "https://github.com/MEETMBILAL",
      "https://linkedin.com/in/meetmbilal",
      siteUrl,
    ],
    knowsAbout: [
      "Full Stack Web Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "Django",
      "REST APIs",
      "SQLite",
      "Tailwind CSS",
      "SaaS MVP Development",
      "AI-Assisted Development",
      "Web Applications",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "Muhammad Bilal // Full Stack Developer",
    description:
      "Official portfolio and technical services platform of Muhammad Bilal. Full Stack Developer specializing in React, Next.js, and Python/Django.",
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    inLanguage: "en-US",
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: "Muhammad Bilal — Full Stack Web Development Services",
    url: siteUrl,
    telephone: "+92-309-3146450",
    email: "dmbilaldev@gmail.com",
    image: `${siteUrl}/og-image.png`,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide (Remote)",
    },
    serviceArea: "Worldwide",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bahawalpur",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Engineering & Software Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SaaS MVP Development",
            description:
              "End-to-end Minimum Viable Product engineering connecting React/Next.js frontends with Python/Django backends.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full-Stack Web Applications",
            description:
              "Custom business web applications, role-based dashboards, and relational data management systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Frontend Development & React Applications",
            description:
              "Component-driven frontend architectures translated with fidelity from Figma into Next.js and TypeScript.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Backend Development & API Integration",
            description:
              "Structured Python/Django REST API architecture, authentication systems, and database modeling.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Business Website Development & Redesign",
            description:
              "High-performance, responsive business websites built on Next.js and Tailwind CSS optimized for Core Web Vitals.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
    </>
  );
}