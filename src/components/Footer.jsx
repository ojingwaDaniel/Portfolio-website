import React from 'react';
import { Heart, Code2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-500/5" />
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 mb-6 md:mb-0 group">
            <Code2 className="w-8 h-8 text-primary-500 group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-bold gradient-text">DevPortfolio</span>
          </a>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-dark-700 dark:text-dark-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass-effect hover:bg-white/20 dark:hover:bg-dark-800/20 transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent my-8" />
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-600 dark:text-dark-300 text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          
          <div className="flex items-center text-dark-600 dark:text-dark-300">
            Made with
            <Heart className="w-4 h-4 mx-2 text-red-500 fill-red-500 animate-pulse" />
            by Full-Stack Developer
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;