# Muhammad Bilal // Full Stack Developer Portfolio

Engineered with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Lucide React. Built strictly according to the Editorial Engineering visual identity specification.

## Core Stack & Architecture
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS with custom editorial color tokens (Charcoal Soot, Bone White, Tungsten, Terracotta)
- **Typographic Engine:** Inter + JetBrains Mono
- **Deployment Target:** Vercel (`dmbilal.vercel.app`)

## Project Structure
```
├── src/
│   ├── app/
│   │   ├── globals.css      # Custom hairline boundaries, soot palette & scrollbars
│   │   ├── layout.tsx       # Root layout, metadata & typography configuration
│   │   └── page.tsx         # Single-page orchestrator
│   ├── components/
│   │   ├── Navigation.tsx   # Precision sticky navigation horizon & drawer
│   │   ├── Hero.tsx         # Editorial asymmetric hero & service overview
│   │   └── SystemConsole.tsx# Interactive technical centerpiece & telemetry
│   └── lib/
│       └── utils.ts         # Classnames merge utility
├── tailwind.config.js       # Editorial theme & surface color tokens
├── tsconfig.json            # Strict TypeScript configuration
└── package.json             # Scripts & dependencies
```

## Running the Project
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.
