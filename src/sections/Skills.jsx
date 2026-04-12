import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Supabase", "PostgreSQL"]
  },
  {
    title: "AI / Data",
    skills: ["TensorFlow", "Pandas"]
  },
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C++", "Java", "SQL"]
  },
  {
    title: "Tools",
    skills: ["Git", "AWS", "Vercel", "Vite"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 border-t border-gray-100 dark:border-gray-900">
      <div className="container-custom">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 mb-6 uppercase">Technical Arsenal</h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {skillCategories.map((category, idx) => (
              <div key={idx} className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 uppercase tracking-widest text-xs opacity-60">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: "rgba(37, 99, 235, 0.5)",
                        boxShadow: "0 0 15px rgba(37, 99, 235, 0.1)"
                      }}
                      className="px-4 py-2 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 transition-all cursor-default shadow-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
