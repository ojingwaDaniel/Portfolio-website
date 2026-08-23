import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Server,
  Database,
  Cpu,
  Layout,
  Smartphone,
  Braces,
  Gem,
  FileCode,
  Sparkles,
} from 'lucide-react';

const Skills = () => {
  const floatingIcons = [
    { Icon: Code2, delay: 0, color: 'text-gray-400 dark:text-gray-600', left: '5%', top: '20%' },
    { Icon: Server, delay: 0.4, color: 'text-gray-400 dark:text-gray-600', left: '90%', top: '30%' },
    { Icon: Database, delay: 0.8, color: 'text-gray-400 dark:text-gray-600', left: '10%', top: '75%' },
    { Icon: Cpu, delay: 1.2, color: 'text-gray-400 dark:text-gray-600', left: '85%', top: '70%' },
    { Icon: Smartphone, delay: 1.6, color: 'text-gray-400 dark:text-gray-600', left: '50%', top: '90%' },
  ];

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: Layout,
      skills: [
        { name: "HTML5 & CSS3", level: 95, icon: FileCode },
        { name: "JavaScript (ES6+)", level: 90, icon: Braces },
        { name: "React JS", level: 92, icon: Code2 },
        { name: "Tailwind CSS", level: 88, icon: Layout },
      ]
    },
    {
      name: "Backend Development",
      icon: Server,
      skills: [
        { name: "PHP", level: 90, icon: Braces },
        { name: "Laravel", level: 92, icon: Gem },
        { name: "Node.js", level: 85, icon: Server },
        { name: "RESTful APIs", level: 88, icon: Code2 },
      ]
    },
    {
      name: "Mobile & Database",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 87, icon: Smartphone },
        { name: "Database Design", level: 85, icon: Database },
        { name: "MySQL/PostgreSQL", level: 88, icon: Database },
        { name: "MongoDB", level: 80, icon: Database },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="relative overflow-hidden py-20 md:py-28 bg-white dark:bg-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {floatingIcons.map(({ Icon, delay, color, left, top }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} opacity-10`}
            style={{ left, top }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 5,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-24 h-24 md:w-32 md:h-32" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 mb-4">
            <span className="w-2 h-2 bg-black dark:bg-white rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-black dark:text-white">What I Bring To The Table</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-4">
            Technical <span className="text-gray-600 dark:text-gray-400">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg font-body">
            Specialized in modern frameworks and best practices
          </p>
        </motion.div>

        {/* Skills Grid - Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div key={catIndex} variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-gray-200 dark:bg-gray-700">
                  <category.icon className="w-6 h-6 text-black dark:text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-black dark:text-white">{category.name}</h3>
                <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="bg-white/80 dark:bg-gray-900/80 rounded-2xl p-5 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg group cursor-default"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-gray-200 dark:bg-gray-700">
                        <skill.icon className="w-6 h-6 text-black dark:text-white" />
                      </div>
                      <span className="text-sm font-heading font-bold text-black dark:text-white">
                        {skill.level}%
                      </span>
                    </div>
                    <h4 className="text-lg font-heading font-bold text-black dark:text-white mb-3">{skill.name}</h4>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full rounded-full bg-black dark:bg-white"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-white/80 dark:bg-gray-900/80 rounded-3xl p-8 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <h3 className="text-xl font-heading font-bold text-black dark:text-white text-center mb-8 flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              Other Technologies I Work With
              <Sparkles className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Git & GitHub", "Docker", "Redis", "WebSockets", 
                "Jest", "Vite", "Figma", "AWS (EC2, S3)", "Postman"
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 cursor-default text-gray-700 dark:text-gray-300 font-body"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;