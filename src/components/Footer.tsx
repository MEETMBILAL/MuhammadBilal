"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail, ShieldCheck, Terminal } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-surface-deep hairline-t font-mono text-xs text-type-tertiary">
      {/* Top Tier: Direct Action & Status */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-8 hairline-b">
        {/* Brand / Positioning (5 cols) */}
        <div className="md:col-span-5 space-y-3 font-sans">
          <div className="flex items-center space-x-2 font-mono text-xs text-type-primary font-bold">
            <span>MUHAMMAD BILAL</span>
            <span className="text-type-tertiary">//</span>
            <span className="text-accent-clay">FULL STACK DEVELOPER</span>
          </div>
          <p className="text-sm text-type-secondary leading-relaxed max-w-sm">
            Specializing in React, Next.js, and Python/Django. Shipped production SaaS platforms, AI estimation engines, and client web applications.
          </p>
          <div className="pt-2 flex items-center space-x-2 font-mono text-[11px] text-type-tertiary">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
            <span>Bahawalpur, PK [30.5928° N, 71.7458° E] · Remote Worldwide</span>
          </div>
        </div>

        {/* Index Navigation (4 cols) */}
        <div className="md:col-span-4 space-y-2">
          <div className="text-[11px] uppercase tracking-wider text-type-primary font-bold pb-1">
            PLATFORM NAVIGATION
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <a
              href="#capabilities"
              onClick={() => trackEvent("nav_click", { section_name: "Footer Capabilities" })}
              className="text-type-secondary hover:text-type-primary transition-colors py-0.5"
            >
              01 // Capabilities
            </a>
            <a
              href="#work"
              onClick={() => trackEvent("nav_click", { section_name: "Footer Work" })}
              className="text-type-secondary hover:text-type-primary transition-colors py-0.5"
            >
              02 // Work Proof
            </a>
            <a
              href="#process"
              onClick={() => trackEvent("nav_click", { section_name: "Footer Process" })}
              className="text-type-secondary hover:text-type-primary transition-colors py-0.5"
            >
              03 // Lifecycle
            </a>
            <a
              href="#experience"
              onClick={() => trackEvent("nav_click", { section_name: "Footer Experience" })}
              className="text-type-secondary hover:text-type-primary transition-colors py-0.5"
            >
              04 // Credentials
            </a>
            <a
              href="#faq"
              onClick={() => trackEvent("nav_click", { section_name: "Footer FAQ" })}
              className="text-type-secondary hover:text-type-primary transition-colors py-0.5"
            >
              05 // FAQ & AEO
            </a>
            <a
              href="#contact"
              onClick={() => trackEvent("nav_click", { section_name: "Footer Contact" })}
              className="text-type-secondary hover:text-type-primary transition-colors py-0.5"
            >
              06 // Project Brief
            </a>
          </div>
        </div>

        {/* Direct Verification Links (3 cols) */}
        <div className="md:col-span-3 space-y-2">
          <div className="text-[11px] uppercase tracking-wider text-type-primary font-bold pb-1">
            EXTERNAL CHANNELS
          </div>
          <div className="space-y-1.5">
            <a
              href="https://linkedin.com/in/meetmbilal"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("linkedin_click", { location: "footer" })}
              className="flex items-center justify-between text-type-secondary hover:text-type-primary py-0.5 transition-colors"
            >
              <span className="flex items-center space-x-1.5">
                <Linkedin className="w-3.5 h-3.5 text-accent-clay" />
                <span>LinkedIn [meetmbilal]</span>
              </span>
              <ArrowUpRight className="w-3 h-3 text-type-tertiary" />
            </a>

            <a
              href="https://github.com/MEETMBILAL"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("github_click", { location: "footer" })}
              className="flex items-center justify-between text-type-secondary hover:text-type-primary py-0.5 transition-colors"
            >
              <span className="flex items-center space-x-1.5">
                <Github className="w-3.5 h-3.5" />
                <span>GitHub [@MEETMBILAL]</span>
              </span>
              <ArrowUpRight className="w-3 h-3 text-type-tertiary" />
            </a>

            <a
              href="mailto:dmbilaldev@gmail.com"
              onClick={() => trackEvent("email_cta_click", { location: "footer" })}
              className="flex items-center justify-between text-type-secondary hover:text-type-primary py-0.5 transition-colors"
            >
              <span className="flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5" />
                <span>dmbilaldev@gmail.com</span>
              </span>
              <ArrowUpRight className="w-3 h-3 text-type-tertiary" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright, Telemetry Status & Back to Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-y-3 text-[11px]">
        <div className="flex items-center space-x-3 text-type-tertiary">
          <span>© {new Date().getFullYear()} MUHAMMAD BILAL</span>
          <span>•</span>
          <span>ALL RIGHTS RESERVED</span>
          <span>•</span>
          <span className="text-type-secondary">HOSTED ON VERCEL EDGE</span>
        </div>

        <div className="flex items-center space-x-4">
          <span className="flex items-center space-x-1.5 text-type-tertiary">
            <ShieldCheck className="w-3.5 h-3.5 text-accent-clay" />
            <span>HSTS &amp; CSP ACTIVE</span>
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top of page"
            className="p-1.5 bg-surface-base hairline-all text-type-secondary hover:text-type-primary transition-colors flex items-center space-x-1 text-[10px] uppercase font-bold"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}