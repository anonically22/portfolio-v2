import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="border-t border-[#1a1a1a]" style={{ backgroundColor: '#f2f1ec' }}>
      {/* Header Row */}
      <div className="border-b border-[#1a1a1a]">
        <div className="section-container py-16 lg:py-24 flex justify-between items-center">
          <h2 className="text-[clamp(40px,5vw,64px)] font-bold tracking-tight">Contact</h2>
          <div className="text-sm lg:text-base font-medium opacity-60">
            Available for remote work
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="section-container section-py">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-start lg:items-end">
          {/* Left: CTA */}
          <div className="flex-1">
            <h2 className="text-[clamp(52px,8vw,120px)] font-bold tracking-tighter leading-[0.95] mb-8">
              Let's talk!
            </h2>
            <motion.a
              href="mailto:anirbaansarkar@gmail.com"
              whileHover={{ opacity: 0.6 }}
              className="inline-flex items-center gap-4 text-[clamp(18px,2.5vw,32px)] font-medium tracking-tight no-underline text-[#1a1a1a] transition-opacity"
            >
              anirbaansarkar@gmail.com
              <ArrowUpRight size={28} />
            </motion.a>
          </div>

          {/* Right: Social Links */}
          <div className="flex-1 w-full space-y-4">
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
                className="flex justify-between items-center border-b border-[#1a1a1a]/20 pb-4 text-[1.25rem] font-medium tracking-tight text-[#1a1a1a] transition-opacity hover:opacity-60"
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
