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
        <div className="flex justify-between items-center h-[72px] lg:h-[80px]">

          {/* Left: Logo/Name */}
          <div className="flex-1 flex items-center">
            <motion.a
              href="/"
              initial="initial"
              whileHover="hover"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center hover:opacity-80 transition-opacity w-fit relative overflow-hidden h-[40px]"
            >
              <div className="flex items-center h-full">
                <motion.span
                  variants={{
                    initial: { y: 0 },
                    hover: { y: 12 }
                  }}
                  className="unified-asterisk text-4xl mr-1 flex items-center h-full translate-y-[3px]"
                >
                  *
                </motion.span>

                <div className="relative flex items-center h-full">
                  <motion.span
                    variants={{
                      initial: { opacity: 1, x: 0 },
                      hover: { opacity: 0, x: -10 }
                    }}
                    className="tracking-tighter absolute left-0 text-[32px] md:text-[34px] leading-none flex items-center translate-y-[2px]"
                    style={{ fontFamily: "'Poiret One', cursive", fontWeight: 400 }}
                  >
                    as
                  </motion.span>
                  <motion.span
                    variants={{
                      initial: { opacity: 0, x: 20 },
                      hover: { opacity: 1, x: 0 }
                    }}
                    className="tracking-tighter text-[32px] md:text-[34px] leading-none whitespace-nowrap flex items-center translate-y-[2px]"
                    style={{ fontFamily: "'Poiret One', cursive", fontWeight: 400 }}
                  >
                    anirbaan sarkar
                  </motion.span>
                </div>
              </div>
            </motion.a>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-10 text-[15px] font-medium tracking-tight h-full translate-y-[6px]">
            <a href="/#about" className="hover:opacity-60 transition-opacity">[About]</a>
            <a href="/#projects" className="hover:opacity-60 transition-opacity">[Projects]</a>
            <a href="/#contact" className="hover:opacity-60 transition-opacity">[Contact]</a>
          </div>

          {/* Right: Contact Trigger */}
          <div className="flex-1 flex justify-end items-center h-full translate-y-[3px]">
            <motion.div
              className="flex items-center h-full"
              initial="initial"
              whileHover="hover"
            >
              <motion.div
                variants={{
                  initial: { opacity: 0, x: 20, pointerEvents: 'none' },
                  hover: { opacity: 1, x: 0, pointerEvents: 'auto' }
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="hidden lg:flex items-center gap-6 text-[12px] font-medium lowercase tracking-widest mr-6 translate-y-[1px]"
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
                className="unified-asterisk text-4xl cursor-pointer select-none h-full flex items-center translate-y-[1px]"
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
