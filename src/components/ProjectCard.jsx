import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group w-full py-16 md:py-24 border-t border-black/10 first:border-t-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Project Name & Number */}
        <div className="md:col-start-2 md:col-span-4 flex flex-col gap-6">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] opacity-30">
            <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
            <div className="h-[1px] w-8 bg-black/20" />
            <span>{project.techStack[0]}</span>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none group-hover:italic transition-all">
              {project.title}
            </h3>
            <p className="text-black/50 text-base md:text-lg max-w-xs leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="pt-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-black/10 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all group"
            >
              View Case Study
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Project Preview Image */}
        <div className="md:col-span-6 overflow-hidden bg-[#EAEAEA] rounded-sm group-hover:shadow-2xl transition-all duration-700">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="aspect-[16/10] w-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
