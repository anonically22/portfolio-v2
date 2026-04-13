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

        <Link
          to={`/project/${project.slug}`}
          className="inline-flex items-center gap-4 text-sm font-black tracking-widest uppercase group/link"
        >
          Explore Case Study
          <div className="w-10 h-10 rounded-full border border-divider-light dark:border-divider-dark flex items-center justify-center group-hover/link:bg-blue-600 group-hover/link:text-white transition-all">
            <ArrowUpRight size={20} />
          </div>
        </Link>
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
            className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
