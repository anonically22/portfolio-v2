import React from 'react';
import { Mail, ArrowUp, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const B = '1px solid #1a1a1a';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" style={{ backgroundColor: '#f2f1ec', color: '#1a1a1a' }}>
      
      {/* --- OLD CONTACT SECTION --- */}
      {/* Header Row */}
      <div style={{ borderTop: B, borderBottom: B }}>
        <div className="section-container" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.375rem', fontWeight: 500, letterSpacing: '-0.03em' }}>Contact</h2>
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
            <a
              href="mailto:anirbaandsarkar@gmail.com"
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
              className="hover:opacity-60"
            >
              anirbaandsarkar@gmail.com
              <ArrowUpRight size={28} />
            </a>
          </div>

          {/* Right: Social Links */}
          <div className="flex-1 w-full" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { label: 'Github', href: 'https://github.com' },
              { label: 'Linkedin', href: 'https://linkedin.com' },
              { label: 'Twitter', href: 'https://twitter.com' },
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

      {/* --- NEW FOOTER DESIGN --- */}
      <div className="py-10 px-8 md:px-16 border-t border-[rgba(26,26,26,0.1)]">
        <div className="section-container">

        {/* Bottom Bar: Copyright and Back to top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-[rgba(26,26,26,0.1)]">
          <div className="flex items-center gap-4">
            <span className="flex items-center">
              <span style={{ fontSize: '32px', lineHeight: 1, transform: 'translateY(8px)', display: 'inline-block' }} className="font-sans mr-[2px] font-medium">*</span>
              <span style={{ fontSize: '28px', lineHeight: 1, fontFamily: 'Poiret One, system-ui, sans-serif', display: 'inline-block' }} className="font-bold tracking-tight">as</span>
            </span>
            <p className="text-gray-500 text-sm font-semibold tracking-tight">
              © {new Date().getFullYear()} Anirbaan Sarkar & Anonically22. Crafted with <span className="text-[#8b5cf6]">💜</span>
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-gray-900 border border-gray-300 rounded-full hover:bg-gray-900 hover:text-white transition-colors group"
          >
            Back To Top <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" strokeWidth={3} />
          </button>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
