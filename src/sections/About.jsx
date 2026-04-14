import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-black/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12">
          {/* Section Heading */}
          <div className="md:col-start-2 md:col-span-10">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-16"
            >
              The Story
            </motion.h2>
          </div>

          {/* Intro Paragraph (Wide) */}
          <div className="md:col-start-2 md:col-span-8">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-medium tracking-tight leading-tight mb-12"
            >
              I am a results-driven creator who specializes in building high-performance applications with a human-centric focus.
            </motion.p>
          </div>

          {/* Detailed Paragraphs (Side by side on desktop) */}
          <div className="md:col-start-2 md:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-black/60 leading-relaxed"
            >
              Since 2022, I've been navigating the dynamic landscape of software engineering and research. My journey has been driven by a relentless curiosity and a passion for crafting digital experiences that are both robust and intuitive.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-lg text-black/60 leading-relaxed"
            >
              Whether it's architecting complex backend systems or refining frontend micro-interactions, I strive for excellence in every project. I believe that great design and engineering should always work in tandem to solve real-world problems.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
