import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '../components/TypewriterText';

const Hero = () => {
  return (
    <section
      className="relative flex flex-col justify-between overflow-hidden"
      style={{ minHeight: '90vh', paddingBottom: '1.5rem', borderBottom: '1px solid #1a1a1a' }}
    >
      {/* Decorative animated elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-blue-500/20 blur-[100px] pointer-events-none"
      />
      
      <div className="section-container flex flex-col h-full grow justify-between z-10">

        {/* Top Row: Asterisk + Name */}
        <div className="mt-8 md:mt-16 flex justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-clamp-hero flex items-center gap-2 md:gap-6"
          >
            <span style={{ fontSize: '1.1em', transform: 'translateY(4px)', display: 'inline-block' }}>*</span>
            I'm Anirbaan Sarkar
          </motion.h1>
        </div>

        {/* Middle: Bio + Giant Lines */}
        <div className="mt-12 md:mt-20 mb-10 w-full flex flex-col">

          <div className="flex flex-col md:flex-row md:items-end justify-between w-full">
            {/* Bio text – visible on desktop, aligned with 'A full-stack' */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hidden md:block w-[340px] pb-4"
            >
              <p className="text-xl font-medium tracking-tight leading-snug">
                I am a Computer Science student blending rigorous engineering with striking aesthetics. I build systems that are natively intuitive, scalable, and obsessively designed.
              </p>
            </motion.div>

            {/* Big Lines - Line 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-right md:text-right"
            >
              <span className="text-clamp-hero">A full-stack</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full text-right md:text-left"
            style={{ marginTop: '-0.2em' }}
          >
            <span className="text-clamp-hero">
              <TypewriterText words={['software engineer.', 'product designer.', 'system architect.']} pauseTime={3000} typingSpeed={80} deletingSpeed={50} />
            </span>
          </motion.div>

          {/* Mobile bio */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-8 md:hidden"
          >
            <p className="text-xl font-medium tracking-tight leading-snug">
              I am a Computer Science student blending rigorous engineering with striking aesthetics. I build systems that are natively intuitive, scalable, and obsessively designed.
            </p>
          </motion.div>
        </div>

        

      </div>
    </section>
  );
};

export default Hero;
