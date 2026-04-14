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
    <footer className="bg-[#FAF9F6] text-[#1a1a1a] border-t border-black/5">
      <div className="section-container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
          {/* Left: Huge Headline */}
          <div className="space-y-8">
            <h2 className="text-7xl md:text-[8vw] font-serif font-bold tracking-tighter leading-[0.85] italic opacity-10">
              Get in <br /> Touch.
            </h2>
            <a
              href="mailto:anirbaandsarkar@gmail.com"
              className="inline-flex items-center gap-4 text-3xl md:text-5xl font-serif font-bold tracking-tight hover:opacity-50 transition-all group"
            >
              anirbaandsarkar@gmail.com
              <ArrowUpRight size={40} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Right: Social & Info */}
          <div className="flex flex-col gap-12 text-right items-end">
            <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] opacity-40">
              <a href="https://github.com/anirbaan-sarkar" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">Github</a>
              <a href="https://linkedin.com/in/anirbaan-sarkar" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">Linkedin</a>
              <a href="https://twitter.com/anirbaansarkar" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">Twitter</a>
            </div>
            
            <div className="flex flex-col items-end gap-2">
               <button 
                onClick={scrollToTop}
                className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group"
                title="Back to Top"
              >
                <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center">
              <span className="text-3xl font-sans font-medium mr-0.5">*</span>
              <span className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Poiret One, system-ui, sans-serif' }}>as</span>
            </div>
            <div className="h-4 w-[1px] bg-black/10 hidden md:block" />
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-30">
              © {new Date().getFullYear()} Anirbaan Sarkar
            </p>
          </div>

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
            <span>Powered by synergy & energy from tea</span>
            <span className="text-lg">☕</span>
            <a href="https://portfolio1-orcin-theta.vercel.app/" target="_blank" rel="noopener noreferrer" className="ml-4 opacity-50 hover:opacity-100 transition-all font-black">LEGACY v1</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
