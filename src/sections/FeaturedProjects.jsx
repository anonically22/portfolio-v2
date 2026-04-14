import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../utils/projectData';

const FeaturedProjects = () => {
  const projectList = Object.entries(projects).map(([slug, data]) => ({
    ...data,
    slug
  }));

  return (
    <section id="projects" className="py-24 border-t border-black/10">
      <div className="section-container mb-24">
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-span-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-[1px] w-12 bg-black/20" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Projects</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
            >
              Works
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        {projectList.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
      
      {/* Visual divider at the end */}
      <div className="section-container">
        <div className="grid grid-cols-12">
           <div className="col-start-2 col-span-10 h-[1px] bg-black/10 mt-12" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
