import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden" style={{ backgroundColor: '#f2f1ec', color: '#1a1a1a' }}>
      {/* Background Vertical Grid Lines - 7 lines = 6 columns */}
      <div className="v-grid">
        {[...Array(7)].map((_, i) => (
          <div key={i} className="v-line" />
        ))}
      </div>

      <CustomCursor />

      <Navbar />

      <main className="flex-grow z-10 pt-[72px]">
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
