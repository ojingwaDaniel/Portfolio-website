import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Code2, Server, Database, Cpu } from 'lucide-react';
import heroImage from "../assets/hero-image.jpeg";

const Hero = () => {
  const floatingIcons = [
    { Icon: Code2, delay: 0, color: 'text-gray-400 dark:text-gray-600' },
    { Icon: Server, delay: 0.2, color: 'text-gray-400 dark:text-gray-600' },
    { Icon: Database, delay: 0.4, color: 'text-gray-400 dark:text-gray-600' },
    { Icon: Cpu, delay: 0.6, color: 'text-gray-400 dark:text-gray-600' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-white dark:bg-black">
      {/* Animated Background Elements – monochrome */}
      <div className="absolute inset-0 z-0  overflow-hidden">
        {floatingIcons.map(({ Icon, delay, color }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-10`}
            style={{
              left: `${20 + index * 20}%`,
              top: `${20 + index * 15}%`,
            }}
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 3,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-24 h-24" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge – monochrome outline */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-black dark:border-white mb-6">
              <span className="w-2 h-2 bg-black dark:bg-white rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-semibold text-black dark:text-white">
                Full-Stack Developer Available
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-black dark:text-white mb-6">
              Building Digital
              <span className="block">Experiences</span>
              That Matter
            </h1>
            
            <p className="text-xl font-body text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I craft high-performance web applications with cutting-edge technologies.
              Passionate about creating seamless user experiences and scalable solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Primary button – solid black/white */}
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold text-lg hover:bg-gray-800 dark:hover:bg-gray-200 hover:shadow-xl transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              {/* Secondary button – outlined */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-full font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-gray-700 dark:text-gray-300"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-600 dark:text-gray-300 font-body">Follow me:</span>
              <div className="flex space-x-3">
                {[
                  { icon: Github, href: 'https://github.com/ojingwaDaniel', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/daniel-ojingwa-0a9450208/', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://x.com/OjingwaDaniel', label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 text-gray-700 dark:text-gray-300"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column – Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/80 dark:bg-gray-900/80 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
              {/* Profile Section */}
              <div className="relative mb-8">
                <div className="flex flex-col items-center">
                  {/* Profile Image Container */}
                  <div className="relative w-48 h-48 mb-4">
                    {/* Outer Glow – subtle gray */}
                    <div className="absolute -inset-4 bg-gray-300 dark:bg-gray-700 rounded-full opacity-20 blur-xl" />
                    
                    {/* Image Circle */}
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/50 dark:border-gray-700/50 shadow-2xl">
                      <img 
                        src={heroImage} 
                        alt="Profile" 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    
                    {/* Verification Badge – keep green or change to neutral? I'll keep green for a subtle accent */}
                    <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-black flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Name & Title */}
                  <div className="text-center">
                    <h3 className="text-2xl font-heading font-bold text-black dark:text-white mb-1">
                      Ojingwa Daniel Nmesoma
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-body font-medium">
                      Full-Stack Developer & IT Specialist
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Stats – monochrome */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { number: '50+', label: 'Projects' },
                  { number: '5+', label: 'Years Exp' },
                  { number: '100%', label: 'Satisfaction' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-heading font-bold text-black dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm font-body text-gray-600 dark:text-gray-300">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator – monochrome */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;