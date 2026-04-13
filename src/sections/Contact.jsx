import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="border-t border-divider-light dark:border-divider-dark">
      <div className="container-framer py-32 md:py-48 flex flex-col items-center text-center space-y-12">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[11px] font-bold uppercase tracking-[0.4em] text-blue-600"
        >
          READY TO START?
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-[8vw] font-black tracking-tighter uppercase leading-none"
        >
          Let's Work <br /> Together
        </motion.h2>

        <motion.a
          href="mailto:anirbaandsarkar@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-6 text-xl md:text-3xl font-bold italic border-b-2 border-current pb-2 hover:text-blue-600 transition-colors"
        >
          anirbaandsarkar@gmail.com
          <ArrowUpRight size={32} />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
