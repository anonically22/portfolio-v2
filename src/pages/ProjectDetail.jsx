import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Layers, CheckCircle2 } from 'lucide-react';
import { projects } from '../utils/projectData';

const Section = ({ title, children, icon: Icon }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="py-12 border-b border-gray-100 dark:border-gray-900 last:border-0"
  >
    <div className="flex items-center gap-3 mb-8">
      {Icon && <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600"><Icon size={24} /></div>}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
        {title}
      </h2>
    </div>
    <div className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed space-y-4">
      {children}
    </div>
  </motion.section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Project Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400">The project you are looking for doesn't exist or has been moved.</p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
        >
          Return to Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container-custom max-w-4xl">
        {/* Navigation */}
        <motion.div
           initial={{ opacity: 0, x: -10 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            BACK TO DASHBOARD
          </Link>
        </motion.div>

        {/* Hero Section */}
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 dark:text-gray-50 mb-6 leading-[1.1]"
          >
            {project.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold uppercase tracking-widest">
              Case Study
            </span>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium italic">
              — {project.description}
            </p>
          </motion.div>
        </header>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="aspect-video w-full overflow-hidden rounded-[2.5rem] shadow-2xl mb-24 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-800"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Structure */}
        <div className="space-y-4">
          <Section title="Executive Overview">
            <p className="text-xl font-medium text-gray-900 dark:text-gray-100 leading-relaxed mb-4">
              {project.overview}
            </p>
          </Section>

          <Section title="Problem & Context">
            <p>{project.problem}</p>
          </Section>

          <Section title="Strategic Approach">
            <p>{project.approach}</p>
          </Section>

          <Section title="System Architecture" icon={Cpu}>
            <p className="mb-12 opacity-80">{project.systemDesign.explanation}</p>
            <div className="relative pl-4 space-y-0">
              {/* Vertical line connector */}
              <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-600 via-blue-400 to-transparent opacity-20" />
              
              {project.systemDesign.flow.map((step, idx) => (
                <div key={idx} className="flex gap-8 group relative mb-2">
                   <motion.div 
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     viewport={{ once: true }}
                     className="relative z-10 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-950 shadow-lg mt-1 shrink-0"
                   />
                  <div className="pb-12 pt-0.5">
                    <h4 className="font-bold text-gray-900 dark:text-gray-100 mb-2 uppercase tracking-tight text-sm text-blue-600">
                      Step {idx + 1}: {step.label}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-snug">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Technology Stack" icon={Layers}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {project.techStack.map((tech, i) => (
                <div key={i} className="flex flex-col p-4 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-2xl hover:border-blue-500/50 transition-colors group">
                  <span className="text-sm font-mono font-bold text-gray-900 dark:text-gray-100">{tech}</span>
                  <span className="text-[10px] uppercase tracking-tighter opacity-40 mt-1">Component</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Key Capabilities" icon={CheckCircle2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {project.features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1.5 w-5 h-5 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={12} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section title="Outcome & Future Direction">
            <div className="p-10 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-xl shadow-blue-500/20">
              <p className="text-lg md:text-xl font-medium leading-relaxed italic opacity-95">
                "{project.outcome}"
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
