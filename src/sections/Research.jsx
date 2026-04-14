import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const researchEntries = [
  {
    title: 'Secure Key Association for (t,n) Threshold Setup',
    publisher: 'IEEE REACS 2025',
    link: 'https://ieeexplore.ieee.org/document/11413338',
  },
  {
    title: 'Advanced Cyber Security Threat Mitigation',
    publisher: 'Ongoing Research',
  },
];

const Research = () => {
  return (
    <section id="research" className="py-24 border-t border-black/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12">
          {/* Header */}
          <div className="md:col-start-2 md:col-span-12 mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none"
            >
              Research
            </motion.h2>
          </div>

          {/* List */}
          <div className="md:col-start-2 md:col-span-10 flex flex-col gap-1 inline-block">
             {researchEntries.map((entry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group py-12 border-t border-black/10 flex flex-col md:flex-row md:items-center justify-between gap-8 first:border-0"
                >
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-4xl font-bold tracking-tight uppercase leading-none group-hover:italic transition-all">
                      {entry.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-[0.4em] opacity-40">
                      {entry.publisher}
                    </p>
                  </div>
                  {entry.link && (
                    <a 
                      href={entry.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group/btn"
                    >
                      <ArrowUpRight size={24} className="group-hover/btn:scale-110 transition-transform" />
                    </a>
                  )}
                </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
