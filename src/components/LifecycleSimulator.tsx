"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  Terminal,
  CheckCircle2,
  FileCode2,
  Cpu,
  Layers,
  ShieldCheck,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { LIFECYCLE_STAGES, LifecycleStage } from "@/data/lifecycle";
import { trackEvent } from "@/lib/analytics";

export function LifecycleSimulator() {
  const [activeStageId, setActiveStageId] = useState<number>(1);

  const currentStage: LifecycleStage =
    LIFECYCLE_STAGES.find((s) => s.id === activeStageId) || LIFECYCLE_STAGES[0];

  const handleNext = () => {
    if (activeStageId < LIFECYCLE_STAGES.length) {
      const nextStage = activeStageId + 1;
      setActiveStageId(nextStage);
      trackEvent("lifecycle_step", { stage_number: nextStage });
    }
  };

  const handlePrev = () => {
    if (activeStageId > 1) {
      const prevStage = activeStageId - 1;
      setActiveStageId(prevStage);
      trackEvent("lifecycle_step", { stage_number: prevStage });
    }
  };

  return (
    <section id="process" className="w-full bg-surface-base hairline-b">
      {/* Top Header Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between text-xs font-mono text-type-tertiary hairline-b gap-y-2">
        <div className="flex items-center space-x-2">
          <span>SECTION // 04</span>
          <span className="text-line-pronounced">|</span>
          <span className="text-type-secondary">SIGNATURE INTERACTIVE CAPABILITY</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
          <span className="uppercase text-type-secondary">Simulated Product Development Lifecycle</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4 mb-10">
          <div className="text-xs font-mono text-accent-clay uppercase tracking-wider flex items-center space-x-1.5">
            <Cpu className="w-3.5 h-3.5" />
            <span>Methodology & Product Engineering Walkthrough</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-type-primary">
            From Idea to Working Product.
          </h2>
          <p className="text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
            Writing frontend code is only one step. Building a dependable web platform requires a deliberate progression from problem framing to database architecture, API design, performance audits, and production deployment. Explore each stage of the lifecycle below.
          </p>
        </div>

        {/* Interactive 8-Stage Progress Navigation Rail */}
        <div className="hairline-all bg-surface-deep mb-8 overflow-x-auto">
          <div className="flex min-w-max divide-x divide-line-subtle font-mono text-xs">
            {LIFECYCLE_STAGES.map((stage) => {
              const isActive = stage.id === activeStageId;
              const isPast = stage.id < activeStageId;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`px-4 sm:px-5 py-3.5 flex flex-col space-y-1 transition-all text-left group ${
                    isActive
                      ? "bg-surface-elevated text-type-primary border-b-2 border-accent-clay"
                      : "hover:bg-surface-elevated/40 text-type-secondary"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span
                      className={`text-[10px] font-bold ${
                        isActive
                          ? "text-accent-clay"
                          : isPast
                          ? "text-type-secondary"
                          : "text-type-tertiary"
                      }`}
                    >
                      STAGE {stage.stageNumber}
                    </span>
                    {isPast && <CheckCircle2 className="w-3 h-3 text-accent-clay" />}
                  </div>
                  <span className="text-xs font-medium whitespace-nowrap group-hover:text-type-primary">
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Stage Simulation Dossier (Grid) */}
        <div className="hairline-all bg-surface-deep">
          {/* Dossier Header Info */}
          <div className="p-4 sm:p-5 bg-surface-elevated hairline-b flex flex-wrap items-center justify-between gap-y-3 font-mono text-xs">
            <div className="flex items-center space-x-3">
              <span className="px-2 py-0.5 bg-surface-base hairline-all text-accent-clay font-bold">
                PHASE: {currentStage.phaseCategory}
              </span>
              <span className="text-line-pronounced">|</span>
              <span className="text-type-secondary uppercase">
                STAGE {currentStage.stageNumber} OF 08
              </span>
            </div>

            {/* Stage Stepper Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                disabled={activeStageId === 1}
                className="px-3 py-1 bg-surface-base hairline-all text-type-secondary hover:text-type-primary disabled:opacity-30 disabled:pointer-events-none flex items-center space-x-1 text-[11px]"
              >
                <ArrowLeft className="w-3 h-3" />
                <span>Previous Stage</span>
              </button>
              <button
                onClick={handleNext}
                disabled={activeStageId === LIFECYCLE_STAGES.length}
                className="px-3 py-1 bg-surface-base hairline-all text-type-primary hover:bg-type-primary hover:text-surface-base disabled:opacity-30 disabled:pointer-events-none flex items-center space-x-1 text-[11px]"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Dossier Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-line-subtle">
            {/* Left Column (7 cols): Lifecycle Narrative & Engineering Decisions */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-8">
              {/* Stage Title & Primary Objective */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-accent-clay uppercase tracking-wider">
                  STAGE OBJECTIVE //
                </div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-type-primary tracking-tight">
                  {currentStage.name}
                </h3>
                <p className="text-sm sm:text-base text-type-primary font-medium leading-relaxed bg-surface-base p-4 hairline-all">
                  {currentStage.objective}
                </p>
              </div>

              {/* What Actually Happens */}
              <div className="space-y-2">
                <div className="text-xs font-mono uppercase tracking-wider text-type-tertiary">
                  01 // Detailed Stage Workflow
                </div>
                <p className="text-xs sm:text-sm text-type-secondary leading-relaxed font-sans">
                  {currentStage.whatHappens}
                </p>
              </div>

              {/* Technical Decisions & Impacts */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-type-tertiary">
                  02 // Critical Technical Decisions
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {currentStage.technicalDecisions.map((tech, i) => (
                    <div key={i} className="p-3 bg-surface-base hairline-all font-mono text-xs space-y-1">
                      <div className="text-type-primary font-semibold flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-accent-clay rounded-full" />
                        <span>{tech.decision}</span>
                      </div>
                      <div className="text-type-tertiary text-[11px] font-sans pl-3.5 leading-normal">
                        {tech.impact}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Considerations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 hairline-t">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-type-tertiary">
                    Stage Deliverables
                  </div>
                  <div className="space-y-1.5 font-sans text-xs text-type-secondary">
                    {currentStage.deliverables.map((del, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-clay flex-shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-accent-clay">
                    Important Considerations
                  </div>
                  <p className="text-xs text-type-secondary font-sans leading-relaxed">
                    {currentStage.criticalConsiderations}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Simulated Code/Schema Artifact & Tech Stack */}
            <div className="lg:col-span-5 p-6 sm:p-8 bg-surface-base/80 flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between text-xs font-mono text-type-tertiary hairline-b pb-2">
                  <span>STAGE ARTIFACT TELEMETRY</span>
                  <span className="text-accent-clay">SIMULATED DEMO</span>
                </div>

                {/* Simulated Artifact Terminal Window */}
                <div className="hairline-all bg-surface-deep font-mono text-xs overflow-hidden">
                  <div className="px-3 py-2 bg-surface-elevated hairline-b flex items-center justify-between text-[11px]">
                    <div className="flex items-center space-x-2 text-type-primary">
                      <FileCode2 className="w-3.5 h-3.5 text-accent-clay" />
                      <span>{currentStage.simulatedArtifact.title}</span>
                    </div>
                    <span className="px-1.5 py-0.5 bg-surface-base hairline-all text-[9px] text-accent-clay">
                      {currentStage.simulatedArtifact.statusBadge}
                    </span>
                  </div>
                  <pre className="p-4 text-[11px] text-type-secondary overflow-x-auto leading-relaxed selection:bg-surface-overlay">
                    <code>{currentStage.simulatedArtifact.codeSnippetOrSchema}</code>
                  </pre>
                </div>

                {/* Technologies Involved in this stage */}
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-type-tertiary">
                    Technologies & Tools Involved
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {currentStage.technologiesInvolved.map((t) => (
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

              {/* Progress Summary / Fast Forward */}
              <div className="pt-6 hairline-t space-y-3 font-mono text-xs">
                <div className="flex justify-between text-type-tertiary text-[11px]">
                  <span>DEVELOPMENT COMPLETION</span>
                  <span className="text-type-primary">{activeStageId * 12.5}%</span>
                </div>
                <div className="w-full bg-surface-elevated h-1.5 hairline-all overflow-hidden">
                  <div
                    className="bg-accent-clay h-full transition-all duration-300"
                    style={{ width: `${activeStageId * 12.5}%` }}
                  />
                </div>
                {activeStageId < 8 ? (
                  <button
                    onClick={handleNext}
                    className="w-full py-2.5 bg-surface-elevated hairline-all text-type-primary hover:bg-surface-overlay transition-colors flex items-center justify-center space-x-1.5 text-xs"
                  >
                    <span>Proceed to Stage 0{activeStageId + 1}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <div className="p-3 bg-surface-elevated hairline-all text-center text-accent-clay text-xs">
                    ✓ Full Product Development Lifecycle Complete
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Final Lifecycle CTA Anchor: "Let's build something." */}
        <div className="mt-12 p-8 sm:p-12 hairline-all bg-surface-elevated flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-mono text-accent-clay uppercase tracking-wider">
              READY FOR EXECUTION
            </div>
            <h3 className="text-3xl sm:text-4xl font-sans font-bold text-type-primary tracking-tight">
              Let&apos;s build something.
            </h3>
            <p className="text-sm sm:text-base text-type-secondary font-sans leading-relaxed">
              Have an idea that needs to move through these exact stages? From scoping and relational database design to high-speed Next.js frontends and verified cloud deployment—let’s map out your project together.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              href="#contact"
              className="px-6 py-3.5 bg-type-primary text-surface-base font-mono text-xs font-semibold uppercase tracking-wider hover:bg-accent-zinc transition-colors flex items-center space-x-2"
            >
              <span>Initiate Project Scoping</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}