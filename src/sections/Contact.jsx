import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" style={{ borderTop: '1px solid #1a1a1a', backgroundColor: '#f2f1ec' }}>
      {/* Header Row */}
      <div style={{ borderBottom: '1px solid #1a1a1a' }}>
        <div className="section-container" style={{ paddingTop: '3rem', paddingBottom: '2.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
            <h2 style={{ fontFamily: 'Poiret One, system-ui, sans-serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 'bold', letterSpacing: '-0.02em', lineHeight: 1 }}>Contact</h2>
            <div style={{ textAlign: 'right', fontSize: '1.125rem', fontWeight: 500 }}>
              Available for remote work
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="flex flex-col lg:flex-row gap-16 items-end">
          {/* Left: CTA */}
          <div className="flex-1">
            <h2
              style={{
                fontFamily: 'Poiret One, system-ui, sans-serif',
                fontSize: 'clamp(52px, 8vw, 120px)',
                fontWeight: 600,
                letterSpacing: '-0.04em',
                lineHeight: 0.95,
                marginBottom: '2rem',
              }}
            >
              Let's talk!
            </h2>
            <motion.a
              href="mailto:anirbaansarkar@gmail.com"
              whileHover={{ opacity: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                fontSize: 'clamp(18px, 2.5vw, 32px)',
                fontWeight: 500,
                letterSpacing: '-0.03em',
                textDecoration: 'none',
                color: '#1a1a1a',
                transition: 'opacity 200ms',
              }}
            >
              anirbaansarkar@gmail.com
              <ArrowUpRight size={28} />
            </motion.a>
          </div>

          {/* Right: Social Links */}
          <div className="flex-1 w-full" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Github', href: 'https://github.com/anonically22' },
              { label: 'Linkedin', href: 'https://linkedin.com/in/anirbaansarkar' },
              { label: 'Twitter', href: 'https://twitter.com/anonically22' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBottom: '1px solid rgba(26,26,26,0.2)',
                  paddingBottom: '0.75rem',
                  fontSize: '1.375rem',
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  textDecoration: 'none',
                  color: '#1a1a1a',
                  transition: 'opacity 200ms',
                }}
                className="hover:opacity-60"
              >
                {label}
                <ArrowUpRight size={18} style={{ opacity: 0.5 }} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
