export interface ServiceDetail {
  id: string;
  categoryNumber: string;
  title: string;
  targetAudience: string;
  businessProblem: string;
  deliverableSummary: string;
  deliverableItems: string[];
  technologies: string[];
  projectWorkflow: string;
}

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "saas-mvp",
    categoryNumber: "01",
    title: "SaaS MVP Development",
    targetAudience: "Early-stage founders and product creators preparing to test an idea with live users.",
    businessProblem:
      "Founders often get stuck spending months coordinating separate frontend and backend contractors, resulting in delayed launches, misaligned API contracts, and budget exhaustion before user validation.",
    deliverableSummary:
      "An end-to-end working Minimum Viable Product built from data schema to live production, structured to handle real users, authentication, core operational logic, and subscription/quote workflows.",
    deliverableItems: [
      "Role-based authentication & secure session management",
      "Normalized database schema design & backend REST APIs",
      "Interactive product dashboards with real-time data handling",
      "Document generation workflows (estimates, invoices, reports)",
      "Production deployment with zero-configuration staging on Vercel"
    ],
    technologies: ["React", "Next.js", "Python", "Django", "SQLite", "REST APIs", "Vercel"],
    projectWorkflow: "Scope definition → Schema & Auth setup → Core feature build → Production staging"
  },
  {
    id: "fullstack-apps",
    categoryNumber: "02",
    title: "Full-Stack Web Applications",
    targetAudience: "Operating businesses and internal teams looking to replace manual spreadsheets or off-the-shelf tools with custom software.",
    businessProblem:
      "Businesses lose hours weekly managing critical client records, internal orders, or project schedules across disconnected spreadsheets that offer zero access control or validation.",
    deliverableSummary:
      "A tailored full-stack system engineered to match your operational workflow—connecting a typed, responsive frontend with a reliable Python/Django server.",
    deliverableItems: [
      "Custom business dashboards and data record management",
      "Secure role-based permissions (Admin, Operator, Client)",
      "Custom RESTful APIs designed for rapid data retrieval",
      "Exportable records (CSV, clean PDF summaries)",
      "Cross-browser tested interfaces with strict error boundaries"
    ],
    technologies: ["Next.js", "TypeScript", "Python", "Django", "Axios", "REST Design"],
    projectWorkflow: "Workflow mapping → Database modeling → API & UI synchronization → Deployment"
  },
  {
    id: "frontend-react",
    categoryNumber: "03",
    title: "Frontend Development & React Applications",
    targetAudience: "Teams with an existing backend or design files (Figma) that need high-fidelity, component-driven implementation.",
    businessProblem:
      "Design concepts often lose precision when handed off to generic developers, leading to broken responsive behavior, sluggish rendering, and inaccessible interfaces.",
    deliverableSummary:
      "Clean, modular, component-based frontend architectures translated with fidelity from Figma into production-ready React or Next.js codebases.",
    deliverableItems: [
      "Figma-to-code translation with pixel and spacing accuracy",
      "State management & asynchronous REST API integrations",
      "Reusable component design systems in Tailwind CSS",
      "WCAG accessibility standards & semantic HTML markup",
      "Strict TypeScript typing to prevent runtime errors"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma", "HTML5/CSS3"],
    projectWorkflow: "Figma audit → Component scaffolding → API hooks integration → Visual QA"
  },
  {
    id: "backend-api",
    categoryNumber: "04",
    title: "Backend Development & API Integration",
    targetAudience: "Front-end-heavy teams or businesses needing stable business logic, databases, or third-party service connections.",
    businessProblem:
      "Without properly architected backend logic and normalized data models, apps suffer from data leakage, unauthenticated route vulnerabilities, and unreliable database queries.",
    deliverableSummary:
      "Structured, maintainable Python/Django backends engineered with secure authentication, predictable RESTful endpoints, and clean data serialization.",
    deliverableItems: [
      "Django REST framework endpoints with input sanitization",
      "Custom authentication flows and session persistence",
      "Relational database design and query optimization",
      "Third-party API consumption & webhook event listeners",
      "Thorough endpoint testing & response payload documentation"
    ],
    technologies: ["Python", "Django", "SQLite", "REST APIs", "Authentication", "Git"],
    projectWorkflow: "Endpoint specification → Model architecture → Security check → API delivery"
  },
  {
    id: "business-websites",
    categoryNumber: "05",
    title: "Business Websites",
    targetAudience: "Service companies, agencies, and professional firms requiring an authoritative digital presence.",
    businessProblem:
      "Bloated templates and outdated CMS platforms produce slow-loading pages with messy code that frustrate visitors and damage company credibility on mobile devices.",
    deliverableSummary:
      "Custom-coded, high-performance web presences built on Next.js or clean HTML/CSS that load quickly, look refined on every device, and communicate authority.",
    deliverableItems: [
      "Bespoke layout design structured for brand clarity",
      "Mobile-first responsive layouts across phones, tablets & desktops",
      "Semantic HTML5 architecture for clean crawler indexing",
      "Fast client-side routing with optimized assets",
      "Direct enquiry contact forms with instant validation"
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Vercel"],
    projectWorkflow: "Content structuring → Responsive UI build → Cross-device QA → DNS launch"
  },
  {
    id: "landing-pages",
    categoryNumber: "06",
    title: "Landing Pages & Conversion-Focused Sites",
    targetAudience: "Companies launching marketing campaigns, new products, or dedicated client acquisition funnels.",
    businessProblem:
      "Visitors bounce within 5 seconds when landing pages suffer from cluttered visuals, weak value hierarchy, slow mobile load speeds, or confusing calls to action.",
    deliverableSummary:
      "Focused, single-purpose landing experiences engineered to guide the visitor's attention toward a single primary conversion action with minimal friction.",
    deliverableItems: [
      "Visual hierarchy optimized for reading rhythm and comprehension",
      "Friction-free contact and enquiry capture points",
      "Fast page load times (under 1.5s on mobile connections)",
      "Clear positioning anchors, service breakdowns, and proof elements",
      "Cross-browser testing across Safari, Chrome, Firefox, and Edge"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "JavaScript", "Performance QA"],
    projectWorkflow: "Offer dissection → Visual rhythm build → Friction reduction → Speed optimization"
  },
  {
    id: "redesign-modernization",
    categoryNumber: "07",
    title: "Website Redesign & Modernization",
    targetAudience: "Businesses whose websites look outdated, run on fragile legacy code, or fail to render cleanly on modern smartphones.",
    businessProblem:
      "Legacy websites accumulate technical debt, outdated design patterns, and unmaintained plugins that compromise security and make simple content updates a hazard.",
    deliverableSummary:
      "A complete technical and visual rebuild that preserves your established business identity while modernizing the codebase to Next.js and Tailwind CSS.",
    deliverableItems: [
      "Extraction and clean restructuring of existing business content",
      "Migration from fragile legacy platforms to modern static/SSR stacks",
      "Clean, modern typography and disciplined architectural spacing",
      "Responsive overhaul eliminating horizontal scroll and broken layouts",
      "Zero-downtime deployment switchover"
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    projectWorkflow: "Legacy audit → Content migration → Modern UI implementation → Switchover"
  },
  {
    id: "responsive-performance",
    categoryNumber: "08",
    title: "Responsive Interfaces & Performance Optimization",
    targetAudience: "Existing web projects that load too slowly, fail Google Lighthouse audits, or break across various viewport widths.",
    businessProblem:
      "Slow sites lose visitors before the page even renders. Poor mobile responsiveness directly degrades conversion rates and search ranking visibility.",
    deliverableSummary:
      "Hands-on frontend code refactoring to eliminate render-blocking scripts, resolve layout shifts, and enforce strict mobile-first responsive mechanics.",
    deliverableItems: [
      "Lighthouse performance audit and bottleneck identification",
      "Asset optimization, font loading adjustments, and bundle shrinking",
      "Elimination of Cumulative Layout Shifts (CLS) and viewport overflow",
      "Cross-browser styling fixes for iOS Safari and Android Chrome",
      "Refactoring CSS into maintainable, lightweight Tailwind utility classes"
    ],
    technologies: ["Chrome DevTools", "Lighthouse", "CSS3", "JavaScript", "Tailwind CSS"],
    projectWorkflow: "Baseline performance profiling → Code refactor → Multi-device testing → Verification"
  }
];