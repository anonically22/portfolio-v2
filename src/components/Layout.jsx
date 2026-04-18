import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden" style={{ backgroundColor: '#f2f1ec', color: 'black' }}>
      {/* Background Layer: Grid & Animated Symbols */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* The Grid */}
        <div className="absolute inset-0 grid-bg opacity-100" />
        
        {/* Subtle Floating Asterisks */}
        <motion.span 
          animate={{ 
            rotate: 360,
            y: [0, -20, 0],
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
            y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="unified-asterisk absolute top-[15%] left-[5%] text-4xl opacity-[0.1]"
        >
          *
        </motion.span>
        
        <motion.span 
          animate={{ 
            rotate: -360,
            y: [0, 30, 0],
          }}
          transition={{ 
            rotate: { duration: 45, repeat: Infinity, ease: 'linear' },
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="unified-asterisk absolute top-[55%] right-[8%] text-6xl opacity-[0.08]"
        >
          *
        </motion.span>

        <motion.span 
          animate={{ 
            rotate: 360,
            x: [0, 15, 0],
          }}
          transition={{ 
            rotate: { duration: 35, repeat: Infinity, ease: 'linear' },
            x: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
          }}
          className="unified-asterisk absolute bottom-[15%] left-[12%] text-5xl opacity-[0.07]"
        >
          *
        </motion.span>
      </div>

      <CustomCursor />

      <Navbar />

      {/* Mobile Notice */}
      <div className="md:hidden sticky top-[72px] z-[90] w-full bg-[#1a1a1a] text-[#f2f1ec] text-center text-xs sm:text-sm py-2.5 px-4 shadow-sm font-medium tracking-wide uppercase">
        Site looks best on desktop
      </div>

      <main className="flex-grow z-10 pt-[72px] md:pt-[72px]">
        <AnimatePresence mode="wait">
          <motion.div
            key="page-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
