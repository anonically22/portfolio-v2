import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-gray-900" />
      ) : (
        <Sun size={20} className="text-yellow-400" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
