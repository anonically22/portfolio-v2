import React from 'react';
import { Monitor, PenTool, MousePointer2, Share2 } from 'lucide-react';

const B = '1px solid #1a1a1a';

const services = [
  {
    Icon: Monitor,
    title: 'Web Architecture',
    description: 'Building robust and scalable frontend ecosystems using performance-driven methodologies and modern React patterns.',
  },
  {
    Icon: PenTool,
    title: 'AI Integration',
    description: 'Deploying intelligent machine learning integrations for modern data-driven digital products.',
  },
  {
    Icon: MousePointer2,
    title: 'Full-Stack Development',
    description: 'End-to-end development from database schemas to polished user interfaces with Supabase & React.',
  },
  {
    Icon: Share2,
    title: 'System Design',
    description: 'Architecting scalable software systems with clean separation of concerns and efficient data flows.',
  },
];

const Skills = () => {
  return (
    <section className="border-b border-[#1a1a1a]">
      {/* Header Row */}
      <div className="border-b border-[#1a1a1a]">
        <div className="section-container py-8 lg:py-12">
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight">Services</h2>
        </div>
      </div>

      {/* Content */}
      <div className="section-container section-py">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">

          {/* Left intro */}
          <div>
            <p className="text-[clamp(20px,2vw,28px)] font-medium leading-[1.3] tracking-tight opacity-70">
              Transforming complex problems into intuitive digital solutions through engineering excellence.
            </p>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-20">
            {services.map(({ Icon, title, description }, idx) => (
              <div key={idx} className="space-y-6">
                <div className="w-12 h-12 flex items-center justify-center border border-[#1a1a1a]/10 rounded-sm">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold tracking-tight">
                    {title}
                  </h4>
                  <p className="text-base font-medium leading-relaxed opacity-60">
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
