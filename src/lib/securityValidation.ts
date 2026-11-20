/**
 * Server-Side Security Sanitization & Validation Helpers
 * 
 * Protects against:
 * - HTML / Script Injection (XSS)
 * - Email Header Injection (\r, \n, Bcc/Cc hijacking)
 * - Prototype pollution and unexpected keys
 * - Malformed Unicode and control characters
 */

// Allowlist of permissible project types
export const ALLOWED_PROJECT_TYPES = [
  "Business website",
  "Landing page",
  "E-commerce website",
  "SaaS MVP",
  "Web application",
  "Website redesign",
  "Frontend development",
  "Backend/API development",
  "Other",
] as const;

// Allowlist of permissible requirement tags
export const ALLOWED_REQUIREMENTS = [
  "User authentication",
  "Dashboard",
  "Admin panel",
  "Database",
  "Payment integration",
  "API integration",
  "Responsive design",
  "Third-party integrations",
  "AI functionality",
] as const;

// Allowlist of permissible timelines
export const ALLOWED_TIMELINES = [
  "As soon as possible",
  "Within a month",
  "Within 2–3 months",
  "Flexible",
] as const;

/**
 * Strips HTML tags, script syntax, and dangerous characters
 */
export function sanitizeText(input: string): string {
  if (!input) return "";
  return input
    .replace(/[<>]/g, "") // Strip < and > to neutralize HTML tags
    .replace(/javascript:/gi, "") // Neutralize javascript: pseudo-protocols
    .replace(/on\w+=/gi, "") // Neutralize inline event handlers
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Strip ASCII control characters
    .trim();
}

/**
 * Strips carriage returns and line feeds to prevent SMTP / Email Header Injection
 */
export function sanitizeEmailHeader(input: string): string {
  if (!input) return "";
  return input
    .replace(/[\r\n\t]/g, " ") // Replace CR, LF, Tabs with spaces
    .replace(/[<>]/g, "")
    .trim();
}

/**
 * Validates strict RFC 5322 compliant email format with length bounds
 */
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  // RFC 5322 simplified regex
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email);
}

/**
 * Strict Input Schema Verification
 */
export interface ValidatedEnquiry {
  projectType: string;
  description: string;
  requirements: string[];
  budgetRange: string;
  timeline: string;
  name: string;
  email: string;
  company?: string;
  additionalContact?: string;
}

export function validateEnquiryPayload(raw: any): {
  isValid: boolean;
  sanitized?: ValidatedEnquiry;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { isValid: false, errors: { payload: "Invalid request payload format." } };
  }

  // 1. Project Type
  if (typeof raw.projectType !== "string" || !ALLOWED_PROJECT_TYPES.includes(raw.projectType as any)) {
    errors.projectType = "Please select a valid project category from the list.";
  }

  // 2. Description (Bounds: 10 to 3000 chars)
  if (typeof raw.description !== "string" || raw.description.trim().length < 10) {
    errors.description = "Project description must be at least 10 characters.";
  } else if (raw.description.length > 3000) {
    errors.description = "Project description cannot exceed 3,000 characters.";
  }

  // 3. Name (Bounds: 2 to 100 chars, no header injection)
  if (typeof raw.name !== "string" || raw.name.trim().length < 2) {
    errors.name = "Please provide your name (at least 2 characters).";
  } else if (raw.name.length > 100) {
    errors.name = "Name cannot exceed 100 characters.";
  }

  // 4. Email
  if (typeof raw.email !== "string" || !isValidEmail(raw.email)) {
    errors.email = "Please provide a valid email address.";
  }

  // 5. Timeline
  if (typeof raw.timeline !== "string" || !ALLOWED_TIMELINES.includes(raw.timeline as any)) {
    errors.timeline = "Please select an accepted project timeline.";
  }

  // 6. Requirements Array (Max 15 items, elements must be string)
  let validatedReqs: string[] = [];
  if (Array.isArray(raw.requirements)) {
    if (raw.requirements.length > 15) {
      errors.requirements = "Too many requirements selected.";
    } else {
      validatedReqs = raw.requirements
        .filter((r: any) => typeof r === "string")
        .map((r: string) => sanitizeText(r).slice(0, 50))
        .filter((r: string) => (ALLOWED_REQUIREMENTS as readonly string[]).includes(r));
    }
  }

  // 7. Budget Range (Bounds: max 100 chars)
  const budgetRange = typeof raw.budgetRange === "string" ? sanitizeText(raw.budgetRange).slice(0, 100) : "Flexible / Undisclosed";

  // 8. Company & Additional Contact (Optional, max 100 chars)
  const company = typeof raw.company === "string" ? sanitizeText(raw.company).slice(0, 100) : undefined;
  const additionalContact = typeof raw.additionalContact === "string" ? sanitizeText(raw.additionalContact).slice(0, 100) : undefined;

  if (Object.keys(errors).length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    sanitized: {
      projectType: raw.projectType,
      description: sanitizeText(raw.description),
      requirements: validatedReqs,
      budgetRange,
      timeline: raw.timeline,
      name: sanitizeEmailHeader(raw.name),
      email: raw.email.trim().toLowerCase(),
      company,
      additionalContact,
    },
    errors: {},
  };
}