export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
}

export const VERIFIED_EXPERIENCE: ExperienceEntry[] = [
  {
    role: "Developer Intern",
    company: "After Concept",
    location: "Bahawalpur, Pakistan (Remote / Agency Environment)",
    duration: "March 2026 – September 2026 (6+ Months)",
    type: "Agency Internship",
    summary:
      "Contributed to full-stack engineering and production deployments across six company and client projects. Built and integrated React/Next.js interfaces with Python/Django backends, relational databases, and RESTful APIs.",
    bulletPoints: [
      "Built and deployed EVT SaaS: an end-to-end AI-assisted estimation, quote generation, and invoicing platform for construction professionals.",
      "Developed responsive interfaces, product dashboards, landing pages, and application workflows using React and Next.js.",
      "Engineered Python/Django backend services with SQLite integration, user authentication, and data handling logic.",
      "Connected frontend views to backend APIs via REST endpoints with Axios, handling loading states and error boundaries.",
      "Collaborated with senior engineers on project planning, MVP prototyping, cross-browser QA debugging, and live deployment."
    ],
    technologies: ["React", "Next.js", "Python", "Django", "TypeScript", "Tailwind CSS", "SQLite", "REST APIs", "Vercel"]
  }
];

export const TECHNICAL_TOOLKIT = {
  frontend: [
    { name: "React", level: "Primary Library" },
    { name: "Next.js (App Router)", level: "Production Framework" },
    { name: "TypeScript", level: "Typed Interfaces" },
    { name: "JavaScript (ES6+)", level: "Core Language" },
    { name: "Tailwind CSS", level: "Design Tokens & Utility" },
    { name: "HTML5 & CSS3", level: "Semantic Markup" },
    { name: "Bootstrap", level: "Legacy / Responsive Grid" }
  ],
  backend: [
    { name: "Python", level: "Core Language" },
    { name: "Django", level: "Backend Framework" },
    { name: "Node.js", level: "Runtime Environment" },
    { name: "REST API Design", level: "HTTP Contracts" },
    { name: "Authentication Systems", level: "Session & Token Auth" },
    { name: "SQLite", level: "Relational Modeling" }
  ],
  aiAndPractices: [
    { name: "AI-Assisted Development", level: "Rapid Prototyping Workflow" },
    { name: "LLM / AI Feature Integration", level: "Application Features" },
    { name: "Data Visualization & Dashboards", level: "Analytics UIs" },
    { name: "Responsive & Mobile-First", level: "Fluid Viewports" },
    { name: "WCAG Accessibility", level: "Accessible Elements" },
    { name: "Cross-Browser QA", level: "Edge / Safari / Chrome" }
  ],
  toolsAndDeployment: [
    { name: "Git & GitHub", level: "Version Control" },
    { name: "Vercel", level: "Edge Hosting & CI/CD" },
    { name: "Vite", level: "Frontend Build Tool" },
    { name: "VS Code", level: "Primary Development IDE" },
    { name: "Figma", level: "UI / Spec Inspection" },
    { name: "Chrome DevTools", level: "Profiling & Performance" }
  ]
};

export const VERIFIED_EDUCATION = {
  degree: "Intermediate in Computer Science (ICS)",
  institution: "Army Public School & College (APSNMC)",
  location: "Bahawalpur, Pakistan",
  backgroundSummary:
    "Pre-university degree focusing on core computer science foundations, programming fundamentals, mathematics, and analytical problem-solving. Paired formal studies with extensive self-directed practical software engineering, shipping real platforms during an intensive agency internship."
};

export const WORK_PHILOSOPHY = [
  {
    title: "Direct & Asynchronous Communication",
    description:
      "I provide structured, concise updates outlining what was completed, what is in progress, and any technical blockers. No disappearing mid-sprint."
  },
  {
    title: "Pragmatic Architecture over Over-Engineering",
    description:
      "I prioritize clean monoliths (Next.js + Django) and normalized relational models that solve the user's problem today, rather than complex microservices that slow down iteration."
  },
  {
    title: "100% Client Code Sovereignty",
    description:
      "All repositories, environment variables, documentation, and cloud deployment pipelines are created inside your accounts or transferred with zero vendor lock-in."
  },
  {
    title: "Rigorous QA before Staging",
    description:
      "Before submitting code for review, interfaces are verified for cross-browser stability, mobile responsiveness, and input sanitization."
  }
];