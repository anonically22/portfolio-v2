import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Reusable Magnetic component for additive interaction.
 * Elements subtly move toward the cursor within a proximity.
 */
const Magnetic = ({ children, strength = 0.2 }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate distance from center
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;
    
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
