"use client";

import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, ExternalLink, Code2, Database, Check, Layers, Terminal, ChevronRight } from "lucide-react";
import { PROJECTS_DATA, ProjectCaseStudy } from "@/data/projects";
import { trackEvent } from "@/lib/analytics";

export function Work() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(PROJECTS_DATA[0].id);

  const activeProject: ProjectCaseStudy =
    PROJECTS_DATA.find((p) => p.id === selectedProjectId) || PROJECTS_DATA[0];

  return (
    <section id="work" className="w-full bg-surface-base hairline-b">
      {/* Section Header Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between text-xs font-mono text-type-tertiary hairline-b gap-y-2">
        <div className="flex items-center space-x-2">
          <span>SECTION // 03</span>
          <span className="text-line-pronounced">|</span>
          <span className="text-type-secondary">VERIFIED WORK & TECHNICAL PROOF</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
          <span className="uppercase text-type-secondary">Real Shipped Deployments & Verified Repositories</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-type-primary">
            Engineered systems, real client platforms, and code proof.
          </h2>
          <p className="text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
            Every project listed below reflects real, verified development—spanning production SaaS workflows, commercial agency platforms, live storefronts, and tested frontend systems. Inspect the architectural breakdowns, technical decisions, and live endpoints.
          </p>
        </div>

        {/* Project Navigation Track (Horizontal Matrix Tabs) */}
        <div className="hairline-all bg-surface-elevated/50 mb-8 overflow-x-auto">
          <div className="flex min-w-max divide-x divide-line-subtle font-mono text-xs">
            {PROJECTS_DATA.map((project) => {
              const isSelected = project.id === selectedProjectId;
              return (
                <button
                  key={project.id}
                  onClick={() => {
                    setSelectedProjectId(project.id);
                    trackEvent("project_view", { project_id: project.id, name: project.name });
                  }}
                  className={`px-4 sm:px-5 py-3.5 flex items-center space-x-2.5 transition-all text-left ${
                    isSelected
                      ? "bg-surface-base text-type-primary border-b-2 border-accent-clay"
                      : "text-type-secondary hover:text-type-primary hover:bg-surface-elevated"
                  }`}
                >
                  <span className={isSelected ? "text-accent-clay" : "text-type-tertiary"}>
                    {project.projectNumber}
                  </span>
                  <span className="font-medium whitespace-nowrap">{project.name}</span>
                  {project.tier === "production-flagship" && (
                    <span className="px-1.5 py-0.5 text-[9px] bg-accent-clay/20 text-accent-clay hairline-all uppercase">
                      Live SaaS
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Case Study Showcase Container */}
        <div className="hairline-all bg-surface-deep">
          {/* Case Study Meta Top Bar */}
          <div className="p-4 sm:p-5 bg-surface-elevated hairline-b flex flex-wrap items-center justify-between gap-y-3 font-mono text-xs">
            <div className="flex items-center space-x-3">
              <span className="text-accent-clay font-bold">CASE_STUDY // {activeProject.projectNumber}</span>
              <span className="text-line-pronounced">|</span>
              <span className="text-type-primary uppercase">{activeProject.category}</span>
            </div>

            <div className="flex items-center space-x-3">
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-surface-base hairline-all text-type-primary hover:bg-type-primary hover:text-surface-base transition-colors flex items-center space-x-1.5 text-[11px]"
                >
                  <span>Live Platform</span>
                  <ExternalLink className="w-3 h-3 text-accent-clay" />
                </a>
              )}
              {activeProject.sourceUrl && (
                <a
                  href={activeProject.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-surface-base hairline-all text-type-secondary hover:text-type-primary transition-colors flex items-center space-x-1.5 text-[11px]"
                >
                  <span>Source Code</span>
                  <Code2 className="w-3 h-3 text-type-tertiary" />
                </a>
              )}
            </div>
          </div>

          {/* Master Case Study Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-line-subtle">
            {/* Left Column (7 cols): Detailed Architectural Dossier */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8">
              {/* Project Title & Statement */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-type-primary tracking-tight">
                  {activeProject.name}
                </h3>
                <div className="text-xs font-mono text-type-tertiary flex items-center space-x-2">
                  <span className="text-accent-clay">STATUS:</span>
                  <span>{activeProject.availabilityNote}</span>
                </div>
              </div>

              {/* Problem / Objective Statement */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-type-tertiary">
                  01 // Problem & Business Context
                </div>
                <p className="text-sm sm:text-base text-type-secondary leading-relaxed bg-surface-base p-4 hairline-all">
                  {activeProject.problem}
                </p>
              </div>

              {/* Exact Contribution */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-accent-clay">
                  02 // Engineering Contribution
                </div>
                <p className="text-sm sm:text-base text-type-primary leading-relaxed font-medium">
                  {activeProject.contribution}
                </p>
              </div>

              {/* Key Functionality & Modules */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-type-tertiary">
                  03 // Core Modules & Functionality
                </div>
                <div className="space-y-2 font-sans text-xs sm:text-sm text-type-secondary">
                  {activeProject.keyFunctionality.map((func, i) => (
                    <div key={i} className="flex items-start space-x-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-clay mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{func}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Decisions & Rationale */}
              <div className="space-y-3 pt-4 hairline-t">
                <div className="text-xs font-mono uppercase tracking-wider text-type-tertiary">
                  04 // Critical Engineering Decisions
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {activeProject.technicalDecisions.map((techDec, i) => (
                    <div key={i} className="p-3 bg-surface-base hairline-all font-mono text-xs space-y-1">
                      <div className="text-type-primary font-semibold flex items-center space-x-1.5">
                        <Terminal className="w-3.5 h-3.5 text-accent-clay" />
                        <span>{techDec.decision}</span>
                      </div>
                      <div className="text-type-tertiary text-[11px] font-sans pl-5 leading-normal">
                        {techDec.rationale}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Dynamic Interactive Schematic & Tech Blueprint */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-surface-base/80 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-type-tertiary hairline-b pb-2">
                  <span>TECHNICAL COMPONENT BLUEPRINT</span>
                  <span className="text-accent-clay font-mono">[SPEC_PASS]</span>
                </div>

                {/* Custom Interactive Architectural Blueprint View */}
                <div className="hairline-all bg-surface-deep p-4 space-y-4 font-mono text-xs">
                  {activeProject.id === "evt-saas" && (
                    <div className="space-y-3">
                      <div className="text-[11px] text-accent-clay uppercase tracking-wider">
                        // ESTIMATION & QUOTE ENGINE WORKFLOW
                      </div>
                      <div className="p-3 bg-surface-base hairline-all space-y-2 text-[11px]">
                        <div className="flex justify-between items-center text-type-primary">
                          <span>1. Parameter Input</span>
                          <span className="text-accent-zinc">React Form</span>
                        </div>
                        <div className="flex justify-between items-center text-type-secondary pl-3 border-l border-line-pronounced">
                          <span>↓ REST Request: /api/estimate</span>
                          <span className="text-type-tertiary">JSON Payload</span>
                        </div>
                        <div className="flex justify-between items-center text-type-primary">
                          <span>2. Django Engine & Logic</span>
                          <span className="text-accent-clay">ORM + AI Logic</span>
                        </div>
                        <div className="flex justify-between items-center text-type-secondary pl-3 border-l border-line-pronounced">
                          <span>↓ Normalized Record Write</span>
                          <span className="text-type-tertiary">SQLite Schemas</span>
                        </div>
                        <div className="flex justify-between items-center text-type-primary">
                          <span>3. Invoicing & Document Dispatch</span>
                          <span className="text-type-primary">PDF Output</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeProject.id === "after-concept" && (
                    <div className="space-y-3">
                      <div className="text-[11px] text-accent-zinc uppercase tracking-wider">
                        // AGENCY STACK ARCHITECTURE
                      </div>
                      <div className="p-3 bg-surface-base hairline-all space-y-2 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-type-tertiary">ROUTING</span>
                          <span className="text-type-primary">Next.js App Router (SSR)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-type-tertiary">DESIGN SYNC</span>
                          <span className="text-type-primary">Figma to Tailwind Tokens</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-type-tertiary">TYPE SAFETY</span>
                          <span className="text-type-primary">100% Strict TypeScript</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-type-tertiary">LIGHTHOUSE</span>
                          <span className="text-accent-clay">98+ Performance Index</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeProject.id === "bookshelf-online" && (
                    <div className="space-y-3">
                      <div className="text-[11px] text-type-secondary uppercase tracking-wider">
                        // STOREFRONT SPEED & SEO PIPELINE
                      </div>
                      <div className="p-3 bg-surface-base hairline-all space-y-2 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-type-tertiary">DOM RENDERING</span>
                          <span className="text-type-primary">Zero-Framework Native DOM</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-type-tertiary">SEARCH INDEXING</span>
                          <span className="text-type-primary">Rich JSON-LD Schema</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-type-tertiary">MOBILE AUDIT</span>
                          <span className="text-accent-clay">Sub-second FCP Load</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {["tavro", "comixhub", "streetsole-eduhub"].includes(activeProject.id) && (
                    <div className="space-y-3">
                      <div className="text-[11px] text-type-secondary uppercase tracking-wider">
                        // REPOSITORY & COMPONENT VALIDATION
                      </div>
                      <div className="p-3 bg-surface-base hairline-all space-y-2 text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-type-tertiary">SPECIFICATION</span>
                          <span className="text-type-primary">{activeProject.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-type-tertiary">RESPONSIVENESS</span>
                          <span className="text-accent-clay">Verified Mobile-First</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-type-tertiary">CODEBASE REPO</span>
                          <span className="text-type-primary">github.com/meetmbilal</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual Proof Badge */}
                  <div className="pt-2 text-[10px] text-type-tertiary flex items-center justify-between">
                    <span>HOSTING & DOMAIN TARGET</span>
                    <span className="font-mono text-type-secondary">dmbilal.vercel.app</span>
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-type-tertiary">
                    Technologies Deployed in Project
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {activeProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-surface-elevated hairline-all text-type-primary text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Conversion Trigger for Similar Architecture */}
              <div className="pt-6 hairline-t space-y-3">
                <div className="text-xs font-mono text-type-secondary">
                  Need a platform with similar architecture or functionality?
                </div>
                <a
                  href="#contact"
                  className="w-full py-3 bg-surface-elevated hairline-all text-type-primary font-mono text-xs font-medium uppercase tracking-wider hover:bg-type-primary hover:text-surface-base transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Build Something Like {activeProject.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Work Verification Strip */}
        <div className="mt-8 p-4 bg-surface-elevated hairline-all flex flex-wrap items-center justify-between gap-y-2 text-xs font-mono text-type-tertiary">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-accent-clay" />
            <span className="text-type-secondary">VERIFIABLE CODEBASES & PUBLIC REPOSITORIES</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/meetmbilal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-type-primary hover:text-accent-clay flex items-center space-x-1"
            >
              <span>Inspect All Repositories on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}