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
        <div style={{ height: '72px' }} className="flex justify-between items-center">
          
          {/* Left: Name */}
          <div className="flex-1">
            <motion.a 
              href="/" 
              initial="initial"
              whileHover="hover"
              onClick={(e) => {
                if(window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center hover:opacity-80 transition-opacity w-fit relative overflow-hidden h-[72px]"
            >
              <motion.span 
                variants={{
                  initial: { y: 9 },
                  hover: { y: 18 }
                }}
                style={{ fontSize: '38px', lineHeight: 1, display: 'inline-block' }} 
                className="font-sans mr-[2px] font-medium"
              >
                *
              </motion.span>
              
              <div className="relative">
                <motion.span 
                  variants={{
                    initial: { opacity: 1, x: 0 },
                    hover: { opacity: 0, x: -10 }
                  }}
                  style={{ fontSize: '32px', lineHeight: 1, fontFamily: 'Poiret One, system-ui, sans-serif', display: 'inline-block' }} 
                  className="font-medium tracking-tight absolute left-0"
                >
                  as
                </motion.span>
                <motion.span 
                  variants={{
                    initial: { opacity: 0, x: 20 },
                    hover: { opacity: 1, x: 0 }
                  }}
                  style={{ fontSize: '32px', lineHeight: 1, fontFamily: 'Poiret One, system-ui, sans-serif', display: 'inline-block', whiteSpace: 'nowrap' }} 
                  className="font-medium tracking-tight"
                >
                  anirbaan sarkar
                </motion.span>
              </div>
            </motion.a>
          </div>

          {/* Center: Links */}
          <div className="hidden md:flex justify-center gap-10 text-[17px] font-medium tracking-tight">
            <a href="/#about" className="hover:opacity-60 transition-opacity">About</a>
            <a href="/#projects" className="hover:opacity-60 transition-opacity">Projects</a>
            <a href="/#contact" className="hover:opacity-60 transition-opacity">Contact</a>
          </div>

          {/* Right: Contact & Asterisk */}
          <div className="flex-1 flex justify-end items-center">
            <motion.div 
              className="flex items-center"
              initial="initial"
              whileHover="hover"
            >
              <motion.div 
                variants={{
                  initial: { opacity: 0, x: 20, pointerEvents: 'none' },
                  hover: { opacity: 1, x: 0, pointerEvents: 'auto' }
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:flex items-center gap-6 text-[13px] font-medium lowercase tracking-widest mr-6"
              >
                <a href="mailto:anirbaansarkar@gmail.com" className="hover:opacity-60 transition-opacity">[mail]</a>
                <a href="https://linkedin.com/in/anirbaansarkar" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">[linkedin]</a>
                <a href="https://github.com/anonically22" target="_blank" rel="noreferrer" className="hover:opacity-60 transition-opacity">[github]</a>
              </motion.div>

              <motion.span
                variants={{
                  initial: { rotate: 0 },
                  hover: { rotate: 180 }
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-2xl cursor-pointer select-none"
                style={{ display: 'inline-block' }}
              >
                *
              </motion.span>
            </motion.div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
