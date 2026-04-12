import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center py-24 border-b border-gray-100 dark:border-gray-900 last:border-0`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-3/5 relative">
        {/* Ambient Glow behind image on hover */}
        <div 
          className={`absolute -inset-4 bg-blue-600/10 rounded-3xl blur-[80px] transition-opacity duration-700 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        <Link to={`/project/${project.slug}`}>
          <motion.div 
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-gray-100 dark:bg-gray-800 cursor-pointer ring-1 ring-black/5 dark:ring-white/5"
            animate={{ 
              scale: isHovered ? 1.02 : 1,
            }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <motion.img 
              src={project.image} 
              alt={project.title}
              animate={{ 
                scale: isHovered ? 1.05 : 1,
                filter: isHovered ? 'brightness(1.05)' : 'brightness(1)'
              }}
              transition={{ duration: 0.8 }}
              className="w-full h-[320px] md:h-[480px] object-cover"
            />
            {/* Overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none opacity-40" />
            
            {/* Glassy Tag */}
            <div className="absolute top-6 right-6 glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100">
              Technical Case
            </div>
          </motion.div>
        </Link>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 space-y-8">
        <div className="space-y-3">
          <Link to={`/project/${project.slug}`}>
            <motion.h3 
              className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-50 tracking-tight cursor-pointer leading-[1.1]"
              animate={{ x: isHovered ? 8 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {project.title}
            </motion.h3>
          </Link>
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-blue-600 rounded-full" />
            <p className="text-xl text-blue-600 dark:text-blue-400 font-bold tracking-tight">
              {project.description}
            </p>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {isHovered ? (
              <motion.div
                key="hovered"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                  {project.feature}
                </p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="p-6 glass rounded-2xl border-l-4 border-blue-500 italic text-sm text-gray-700 dark:text-gray-300 shadow-xl"
                >
                  {project.technical}
                </motion.div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech, i) => (
                    <span key={i} className="px-4 py-2 glass rounded-xl text-xs font-mono font-bold shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                 key="static"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="text-gray-400 dark:text-gray-600 italic font-medium"
              >
                Hover to reveal system architecture and tech stack.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link
          to={`/project/${project.slug}`}
          className="inline-flex items-center gap-2 text-gray-900 dark:text-gray-100 font-extrabold group bg-transparent border-none p-0 pt-4"
        >
          <span className="relative text-lg">
            View Deep Dive
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300 rounded-full" />
          </span>
          <ArrowUpRight size={24} className="group-hover:rotate-45 transition-transform text-blue-600" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
