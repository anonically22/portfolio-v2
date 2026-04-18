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
    <section id="projects" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header Row */}
      <div style={{ borderBottom: B }}>
        <div className="section-container" style={{ paddingTop: '3rem', paddingBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Poiret One, system-ui, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 'bold', letterSpacing: '-0.02em', lineHeight: 1 }}>Projects</h2>
        </div>
      </div>
      {projects.map((project, index) => (
        <div key={index} style={{ borderBottom: B }}>
          <div className="section-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 lg:min-h-[460px]">

              {/* Left: Title + Description + Tag */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Link to={`/project/${project.slug}`} className="hover:opacity-70 transition-opacity">
                  <h3 style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
                    {project.title}
                  </h3>
                </Link>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
                  <p style={{ fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.4, maxWidth: '400px', textAlign: 'left', opacity: 0.8 }}>
                    {project.description}
                  </p>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-gray-200/50 rounded-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-2">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
                    >
                      Visit Live
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-50 transition-opacity"
                    >
                      GitHub
                    </a>
                  </div>

                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#e5e4e0',
                      padding: '0.75rem 1.5rem',
                      fontWeight: 500,
                      fontSize: '1rem',
                      letterSpacing: '-0.02em',
                      width: 'fit-content',
                      marginTop: '1rem'
                    }}
                  >
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Right: Image */}
              <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ overflow: 'hidden', border: '1px solid #e5e4e0' }} className="group cursor-pointer aspect-video md:aspect-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width="1200"
                  height="675"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 700ms ease',
                  }}
                  className="group-hover:scale-105"
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
