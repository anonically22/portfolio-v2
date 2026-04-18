import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="border-t border-black" style={{ backgroundColor: '#f2f1ec' }}>
      {/* Header Row */}
      <div className="border-b border-black">
        <div className="section-container py-16 lg:py-24 flex justify-between items-center">
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight text-black">Contact</h2>
          <div className="text-sm lg:text-base font-medium text-neutral-600">
            Available for remote work
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-container section-py">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start lg:items-end">
          {/* Left: CTA */}
          <div className="flex-1">
            <h2 className="text-[clamp(52px,8vw,120px)] font-bold tracking-tighter leading-[0.95] mb-8 text-black">
              Let's talk!
            </h2>
            <motion.a
              href="mailto:anirbaansarkar@gmail.com"
              whileHover={{ opacity: 0.6 }}
              className="inline-flex items-center gap-4 text-[clamp(18px,2.5vw,32px)] font-medium tracking-tight no-underline text-black transition duration-300"
            >
              anirbaansarkar@gmail.com
              <ArrowUpRight size={28} />
            </motion.a>

            {/* Visit Portfolio Link - BELOW EMAIL */}
            <div className="mt-8 opacity-50 hover:opacity-100 transition-opacity">
              <p className="text-neutral-500 font-medium mb-1 text-[10px] uppercase tracking-widest">wanna check anonically22?</p>
              <a 
                href="https://anonical.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base font-bold text-black flex items-center gap-2 group w-fit"
              >
                visit portfolio 
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="flex-1 w-full space-y-4">
            {[
              { label: 'Github', href: 'https://github.com/anonically22' },
              { label: 'Linkedin', href: 'https://www.linkedin.com/in/anirbaan-sarkar/' },
              { label: 'Twitter', href: 'https://x.com/anirbaansarkar' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-center border-b border-black/20 pb-4 text-[1.25rem] font-medium tracking-tight text-black transition duration-300 hover:opacity-60"
              >
                {label}
                <ArrowUpRight size={18} className="opacity-40" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
