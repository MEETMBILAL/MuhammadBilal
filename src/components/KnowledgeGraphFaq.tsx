import React from "react";

export function KnowledgeGraphFaq() {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dmbilal.vercel.app";
  const siteUrl = rawSiteUrl.startsWith("http://") || rawSiteUrl.startsWith("https://")
    ? rawSiteUrl
    : `https://${rawSiteUrl}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Muhammad Bilal and what is his developer background?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Muhammad Bilal (online handle: meetmbilal / dmbilal) is a Full Stack Developer based in Bahawalpur, Pakistan. He specializes in full-stack web engineering using React, Next.js, TypeScript, and Python/Django, with hands-on experience shipping production SaaS platforms, AI-assisted estimation engines, and client web applications."
        }
      },
      {
        "@type": "Question",
        "name": "Can Muhammad Bilal build a SaaS Minimum Viable Product (MVP)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Muhammad Bilal specializes in SaaS MVP development, having architected and shipped EVT SaaS (EasyEstimate)—an end-to-end AI-assisted estimation, quote generation, and invoicing web platform for construction professionals built with a Django backend and React/Next.js frontend."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies and frameworks does Muhammad Bilal use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Muhammad Bilal's core stack includes React, Next.js (App Router), TypeScript, JavaScript (ES6+), Python, Django, REST APIs, SQLite, Tailwind CSS, Git, and deployment on Vercel."
        }
      },
      {
        "@type": "Question",
        "name": "Is Muhammad Bilal available for freelance contracts and remote employment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Muhammad Bilal is open to remote developer contracts, freelance project engagements, and full-stack engineering roles worldwide, operating across global timezones from Bahawalpur, Pakistan (UTC+5)."
        }
      },
      {
        "@type": "Question",
        "name": "How can clients hire or contact Muhammad Bilal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Clients and recruiters can contact Muhammad Bilal directly via email at dmbilaldev@gmail.com, through his portfolio brief builder at ${siteUrl}, or connect on LinkedIn (linkedin.com/in/meetmbilal) and GitHub (github.com/MEETMBILAL).`
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}