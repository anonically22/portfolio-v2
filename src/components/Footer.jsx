import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-20 py-10 border-t border-black/10 text-sm text-neutral-500">
      <div className="section-container flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <p>© {new Date().getFullYear()}</p>
          <div className="hidden md:block w-1 h-1 bg-neutral-300 rounded-full" />
          <p>
            Crafted with ♥ by <span className="text-black font-medium">anonically22</span> 
            <span className="ml-1 text-neutral-400">(aka Anirbaan)</span>
          </p>
        </div>

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
    </footer>
  );
};

export default Footer;
