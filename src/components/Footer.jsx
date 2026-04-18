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
    <footer style={{ backgroundColor: '#f2f1ec' }}>
      <div className="section-container border-t border-[#1a1a1a] py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
            <span className="flex items-center gap-1">
              <span className="unified-asterisk text-3xl">*</span>
              <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Poiret One, system-ui, sans-serif' }}>as</span>
            </span>
            <p className="text-gray-500 text-sm font-medium tracking-tight">
              © {new Date().getFullYear()} Anirbaan Sarkar. Crafted with 🖤
              <a href="https://portfolio1-orcin-theta.vercel.app/" target="_blank" rel="noopener noreferrer" className="ml-4 text-[10px] text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest font-bold">v1.0</a>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-2 text-xs font-bold uppercase tracking-widest text-[#1a1a1a] border border-[#1a1a1a] rounded-sm hover:bg-[#1a1a1a] hover:text-white transition-all group"
          >
            Back To Top <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
