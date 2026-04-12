import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 border-t border-gray-100 dark:border-gray-900 transition-colors">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-sm font-bold tracking-tighter uppercase opacity-40">
          © {new Date().getFullYear()} Designed & Developed by You.
        </div>
        <div className="flex gap-8 text-sm font-bold tracking-widest uppercase text-gray-400">
          <a href="https://github.com" className="hover:text-blue-600 transition-colors">Github</a>
          <a href="https://linkedin.com" className="hover:text-blue-600 transition-colors">Linkedin</a>
          <a href="https://twitter.com" className="hover:text-blue-600 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
