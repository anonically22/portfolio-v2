import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-20 border-b border-divider-light dark:border-divider-dark first:border-t"
    >
      {/* Content Side */}
      <div className="md:col-span-5 space-y-8 order-2 md:order-1">
        <div className="space-y-4">
          <div className="flex gap-2">
            {project.stack.map((item, i) => (
              <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-blue-600 border border-blue-600/30 px-2 py-1 rounded">
                {item}
              </span>
            ))}
          </div>
          <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            {project.title}
          </h3>
          <p className="text-xl text-gray-500 font-medium">
            {project.description}
          </p>
        </div>

        <p className="text-gray-400 dark:text-gray-600 leading-relaxed max-w-sm">
          {project.feature}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={project.liveUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-[#1a1a1a] text-white rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-black transition-all"
          >
            Visit Live
          </a>
          <a
            href={project.githubUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-[#1a1a1a] text-[#1a1a1a] rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-all"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Image Side */}
      <div className="md:col-span-1" /> {/* Spacer */}
      
      <div className="md:col-span-6 order-1 md:order-2">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-gray-900 border border-divider-light dark:border-divider-dark rounded-sm"
        >
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
