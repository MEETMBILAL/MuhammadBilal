export interface LifecycleStage {
  id: number;
  stageNumber: string;
  name: string;
  phaseCategory: "DISCOVERY & SPEC" | "SYSTEM DESIGN" | "FULL-STACK ENGINEERING" | "STABILIZATION & LAUNCH";
  objective: string;
  whatHappens: string;
  technicalDecisions: {
    decision: string;
    impact: string;
  }[];
  technologiesInvolved: string[];
  deliverables: string[];
  criticalConsiderations: string;
  simulatedArtifact: {
    title: string;
    codeSnippetOrSchema: string;
    statusBadge: string;
  };
}

export const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    id: 1,
    stageNumber: "01",
    name: "Idea Submission & Problem Framing",
    phaseCategory: "DISCOVERY & SPEC",
    objective: "Deconstruct the initial concept into explicit business objectives and measurable constraints.",
    whatHappens:
      "A founder or business owner brings a raw idea (e.g., 'we need an estimation tool for contractors'). We define the primary user, the core financial or operational transaction, and strip out non-essential feature bloat.",
    technicalDecisions: [
      {
        decision: "Single Core Value Loop",
        impact: "Identify the one action that justifies the product existing before architecting secondary features."
      },
      {
        decision: "Feasibility Assessment",
        impact: "Evaluate if third-party APIs or custom backend models are required."
      }
    ],
    technologiesInvolved: ["Product Scope Document", "Constraint Mapping", "Figma FigJam"],
    deliverables: ["Product One-Pager", "User Journey Flow", "Scope Boundary Agreement"],
    criticalConsiderations:
      "Avoid committing to multi-sided marketplace features or multi-tenant complexity during the raw concept stage.",
    simulatedArtifact: {
      title: "CONCEPT_INTAKE_SPEC.JSON",
      codeSnippetOrSchema: `{\n  "concept": "AI-Assisted Material & Labor Estimator",\n  "primary_user": "General Contractors & Project Managers",\n  "core_transaction": "Input measurements -> Generate itemized quote -> Export invoice",\n  "target_launch_timeline": "4 Weeks",\n  "monetization_hook": "Direct Invoicing & Subscription"\n}`,
      statusBadge: "SPEC_ACCEPTED"
    }
  },
  {
    id: 2,
    stageNumber: "02",
    name: "Requirements & Logic Identification",
    phaseCategory: "DISCOVERY & SPEC",
    objective: "Map out every user permission level, calculation edge-case, and data validation rule.",
    whatHappens:
      "Every user role is defined (e.g., Admin vs Contractor vs Client). We specify mathematical formulas, state changes, input constraints, and error boundaries before touching any code.",
    technicalDecisions: [
      {
        decision: "Role-Based Access Boundaries",
        impact: "Enforce strict data isolation at the logical layer so contractors only view their company records."
      },
      {
        decision: "Calculation Determinism",
        impact: "Ensure taxes, discounts, and labor rates are calculated server-side to prevent client tampering."
      }
    ],
    technologiesInvolved: ["Role Matrix", "Business Logic Specs", "Edge-Case Audits"],
    deliverables: ["Role & Permission Matrix", "Calculation Algorithm Flowchart", "API Contract Spec"],
    criticalConsiderations:
      "Clarify early whether the system requires offline capability or strictly real-time synchronous calculations.",
    simulatedArtifact: {
      title: "ROLE_PERMISSION_MATRIX.SPEC",
      codeSnippetOrSchema: `ROLE_MATRIX = {\n  "ADMIN": ["manage_organization", "configure_rates", "view_all_ledgers"],\n  "ESTIMATOR": ["create_estimate", "edit_drafts", "generate_pdf_quote"],\n  "CLIENT": ["view_approved_quote", "pay_invoice", "download_receipt"]\n}\nCALCULATION_RULE: round_half_up(labor_hours * rate + materials * 1.15, 2)`,
      statusBadge: "REQUIREMENTS_FROZEN"
    }
  },
  {
    id: 3,
    stageNumber: "03",
    name: "Product & Database Structure Planning",
    phaseCategory: "SYSTEM DESIGN",
    objective: "Architect a normalized relational database schema and define clean API endpoint contracts.",
    whatHappens:
      "Design relational tables (Users, Projects, Estimates, LineItems, Invoices) using Django ORM and SQLite/PostgreSQL. Formulate RESTful API endpoints and authentication flow diagrams.",
    technicalDecisions: [
      {
        decision: "Relational Normalization",
        impact: "Separating LineItems from Estimates prevents duplicate records and simplifies tax audits."
      },
      {
        decision: "Stateless Token Auth",
        impact: "Enables secure cross-origin communication between the Next.js frontend and Django backend."
      }
    ],
    technologiesInvolved: ["Python", "Django Models", "SQLite / PostgreSQL", "DB Schema Diagrams"],
    deliverables: ["Entity Relationship Diagram (ERD)", "REST API Swagger/OpenAPI Spec", "Data Migration Blueprint"],
    criticalConsiderations:
      "Never store calculated invoice totals without storing the snapshot line items, as prices change over time.",
    simulatedArtifact: {
      title: "MODELS.PY (DJANGO RELATIONAL SCHEMA)",
      codeSnippetOrSchema: `class Estimate(models.Model):\n    id = models.UUIDField(primary_key=True, default=uuid.uuid4)\n    contractor = models.ForeignKey(User, on_delete=models.CASCADE)\n    client_name = models.CharField(max_length=255)\n    status = models.CharField(choices=['DRAFT', 'ISSUED', 'ACCEPTED'])\n    subtotal = models.DecimalField(max_digits=10, decimal_places=2)\n    created_at = models.DateTimeField(auto_now_add=True)`,
      statusBadge: "SCHEMA_COMPILED"
    }
  },
  {
    id: 4,
    stageNumber: "04",
    name: "Interface Design & Component Systems",
    phaseCategory: "SYSTEM DESIGN",
    objective: "Establish a disciplined, high-density component library and responsive Figma layouts.",
    whatHappens:
      "Create high-fidelity screens in Figma focusing on information hierarchy, data density, and frictionless form completion. Define Tailwind CSS design tokens, color variables, and typography scales.",
    technicalDecisions: [
      {
        decision: "Component Token Synchronization",
        impact: "Design tokens in Figma directly match Tailwind CSS classes, preventing visual discrepancies during coding."
      },
      {
        decision: "Keyboard-First Form Flow",
        impact: "Contractors can input hundreds of line items rapidly using tab indexing and keyboard shortcuts."
      }
    ],
    technologiesInvolved: ["Figma", "Design Tokens", "Tailwind CSS Architecture", "WCAG Contrast Testing"],
    deliverables: ["Interactive Figma Prototype", "Design Token Styleguide", "Responsive Breakpoint Specs"],
    criticalConsiderations:
      "Ensure forms remain functional on field tablets and mobile viewports with adequate touch targets.",
    simulatedArtifact: {
      title: "TAILWIND_DESIGN_TOKENS.TS",
      codeSnippetOrSchema: `export const tokens = {\n  surface: { base: '#0E0E10', elevated: '#161619', deep: '#070708' },\n  line: { subtle: '#1E1E22', pronounced: '#2F2F36' },\n  typography: { display: 'var(--font-sans)', mono: 'var(--font-mono)' },\n  radius: '0px' // Strict architectural hairlines\n};`,
      statusBadge: "TOKENS_VERIFIED"
    }
  },
  {
    id: 5,
    stageNumber: "05",
    name: "Frontend Development & Component Architecture",
    phaseCategory: "FULL-STACK ENGINEERING",
    objective: "Build modular, typed React and Next.js interfaces with strict client-side validation.",
    whatHappens:
      "Scaffold the Next.js App Router codebase with TypeScript. Build reusable component trees (inputs, data tables, modal dialogs, status badges) with optimistic UI updates for real-time calculations.",
    technicalDecisions: [
      {
        decision: "Strict TypeScript Interfaces",
        impact: "Catches missing properties or malformed API responses at compile-time instead of in production."
      },
      {
        decision: "Server Components vs Client Components",
        impact: "Renders static layouts on the server for speed while isolating interactive forms to the client."
      }
    ],
    technologiesInvolved: ["React 18+", "Next.js App Router", "TypeScript", "Tailwind CSS", "Lucide Icons"],
    deliverables: ["Modular Component Library", "Client State Management", "Interactive Form Pages"],
    criticalConsiderations:
      "Avoid large bundle dependencies; keep client components lightweight to sustain fast mobile load times.",
    simulatedArtifact: {
      title: "ESTIMATEFORM.TSX (NEXT.JS + TS)",
      codeSnippetOrSchema: `interface LineItemProps {\n  description: string;\n  quantity: number;\n  unitCost: number;\n}\n\nexport const LineItemRow: React.FC<LineItemProps> = ({ description, quantity, unitCost }) => {\n  const total = useMemo(() => quantity * unitCost, [quantity, unitCost]);\n  return <div className="grid grid-cols-4 hairline-b py-2">{description}: \${total.toFixed(2)}</div>;\n};`,
      statusBadge: "TS_COMPILE_SUCCESS"
    }
  },
  {
    id: 6,
    stageNumber: "06",
    name: "Backend Development & API Integration",
    phaseCategory: "FULL-STACK ENGINEERING",
    objective: "Implement secure Django REST endpoints, data persistence, and AI calculation hooks.",
    whatHappens:
      "Write Django views, serializers, and calculation services. Connect frontend Axios hooks to authenticated backend endpoints. Implement automated quote generation and AI estimation assistance algorithms.",
    technicalDecisions: [
      {
        decision: "Atomic Database Transactions",
        impact: "If generating an invoice fails midway, database rollback ensures no orphaned incomplete records exist."
      },
      {
        decision: "Service-Layer Separation",
        impact: "Business logic resides in dedicated Python services, keeping Django view controllers lean and testable."
      }
    ],
    technologiesInvolved: ["Python", "Django REST Framework", "Axios", "Authentication Tokens", "AI Logic"],
    deliverables: ["Fully Connected REST API", "Authentication Middleware", "Document PDF Generator Service"],
    criticalConsiderations:
      "Sanitize all incoming request payloads to prevent SQL injection or cross-site scripting vulnerabilities.",
    simulatedArtifact: {
      title: "VIEWS_ESTIMATE.PY (DJANGO REST API)",
      codeSnippetOrSchema: `@api_view(['POST'])\n@permission_classes([IsAuthenticated])\ndef calculate_and_save_estimate(request):\n    serializer = EstimateInputSerializer(data=request.data)\n    serializer.is_valid(raise_exception=True)\n    estimate = EstimationService.execute(serializer.validated_data, user=request.user)\n    return Response(EstimateDetailSerializer(estimate).data, status=status.HTTP_201_CREATED)`,
      statusBadge: "ENDPOINT_200_OK"
    }
  },
  {
    id: 7,
    stageNumber: "07",
    name: "Testing, Hardening & Performance Optimization",
    phaseCategory: "STABILIZATION & LAUNCH",
    objective: "Subject the full system to cross-browser stress tests, accessibility audits, and query profiling.",
    whatHappens:
      "Audit the platform with Chrome DevTools and Google Lighthouse. Test responsive layouts on real mobile viewports. Run edge-case tests with invalid inputs and verify zero layout shifts (CLS).",
    technicalDecisions: [
      {
        decision: "Database Query Indexing",
        impact: "Added indexes on foreign keys to sustain sub-50ms query times even as estimate records scale."
      },
      {
        decision: "WCAG Accessibility Compliance",
        impact: "Ensured 100% color contrast ratios and complete screen reader keyboard accessibility."
      }
    ],
    technologiesInvolved: ["Chrome DevTools", "Google Lighthouse", "Cross-Browser QA", "SQL Query Profiler"],
    deliverables: ["95+ Lighthouse Score Report", "Cross-Device QA Audit", "Security & Sanity Sign-Off"],
    criticalConsiderations:
      "Verify the application behaves gracefully when network drops occur, informing the user instead of freezing.",
    simulatedArtifact: {
      title: "LIGHTHOUSE_AUDIT_REPORT.LOG",
      codeSnippetOrSchema: `AUDIT_TARGET: https://staging.platform.internal\n----------------------------------------------------\nPERFORMANCE:       99 / 100  [FCP: 0.8s, LCP: 1.1s, CLS: 0.00]\nACCESSIBILITY:    100 / 100  [ARIA passed, Contrast verified]\nBEST PRACTICES:   100 / 100  [HTTPS enforced, Modern assets]\nSEO SCORE:        100 / 100  [Meta tags & robots compliant]`,
      statusBadge: "AUDIT_PASSED_100%"
    }
  },
  {
    id: 8,
    stageNumber: "08",
    name: "Production Deployment & Live Handover",
    phaseCategory: "STABILIZATION & LAUNCH",
    objective: "Deploy to production cloud infrastructure and provide 100% client code ownership.",
    whatHappens:
      "Deploy frontend to Vercel with automatic SSL and edge caching. Configure environment secrets and connect domain DNS. Deliver clean Git repositories, architecture documentation, and live walkthrough.",
    technicalDecisions: [
      {
        decision: "Zero-Downtime Deployment Pipeline",
        impact: "Instant rollback capability if an issue is detected post-launch, eliminating downtime risks."
      },
      {
        decision: "Full Client Code Sovereignty",
        impact: "Repository and cloud hosting remain 100% in client's accounts with zero vendor lock-in."
      }
    ],
    technologiesInvolved: ["Vercel Edge Cloud", "Git / GitHub", "Cloudflare DNS / SSL", "Handover Docs"],
    deliverables: ["Live Production URL", "Full Git Source Repository", "Architecture & Maintenance Guide"],
    criticalConsiderations:
      "Verify backup routines and document environment variables so any future engineer can inherit the codebase seamlessly.",
    simulatedArtifact: {
      title: "DEPLOYMENT_MANIFEST.ENV",
      codeSnippetOrSchema: `DEPLOYMENT_STATUS: ACTIVE_PRODUCTION\nPRODUCTION_URL:    https://evt-platform.vercel.app\nDNS_ROUTING:       ACTIVE (SSL A-Grade)\nSOURCE_OWNERSHIP:  TRANSFERRED TO CLIENT GITHUB ORG\nWARRANTY_WINDOW:   30-DAY POST-LAUNCH COVERAGE ACTIVE`,
      statusBadge: "LIVE_IN_PRODUCTION"
    }
  }
];