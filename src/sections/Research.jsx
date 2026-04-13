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
    <section id="research" style={{ borderBottom: B }}>
      {/* Header Row */}
      <div style={{ borderBottom: B }}>
        <div className="section-container" style={{ paddingTop: '3rem', paddingBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: 'Poiret One, system-ui, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 'bold', letterSpacing: '-0.02em', lineHeight: 1 }}>
            Research &amp; Publications
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="section-container" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="flex flex-col gap-12 lg:gap-16 ml-0 lg:ml-[calc(100%/3)]">
          {researchEntries.map((entry, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {entry.link ? (
                <a href={entry.link} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors">
                  <h3
                    style={{
                      fontSize: 'clamp(24px, 3vw, 40px)',
                      fontWeight: 500,
                      lineHeight: 1.1,
                      letterSpacing: '-0.04em',
                    }}
                  >
                    {entry.title} ↗
                  </h3>
                </a>
              ) : (
                <h3
                  style={{
                    fontSize: 'clamp(24px, 3vw, 40px)',
                    fontWeight: 500,
                    lineHeight: 1.1,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {entry.title}
                </h3>
              )}
              <span
                style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  opacity: 0.45,
                  letterSpacing: '-0.02em',
                }}
              >
                {entry.subtitle}
              </span>
              <p
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  lineHeight: 1.5,
                  color: '#444',
                  marginTop: '0.5rem',
                  textAlign: 'justify',
                  hyphens: 'auto'
                }}
              >
                {entry.description}
              </p>
              {idx < researchEntries.length - 1 && (
                <div style={{ height: '1px', backgroundColor: '#d8d7d3', marginTop: '1rem' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
