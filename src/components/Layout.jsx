import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-[#F2F2F2] text-[#121212]">
      {/* 12-Column Grid Lines overlay */}
      <div className="v-grid-overlay">
        {[...Array(13)].map((_, i) => (
          <div key={i} className="v-grid-line" />
        ))}
      </div>

      <CustomCursor />
      <Navbar />

      <main className="flex-grow z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
