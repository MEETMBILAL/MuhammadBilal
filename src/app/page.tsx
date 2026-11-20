import React from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { LifecycleSimulator } from "@/components/LifecycleSimulator";
import { Credibility } from "@/components/Credibility";
import { FaqDiscoveryEngine } from "@/components/FaqDiscoveryEngine";
import { ProjectBriefBuilder } from "@/components/ProjectBriefBuilder";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-surface-base text-type-primary">
      {/* Precision Navigation Horizon */}
      <Navigation />

      {/* Section 01: Opening Hero Experience */}
      <Hero />

      {/* Section 02: Client Acquisition & Business Services Experience */}
      <Services />

      {/* Section 03: Interactive Project Proof & Technical Case Studies */}
      <Work />

      {/* Section 04: Signature Interactive Lifecycle Experience ("From Idea to Working Product") */}
      <LifecycleSimulator />

      {/* Section 05: Professional Identity & Credibility Record */}
      <Credibility />

      {/* Section 06: Dense Semantic FAQ & Answer Engine Discovery (AEO / GEO / AEIO) */}
      <FaqDiscoveryEngine />

      {/* Section 07: Qualified Project Brief Builder & Contact Engine ("Tell me what you're planning.") */}
      <ProjectBriefBuilder />

      {/* Section 08: Persistent Editorial Footer Horizon */}
      <Footer />
    </main>
  );
}