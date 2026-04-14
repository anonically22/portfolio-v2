import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', href: '#projects' },
    { name: 'Expertise', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="section-container">
        <div className="grid grid-cols-12 items-center">
          {/* Logo */}
          <div className="col-start-2 col-span-2">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-1 group"
            >
              <span className="text-3xl font-sans font-medium">*</span>
              <span className="text-xl font-bold tracking-tighter uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>AS</span>
            </a>
          </div>

          {/* Nav Links */}
          <div className="col-start-7 col-span-5 flex justify-end gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
