import React from 'react';
import { ArrowUp, ArrowRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 py-12 border-t border-black/10 text-sm text-neutral-500">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          {/* Left: Info */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <p>© {new Date().getFullYear()}</p>
              <div className="hidden md:block w-1 h-1 bg-neutral-300 rounded-full" />
              <p>
                Crafted with ♥ by <span className="text-black font-medium">anonically22</span><span className="text-neutral-400"> (aka Anirbaan)</span>
              </p>
            </div>

            {/* Visit Portfolio Link - BELOW CRAFTED LINE */}
            <div className="pt-4 border-t border-black/5 w-fit opacity-50 hover:opacity-100 transition-opacity">
              <p className="text-neutral-400 font-medium mb-1 text-[10px] uppercase tracking-[0.2em]">wanna check anonically22?</p>
              <a 
                href="https://anonical.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-bold text-black flex items-center gap-2 group w-fit lowercase"
              >
                visit portfolio 
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-8">
            <a 
              href="https://portfolio1-orcin-theta.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] text-neutral-400 hover:text-black transition-colors uppercase tracking-widest font-bold"
            >
              v1.0
            </a>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 group hover:text-black transition-colors"
            >
              Back To Top <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

