import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100]"
      style={{
        borderBottom: '1px solid #1a1a1a',
        backgroundColor: 'rgba(242, 241, 236, 0.92)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="section-container">
        <div style={{ height: '72px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center' }}>

          {/* Left: Name */}
          <div>
            <a 
              href="/" 
              onClick={(e) => {
                if(window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center hover:opacity-60 transition-opacity"
            >
              <span style={{ fontSize: '38px', lineHeight: 1, transform: 'translateY(9px)', display: 'inline-block' }} className="font-sans mr-[2px] font-medium">*</span>
              <span style={{ fontSize: '32px', lineHeight: 1, fontFamily: 'Poiret One, system-ui, sans-serif', display: 'inline-block' }} className="font-bold tracking-tight">as</span>
            </a>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex justify-center gap-10 text-[17px] font-medium tracking-tight">
            <a href="/#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="/#projects" className="hover:opacity-60 transition-opacity">Projects</a>
            <a href="/#contact" className="hover:opacity-60 transition-opacity">Contact</a>
          </div>

          {/* Right: Asterisk */}
          <div className="flex justify-end">
            <motion.span
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-2xl cursor-pointer select-none"
              style={{ display: 'inline-block' }}
            >
              *
            </motion.span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
