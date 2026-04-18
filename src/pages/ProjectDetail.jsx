import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, Layers, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { projects } from '../utils/projectData';

const Section = ({ title, children, icon: Icon }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="py-16 md:py-24 border-b border-[#1a1a1a]/10 last:border-0"
  >
    <div className="flex items-center gap-4 mb-12">
      <span className="unified-asterisk text-3xl opacity-20">*</span>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">
        {title}
      </h2>
    </div>
    <div className="text-[#1a1a1a]/80 text-lg md:text-xl leading-relaxed space-y-6 font-medium text-justify">
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
      <div className="min-h-screen flex flex-col items-center justify-center space-y-8 bg-[#f2f1ec]">
        <span className="unified-asterisk text-6xl animate-pulse">*</span>
        <h1 className="text-4xl font-bold tracking-tighter uppercase">Project Not Found</h1>
        <Link 
          to="/" 
          className="px-8 py-3 bg-[#1a1a1a] text-white rounded-sm font-bold uppercase tracking-widest hover:bg-black transition-all"
        >
          Return to Hub
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-[#f2f1ec]">
      <div className="section-container">
        {/* Navigation */}
        <motion.div
           initial={{ opacity: 0, x: -10 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.3em] text-[#1a1a1a]/50 hover:text-[#1a1a1a] transition-colors mb-20 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            [ BACK TO INDEX ]
          </Link>
        </motion.div>

        {/* Hero Section */}
        <header className="mb-32 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-start gap-8 w-full"
          >
            <div className="flex items-center gap-2">
              <span className="unified-asterisk text-xl">*</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-[#1a1a1a]/60">
                CASE STUDY / {project.techStack?.[0]}
              </span>
            </div>

            <h1 className="text-6xl md:text-[120px] font-bold tracking-tighter text-[#1a1a1a] leading-[0.85] uppercase block max-w-4xl">
              {project.title}
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-t border-[#1a1a1a] pt-12 mt-12 w-full"
          >
            <p className="text-xl md:text-2xl text-[#1a1a1a]/70 font-medium tracking-tight max-w-2xl leading-snug text-justify">
              {project.description}
            </p>
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-white rounded-sm font-bold uppercase tracking-widest hover:bg-black transition-all transform hover:-translate-y-1 whitespace-nowrap"
              >
                Launch Project <ArrowUpRight size={18} />
              </a>
            )}
          </motion.div>
        </header>

        {/* Featured Image */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="aspect-video w-full overflow-hidden border border-[#1a1a1a]/10 mb-32 bg-[#e5e4df] rounded-sm shadow-2xl"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>


        {/* Content Structure */}
        <div className="max-w-4xl mx-auto">
          <Section title="Executive Overview">
            <p className="text-2xl font-bold text-[#1a1a1a] leading-tight mb-6">
              {project.overview}
            </p>
          </Section>

          <Section title="Context">
            <p>{project.problem}</p>
          </Section>

          <Section title="Strategy">
            <p>{project.approach}</p>
          </Section>

          <Section title="System Anatomy" icon={Cpu}>
            <p className="mb-16 opacity-70 italic">{project.systemDesign.explanation}</p>
            <div className="space-y-12">
              {project.systemDesign.flow.map((step, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <span className="unified-asterisk text-2xl text-[#1a1a1a]">*</span>
                    {idx !== project.systemDesign.flow.length - 1 && (
                      <div className="w-px h-full bg-[#1a1a1a]/10 my-4" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h4 className="font-bold text-[#1a1a1a] mb-4 uppercase tracking-[0.2em] text-xs">
                      Phase {idx + 1} / {step.label}
                    </h4>
                    <p className="text-[#1a1a1a]/80 text-xl leading-snug">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Stack" icon={Layers}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {project.techStack.map((tech, i) => (
                <div key={i} className="flex flex-col p-6 border border-[#1a1a1a]/10 rounded-sm hover:border-[#1a1a1a] transition-colors group bg-white/50">
                  <span className="text-lg font-bold text-[#1a1a1a] uppercase tracking-tighter">{tech}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mt-2 font-bold underline decoration-1">Component</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Key Capabilities" icon={CheckCircle2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {project.features.map((feature, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 border-l-2 border-[#1a1a1a]/10 pl-6 py-2"
                >
                  <span className="text-[#1a1a1a] font-bold leading-tight">{feature}</span>
                </motion.div>
              ))}
            </div>
          </Section>

          <Section title="Conclusion">
            <div className="p-12 border border-[#1a1a1a] border-dashed rounded-sm bg-white/30">
              <p className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter text-[#1a1a1a]">
                {project.outcome}
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
