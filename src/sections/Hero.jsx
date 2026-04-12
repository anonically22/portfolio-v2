import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Code } from 'lucide-react';

const GithubIcon = ({ size = 24, ...props }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Hero = () => {
  const containerRef = useRef(null);
  
  // Mouse position for effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring animations for smoother mouse tracking
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax transform for the heading
  const headingX = useTransform(smoothX, [0, 500], [0, 15]);
  const headingY = useTransform(smoothY, [0, 500], [0, 10]);

  // Handle mouse movement within the container
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    // Normalize coordinates to a range (optional, but good for consistent mapping)
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden py-20 lg:py-32"
    >
      {/* Soft Radial Glow / Spotlight */}
      <motion.div 
        style={{
          left: smoothX,
          top: smoothY,
        }}
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-[100px] z-0"
      />

      <div className="relative z-10 space-y-8 max-w-4xl">
        {/* Animated Heading with subtle parallax */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ x: headingX, y: headingY }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-gradient pb-2">
            Building AI-powered web products that combine clean systems with real-world intelligence.
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
        >
          Full-stack developer focused on React ecosystems, intelligent interfaces, and scalable product architecture.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 10px 20px -10px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-sm"
          >
            View Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 10px 20px -10px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-4 border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-xl font-semibold transition-all backdrop-blur-sm"
          >
            <GithubIcon size={18} />
            GitHub
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};


export default Hero;
