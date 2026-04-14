import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 h-full">
          {/* Top part: Intro + Asterisk */}
          <div className="md:col-start-2 md:col-span-8 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-7xl font-sans"
            >
              *
            </motion.div>

            <div className="flex flex-col gap-4">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-2xl font-medium tracking-tight"
              >
                I'm Anirbaan Sarkar
              </motion.p>
              
              <div className="flex flex-col gap-2">
                <motion.h1 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-[10vw] md:text-[7vw] font-black uppercase leading-[0.85] tracking-tighter"
                >
                  A BEGINNER
                </motion.h1>
                <div className="overflow-hidden">
                  <motion.h1 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[10vw] md:text-[7vw] font-light uppercase leading-[0.85] tracking-tighter italic opacity-60"
                  >
                    FULLSTACK DEV
                  </motion.h1>
                </div>
              </div>
            </div>
          </div>

          {/* Left bio (Mobile: Bottom) */}
          <div className="md:col-start-2 md:col-span-4 mt-12 md:mt-24">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl font-normal leading-relaxed text-black/60 max-w-sm"
            >
              Building AI-powered products at the intersection of design and engineering. Currently focused on creating seamless user experiences.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Bottom Row / Scroll Indicator */}
      <div className="section-container mt-auto">
        <div className="grid grid-cols-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="col-start-2 col-span-11 flex justify-between items-center py-8 border-t border-black/10"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-xs font-bold uppercase tracking-[0.3em] opacity-40"
              >
                Scroll ↓
              </motion.div>
            </div>
            <div className="hidden md:block text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">
              India • {new Date().getFullYear()}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
