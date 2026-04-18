import React from 'react';
import { Link } from 'react-router-dom';
import secondLookImg from '../assets/projects/second-look.png';
import subsTrackImg from '../assets/projects/substrack.png';
import workbenchImg from '../assets/projects/workbench.png';

import { projects as projectDataMap } from '../utils/projectData';

const projects = [
  {
    slug: 'second-look',
    title: 'Second Look',
    description: 'AI-powered design critique engine that analyzes UIs in seconds. evaluates digital interfaces and generates structured critique reports.',
    tag: 'AI / UX Analysis',
    image: secondLookImg,
    liveUrl: projectDataMap['second-look'].liveUrl,
    githubUrl: 'https://github.com/anonically22/second-look',
    tech: ['React', 'Node.js', 'Claude API', 'Tailwind']
  },
  {
    slug: 'substrack',
    title: 'SubsTrack',
    description: 'Smart subscription tracker that shows where your money is going. Subscription intelligence and finance pattern analysis.',
    tag: 'FinTech / AI',
    image: subsTrackImg,
    liveUrl: projectDataMap['substrack'].liveUrl,
    githubUrl: 'https://github.com/anonically22/substrack',
    tech: ['React', 'Supabase', 'Framer Motion', 'Tailwind']
  },
  {
    slug: 'workbench',
    title: 'Workbench',
    description: 'Collection of 27+ UI and developer tools built for productivity. Unified browser-based toolkit for modern workflows.',
    tag: 'UI Systems / Tools',
    image: workbenchImg,
    liveUrl: projectDataMap['workbench'].liveUrl,
    githubUrl: 'https://github.com/anonically22/workbench',
    tech: ['React', 'Vite', 'TypeScript', 'Tailwind']
  },
];

const B = '1px solid #1a1a1a';

const FeaturedProjects = () => {
  return (
    <section id="projects" className="flex flex-col">
      {/* Header Row */}
      <div className="border-b border-[#1a1a1a]">
        <div className="section-container py-16 lg:py-24">
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight">Projects</h2>
        </div>
      </div>
      {projects.map((project, index) => (
        <div key={index} className="border-b border-[#1a1a1a]">
          <div className="section-container section-py">
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 lg:min-h-[460px]">

              {/* Left: Content */}
              <div className="flex flex-col">
                <Link to={`/project/${project.slug}`} className="hover:opacity-70 transition-opacity">
                  <h3 className="text-[clamp(32px,4vw,52px)] font-bold leading-none mb-6">
                    {project.title}
                  </h3>
                </Link>
                
                <div className="space-y-6 flex-grow">
                  <p className="text-lg font-medium tracking-tight opacity-70 max-w-[400px]">
                    {project.description}
                  </p>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-[#1a1a1a]/5 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-6">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs font-bold uppercase tracking-widest border-b border-[#1a1a1a] pb-1 hover:opacity-50 transition-opacity"
                    >
                      Visit Live
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-xs font-bold uppercase tracking-widest border-b border-[#1a1a1a] pb-1 hover:opacity-50 transition-opacity"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                <div className="mt-8 px-4 py-2 bg-[#e5e4e0] w-fit text-xs font-bold uppercase tracking-widest">
                  {project.tag}
                </div>
              </div>

              {/* Right: Image */}
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="group relative overflow-hidden aspect-video border border-[#1a1a1a]/10 bg-[#e5e4e0]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="675"
                  className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
                />
              </a>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturedProjects;
