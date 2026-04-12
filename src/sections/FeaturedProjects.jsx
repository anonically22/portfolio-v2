import React from 'react';
import ProjectCard from '../components/ProjectCard';
import secondLookImg from '../assets/projects/second-look.png';
import subsTrackImg from '../assets/projects/substrack.png';
import workbenchImg from '../assets/projects/workbench.png';

const projects = [
  {
    slug: "second-look",
    title: "Second Look",
    description: "AI UX Analysis Tool",
    feature: "Evaluates digital interfaces and generates structured critique reports across multiple modes.",
    technical: "Designed a multi-step AI-driven pipeline that maps UI patterns into actionable UX principles.",
    stack: ["React 18", "Tailwind CSS", "Node.js", "AI APIs"],
    image: secondLookImg,
  },
  {
    slug: "substrack",
    title: "SubsTrack",
    description: "Subscription Intelligence Platform",
    feature: "Track subscriptions, analyze spending behavior, and providing insights into recurring expenses.",
    technical: "Built a secure full-stack analytics layer using Supabase with pattern detection for user behavior.",
    stack: ["React", "Tailwind CSS", "Framer Motion", "Supabase"],
    image: subsTrackImg,
  },
  {
    slug: "workbench",
    title: "Workbench",
    description: "UI/Dev Toolkit",
    feature: "Browser-based toolkit offering 25+ utilities for UI/UX designers and developers.",
    technical: "Optimized multi-tool modular system with 100% client-side execution for performance and privacy.",
    stack: ["React", "Tailwind CSS", "React Router", "Vite"],
    image: workbenchImg,
  }
];

const FeaturedProjects = () => {
  return (
    <section id="work" className="py-20 lg:py-32">
      <div className="container-custom">
        <div className="mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50">
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
