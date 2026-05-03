import secondLookImg from '../assets/projects/secondlook.png';
import subsTrackImg from '../assets/projects/substrack.png';
import workbenchImg from '../assets/projects/workbench.png';

export const projects = {
  "second-look": {
  title: "Second Look",
  description: "Component Intelligence Platform",
  image: secondLookImg,
  liveUrl: "https://secondlook-two.vercel.app/",
  overview: "Second Look is a component audit platform that inspects digital products for design drift, component inconsistency, duplication patterns, hierarchy failures, spacing breakdowns, and accessibility issues. It transforms interface systems into structured operational audit reports.",
  problem: "As products scale, UI systems drift. Components duplicate, spacing loses consistency, hierarchy weakens, and accessibility standards degrade. Existing design reviews are manual, subjective, and difficult to scale across product systems.",
  approach: "Built a modular component audit engine that crawls product interfaces, detects structural UI patterns, groups repeated components, scores system consistency heuristically, and generates structured audit intelligence using an AI interpretation layer.",
  systemDesign: {
    explanation: "A layered audit pipeline combining deterministic component detection with AI-powered interpretation for infrastructure-grade design system auditing.",
    flow: [
      { label: "Input", detail: "Product URL / Interface System" },
      { label: "Crawling", detail: "DOM extraction and multi-page component scanning" },
      { label: "Detection", detail: "Buttons, cards, forms, inputs, hierarchy, sections" },
      { label: "Scoring", detail: "Consistency, duplication, spacing, hierarchy, accessibility" },
      { label: "AI Layer", detail: "Structured audit interpretation and recommendations" },
      { label: "Output", detail: "Component audit report with findings and system recommendations" }
    ]
  },
  techStack: [
    "React 18",
    "Tailwind CSS",
    "Vercel Serverless Functions",
    "OpenRouter API",
    "Axios",
    "Cheerio",
    "Supabase"
  ],
  features: [
    "Component inventory generation",
    "Design drift detection",
    "Multi-page system audits",
    "Heuristic scoring engine",
    "Structured audit reports",
    "Exportable reports",
    "Usage analytics dashboard"
  ],
  outcome: "Built an infrastructure-focused component intelligence platform that turns interface systems into measurable audit artifacts, bridging design systems, frontend architecture, and AI-assisted operational analysis."
},
  "substrack": {
    title: "SubsTrack",
    description: "Subscription Intelligence Platform",
    image: subsTrackImg,
    liveUrl: "https://subs-track-one.vercel.app/",
    overview: "SubsTrack is a full-stack finance platform designed to track subscriptions, analyze spending behavior, and provide insights into recurring expenses.",
    problem: "Users struggle with managing multiple subscriptions and understanding spending patterns. Most tools lack behavioral analysis and real-time insights.",
    approach: "Built a real-time tracking system with a secure backend and analytics layer focused on behavioral spending patterns.",
    systemDesign: {
      explanation: "A secure full-stack architecture leveraging Supabase and RLS for financial data integrity.",
      flow: [
        { label: "Frontend", detail: "User dashboard for tracking and analytics" },
        { label: "Backend", detail: "Supabase (PostgreSQL + Auth + RLS)" },
        { label: "Processing", detail: "Subscription logging and pattern detection" },
        { label: "Security", detail: "Row-Level Security (RLS) policies" }
      ]
    },
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Supabase", "PostgreSQL"],
    features: [
      "Real-time subscription ledger",
      "Behavioral spending analytics",
      "Automated pattern detection",
      "Progressive Web App (PWA)"
    ],
    outcome: "Delivered a production-ready full-stack system with real-world financial utility and secure data handling."
  },
  "workbench": {
    title: "Workbench",
    description: "UI/Dev Toolkit",
    image: workbenchImg,
    liveUrl: "https://workbench-nine.vercel.app/",
    overview: "Workbench is a browser-based toolkit offering 25+ utilities for UI/UX designers and developers, focused on performance and local-first execution.",
    problem: "Developers and designers rely on multiple scattered tools for color, layout, and image processing, creating workflow inefficiency.",
    approach: "Built a unified platform with a modular tool architecture and client-side execution for performance and privacy.",
    systemDesign: {
      explanation: "A client-side heavy, modular architecture prioritizing speed and zero-tracking privacy.",
      flow: [
        { label: "Architecture", detail: "Multi-tool modular system" },
        { label: "Routing", detail: "Lazy-loaded routes for performance" },
        { label: "Execution", detail: "100% client-side execution" },
        { label: "Performance", detail: "Optimized bundle splitting" }
      ]
    },
    techStack: ["React", "Tailwind CSS", "React Router v6", "Vite"],
    features: [
      "25+ tools (color, layout, image, dev utilities)",
      "Local-first execution (no tracking)",
      "Fast navigation with lazy loading",
      "Clean UI system"
    ],
    outcome: "Built a scalable multi-tool platform with optimized performance and practical utility for everyday dev workflows."
  }
};
