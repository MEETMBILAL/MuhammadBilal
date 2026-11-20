"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, Sparkles, Terminal, Globe, ArrowRight } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  category: "GEO & IDENTITY" | "TECH STACK & MVP" | "REMOTE ENGAGEMENT" | "DELIVERY PROCESS";
  answer: string;
  keyEntities: string[];
}

const FAQS_DATA: FaqItem[] = [
  {
    id: "identity",
    question: "Who is Muhammad Bilal and what web development services does he offer?",
    category: "GEO & IDENTITY",
    answer:
      "Muhammad Bilal (known as meetmbilal or dmbilal) is a Full Stack Developer based in Bahawalpur, Punjab, Pakistan, serving clients globally. He provides full-stack web engineering, custom web applications, SaaS MVP development, frontend engineering in React/Next.js, Python/Django REST API backends, and responsive UI modernization.",
    keyEntities: ["Muhammad Bilal", "meetmbilal", "Full Stack Developer", "Bahawalpur Pakistan", "React Next.js Developer"]
  },
  {
    id: "saas-mvp",
    question: "How does Muhammad Bilal build SaaS MVPs from scratch?",
    category: "TECH STACK & MVP",
    answer:
      "Muhammad Bilal builds full-stack MVPs end-to-end: relational database schema design (SQLite/PostgreSQL), secure user authentication, core business logic services in Python/Django, and typed, responsive client frontends in React and Next.js. His flagship delivery is EVT SaaS—an AI-assisted cost estimation, quote creation, and invoice generation platform for construction professionals.",
    keyEntities: ["SaaS MVP Development", "EVT SaaS", "Python Django Backend", "React Frontend", "AI Estimation Engine"]
  },
  {
    id: "tech-stack",
    question: "What specific technologies, databases, and frameworks are deployed?",
    category: "TECH STACK & MVP",
    answer:
      "Frontend: React 18+, Next.js (App Router), TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Bootstrap. Backend & APIs: Python, Django, REST API architecture, Axios, SQLite, relational modeling, session/token authentication. Tools: Git, GitHub, Vite, Vercel edge deployment, Figma, and Chrome DevTools.",
    keyEntities: ["Next.js App Router", "TypeScript", "Python Django", "REST APIs", "Tailwind CSS", "Vercel Hosting"]
  },
  {
    id: "remote-overlap",
    question: "Can Muhammad Bilal collaborate remotely with international teams across different timezones?",
    category: "REMOTE ENGAGEMENT",
    answer:
      "Yes. Operating from Pakistan (UTC+5), Muhammad Bilal routinely coordinates with US, UK, European, and Gulf timezones using asynchronous communication habits (daily EOD written logs, staging review links, clear Git commit hygiene) and flexible overlap hours for real-time video calls and technical syncs.",
    keyEntities: ["Remote Developer Pakistan", "Worldwide Freelance Developer", "Asynchronous Remote Collaboration", "UTC+5 Timezone"]
  },
  {
    id: "hiring-workflow",
    question: "What is the process to hire Muhammad Bilal for a project or remote role?",
    category: "DELIVERY PROCESS",
    answer:
      "Prospective clients can submit a project brief using the interactive builder at dmbilal.vercel.app or email dmbilaldev@gmail.com. Projects follow a 4-step delivery cycle: Discovery Call & Constraint Mapping -> Milestone-Based Fixed Scope -> Weekly Staging Builds & Direct Code Reviews -> Production Deployment with 100% Client Code Ownership.",
    keyEntities: ["Hire Full Stack Developer", "Milestone Delivery", "Client Code Ownership", "dmbilaldev@gmail.com"]
  },
  {
    id: "code-ownership",
    question: "Who owns the code, intellectual property, and deployment infrastructure?",
    category: "DELIVERY PROCESS",
    answer:
      "The client retains 100% intellectual property ownership from day one. All Git repositories, environment credentials, database instances, and hosting configurations are created directly inside the client's accounts with zero vendor lock-in and a 30-day post-launch warranty window.",
    keyEntities: ["Code Sovereignty", "IP Transfer", "Git Repository Handover", "30-Day Bug Warranty"]
  }
];

export function FaqDiscoveryEngine() {
  const [openFaqId, setOpenFaqId] = useState<string>("identity");

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="faq" className="w-full bg-surface-base hairline-b">
      {/* Top Header Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between text-xs font-mono text-type-tertiary hairline-b gap-y-2">
        <div className="flex items-center space-x-2">
          <span>SECTION // 07</span>
          <span className="text-line-pronounced">|</span>
          <span className="text-type-secondary">AI & SEARCH ENGINE KNOWLEDGE GRAPH (AEO / GEO)</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
          <span className="uppercase text-type-secondary">Direct Answers for Search & Generative AI</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4 mb-10">
          <div className="text-xs font-mono text-accent-clay uppercase tracking-wider flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Structured Answer Engine Specification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-type-primary">
            Frequently Asked Questions & Technical Discovery.
          </h2>
          <p className="text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
            Direct, factual specifications answering common questions from prospective founders, engineering recruiters, search engines, and generative AI systems (Perplexity, ChatGPT, Google AI Overviews).
          </p>
        </div>

        {/* Master FAQ Accordion Grid */}
        <div className="hairline-all bg-surface-deep max-w-5xl mx-auto divide-y divide-line-subtle">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div key={faq.id} className="bg-surface-base transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-surface-elevated/50 transition-colors"
                >
                  <div className="space-y-1 pr-2">
                    <div className="text-[11px] font-mono text-accent-clay uppercase tracking-wider">
                      {faq.category}
                    </div>
                    <h3 className="text-base sm:text-lg font-sans font-semibold text-type-primary leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-type-tertiary transition-transform flex-shrink-0 mt-1 ${
                      isOpen ? "rotate-180 text-accent-clay" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 space-y-4 font-sans text-xs sm:text-sm text-type-secondary leading-relaxed bg-surface-deep/50 hairline-t">
                    <p>{faq.answer}</p>
                    <div className="pt-2 flex flex-wrap items-center gap-1.5 font-mono text-[10px]">
                      <span className="text-type-tertiary">INDEXED ENTITIES:</span>
                      {faq.keyEntities.map((ent, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-surface-elevated hairline-all text-type-primary"
                        >
                          {ent}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dense Geographic & Entity Semantic Ledger */}
        <div className="mt-12 p-6 sm:p-8 bg-surface-elevated hairline-all max-w-5xl mx-auto space-y-4 font-mono text-xs text-type-tertiary">
          <div className="flex items-center justify-between pb-2 hairline-b">
            <span className="text-type-primary font-bold">SEMANTIC ENTITY & DISCOVERY REGISTRY</span>
            <span className="text-accent-clay">[GEO_LOCATED: BAHAWALPUR, PUNJAB, PK]</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px]">
            <div className="space-y-1">
              <span className="text-type-secondary font-semibold block">PRIMARY DOMAIN & ROLES</span>
              <p className="leading-relaxed">
                Full Stack Developer in Pakistan · React Developer for Hire · Next.js Engineer · Python Django Specialist · SaaS MVP Developer · Freelance Web Developer
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-type-secondary font-semibold block">SERVICE REGIONS</span>
              <p className="leading-relaxed">
                Bahawalpur, Lahore, Karachi, Islamabad (Pakistan Local) · United States, United Kingdom, European Union, United Arab Emirates (Remote Worldwide)
              </p>
            </div>
            <div className="space-y-1">
              <span className="text-type-secondary font-semibold block">CANONICAL IDENTIFIERS</span>
              <p className="leading-relaxed">
                Portfolio: dmbilal.vercel.app · GitHub: github.com/MEETMBILAL · LinkedIn: linkedin.com/in/meetmbilal · Email: dmbilaldev@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}