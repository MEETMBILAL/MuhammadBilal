"use client";

import React, { useState } from "react";
import { Terminal, Database, Cpu, ArrowRight } from "lucide-react";

export function SystemConsole() {
  const [activeTab, setActiveTab] = useState<"architecture" | "engine" | "specs">(
    "architecture"
  );

  return (
    <div className="hairline-all bg-surface-deep font-mono text-xs text-type-secondary overflow-hidden shadow-2xl">
      {/* Console Header / System Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-surface-elevated hairline-b">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-line-active" />
          <span className="text-[11px] uppercase tracking-wider text-type-tertiary">
            SYSTEM_MONITOR // CORE_TELEMETRY
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setActiveTab("architecture")}
            className={`px-2 py-0.5 text-[10px] uppercase transition-colors ${
              activeTab === "architecture"
                ? "bg-surface-base text-type-primary hairline-all"
                : "text-type-tertiary hover:text-type-secondary"
            }`}
          >
            Stack Architecture
          </button>
          <button
            onClick={() => setActiveTab("engine")}
            className={`px-2 py-0.5 text-[10px] uppercase transition-colors ${
              activeTab === "engine"
                ? "bg-surface-base text-type-primary hairline-all"
                : "text-type-tertiary hover:text-type-secondary"
            }`}
          >
            EVT Engine
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-2 py-0.5 text-[10px] uppercase transition-colors ${
              activeTab === "specs"
                ? "bg-surface-base text-type-primary hairline-all"
                : "text-type-tertiary hover:text-type-secondary"
            }`}
          >
            Verification
          </button>
        </div>
      </div>

      {/* Dynamic Viewport */}
      <div className="p-4 sm:p-5 min-h-[260px] flex flex-col justify-between">
        {activeTab === "architecture" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-2 hairline-b text-type-tertiary text-[11px]">
              <span>TIER</span>
              <span>IMPLEMENTATION</span>
              <span>DEPLOYMENT</span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-1 items-center">
              <span className="text-type-primary flex items-center space-x-1.5">
                <Terminal className="w-3.5 h-3.5 text-accent-clay" />
                <span>Client Layer</span>
              </span>
              <span className="text-type-secondary">Next.js · TypeScript · Tailwind</span>
              <span className="text-type-tertiary text-right">Edge / Vercel</span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-1 items-center">
              <span className="text-type-primary flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-accent-zinc" />
                <span>Backend Services</span>
              </span>
              <span className="text-type-secondary">Python · Django REST · Auth</span>
              <span className="text-type-tertiary text-right">Production API</span>
            </div>

            <div className="grid grid-cols-3 gap-2 py-1 items-center">
              <span className="text-type-primary flex items-center space-x-1.5">
                <Database className="w-3.5 h-3.5 text-type-secondary" />
                <span>Persistence</span>
              </span>
              <span className="text-type-secondary">SQLite · Relational Schemas</span>
              <span className="text-type-tertiary text-right">Normalized DB</span>
            </div>

            <div className="pt-3 hairline-t text-[11px] text-type-tertiary flex items-center justify-between">
              <span>WORKFLOW: AI-assisted rapid prototyping with clean code audit</span>
              <span className="text-accent-clay">99.8% QA Pass</span>
            </div>
          </div>
        )}

        {activeTab === "engine" && (
          <div className="space-y-3">
            <div className="text-[11px] text-type-tertiary uppercase">
              MODULE // EVT_SAAS_ESTIMATION_WORKFLOW
            </div>
            <div className="p-3 bg-surface-base hairline-all space-y-2 text-[11px]">
              <div className="flex items-center space-x-2 text-type-primary">
                <span className="text-accent-clay">01.</span>
                <span>User Input / Project Parameters (Dimensions, Materials, Labor)</span>
              </div>
              <div className="pl-5 text-type-tertiary flex items-center space-x-1">
                <ArrowRight className="w-3 h-3 text-line-active" />
                <span>Calculated via Django Estimation Engine</span>
              </div>
              <div className="flex items-center space-x-2 text-type-primary">
                <span className="text-accent-clay">02.</span>
                <span>AI-Assisted Estimation Refinement & Margin Verification</span>
              </div>
              <div className="pl-5 text-type-tertiary flex items-center space-x-1">
                <ArrowRight className="w-3 h-3 text-line-active" />
                <span>Direct Document Generation: Quotes & Invoicing</span>
              </div>
              <div className="flex items-center space-x-2 text-type-primary">
                <span className="text-accent-clay">03.</span>
                <span>Client Management & Transaction Analytics Telemetry</span>
              </div>
            </div>
            <div className="text-[10px] text-type-tertiary">
              PRODUCTION STATUS: Live deployed SaaS platform serving construction professionals.
            </div>
          </div>
        )}

        {activeTab === "specs" && (
          <div className="space-y-2.5 text-[11px]">
            <div className="flex justify-between py-1 hairline-b">
              <span className="text-type-tertiary">PRIMARY SPECIALIZATION</span>
              <span className="text-type-primary">Full Stack Web Engineering</span>
            </div>
            <div className="flex justify-between py-1 hairline-b">
              <span className="text-type-tertiary">CORE LANGUAGES</span>
              <span className="text-type-primary">TypeScript · Python · JavaScript</span>
            </div>
            <div className="flex justify-between py-1 hairline-b">
              <span className="text-type-tertiary">STANDARDS & QA</span>
              <span className="text-type-primary">WCAG Accessibility · Responsive · Cross-Browser</span>
            </div>
            <div className="flex justify-between py-1 hairline-b">
              <span className="text-type-tertiary">LOCATION & TIMEZONE</span>
              <span className="text-type-primary">Bahawalpur, PK (UTC+5) · Global Remote</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-type-tertiary">DELIVERY VELOCITY</span>
              <span className="text-accent-clay">6 Projects Shipped Across 6 Months</span>
            </div>
          </div>
        )}

        {/* Console Footer */}
        <div className="mt-4 pt-3 hairline-t flex items-center justify-between text-[10px] text-type-tertiary">
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 bg-accent-clay rounded-full" />
            <span>LIVE REPOSITORY & DEPLOYMENT CONNECTED</span>
          </span>
          <span className="font-mono">BUILD_VER: 2026.11</span>
        </div>
      </div>
    </div>
  );
}