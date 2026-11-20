"use client";

// Window interface augmentation for GA4 gtag and Vercel analytics
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Standardized Event Naming Taxonomy:
 * DISCOVERY:   discovery_view, discovery_source_track
 * ENGAGEMENT:  nav_click, section_view, service_select, project_view, lifecycle_step, faq_toggle
 * CONVERSION:  brief_start, brief_step_advance, brief_submit_success, email_cta_click,
 *              linkedin_click, github_click, resume_request_click
 */

export type ConversionEventName =
  | "discovery_view"
  | "nav_click"
  | "section_view"
  | "service_select"
  | "project_view"
  | "lifecycle_step"
  | "faq_toggle"
  | "brief_start"
  | "brief_step_advance"
  | "brief_submit_success"
  | "email_cta_click"
  | "linkedin_click"
  | "github_click"
  | "resume_request_click";

export interface EventProperties {
  section_name?: string;
  service_id?: string;
  project_id?: string;
  stage_number?: number;
  step_number?: number;
  project_type?: string;
  currency?: string;
  label?: string;
  [key: string]: any;
}

/**
 * Check if the user has consented to analytics storage
 */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  const consent = localStorage.getItem("dmbilal_analytics_consent");
  return consent === "granted";
}

/**
 * Record a typed analytics & conversion event.
 * Dispatches to Google Analytics 4 (if configured) and custom structured console telemetry.
 */
export function trackEvent(eventName: ConversionEventName, properties: EventProperties = {}) {
  if (typeof window === "undefined") return;

  const eventPayload = {
    event: eventName,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    referrer: document.referrer || "direct",
    ...properties,
  };

  // 1. Google Analytics 4 Dispatch
  if (window.gtag) {
    window.gtag("event", eventName, properties);
  }

  // 2. Structured In-Browser Telemetry (Safe for Privacy)
  if (process.env.NODE_ENV === "development") {
    console.debug(`[TELEMETRY_EVENT: ${eventName}]`, eventPayload);
  }

  // 3. Dispatch custom browser event for reactive components
  try {
    const customEvent = new CustomEvent("dmbilal_analytics_event", { detail: eventPayload });
    window.dispatchEvent(customEvent);
  } catch (e) {
    // Ignore environments where CustomEvent fails
  }
}