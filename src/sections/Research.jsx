import React from 'react';
import { motion } from 'framer-motion';

const researchEntries = [
  {
    title: "Secure Key Association, Forger Identification and Dealer Forgery Detection for a (t,n) Threshold Setup — IEEE REACS 2025",
    description: "Research focused on cryptographic security in threshold secret sharing systems, specifically detecting forgery attempts and strengthening key negotiation protocols."
  },
  {
    title: "Advanced Cyber Security Threat Detection and Mitigation Strategies — Ongoing (2025)",
    description: "Analysis of modern cyberattack vectors and development of structured mitigation frameworks for system resilience."
  }
];

const Research = () => {
  return (
    <section id="research" className="py-20 border-t border-gray-100 dark:border-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="mb-12">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 mb-6 uppercase">Research</h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
          </div>

          <div className="space-y-12 max-w-4xl">
            {researchEntries.map((entry, index) => (
              <div key={index} className="group">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-50 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {entry.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {entry.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
