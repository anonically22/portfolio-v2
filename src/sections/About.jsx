import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  { label: "AI/ML Research Intern", value: "Leonard Corporate Solutions" },
  { label: "Government IP Intern", value: "Ministry of IT" },
  { label: "IEEE Publication", value: "REACS 2025" },
  { label: "B.Tech Candidate", value: "2022–2026" }
];

const About = () => {
  return (
    <section id="about" className="py-20 border-t border-gray-100 dark:border-gray-900">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col lg:flex-row gap-16 items-start"
        >
          {/* Left Column: Paragraph */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 mb-6 uppercase">About Me</h2>
            <div className="space-y-6">
              <p className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight">
                AI-driven full-stack developer building <span className="text-blue-600">intelligent</span>, user-focused digital products.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                I focus on creating systems that combine clean UI, strong engineering, and real-world functionality. My work spans AI-powered tools, full-stack platforms, and research-driven development.
              </p>
            </div>
          </div>

          {/* Right Column: Highlights */}
          <div className="lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800"
                >
                  <p className="text-sm font-medium text-gray-400 uppercase tracking-tighter mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-100 leading-tight">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
