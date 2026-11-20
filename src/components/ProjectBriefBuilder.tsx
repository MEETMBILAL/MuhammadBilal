"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Clock,
  DollarSign,
  Layers,
  Send,
  Lock,
  RefreshCw,
  Mail,
  ShieldAlert
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function ProjectBriefBuilder() {
  // Step State (1 through 6, then summary/submission)
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form Fields State
  const [projectType, setProjectType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedRequirements, setSelectedRequirements] = useState<string[]>([]);
  const [currency, setCurrency] = useState<"USD" | "EUR" | "GBP">("USD");
  const [budgetRange, setBudgetRange] = useState<string>("");
  const [timeline, setTimeline] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [additionalContact, setAdditionalContact] = useState<string>("");
  const [honeypot, setHoneypot] = useState<string>(""); // bot trap

  // Submission & Validation States
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  // Constant Options
  const projectTypes = [
    "Business website",
    "Landing page",
    "E-commerce website",
    "SaaS MVP",
    "Web application",
    "Website redesign",
    "Frontend development",
    "Backend/API development",
    "Other"
  ];

  const requirementOptions = [
    "User authentication",
    "Dashboard",
    "Admin panel",
    "Database",
    "Payment integration",
    "API integration",
    "Responsive design",
    "Third-party integrations",
    "AI functionality"
  ];

  const budgetOptionsMap = {
    USD: ["Under $1,500", "$1,500 – $3,000", "$3,000 – $6,000", "$6,000+", "Flexible / To Be Discussed"],
    EUR: ["Under €1,400", "€1,400 – €2,800", "€2,800 – €5,500", "€5,500+", "Flexible / To Be Discussed"],
    GBP: ["Under £1,200", "£1,200 – £2,400", "£2,400 – £4,800", "£4,800+", "Flexible / To Be Discussed"]
  };

  const timelineOptions = [
    "As soon as possible",
    "Within a month",
    "Within 2–3 months",
    "Flexible"
  ];

  // Requirements Toggle Handler
  const toggleRequirement = (req: string) => {
    setSelectedRequirements((prev) =>
      prev.includes(req) ? prev.filter((item) => item !== req) : [...prev, req]
    );
  };

  // Step Validation
  const validateCurrentStep = (): boolean => {
    const errors: Record<string, string> = {};

    if (currentStep === 1 && !projectType) {
      errors.projectType = "Please select a project type to continue.";
    }

    if (currentStep === 2 && description.trim().length < 10) {
      errors.description = "Please share a brief description (at least 10 characters).";
    }

    if (currentStep === 5 && !timeline) {
      errors.timeline = "Please select your expected project timeline.";
    }

    if (currentStep === 6) {
      if (!name.trim()) errors.name = "Please provide your name.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.trim() || !emailRegex.test(email)) {
        errors.email = "Please enter a valid email address.";
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNextStep = () => {
    if (validateCurrentStep()) {
      const nextStep = Math.min(currentStep + 1, 6);
      setCurrentStep(nextStep);
      trackEvent("brief_step_advance", { step_number: nextStep, project_type: projectType });
    }
  };

  const handlePrevStep = () => {
    setValidationErrors({});
    setServerError(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  // Final Brief Submission
  const handleSubmitBrief = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          projectType,
          description,
          requirements: selectedRequirements,
          budgetRange: budgetRange ? `${currency} ${budgetRange}` : "Flexible / Undisclosed",
          timeline,
          name,
          email,
          company,
          additionalContact,
          honeypot
        })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit brief. Server responded with an error.");
      }

      setSubmissionReceipt({
        referenceId: data.referenceId,
        message: data.message
      });
      setSubmissionSuccess(true);
      trackEvent("brief_submit_success", {
        reference_id: data.referenceId,
        project_type: projectType,
        currency,
        timeline,
      });
    } catch (err: any) {
      console.error("[BRIEF_SUBMISSION_ERROR]", err);
      setServerError(
        err.message ||
          "Network or server error. Your brief could not be submitted automatically. Please reach out directly at dmbilaldev@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset Builder
  const handleReset = () => {
    setCurrentStep(1);
    setProjectType("");
    setDescription("");
    setSelectedRequirements([]);
    setBudgetRange("");
    setTimeline("");
    setName("");
    setEmail("");
    setCompany("");
    setAdditionalContact("");
    setSubmissionSuccess(false);
    setSubmissionReceipt(null);
    setServerError(null);
  };

  return (
    <section id="contact" className="w-full bg-surface-base hairline-b">
      {/* Header Ledger Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between text-xs font-mono text-type-tertiary hairline-b gap-y-2">
        <div className="flex items-center space-x-2">
          <span>SECTION // 05</span>
          <span className="text-line-pronounced">|</span>
          <span className="text-type-secondary">QUALIFIED PROJECT ENQUIRY ENGINE</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-clay" />
          <span className="uppercase text-type-secondary">Direct Client Intake · &lt;24h Response SLA</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Section Headline */}
        <div className="max-w-3xl space-y-4 mb-10">
          <div className="text-xs font-mono text-accent-clay uppercase tracking-wider flex items-center space-x-1.5">
            <Lock className="w-3.5 h-3.5" />
            <span>Interactive Project Brief Builder</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-tight text-type-primary">
            Tell me what you&apos;re planning.
          </h2>
          <p className="text-base sm:text-lg text-type-secondary font-sans leading-relaxed">
            You don’t need to write an unstructured email. Walk through this 6-step brief builder to communicate your project type, core requirements, budget expectations, and timeline. I review every submission personally and respond within 24 hours.
          </p>
        </div>

        {/* Master Brief Builder Card Container */}
        <div className="hairline-all bg-surface-deep max-w-5xl mx-auto">
          {/* Top Progress Track */}
          <div className="p-4 sm:p-5 bg-surface-elevated hairline-b flex flex-wrap items-center justify-between gap-y-3 font-mono text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-accent-clay font-bold">
                STEP {currentStep} OF 06:
              </span>
              <span className="text-type-primary uppercase">
                {currentStep === 1 && "Project Category"}
                {currentStep === 2 && "Core Description"}
                {currentStep === 3 && "Technical Requirements"}
                {currentStep === 4 && "Budget Expectation"}
                {currentStep === 5 && "Target Timeline"}
                {currentStep === 6 && "Contact & Verification"}
              </span>
            </div>

            {/* Stepper Dots */}
            <div className="flex items-center space-x-1.5">
              {[1, 2, 3, 4, 5, 6].map((stepNum) => (
                <div
                  key={stepNum}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentStep === stepNum
                      ? "bg-accent-clay ring-2 ring-accent-clay/30"
                      : stepNum < currentStep
                      ? "bg-type-secondary"
                      : "bg-line-pronounced"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Form Content Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            {submissionSuccess && submissionReceipt ? (
              /* Success Confirmation View */
              <div className="space-y-6 text-center py-8 max-w-xl mx-auto">
                <div className="w-12 h-12 bg-accent-clay/10 text-accent-clay hairline-all rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-mono text-accent-clay uppercase tracking-wider">
                    BRIEF DISPATCH CONFIRMED
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-type-primary">
                    Project Brief Securely Received
                  </h3>
                  <p className="text-sm text-type-secondary leading-relaxed">
                    {submissionReceipt.message}
                  </p>
                </div>

                <div className="p-4 bg-surface-base hairline-all font-mono text-xs text-left space-y-2">
                  <div className="flex justify-between text-type-tertiary">
                    <span>TRACKING REFERENCE:</span>
                    <span className="text-type-primary font-bold">{submissionReceipt.referenceId}</span>
                  </div>
                  <div className="flex justify-between text-type-tertiary">
                    <span>RECIPIENT CONTACT:</span>
                    <span className="text-type-secondary">{email}</span>
                  </div>
                  <div className="flex justify-between text-type-tertiary">
                    <span>PROJECT TYPE:</span>
                    <span className="text-accent-clay">{projectType}</span>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 bg-surface-elevated hairline-all text-type-primary font-mono text-xs uppercase hover:bg-surface-overlay transition-colors inline-flex items-center space-x-2"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Submit Another Project Brief</span>
                </button>
              </div>
            ) : (
              /* Interactive Step Views */
              <form onSubmit={handleSubmitBrief} className="space-y-8">
                {/* Honeypot Spam Trap (Hidden) */}
                <input
                  type="text"
                  name="user_verification_token"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* STEP 1: Project Type */}
                {currentStep === 1 && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-sans font-bold text-type-primary mb-1">
                        What type of project are you looking to build?
                      </h4>
                      <p className="text-xs sm:text-sm text-type-secondary">
                        Select the primary format that best describes your objective.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {projectTypes.map((type) => {
                        const isSelected = projectType === type;
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => {
                              setProjectType(type);
                              setValidationErrors({});
                            }}
                            className={`p-4 text-left font-mono text-xs transition-all hairline-all ${
                              isSelected
                                ? "bg-surface-elevated text-type-primary border-l-2 border-accent-clay"
                                : "bg-surface-base text-type-secondary hover:text-type-primary hover:bg-surface-elevated/40"
                            }`}
                          >
                            <span className="block font-medium">{type}</span>
                          </button>
                        );
                      })}
                    </div>
                    {validationErrors.projectType && (
                      <p className="text-xs text-accent-clay font-mono flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{validationErrors.projectType}</span>
                      </p>
                    )}
                  </div>
                )}

                {/* STEP 2: Project Description */}
                {currentStep === 2 && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-sans font-bold text-type-primary mb-1">
                        Describe the concept, problem or required functionality.
                      </h4>
                      <p className="text-xs sm:text-sm text-type-secondary">
                        What is the main task the software must perform? Who are the users?
                      </p>
                    </div>

                    <div className="space-y-2">
                      <textarea
                        rows={6}
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                          setValidationErrors({});
                        }}
                        placeholder="e.g. We need a web application where construction contractors can calculate material estimates, generate PDF quotes, and record invoices. It needs an admin panel and role-based permissions."
                        className="w-full p-4 bg-surface-base hairline-all font-mono text-xs sm:text-sm text-type-primary placeholder-type-tertiary focus:outline-none focus:border-accent-clay leading-relaxed"
                      />
                      <div className="flex justify-between text-[11px] font-mono text-type-tertiary">
                        <span>Minimum 10 characters</span>
                        <span>{description.length} characters entered</span>
                      </div>
                    </div>
                    {validationErrors.description && (
                      <p className="text-xs text-accent-clay font-mono flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{validationErrors.description}</span>
                      </p>
                    )}
                  </div>
                )}

                {/* STEP 3: Technical Requirements */}
                {currentStep === 3 && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-sans font-bold text-type-primary mb-1">
                        Select any specific requirements you already know you need.
                      </h4>
                      <p className="text-xs sm:text-sm text-type-secondary">
                        Choose as many as apply. These can be adjusted during technical scoping.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {requirementOptions.map((req) => {
                        const isSelected = selectedRequirements.includes(req);
                        return (
                          <button
                            type="button"
                            key={req}
                            onClick={() => toggleRequirement(req)}
                            className={`p-3.5 text-left font-mono text-xs transition-all hairline-all flex items-center justify-between ${
                              isSelected
                                ? "bg-surface-elevated text-type-primary border-l-2 border-accent-clay"
                                : "bg-surface-base text-type-secondary hover:text-type-primary hover:bg-surface-elevated/40"
                            }`}
                          >
                            <span>{req}</span>
                            {isSelected ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent-clay" />
                            ) : (
                              <span className="w-3.5 h-3.5 rounded-full border border-line-pronounced" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                    <div className="text-[11px] font-mono text-type-tertiary">
                      {selectedRequirements.length} requirements selected (optional)
                    </div>
                  </div>
                )}

                {/* STEP 4: Budget Range */}
                {currentStep === 4 && (
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-y-2">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-sans font-bold text-type-primary mb-1">
                          Do you have an allocated budget range?
                        </h4>
                        <p className="text-xs sm:text-sm text-type-secondary">
                          Optional. Helps match the architecture and scope to realistic constraints.
                        </p>
                      </div>

                      {/* Currency Toggle */}
                      <div className="flex items-center space-x-1 font-mono text-xs hairline-all p-1 bg-surface-base">
                        {(["USD", "EUR", "GBP"] as const).map((curr) => (
                          <button
                            type="button"
                            key={curr}
                            onClick={() => {
                              setCurrency(curr);
                              setBudgetRange("");
                            }}
                            className={`px-2.5 py-1 ${
                              currency === curr
                                ? "bg-surface-elevated text-type-primary font-bold"
                                : "text-type-tertiary hover:text-type-secondary"
                            }`}
                          >
                            {curr}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {budgetOptionsMap[currency].map((range) => {
                        const isSelected = budgetRange === range;
                        return (
                          <button
                            type="button"
                            key={range}
                            onClick={() => setBudgetRange(range)}
                            className={`p-4 text-left font-mono text-xs transition-all hairline-all ${
                              isSelected
                                ? "bg-surface-elevated text-type-primary border-l-2 border-accent-clay"
                                : "bg-surface-base text-type-secondary hover:text-type-primary hover:bg-surface-elevated/40"
                            }`}
                          >
                            <span className="block font-medium">{range}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 5: Timeline */}
                {currentStep === 5 && (
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-sans font-bold text-type-primary mb-1">
                        What is your expected timeline for completion?
                      </h4>
                      <p className="text-xs sm:text-sm text-type-secondary">
                        Helps schedule sprint planning and delivery milestones.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timelineOptions.map((t) => {
                        const isSelected = timeline === t;
                        return (
                          <button
                            type="button"
                            key={t}
                            onClick={() => {
                              setTimeline(t);
                              setValidationErrors({});
                            }}
                            className={`p-4 text-left font-mono text-xs transition-all hairline-all flex items-center justify-between ${
                              isSelected
                                ? "bg-surface-elevated text-type-primary border-l-2 border-accent-clay"
                                : "bg-surface-base text-type-secondary hover:text-type-primary hover:bg-surface-elevated/40"
                            }`}
                          >
                            <span>{t}</span>
                            <Clock className="w-3.5 h-3.5 text-type-tertiary" />
                          </button>
                        );
                      })}
                    </div>
                    {validationErrors.timeline && (
                      <p className="text-xs text-accent-clay font-mono flex items-center space-x-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{validationErrors.timeline}</span>
                      </p>
                    )}
                  </div>
                )}

                {/* STEP 6: Contact Information & Submission Summary */}
                {currentStep === 6 && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl sm:text-2xl font-sans font-bold text-type-primary mb-1">
                        Where should I send the project evaluation?
                      </h4>
                      <p className="text-xs sm:text-sm text-type-secondary">
                        Enter your primary contact coordinates. No marketing automation, no spam.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-type-tertiary">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            setValidationErrors({});
                          }}
                          placeholder="e.g. Alex Mercer"
                          className="w-full p-3 bg-surface-base hairline-all font-mono text-xs text-type-primary placeholder-type-tertiary focus:outline-none focus:border-accent-clay"
                        />
                        {validationErrors.name && (
                          <span className="text-[10px] text-accent-clay font-mono">
                            {validationErrors.name}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-type-tertiary">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setValidationErrors({});
                          }}
                          placeholder="name@company.com"
                          className="w-full p-3 bg-surface-base hairline-all font-mono text-xs text-type-primary placeholder-type-tertiary focus:outline-none focus:border-accent-clay"
                        />
                        {validationErrors.email && (
                          <span className="text-[10px] text-accent-clay font-mono">
                            {validationErrors.email}
                          </span>
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-type-tertiary">
                          Company / Business Name (Optional)
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Mercer Build Group"
                          className="w-full p-3 bg-surface-base hairline-all font-mono text-xs text-type-primary placeholder-type-tertiary focus:outline-none focus:border-accent-clay"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-mono uppercase tracking-wider text-type-tertiary">
                          Additional Contact (LinkedIn / Phone, Optional)
                        </label>
                        <input
                          type="text"
                          value={additionalContact}
                          onChange={(e) => setAdditionalContact(e.target.value)}
                          placeholder="e.g. +1 (555) 019-2834 or LinkedIn URL"
                          className="w-full p-3 bg-surface-base hairline-all font-mono text-xs text-type-primary placeholder-type-tertiary focus:outline-none focus:border-accent-clay"
                        />
                      </div>
                    </div>

                    {/* Structured Summary Preview Before Send */}
                    <div className="p-4 bg-surface-base hairline-all font-mono text-xs space-y-2">
                      <div className="text-[10px] text-accent-clay uppercase tracking-wider pb-1 hairline-b">
                        PROJECT BRIEF TELEMETRY SUMMARY
                      </div>
                      <div className="flex justify-between">
                        <span className="text-type-tertiary">CATEGORY:</span>
                        <span className="text-type-primary">{projectType || "Unselected"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-type-tertiary">TIMELINE:</span>
                        <span className="text-type-primary">{timeline || "Unselected"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-type-tertiary">BUDGET ALLOCATION:</span>
                        <span className="text-type-secondary">
                          {budgetRange ? `${currency} ${budgetRange}` : "Flexible / Undisclosed"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-type-tertiary">REQUIREMENTS COUNT:</span>
                        <span className="text-type-secondary">{selectedRequirements.length} selected</span>
                      </div>
                    </div>

                    {/* Privacy Notice */}
                    <div className="text-[11px] font-mono text-type-tertiary flex items-start space-x-1.5">
                      <Lock className="w-3.5 h-3.5 text-line-active flex-shrink-0 mt-0.5" />
                      <span>
                        Privacy Notice: Your brief data is encrypted in transit and submitted directly to my private server. It is never sold, shared, or added to automated mailing lists.
                      </span>
                    </div>

                    {/* Server Error Notification with Recovery Guidance */}
                    {serverError && (
                      <div className="p-3 bg-surface-base hairline-all border-l-2 border-accent-clay font-mono text-xs text-accent-clay space-y-1">
                        <div className="flex items-center space-x-1.5 font-bold">
                          <ShieldAlert className="w-4 h-4" />
                          <span>Submission Error</span>
                        </div>
                        <p className="text-[11px] text-type-secondary">{serverError}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Form Navigation Controls */}
                <div className="pt-6 hairline-t flex flex-wrap items-center justify-between gap-3">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      disabled={isSubmitting}
                      className="px-4 py-2.5 bg-surface-base hairline-all font-mono text-xs text-type-secondary hover:text-type-primary flex items-center space-x-1.5"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div className="text-xs font-mono text-type-tertiary">
                      Direct Email: <a href="mailto:dmbilaldev@gmail.com" className="underline text-type-secondary">dmbilaldev@gmail.com</a>
                    </div>
                  )}

                  {currentStep < 6 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-6 py-2.5 bg-type-primary text-surface-base font-mono text-xs font-semibold uppercase tracking-wider hover:bg-accent-zinc transition-colors flex items-center space-x-1.5 ml-auto"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-type-primary text-surface-base font-mono text-xs font-semibold uppercase tracking-wider hover:bg-accent-zinc transition-colors flex items-center space-x-2 ml-auto disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Dispatching Brief...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Project Brief</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Alternative Direct Channels Strip */}
        <div className="mt-12 p-4 bg-surface-elevated hairline-all max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-y-3 font-mono text-xs text-type-tertiary">
          <div className="flex items-center space-x-2">
            <Mail className="w-3.5 h-3.5 text-accent-clay" />
            <span className="text-type-secondary">Prefer direct conversation?</span>
            <a href="mailto:dmbilaldev@gmail.com" className="text-type-primary underline hover:text-accent-clay">
              dmbilaldev@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span>Phone: +92 309 3146450</span>
            <span>•</span>
            <a
              href="https://linkedin.com/in/meetmbilal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-type-primary hover:text-accent-clay"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}