import React, { useEffect, useState, memo } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [cursorState, setCursorState] = useState('default'); // 'default', 'hover', 'typography'
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for high-end position tracking
  const springConfig = { damping: 30, stiffness: 500, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isTypography = target.closest('.cursor-typography');
      const isHoverable = target.closest('a, button, .cursor-hover, .magnetic-target');

      if (isTypography) {
        setCursorState('typography');
      } else if (isHoverable) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isMobile) return null;

  // Define variants for size and appearance changes for maximum smoothness
  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: '#fff',
      opacity: isVisible ? 1 : 0,
      mixBlendMode: 'difference'
    },
    hover: {
      width: 44,
      height: 44,
      backgroundColor: '#fff',
      opacity: 1,
      mixBlendMode: 'difference'
    },
    typography: {
      width: 140,
      height: 140,
      backgroundColor: 'rgba(0,0,0,0.05)',
      opacity: 1,
      mixBlendMode: 'normal'
    }
  };

  return (
    <>
      {/* Grid Proximity Effect (Subtle Glow) */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background: `radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.035), transparent 80%)`,
        }}
      />

      {/* Main Cursor Element */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center translate-x-[-50%] translate-y-[-50%]"
        variants={variants}
        animate={cursorState}
        transition={{ 
          type: 'spring', 
          damping: 25, 
          stiffness: 250, 
          mass: 0.8
        }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};

export default memo(CustomCursor);
