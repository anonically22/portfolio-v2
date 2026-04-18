import React from 'react';
import { motion } from 'framer-motion';
import TypewriterText from '../components/TypewriterText';
import Magnetic from '../components/Magnetic';

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] min-h-[500px] flex items-center border-b border-black overflow-hidden pointer-events-none">
      <div className="section-container w-full py-8 pointer-events-auto">
        
        {/* Layout Wrapper */}
        <div className="flex flex-col h-full justify-between gap-8 md:gap-12">
          
          {/* Top Row: Dominant Asterisk + Name */}
          <div className="flex justify-center md:justify-start">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01, tracking: '0.01em' }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[clamp(64px,12vw,180px)] font-bold tracking-tighter leading-[0.85] text-black flex items-center gap-6 cursor-typography"
            >
              <span className="unified-asterisk text-[0.8em]">*</span>
              Anirbaan Sarkar
            </motion.h1>
          </div>

          {/* Middle Content Section */}
          <div className="flex flex-col gap-12 mt-4">
            
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
              {/* Bio + CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="max-w-[440px]"
              >
                <p className="text-lg md:text-xl font-medium tracking-tight leading-snug text-neutral-600 mb-8 text-justify">
                  I'm a full-stack developer and product designer focused on building AI-driven web applications and clean digital interfaces.
                </p>
                <Magnetic strength={0.15}>
                  <a 
                    href="#projects" 
                    className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:opacity-60 transition duration-300"
                  >
                    Explore My Work ↓
                  </a>
                </Magnetic>
              </motion.div>

              {/* Smaller Typewriter Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="lg:text-right cursor-typography"
              >
                <h2 className="text-[clamp(24px,4vw,56px)] font-bold tracking-tight text-neutral-800 leading-tight">
                  I specialize in{' '}
                  <span className="text-black">
                    <TypewriterText 
                      words={[
                        'building products.',
                        'designing interfaces.',
                        'engineering AI tools.'
                      ]} 
                      pauseTime={3000} 
                      typingSpeed={80} 
                      deletingSpeed={50} 
                    />
                  </span>
                </h2>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
