import secondLookImg from '../assets/projects/second-look.png';
import subsTrackImg from '../assets/projects/substrack.png';
import workbenchImg from '../assets/projects/workbench.png';

export const projects = {
  "second-look": {
    title: "Second Look",
    description: "AI UX Analysis Tool",
    image: secondLookImg,
    overview: "Second Look is an AI-powered UX analysis tool that evaluates digital interfaces and generates structured critique reports across multiple modes such as casual, professional, brutal, and technical.",
    problem: "Design feedback is often subjective, unstructured, and time-consuming. There is no scalable way to analyze UI systems programmatically and extract meaningful UX insights.",
    approach: "Designed a multi-step AI-driven pipeline that accepts UI input (images/screenshots), extracts structural and visual patterns, maps them into UX principles, and outputs structured critique reports.",
    systemDesign: {
      explanation: "A modular critique engine that combines visual pattern extraction with prompt-engineered AI layers.",
      flow: [
        { label: "Input", detail: "UI Screenshot / Interface" },
        { label: "Processing", detail: "Visual pattern, typography, and layout detection" },
        { label: "AI Layer", detail: "Multi-mode critique system generation" },
        { label: "Output", detail: "Structured UX report with recommendations" }
      ]
    },
    techStack: ["React 18", "Tailwind CSS", "Node.js", "AI APIs"],
    features: [
      "Multi-mode critique system",
      "AI-generated structured reports",
      "Design system-aware analysis",
      "Admin usage dashboard"
    ],
    outcome: "Built a functional AI product for UX analysis, demonstrating system-level thinking in design + AI integration."
  },
  "substrack": {
    title: "SubsTrack",
    description: "Subscription Intelligence Platform",
    image: subsTrackImg,
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
