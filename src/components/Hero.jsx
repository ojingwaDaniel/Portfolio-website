import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Code2, Server, Database, Cpu } from 'lucide-react';
import heroImage from "../assets/hero-image.jpeg"

const Hero = () => {
  const floatingIcons = [
    { Icon: Code2, delay: 0, color: 'text-blue-500' },
    { Icon: Server, delay: 0.2, color: 'text-green-500' },
    { Icon: Database, delay: 0.4, color: 'text-purple-500' },
    { Icon: Cpu, delay: 0.6, color: 'text-yellow-500' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-500/20 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-semibold gradient-text">Full-Stack Developer Available</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Building Digital
              <span className="block gradient-text">Experiences</span>
              That Matter
            </h1>
            
            <p className="text-xl text-dark-600 dark:text-dark-300 mb-8 leading-relaxed">
              I craft high-performance web applications with cutting-edge technologies.
              Passionate about creating seamless user experiences and scalable solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 glass-effect rounded-full font-semibold text-lg hover:bg-white/20 dark:hover:bg-dark-800/20 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-dark-600 dark:text-dark-300">Follow me:</span>
              <div className="flex space-x-3">
                {[
                  { icon: Github, href: 'https://github.com/ojingwaDaniel', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/daniel-ojingwa-0a9450208/', label: 'LinkedIn' },
                  { icon: Twitter, href: 'https://x.com/OjingwaDaniel', label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-3 rounded-xl glass-effect hover:bg-white/20 dark:hover:bg-dark-800/20 transition-all duration-300 hover:scale-110"
                        aria-label={label}
                        target='_blank'
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - 3D Card Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/20 to-white/5 dark:from-dark-800/20 dark:to-dark-800/5 rounded-3xl p-8 shadow-2xl backdrop-blur-xl border border-white/20 dark:border-dark-700/20">
  {/* Profile Section */}
  <div className="relative mb-8">
    <div className="flex flex-col items-center">
      {/* Profile Image Container */}
      <div className="relative w-48 h-48 mb-4">
        {/* Outer Glow */}
        <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full opacity-20 blur-xl" />
        
        {/* Image Circle */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 dark:border-dark-700/30 shadow-2xl">
          <img 
            src={heroImage} 
            alt="Profile Picture" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Verification Badge */}
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-dark-900 flex items-center justify-center">
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      {/* Name & Title */}
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-1">Ojingwa Daniel Nmesoma</h3>
        <p className="text-primary-500 font-medium">Full-Stack Developer & IT Specialist</p>
      </div>
    </div>
  </div>
  
              {/* Rest of your stats, tech stack, etc... */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                  {[
                    { number: '50+', label: 'Projects' },
                    { number: '5+', label: 'Years Exp' },
                    { number: '100%', label: 'Satisfaction' },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                      <div className="text-sm text-dark-600 dark:text-dark-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
</div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-primary-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;