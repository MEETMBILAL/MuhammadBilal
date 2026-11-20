"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Layers, Cpu, Code2, Database, Globe, Zap, RefreshCw, Smartphone } from "lucide-react";
import { SERVICES_DATA, ServiceDetail } from "@/data/services";
import { trackEvent } from "@/lib/analytics";

export function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const activeService: ServiceDetail =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "saas-mvp":
        return <Layers className="w-4 h-4 text-accent-clay" />;
      case "fullstack-apps":
        return <Cpu className="w-4 h-4 text-accent-zinc" />;
      case "frontend-react":
        return <Code2 className="w-4 h-4 text-type-primary" />;
      case "backend-api":
        return <Database className="w-4 h-4 text-accent-clay" />;
      case "business-websites":
        return <Globe className="w-4 h-4 text-accent-zinc" />;
      case "landing-pages":
        return <Zap className="w-4 h-4 text-type-primary" />;
      case "redesign-modernization":
        return <RefreshCw className="w-4 h-4 text-accent-clay" />;
      case "responsive-performance":
        return <Smartphone className="w-4 h-4 text-accent-zinc" />;
      default:
        return <Layers className="w-4 h-4 text-accent-clay" />;
    }
  };

  return (
    <section id="capabilities" className="w-full bg-surface-base hairline-b">
      {/* Section Header Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between text-xs font-mono text-type-tertiary hairline-b gap-y-2">
        <div className="flex items-center space-x-2">
          <span>SECTION // 02</span>
          <span className="text-line-pronounced">|</span>
          <span className="text-type-secondary">CAPABILITY & SERVICE ARCHITECTURE</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
          <span className="uppercase text-type-secondary">Organized by Business Problems Solved</span>
        </div>
      </div>

      {/* Main Section Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Section Headline & Editorial Framing */}
        <div className="max-w-3xl space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-type-primary">
            Development services engineered around practical business outcomes.
          </h2>
          <p className="text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
            I don’t sell a checklist of technology names. I solve specific operational, product, and conversion bottlenecks using modern, maintainable code. Select any service below to inspect the exact business problem, target audience, deliverables, and production workflow.
          </p>
        </div>

        {/* Interactive Master-Detail Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 hairline-all bg-surface-deep/30">
          {/* Master List (5 cols): Interactive Service Selector */}
          <div className="lg:col-span-5 lg:hairline-r divide-y divide-line-subtle bg-surface-base">
            <div className="p-3 bg-surface-elevated font-mono text-[11px] uppercase tracking-wider text-type-tertiary flex items-center justify-between">
              <span>SERVICE DIRECTORY [8 CATEGORIES]</span>
              <span>SELECT TO INSPECT</span>
            </div>

            {SERVICES_DATA.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => {
                    setSelectedServiceId(service.id);
                    trackEvent("service_select", { service_id: service.id, title: service.title });
                  }}
                  className={`w-full text-left p-4 sm:p-5 flex items-start justify-between transition-all group ${
                    isSelected
                      ? "bg-surface-elevated/80 border-l-2 border-accent-clay"
                      : "hover:bg-surface-elevated/40"
                  }`}
                >
                  <div className="space-y-1.5 pr-4">
                    <div className="flex items-center space-x-2.5 font-mono text-xs">
                      <span className={isSelected ? "text-accent-clay" : "text-type-tertiary"}>
                        {service.categoryNumber}
                      </span>
                      <span className="text-type-tertiary">//</span>
                      <span
                        className={`font-semibold tracking-wide ${
                          isSelected ? "text-type-primary" : "text-type-secondary group-hover:text-type-primary"
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>
                    <p className="text-[12px] text-type-tertiary line-clamp-2 leading-relaxed">
                      {service.businessProblem}
                    </p>
                  </div>
                  <div className="pt-0.5 flex-shrink-0">
                    {getServiceIcon(service.id)}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail Dossier Pane (7 cols): Full Service Specification */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 bg-surface-deep flex flex-col justify-between">
            <div className="space-y-8">
              {/* Dossier Header */}
              <div className="space-y-2 pb-6 hairline-b">
                <div className="flex items-center justify-between font-mono text-xs text-type-tertiary">
                  <span className="flex items-center space-x-2">
                    <span className="text-accent-clay">SPEC_ID: {activeService.id.toUpperCase()}</span>
                    <span>/</span>
                    <span>CATEGORY {activeService.categoryNumber}</span>
                  </span>
                  <span className="px-2 py-0.5 bg-surface-elevated text-type-primary hairline-all text-[10px]">
                    VERIFIED CAPABILITY
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-sans font-bold text-type-primary tracking-tight">
                  {activeService.title}
                </h3>
              </div>

              {/* 1. Who Needs It & Core Business Problem */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-accent-clay">
                    Who This Is For
                  </div>
                  <p className="text-xs sm:text-sm text-type-secondary leading-relaxed">
                    {activeService.targetAudience}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-type-tertiary">
                    The Business Bottleneck
                  </div>
                  <p className="text-xs sm:text-sm text-type-secondary leading-relaxed">
                    {activeService.businessProblem}
                  </p>
                </div>
              </div>

              {/* 2. What I Deliver */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-type-primary">
                  What I Deliver
                </div>
                <p className="text-sm sm:text-base text-type-primary font-medium leading-relaxed bg-surface-elevated/50 p-4 hairline-all">
                  {activeService.deliverableSummary}
                </p>
              </div>

              {/* 3. Scope of Finished Results */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-type-tertiary">
                  Finished Results Include
                </div>
                <div className="grid grid-cols-1 gap-2.5">
                  {activeService.deliverableItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-2.5 text-xs sm:text-sm text-type-secondary"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-clay flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Technologies & Workflow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 hairline-t">
                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-type-tertiary">
                    Relevant Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeService.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-surface-elevated hairline-all font-mono text-[11px] text-type-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-type-tertiary">
                    Standard Delivery Cycle
                  </div>
                  <div className="font-mono text-xs text-type-secondary leading-normal bg-surface-base p-2.5 hairline-all">
                    {activeService.projectWorkflow}
                  </div>
                </div>
              </div>
            </div>

            {/* In-Context Service Enquiry Action */}
            <div className="pt-8 mt-8 hairline-t flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-type-tertiary">
                HAVE A PROJECT REQUIRING {activeService.title.toUpperCase()}?
              </div>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-type-primary text-surface-base font-mono text-xs font-semibold uppercase tracking-wider hover:bg-accent-zinc transition-colors flex items-center space-x-2"
              >
                <span>Enquire About This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Inviting, Professional & Conversion-Oriented Anchor Section */}
        <div className="mt-16 sm:mt-24 hairline-all bg-surface-elevated p-8 sm:p-12 lg:p-16">
          <div className="max-w-4xl space-y-6">
            <div className="flex items-center space-x-2 font-mono text-xs text-accent-clay uppercase tracking-wider">
              <span>PROJECT COLLABORATION</span>
              <span>//</span>
              <span>NO OBLIGATION DISCOVERY</span>
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-type-primary tracking-tight">
              Have a project in mind?
            </h3>

            <p className="text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
              Whether you are planning an MVP launch, building an internal web application to automate operations, or need high-fidelity React implementation from Figma designs—I can help you define the exact scope, eliminate unnecessary complexity, and deliver clean, production-ready code.
            </p>

            {/* Direct Value Commitments (Honest & Realistic) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-mono text-xs">
              <div className="p-3 bg-surface-base hairline-all">
                <div className="text-type-primary font-semibold mb-1">Direct Communication</div>
                <div className="text-type-tertiary text-[11px]">
                  No account managers or outsourced handoffs. You work directly with the developer writing your code.
                </div>
              </div>

              <div className="p-3 bg-surface-base hairline-all">
                <div className="text-type-primary font-semibold mb-1">Milestone Accountability</div>
                <div className="text-type-tertiary text-[11px]">
                  Projects are structured into clear phases with live staging reviews before each milestone release.
                </div>
              </div>

              <div className="p-3 bg-surface-base hairline-all">
                <div className="text-type-primary font-semibold mb-1">100% Code Ownership</div>
                <div className="text-type-tertiary text-[11px]">
                  All Git repositories, documentation, and cloud credentials remain under your full ownership from day one.
                </div>
              </div>
            </div>

            {/* Conversion CTA Row */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="px-6 py-3.5 bg-type-primary text-surface-base font-mono text-xs font-semibold uppercase tracking-wider hover:bg-accent-zinc transition-colors flex items-center space-x-2"
              >
                <span>Discuss Your Project Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="mailto:dmbilaldev@gmail.com"
                className="px-5 py-3.5 bg-surface-base hairline-all text-type-primary font-mono text-xs uppercase tracking-wider hover:bg-surface-deep transition-colors"
              >
                Direct Email: dmbilaldev@gmail.com
              </a>

              <span className="font-mono text-xs text-type-tertiary pl-2">
                Response within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}