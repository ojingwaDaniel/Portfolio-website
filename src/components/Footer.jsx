import React from 'react';
import { Heart, Code2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 mb-6 md:mb-0 group">
            <Code2 className="w-8 h-8 text-black dark:text-white group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-heading font-bold text-black dark:text-white">
              DevPortfolio
            </span>
          </a>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-body font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-black dark:text-white" />
          </button>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gray-200 dark:bg-gray-700 my-8" />
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 font-body text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 font-body">
            Made with
            <Heart className="w-4 h-4 mx-2 text-gray-400 dark:text-gray-500" />
            by Ojingwa Daniel
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;