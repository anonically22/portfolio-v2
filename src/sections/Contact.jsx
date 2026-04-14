import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-black/10 flex flex-col justify-center min-h-[60vh]">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16">
          <div className="md:col-start-2 md:col-span-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-[12vw] md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter mb-16"
            >
              LET'S CREATE <br />
              <span className="italic font-light opacity-50">SOMETHING NEW</span>
            </motion.div>
          </div>

          <div className="md:col-start-2 md:col-span-6 flex flex-col gap-12">
             <a 
              href="mailto:anirbaandsarkar@gmail.com"
              className="text-2xl md:text-5xl font-medium tracking-tighter border-b border-black/20 pb-4 hover:opacity-50 transition-all inline-block w-fit"
             >
              anirbaandsarkar@gmail.com
             </a>
             
             <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.4em] opacity-40">
                <a href="https://github.com/anirbaan-sarkar" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">GitHub</a>
                <a href="https://linkedin.com/in/anirbaan-sarkar" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
                <a href="https://twitter.com/anirbaansarkar" target="_blank" rel="noreferrer" className="hover:opacity-100 transition-opacity">Twitter</a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
