import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Coffee,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Laptop,
  Zap,
  Star
} from 'lucide-react';

const About = () => {
  const floatingIcons = [
    { Icon: Award, delay: 0, color: 'text-gray-400 dark:text-gray-600', left: '10%', top: '15%' },
    { Icon: Users, delay: 0.3, color: 'text-gray-400 dark:text-gray-600', left: '85%', top: '20%' },
    { Icon: Coffee, delay: 0.6, color: 'text-gray-400 dark:text-gray-600', left: '15%', top: '70%' },
    { Icon: Laptop, delay: 0.9, color: 'text-gray-400 dark:text-gray-600', left: '75%', top: '80%' },
    { Icon: Sparkles, delay: 1.2, color: 'text-gray-400 dark:text-gray-600', left: '50%', top: '10%' },
  ];

  const stats = [
    { value: '50+', label: 'Projects Completed', icon: CheckCircle2 },
    { value: '5+', label: 'Years Experience', icon: Star },
    { value: '100%', label: 'Client Satisfaction', icon: Users },
    { value: '24/7', label: 'Support Available', icon: Zap },
  ];

  const highlights = [
    'Full-Stack Architecture Design',
    'API Development & Integration',
    'Performance Optimization',
    'Team Collaboration & Mentoring'
  ];

  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {floatingIcons.map(({ Icon, delay, color, left, top }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-10`}
            style={{ left, top }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-20 h-20 md:w-28 md:h-28" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 mb-4">
            <span className="w-2 h-2 bg-black dark:bg-white rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-black dark:text-white">Get To Know Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-4">
            About <span className="text-gray-600 dark:text-gray-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg font-body">
            Passionate developer dedicated to crafting exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-3xl p-8 md:p-10 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
              <h3 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
                <span className="text-black dark:text-white">Ojingwa Daniel Nmesoma</span>
                <span className="text-xs bg-green-500/20 text-green-500 px-2 py-1 rounded-full">Available</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-body">
                I'm a Full-Stack Developer and IT Specialist with over 5 years of experience 
                building high-performance web and mobile applications. My journey in tech started 
                with a curiosity for how things work, which evolved into a passion for creating 
                elegant solutions to complex problems.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 font-body">
                I specialize in the Laravel ecosystem for robust backends and React for dynamic 
                frontends. I believe in writing clean, maintainable code and continuously learning 
                new technologies to stay at the forefront of web development.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-black dark:text-white" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 font-body">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 group"
              >
                Let's Connect
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Stats & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 text-center backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-black dark:text-white mx-auto mb-3" />
                  <div className="text-3xl font-heading font-bold text-black dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300 font-body">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy Card */}
            <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <h4 className="text-xl font-heading font-bold mb-3 flex items-center gap-2 text-black dark:text-white">
                <Sparkles className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                My Philosophy
              </h4>
              <p className="text-gray-600 dark:text-gray-300 font-body">
                "Code is poetry in motion. Every line tells a story, every function solves a puzzle. 
                I strive to write code that not only works flawlessly but also inspires those who read it."
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="w-8 h-px bg-gray-400 dark:bg-gray-600" />
                <span className="font-body">Write once, maintain forever</span>
              </div>
            </div>

            {/* Interests */}
            <div className="flex flex-wrap gap-3">
              {['Open Source', 'Tech Writing', 'UI/UX Design', 'AI & ML', 'Cloud Computing'].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-default text-gray-700 dark:text-gray-300 font-body"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;