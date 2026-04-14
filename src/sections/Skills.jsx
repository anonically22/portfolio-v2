import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind', 'Framer Motion'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'] },
  { category: 'Language', items: ['JavaScript', 'TypeScript', 'SQL', 'Python'] },
  { category: 'Design', items: ['Figma', 'Web Design', 'Typography', 'Prototyping'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 border-t border-black/10">
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
              Expertise
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="md:col-start-2 md:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                   <div className="h-[1px] w-8 bg-black/20" />
                   <h3 className="text-xs font-bold uppercase tracking-[0.4em] opacity-40">{skill.category}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {skill.items.map((item) => (
                    <span key={item} className="text-xl font-medium tracking-tight">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
