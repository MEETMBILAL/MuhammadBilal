"use client";

import React from "react";
import {
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Compass,
  Download
} from "lucide-react";
import {
  VERIFIED_EXPERIENCE,
  TECHNICAL_TOOLKIT,
  VERIFIED_EDUCATION,
  WORK_PHILOSOPHY
} from "@/data/credentials";
import { trackEvent } from "@/lib/analytics";

export function Credibility() {
  return (
    <section id="experience" className="w-full bg-surface-base hairline-b">
      {/* Top Header Ledger Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between text-xs font-mono text-type-tertiary hairline-b gap-y-2">
        <div className="flex items-center space-x-2">
          <span>SECTION // 06</span>
          <span className="text-line-pronounced">|</span>
          <span className="text-type-secondary">PROFESSIONAL IDENTITY & CREDENTIAL RECORD</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
          <span className="uppercase text-type-secondary">Strict Resume & Public Record Synchronization</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4 mb-12">
          <div className="text-xs font-mono text-accent-clay uppercase tracking-wider flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Professional Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-type-primary">
            Engineering background, verified experience, and work ethics.
          </h2>
          <p className="text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
            I believe trust is built on verifiable work rather than inflated titles or exaggerated years of experience. Here is my complete, unembellished background: hands-on agency delivery, actual technologies deployed in production, formal education, and my approach to daily engineering collaboration.
          </p>
        </div>

        {/* Master Identity Dossier (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 hairline-all bg-surface-deep divide-y lg:divide-y-0 lg:divide-x divide-line-subtle mb-12">
          {/* Left Column (7 cols): Professional Profile & Verified Experience */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-10">
            {/* 1. Professional Introduction & Positioning */}
            <div className="space-y-4">
              <div className="text-xs font-mono text-accent-clay uppercase tracking-wider">
                01 // Professional Positioning & Focus
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-type-primary">
                Full Stack Developer · React, Next.js & Python/Django
              </h3>
              <p className="text-sm sm:text-base text-type-secondary font-sans leading-relaxed">
                Based in <span className="text-type-primary font-medium">Bahawalpur, Pakistan</span> and available for worldwide remote contracts. I operate across the full stack—building responsive React and Next.js interfaces on the frontend and pairing them with structured Python/Django backends, relational databases, and secure authentication flows.
              </p>
              <div className="p-4 bg-surface-base hairline-all font-mono text-xs text-type-tertiary space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-type-primary">HANDS-ON DELIVERY:</span>
                  <span className="text-type-secondary">6+ Months (March – September 2026)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-type-primary">PLATFORMS SHIPPED:</span>
                  <span className="text-accent-clay font-bold">6 Production & Client Projects</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-type-primary">CORE PARADIGM:</span>
                  <span className="text-type-secondary">AI-Assisted Velocity with Clean Code Rigor</span>
                </div>
              </div>
            </div>

            {/* 2. Real Employment & Agency Internship */}
            <div className="space-y-6 pt-4 hairline-t">
              <div className="text-xs font-mono text-type-tertiary uppercase tracking-wider flex items-center space-x-1.5">
                <Briefcase className="w-3.5 h-3.5 text-accent-clay" />
                <span>02 // Verified Professional Experience</span>
              </div>

              {VERIFIED_EXPERIENCE.map((exp, index) => (
                <div key={index} className="space-y-4 bg-surface-base p-6 hairline-all">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-type-primary font-sans">{exp.role}</h4>
                      <div className="text-xs font-mono text-accent-clay font-medium">{exp.company}</div>
                    </div>
                    <div className="text-right font-mono text-xs text-type-tertiary">
                      <div>{exp.duration}</div>
                      <div className="text-[11px] text-type-secondary">{exp.location}</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-type-secondary font-sans leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono uppercase text-type-tertiary">
                      Demonstrated Execution Points:
                    </div>
                    {exp.bulletPoints.map((point, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-type-secondary font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-clay flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 hairline-t flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-surface-elevated hairline-all font-mono text-[10px] text-type-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 3. Formal Education & Learning Background */}
            <div className="space-y-4 pt-4 hairline-t">
              <div className="text-xs font-mono text-type-tertiary uppercase tracking-wider flex items-center space-x-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-accent-zinc" />
                <span>03 // Education & Academic Background</span>
              </div>

              <div className="bg-surface-base p-6 hairline-all space-y-3 font-sans">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-type-primary">{VERIFIED_EDUCATION.degree}</h4>
                    <div className="text-xs font-mono text-accent-zinc">{VERIFIED_EDUCATION.institution}</div>
                  </div>
                  <span className="text-xs font-mono text-type-tertiary">{VERIFIED_EDUCATION.location}</span>
                </div>
                <p className="text-xs sm:text-sm text-type-secondary leading-relaxed">
                  {VERIFIED_EDUCATION.backgroundSummary}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Verified Technical Toolkit & External Verified Profiles */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-surface-base/80 flex flex-col justify-between space-y-10">
            {/* Real Technologies & Toolkit */}
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-type-tertiary hairline-b pb-2">
                <span>04 // VERIFIED TECHNICAL TOOLKIT</span>
                <span className="text-accent-clay font-mono">[ACTUAL_STACK]</span>
              </div>

              {/* Frontend Suite */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono uppercase text-type-tertiary">Frontend & UI Systems</div>
                <div className="grid grid-cols-1 gap-1.5 font-mono text-xs">
                  {TECHNICAL_TOOLKIT.frontend.map((item, i) => (
                    <div key={i} className="p-2 bg-surface-deep hairline-all flex items-center justify-between">
                      <span className="text-type-primary font-medium">{item.name}</span>
                      <span className="text-[10px] text-type-tertiary">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend & Persistence */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono uppercase text-type-tertiary">Backend, APIs & Data</div>
                <div className="grid grid-cols-1 gap-1.5 font-mono text-xs">
                  {TECHNICAL_TOOLKIT.backend.map((item, i) => (
                    <div key={i} className="p-2 bg-surface-deep hairline-all flex items-center justify-between">
                      <span className="text-type-primary font-medium">{item.name}</span>
                      <span className="text-[10px] text-accent-clay">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tooling & Deployment */}
              <div className="space-y-2 pt-2">
                <div className="text-[11px] font-mono uppercase text-type-tertiary">Tooling & Engineering Practices</div>
                <div className="grid grid-cols-1 gap-1.5 font-mono text-xs">
                  {TECHNICAL_TOOLKIT.toolsAndDeployment.map((item, i) => (
                    <div key={i} className="p-2 bg-surface-deep hairline-all flex items-center justify-between">
                      <span className="text-type-secondary">{item.name}</span>
                      <span className="text-[10px] text-type-tertiary">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* External Verification Links & Resume Access */}
            <div className="space-y-4 pt-6 hairline-t">
              <div className="text-[11px] font-mono uppercase text-type-tertiary">
                05 // External Verification & Profiles
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                {/* LinkedIn Link */}
                <a
                  href="https://linkedin.com/in/meetmbilal"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("linkedin_click", { location: "credibility_section" })}
                  className="p-3 bg-surface-elevated hairline-all flex items-center justify-between hover:bg-surface-overlay transition-colors group"
                >
                  <div className="flex items-center space-x-2 text-type-primary">
                    <Linkedin className="w-4 h-4 text-accent-clay" />
                    <span>LinkedIn Profile [meetmbilal]</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-type-tertiary group-hover:text-type-primary" />
                </a>

                {/* GitHub Link */}
                <a
                  href="https://github.com/MEETMBILAL"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("github_click", { location: "credibility_section" })}
                  className="p-3 bg-surface-elevated hairline-all flex items-center justify-between hover:bg-surface-overlay transition-colors group"
                >
                  <div className="flex items-center space-x-2 text-type-primary">
                    <Github className="w-4 h-4 text-type-secondary" />
                    <span>GitHub Repositories [@MEETMBILAL]</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-type-tertiary group-hover:text-type-primary" />
                </a>

                {/* Resume Access Link */}
                <a
                  href="mailto:dmbilaldev@gmail.com?subject=Request%20for%20Muhammad%20Bilal%20CV%20Resume"
                  onClick={() => trackEvent("resume_request_click", { location: "credibility_section" })}
                  className="p-3 bg-type-primary text-surface-base font-semibold hairline-all flex items-center justify-between hover:bg-accent-zinc transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Request Latest PDF Resume</span>
                  </div>
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section: How I Approach Collaboration, Development & Delivery */}
        <div className="hairline-all bg-surface-elevated p-8 sm:p-12">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center space-x-2 text-xs font-mono text-accent-clay uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Engineering Ethics & Working Philosophy</span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-type-primary tracking-tight">
              How I approach collaboration, development, and delivery.
            </h3>

            <p className="text-sm sm:text-base text-type-secondary font-sans leading-relaxed">
              When hiring a remote developer, technical skills alone are not enough. Reliable communication, transparent milestones, and accountability ensure projects succeed without friction or unexpected delays.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {WORK_PHILOSOPHY.map((item, idx) => (
                <div key={idx} className="p-4 bg-surface-base hairline-all space-y-1.5">
                  <div className="font-mono text-xs font-bold text-type-primary flex items-center space-x-2">
                    <span className="text-accent-clay">0{idx + 1}.</span>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-type-secondary font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}