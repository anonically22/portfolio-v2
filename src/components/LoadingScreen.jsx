import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ["DESIGNER", "DEVELOPER", "ENGINEER", "ANIRBAAN"];

const LoadingScreen = () => {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setIsVisible(false);
      return;
    }

    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === words.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            sessionStorage.setItem('hasLoaded', 'true');
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121212]"
        >
          <div className="relative overflow-hidden h-[120px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              >
                <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                  {words[index]}
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="absolute bottom-12 left-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-4"
            >
              <div className="h-[1px] w-8 bg-white/20" />
              <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.4em]">
                Portfolio / {new Date().getFullYear()}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
