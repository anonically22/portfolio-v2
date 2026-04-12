import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="container-custom h-16 flex items-center justify-between">
        <div className="font-bold text-xl tracking-tighter">
          PORTFOLIO<span className="text-blue-600">.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li className="cursor-pointer hover:text-blue-600 transition-colors">About</li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors">Work</li>
            <li className="cursor-pointer hover:text-blue-600 transition-colors">Contact</li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
