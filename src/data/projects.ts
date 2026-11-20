export interface ProjectCaseStudy {
  id: string;
  projectNumber: string;
  name: string;
  category: string;
  tier: "production-flagship" | "commercial-platform" | "frontend-engineering";
  problem: string;
  contribution: string;
  technologies: string[];
  keyFunctionality: string[];
  technicalDecisions: {
    decision: string;
    rationale: string;
  }[];
  liveUrl?: string;
  sourceUrl?: string;
  availabilityNote: string;
  schematicType: "saas-flow" | "agency-mesh" | "ecommerce-pipeline" | "hospitality-menu" | "editorial-grid";
}

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "evt-saas",
    projectNumber: "01",
    name: "EVT SaaS (EasyEstimate)",
    category: "AI-Assisted Estimation & Invoicing Platform",
    tier: "production-flagship",
    problem:
      "Construction contractors and service operators lose billable hours every week manually calculating material takeoff estimates, creating Excel quotes, and tracking unpaid invoices across disjointed tools.",
    contribution:
      "Architected and delivered the full-stack system end-to-end: configured Django backend workflows, normalized SQLite data schemas, built role-based access authentication, and implemented an AI-assisted estimation calculator integrated with quote and invoice generation.",
    technologies: ["Python", "Django", "SQLite", "React", "Next.js", "REST APIs", "AI Tooling"],
    keyFunctionality: [
      "Dynamic cost-estimation engine with parameter inputs (labor rates, material margins, project dimensions)",
      "AI-assisted margin adjustment and quote verification logic",
      "Automated PDF document generation for client quotes and itemized invoices",
      "Client management and historical transaction ledger tracking paid/outstanding balances",
      "Secure role-based session authentication with strict data isolation"
    ],
    technicalDecisions: [
      {
        decision: "Django ORM with Normalized Relational Models",
        rationale: "Ensured mathematical accuracy across multi-tier itemized calculations and prevented floating-point discrepancies in invoice totals."
      },
      {
        decision: "RESTful Asynchronous Endpoint Contracts",
        rationale: "Decoupled the complex estimation calculation logic from the UI thread, providing instant validation feedback on the frontend."
      }
    ],
    liveUrl: "https://dmbilal.vercel.app",
    availabilityNote: "Live product verified on resume; production client access protected by role-based authentication.",
    schematicType: "saas-flow"
  },
  {
    id: "after-concept",
    projectNumber: "02",
    name: "After Concept Platform",
    category: "Agency Digital Infrastructure & Showcase",
    tier: "commercial-platform",
    problem:
      "Modern digital agencies require web platforms that communicate engineering rigor, rapid deployment speed, and AI capabilities without succumbing to generic template aesthetics.",
    contribution:
      "Developed high-fidelity, responsive client-facing interfaces, interactive dashboard workflows, and service presentations using Next.js, TypeScript, and Tailwind CSS; aligned frontend components with strict Figma design systems.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "AI/LLM Integration", "Vercel"],
    keyFunctionality: [
      "Component-based architecture built for reusability across agency service verticals",
      "High-speed server-rendered pages achieving 98+ Lighthouse performance scores",
      "Interactive product discovery flows for custom development & AI integration prospects",
      "Responsive layout engineering rigorously tested across iOS Safari, Chrome, and Firefox"
    ],
    technicalDecisions: [
      {
        decision: "Strict TypeScript Interface Definitions",
        rationale: "Eliminated runtime type errors across complex multi-step enquiry flows and dynamic service specs."
      },
      {
        decision: "Tailwind CSS Design Token Synchronization",
        rationale: "Enforced consistent spacing, typography scale, and color fidelity directly matching Figma design files."
      }
    ],
    liveUrl: "https://afterconcept.io",
    availabilityNote: "Commercial agency platform live and deployed.",
    schematicType: "agency-mesh"
  },
  {
    id: "bookshelf-online",
    projectNumber: "03",
    name: "BookShelf Online",
    category: "High-Performance E-Commerce Storefront",
    tier: "commercial-platform",
    problem:
      "Traditional online storefronts frequently suffer from layout shifts (CLS), heavy render-blocking assets, and poor mobile search visibility, resulting in lost conversions.",
    contribution:
      "Engineered an e-commerce storefront focusing on raw execution speed, semantic HTML5 structure, structured metadata for search engines, and a responsive mobile browsing experience.",
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "SEO Architecture", "Vercel"],
    keyFunctionality: [
      "Dynamic catalog browsing and client-side filtering without heavy runtime overhead",
      "Structured schema markup (JSON-LD) optimizing book titles for Google rich search results",
      "Friction-free responsive product detail modals and checkout trigger flows",
      "Zero-dependency lightweight vanilla JavaScript architecture for near-instant rendering"
    ],
    technicalDecisions: [
      {
        decision: "Zero-Framework Lightweight Asset Architecture",
        rationale: "Achieved sub-second First Contentful Paint (FCP) on 3G mobile connections by avoiding heavy client bundles."
      },
      {
        decision: "Strict Semantic DOM Hierarchy",
        rationale: "Ensured 100% WCAG accessibility compliance and effortless search engine crawler indexing."
      }
    ],
    liveUrl: "https://bookshelfonline.netlify.app",
    sourceUrl: "https://github.com/meetmbilal",
    availabilityNote: "Live deployed storefront on Netlify.",
    schematicType: "ecommerce-pipeline"
  },
  {
    id: "tavro",
    projectNumber: "04",
    name: "Tavro Hospitality",
    category: "Bespoke Hospitality & Culinary Web Experience",
    tier: "frontend-engineering",
    problem:
      "Hospitality brands often rely on static PDF menus or uninspired templates that fail on mobile screens and fail to communicate atmosphere.",
    contribution:
      "Designed and coded a modern hospitality web concept emphasizing editorial layout, mobile-first menu navigation, interactive dining sections, and smooth visual transitions.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "Component Layout"],
    keyFunctionality: [
      "Fluid, responsive menu system categorized by dining courses with instant filtering",
      "Editorial multi-column layout with deliberate negative space and refined typography",
      "Touch-optimized reservation intent capture interfaces",
      "Cross-browser testing ensuring uniform aesthetic rendering across Safari and Chromium engines"
    ],
    technicalDecisions: [
      {
        decision: "CSS Grid & Flexbox Hybrid System",
        rationale: "Provided fluid adaptation across extreme viewport widths without horizontal overflow or content clipping."
      }
    ],
    sourceUrl: "https://github.com/meetmbilal",
    availabilityNote: "Source repository and demonstration code available on GitHub.",
    schematicType: "hospitality-menu"
  },
  {
    id: "comixhub",
    projectNumber: "05",
    name: "ComixHub Platform",
    category: "Interactive Digital Media Reader & Showcase",
    tier: "frontend-engineering",
    problem:
      "Digital comic and visual media readers demand high-density image rendering, intuitive chapter navigation, and minimal UI distraction.",
    contribution:
      "Built a focused media reading concept featuring an interactive carousel/reader, responsive catalog grid, and dark-mode aesthetic built for visual engagement.",
    technologies: ["JavaScript (ES6+)", "HTML5", "CSS3", "DOM Manipulation"],
    keyFunctionality: [
      "Dynamic reader viewport with smooth keyboard and touch navigational listeners",
      "Responsive visual gallery with lightweight thumbnail lazy-loading",
      "Categorized series explorer with modal chapter previews",
      "Clean modular code structure documented on GitHub"
    ],
    technicalDecisions: [
      {
        decision: "Event Delegation for Reader Navigational Controls",
        rationale: "Minimized memory overhead during rapid page-flipping interactions across hundreds of comic panels."
      }
    ],
    sourceUrl: "https://github.com/meetmbilal",
    availabilityNote: "Independent project built and showcased on GitHub and SideProjectors.",
    schematicType: "editorial-grid"
  },
  {
    id: "streetsole-eduhub",
    projectNumber: "06",
    name: "StreetSole & EduHub",
    category: "Responsive Frontend Systems & Concepts",
    tier: "frontend-engineering",
    problem:
      "Building commercial-grade interfaces requires mastery of distinct layout constraints—from high-energy e-commerce footwear grids to structured institutional educational portals.",
    contribution:
      "Engineered responsive UI architectures showcasing adaptable styling: StreetSole (product visual rhythm and clean selling blocks) and EduHub (clear information architecture with Tailwind and Bootstrap).",
    technologies: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "JavaScript"],
    keyFunctionality: [
      "StreetSole: High-contrast product presentation, dynamic sizing selectors, clean grid rhythm",
      "EduHub: Structured academic portal layouts, schedule tables, responsive content blocks",
      "Comprehensive cross-device QA validation eliminating layout discrepancies"
    ],
    technicalDecisions: [
      {
        decision: "Multi-Framework Styling Evaluation",
        rationale: "Deliberately compared Tailwind utility constraints against Bootstrap grid conventions to master varied production agency codebases."
      }
    ],
    sourceUrl: "https://github.com/meetmbilal",
    availabilityNote: "Verified frontend repositories featured on portfolio.",
    schematicType: "editorial-grid"
  }
];