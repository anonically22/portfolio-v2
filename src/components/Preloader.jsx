import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ finishLoading }) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Smooth percentage sweep
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#f2f1ec] text-[#1a1a1a]"
    >
      <div className="flex items-center">
        {/* The Unified Asterisk */}
        <span className="unified-asterisk text-[clamp(24px,4vw,32px)] font-bold mr-1">
          *
        </span>

        {/* The Percentage in Braces */}
        <div className="flex items-center font-bold tracking-tight text-[clamp(24px,4vw,32px)]">
          <span>(</span>
          <span className="tabular-nums">{percent}%</span>
          <span>)</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
