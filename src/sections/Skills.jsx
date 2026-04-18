import React from 'react';
import { Cpu, Globe, FlaskConical, Layout } from 'lucide-react';

const buildItems = [
  {
    Icon: Cpu,
    title: 'AI-Powered Tools',
    description: 'Developing intelligent applications that leverage large language models and machine learning to solve real-world problems.',
  },
  {
    Icon: Globe,
    title: 'Full-Stack Web Apps',
    description: 'Building end-to-end web applications with scalable architectures, focusing on performance, security, and seamless user experiences.',
  },
  {
    Icon: FlaskConical,
    title: 'Experimental Interfaces',
    description: 'Exploring the boundaries of UI/UX through creative coding, interactive prototypes, and non-traditional digital environments.',
  },
  {
    Icon: Layout,
    title: 'Product Prototypes',
    description: 'Turning abstract concepts into high-fidelity, functional prototypes that feel like the finished product from day one.',
  },
];

const Skills = () => {
  return (
    <section className="border-b border-black">
      {/* Header Row */}
      <div className="border-b border-black">
        <div className="section-container py-16 lg:py-24">
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight text-black">What I Build</h2>
        </div>
      </div>

      {/* Content */}
      <div className="section-container section-py">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">

          {/* Left intro */}
          <div>
            <p className="text-[clamp(20px,2vw,28px)] font-medium leading-[1.3] tracking-tight text-neutral-600">
              Turning complex ideas into functional products through structured design and engineering.
            </p>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20">
            {buildItems.map(({ Icon, title, description }, idx) => (
              <div key={idx} className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center border border-black/10 rounded-sm">
                  <Icon size={24} strokeWidth={1.5} className="text-black" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold tracking-tight text-black">
                    {title}
                  </h4>
                  <p className="text-base font-medium leading-relaxed text-neutral-600 text-justify">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
