import React from 'react';

const B = '1px solid #1a1a1a';

const researchEntries = [
  {
    title: 'Secure Key Association, Forger Identification and Dealer Forgery Detection for a (t,n) Threshold Setup',
    subtitle: 'IEEE REACS 2025 — Published',
    link: 'https://ieeexplore.ieee.org/document/11413338',
    description:
      'Research focused on cryptographic security in threshold secret sharing systems, detecting forgery attempts in secret dealer protocols and strengthening the robustness of multi-party key setups.',
  },
  {
    title: 'Advanced Cyber Security Threat Detection and Mitigation Strategies',
    subtitle: 'Ongoing Research (2025)',
    description:
      'Analysis of modern cyberattack vectors and development of structured mitigation frameworks, focusing on real-time detection systems and defensive architectures for improved system resilience.',
  },
];

const Research = () => {
  return (
    <section id="research" className="border-b border-[#1a1a1a]">
      {/* Header Row */}
      <div className="border-b border-[#1a1a1a]">
        <div className="section-container py-8 lg:py-12">
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight">
            Research & Publications
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="section-container section-py">
        <div className="flex flex-col gap-12 lg:gap-20 lg:ml-[25%] lg:max-w-[800px]">
          {researchEntries.map((entry, idx) => (
            <div key={idx} className="space-y-4">
              {entry.link ? (
                <a href={entry.link} target="_blank" rel="noreferrer" className="block group">
                  <h3 className="text-[clamp(24px,3vw,40px)] font-bold tracking-tighter leading-tight group-hover:opacity-60 transition-opacity">
                    {entry.title} ↗
                  </h3>
                </a>
              ) : (
                <h3 className="text-[clamp(24px,3vw,40px)] font-bold tracking-tighter leading-tight">
                  {entry.title}
                </h3>
              )}
              
              <div className="text-sm font-bold uppercase tracking-widest opacity-40">
                {entry.subtitle}
              </div>

              <p className="text-lg font-medium leading-relaxed opacity-60">
                {entry.description}
              </p>

              {idx < researchEntries.length - 1 && (
                <div className="w-20 h-px bg-[#1a1a1a]/20 mt-12" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
