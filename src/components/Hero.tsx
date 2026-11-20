"use client";

import React from "react";
import { ArrowUpRight, ArrowDown, ShieldCheck, Zap, Layers, Terminal } from "lucide-react";
import { SystemConsole } from "./SystemConsole";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative w-full hairline-b overflow-hidden bg-surface-base">
      {/* Top Ledger Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between text-xs font-mono text-type-tertiary hairline-b gap-y-2">
        <div className="flex items-center space-x-2">
          <span>PORTFOLIO SPECIFICATION // 2026</span>
          <span className="hidden sm:inline text-line-pronounced">|</span>
          <span className="hidden sm:inline">BAHAWALPUR, PK [30.5928° N, 71.7458° E]</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
            <span className="text-type-secondary">FULL STACK (REACT · NEXT.JS · DJANGO)</span>
          </span>
        </div>
      </div>

      {/* Main Hero Architecture (Asymmetric Grid) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-8.5rem)]">
        {/* Left Column (8 cols): Typography, Thesis & Action */}
        <div className="lg:col-span-7 px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col justify-between lg:hairline-r">
          <div className="space-y-6">
            {/* Index Label */}
            <div className="flex items-center space-x-2 text-xs font-mono text-type-tertiary">
              <span>01 // PROVEN PRODUCTION EXECUTION</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-type-primary leading-[1.02]">
              Building full-stack systems that actually ship.
            </h1>

            {/* Precise, Credible Professional Intro */}
            <p className="text-base sm:text-lg text-type-secondary max-w-2xl font-sans leading-relaxed">
              I am <span className="text-type-primary font-medium">Muhammad Bilal</span>, a Full Stack Developer specializing in{" "}
              <span className="text-type-primary font-medium">React, Next.js, and Python/Django</span>. In six months of agency-grade delivery, I have shipped six production platforms—including a live AI-assisted estimation SaaS for construction professionals and multi-tenant client systems.
            </p>

            {/* Clear Description of Development Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 max-w-xl font-mono text-xs">
              <div className="p-3 bg-surface-elevated hairline-all">
                <div className="text-type-primary font-medium flex items-center space-x-1.5 mb-1">
                  <Layers className="w-3.5 h-3.5 text-accent-clay" />
                  <span>SaaS & MVP Engineering</span>
                </div>
                <p className="text-type-secondary text-[11px] leading-normal">
                  End-to-end web apps: typed frontends, Django auth, database modeling, and live deployment.
                </p>
              </div>

              <div className="p-3 bg-surface-elevated hairline-all">
                <div className="text-type-primary font-medium flex items-center space-x-1.5 mb-1">
                  <Zap className="w-3.5 h-3.5 text-accent-zinc" />
                  <span>AI Tooling & Dashboards</span>
                </div>
                <p className="text-type-secondary text-[11px] leading-normal">
                  LLM integrations, estimation workflows, responsive analytics, and data visualization.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Call to Actions & Trust Verification */}
          <div className="pt-8 sm:pt-12 space-y-6">
            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                onClick={() => trackEvent("nav_click", { section_name: "Hero Primary Enquiry" })}
                className="px-6 py-3 bg-type-primary text-surface-base font-mono text-xs font-semibold tracking-wider uppercase hover:bg-accent-zinc transition-colors flex items-center space-x-2"
              >
                <span>Initiate Project Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://linkedin.com/in/meetmbilal"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("linkedin_click", { location: "hero_verification" })}
                className="px-5 py-3 bg-surface-elevated hairline-all text-type-primary font-mono text-xs tracking-wider uppercase hover:bg-surface-overlay transition-colors flex items-center space-x-1.5"
              >
                <span>LinkedIn Verification</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-type-tertiary" />
              </a>

              <a
                href="#work"
                onClick={() => trackEvent("nav_click", { section_name: "Hero View Work" })}
                className="px-4 py-3 text-type-secondary hover:text-type-primary font-mono text-xs flex items-center space-x-1.5"
              >
                <span>View Shipped Work</span>
                <ArrowDown className="w-3 h-3" />
              </a>
            </div>

            {/* Verification & Trust Anchor */}
            <div className="pt-4 hairline-t flex flex-wrap items-center gap-y-2 gap-x-6 text-[11px] font-mono text-type-tertiary">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-clay" />
                <span>Verified Client Work Delivered</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Terminal className="w-3.5 h-3.5 text-type-secondary" />
                <span>Clean Code & Component Architecture</span>
              </span>
              <span>•</span>
              <span>Open to Worldwide Remote Contracts</span>
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Interactive Centerpiece & Telemetry */}
        <div className="lg:col-span-5 px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex flex-col justify-between bg-surface-deep/40">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-type-tertiary">
              <span>SYSTEM ARCHITECTURE PREVIEW</span>
              <span className="text-accent-clay">[LIVE_STATE]</span>
            </div>

            {/* Interactive System Console Component */}
            <SystemConsole />

            {/* Verification Stats Block */}
            <div className="grid grid-cols-2 gap-3 pt-2 font-mono">
              <div className="p-3 bg-surface-elevated/70 hairline-all">
                <div className="text-xl sm:text-2xl font-bold text-type-primary">6+</div>
                <div className="text-[10px] uppercase tracking-wider text-type-tertiary mt-0.5">
                  Production Platforms Shipped
                </div>
              </div>

              <div className="p-3 bg-surface-elevated/70 hairline-all">
                <div className="text-xl sm:text-2xl font-bold text-type-primary">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-type-tertiary mt-0.5">
                  Full Stack Execution (Frontend to Backend)
                </div>
              </div>
            </div>
          </div>

          {/* Micro Footer Note */}
          <div className="pt-6 text-[10px] font-mono text-type-tertiary flex items-center justify-between">
            <span>ENGINEERED ON NEXT.JS APP ROUTER</span>
            <span>HOSTED ON VERCEL.APP</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}