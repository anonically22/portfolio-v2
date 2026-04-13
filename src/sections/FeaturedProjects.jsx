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
    description: 'An AI-powered UX analysis tool that evaluates digital interfaces and generates structured critique reports.',
    tag: 'AI / UX Analysis',
    image: secondLookImg,
    liveUrl: projectDataMap['second-look'].liveUrl
  },
  {
    slug: 'substrack',
    title: 'SubsTrack',
    description: 'Subscription intelligence tracking and finance pattern analysis platform built on Supabase.',
    tag: 'Product Design',
    image: subsTrackImg,
    liveUrl: projectDataMap['substrack'].liveUrl
  },
  {
    slug: 'workbench',
    title: 'Workbench',
    description: 'A unified browser-based toolkit with 25+ utilities for developers and designers.',
    tag: 'UI Systems',
    image: workbenchImg,
    liveUrl: projectDataMap['workbench'].liveUrl
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
                  <p style={{ fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.4, maxWidth: '360px', textAlign: 'justify', hyphens: 'auto' }}>
                    {project.description}
                  </p>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#e5e4e0',
                      padding: '0.75rem 1.5rem',
                      fontWeight: 500,
                      fontSize: '1rem',
                      letterSpacing: '-0.02em',
                      width: 'fit-content',
                    }}
                  >
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Right: Image */}
              <a href={project.liveUrl} target="_blank" rel="noreferrer" style={{ overflow: 'hidden', border: '1px solid #e5e4e0' }} className="group cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
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
