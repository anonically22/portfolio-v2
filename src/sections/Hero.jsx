import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '../components/TypewriterText';

const Hero = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#1a1a1a]">
      <div className="section-container min-h-[90vh] flex flex-col justify-between pt-32 pb-16">
        
        {/* Top Row: Standard Asterisk + Name */}
        <div className="flex justify-center md:justify-start">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(40px,8vw,120px)] flex items-center gap-4 tracking-tighter"
          >
            <span className="unified-asterisk text-[1.1em]">*</span>
            Anirbaan Sarkar
          </motion.h1>
        </div>

        {/* Middle: Grid-based layout for Bio and Main Headlines */}
        <div className="flex flex-col gap-12 mt-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            {/* Bio + CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-[420px]"
            >
              <p className="text-xl font-medium tracking-tight leading-snug opacity-80 mb-8">
                I build AI-powered products at the intersection of design and engineering. 
                Focused on React ecosystems and intelligent user interfaces.
              </p>
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#1a1a1a] text-white rounded-sm font-medium hover:bg-black transition-colors"
              >
                Explore My Work ↓
              </a>
            </motion.div>

            {/* Main Headline - Part 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:text-right"
            >
              <h2 className="text-[clamp(60px,11vw,180px)] font-bold tracking-tighter leading-[0.85] text-[#1a1a1a]">
                Full-stack
              </h2>
            </motion.div>
          </div>

          {/* Main Headline - Part 2 (Typewriter) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full text-right"
          >
            <h2 className="text-[clamp(60px,11vw,180px)] font-bold tracking-tighter leading-[0.85] text-[#1a1a1a]">
              <TypewriterText words={['product designer.', 'software engineer.', 'AI builder.']} pauseTime={3000} typingSpeed={80} deletingSpeed={50} />
            </h2>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
