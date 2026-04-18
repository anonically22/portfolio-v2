import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from '../components/Magnetic';
import secondLookImg from '../assets/projects/second-look.png';
import subsTrackImg from '../assets/projects/substrack.png';
import workbenchImg from '../assets/projects/workbench.png';

import { projects as projectDataMap } from '../utils/projectData';

const projects = [
  {
    slug: 'second-look',
    name: 'Second Look',
    description: 'AI-powered tool for detecting image manipulation and verifying authenticity.',
    techStack: 'React • Node.js • Deep Learning',
    image: secondLookImg,
    liveUrl: projectDataMap['second-look'].liveUrl,
    githubUrl: 'https://github.com/anonically22/second-look',
  },
  {
    slug: 'workbench',
    name: 'Workbench',
    description: 'An expansive collection of productivity tools for developers and designers.',
    techStack: 'React • Vite • TypeScript • Tailwind',
    image: workbenchImg,
    liveUrl: projectDataMap['workbench'].liveUrl,
    githubUrl: 'https://github.com/anonically22/workbench',
  },
];

const ProjectCard = ({ project }) => (
  <Magnetic strength={0.05}>
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="border-b border-black group cursor-pointer"
    >
      <div className="section-container section-py">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          
          {/* Content */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <h3 className="text-3xl font-bold text-black group-hover:opacity-60 transition duration-300">
                {project.name}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed text-justify">
                {project.description}
              </p>
              <p className="text-xs text-neutral-400 font-medium tracking-wide">
                {project.techStack}
              </p>
            </div>

            <div className="flex gap-6 text-sm font-bold uppercase tracking-widest pt-2">
              <Magnetic strength={0.2}>
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="border-b border-black pb-1 hover:opacity-60 transition duration-300">Live</a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="border-b border-black pb-1 hover:opacity-60 transition duration-300">GitHub</a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link to={`/project/${project.slug}`} className="border-b border-black pb-1 hover:opacity-60 transition duration-300">Case Study</Link>
              </Magnetic>
            </div>
          </div>

          {/* Image Overlay */}
          <Link 
            to={`/project/${project.slug}`}
            className="relative overflow-hidden aspect-video border border-black/10 bg-white/20"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  </Magnetic>
);

const FeaturedProjects = () => {
  return (
    <section id="projects" className="flex flex-col">
      {/* Header Row */}
      <div className="border-b border-black">
        <div className="section-container py-16 lg:py-24">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-4">Portfolio</p>
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight text-black">Selected Work</h2>
          <p className="text-sm text-neutral-500 mt-6 max-w-xl">
            Selected projects focused on AI, web applications, and product experimentation.
          </p>
        </div>
      </div>

      {/* Featured Project Block */}
      <div className="border-b border-black bg-white/50 relative overflow-hidden">
        <div className="section-container border-x border-black/5 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-bold">
                  Featured Project
                </p>
                <h3 className="text-[clamp(40px,6vw,80px)] font-bold leading-[0.9] text-black tracking-tighter cursor-typography">SubsTrack</h3>
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed text-justify">
                  A comprehensive subscription intelligence platform designed to help users monitor recurring expenses, 
                  identify unused services, and visualize spending patterns through intuitive data modeling.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {['React', 'Supabase', 'Framer Motion', 'Tailwind'].map(tech => (
                    <span key={tech} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 border border-black/10 rounded-full text-neutral-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-8 text-sm font-bold uppercase tracking-widest pt-4">
                <Magnetic strength={0.2}>
                  <a href={projectDataMap['substrack'].liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 border-b-2 border-black pb-1 hover:opacity-60 transition duration-300">
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <a href="https://github.com/anonically22/substrack" target="_blank" rel="noreferrer" className="flex items-center gap-2 border-b-2 border-black pb-1 hover:opacity-60 transition duration-300">
                    GitHub <ArrowUpRight size={16} />
                  </a>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Link to="/project/substrack" className="flex items-center gap-2 border-b-2 border-black pb-1 hover:opacity-60 transition duration-300">
                    Case Study <ArrowUpRight size={16} />
                  </Link>
                </Magnetic>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Magnetic strength={0.03}>
                <Link to="/project/substrack">
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full aspect-video overflow-hidden border border-black shadow-[20px_20px_0px_rgba(0,0,0,0.05)]"
                  >
                    <img src={subsTrackImg} alt="SubsTrack" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                  </motion.div>
                </Link>
              </Magnetic>
            </div>

          </div>
        </div>
      </div>

      {/* Other Projects */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
