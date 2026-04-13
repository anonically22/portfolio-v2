import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2"
      aria-label="Toggle Theme"
    >
      <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
      <div className={`w-2 h-2 rounded-full ${theme === 'light' ? 'bg-black' : 'bg-white'}`} />
    </motion.button>
  );
};

export default ThemeToggle;
