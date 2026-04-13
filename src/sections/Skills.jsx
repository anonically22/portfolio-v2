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
    <section style={{ borderBottom: B }}>
      {/* Header Row */}
      <div style={{ borderBottom: B }}>
        <div className="section-container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.375rem', fontWeight: 500, letterSpacing: '-0.03em' }}>Services</h2>
        </div>
      </div>

      {/* Content */}
      <div className="section-container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem' }}>

          {/* Left intro */}
          <div>
            <p style={{ fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 500, lineHeight: 1.3, letterSpacing: '-0.03em' }}>
              I am dedicated to expanding my knowledge and expertise in software engineering. If you like my portfolio, please reach out!
            </p>
          </div>

          {/* Right 2x2 grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem 4rem' }}>
            {services.map(({ Icon, title, description }, idx) => (
              <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ width: '64px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={44} strokeWidth={1} />
                </div>
                <div>
                  <h4 style={{ fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 500, letterSpacing: '-0.03em', marginBottom: '0.75rem' }}>
                    {title}
                  </h4>
                  <p style={{ fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.45, color: '#444' }}>
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
