import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code2, Server, Smartphone, Shield, Wrench, Monitor, Settings, Cpu, Network } from 'lucide-react';

import Invonix from "../../src/assets/dashboard.png";
import bildup from "../../src/assets/bildup.png";
import care4u from "../assets/care-4-U.png";
import gracieesFoodstuff from '../assets/graciees-foodstuff.png';

// IT Support Images - Add these to your assets folder
// Make sure to create these images or use placeholders

import itSupport1 from "../assets/it-support-1.jpeg";
import itSupport2 from "../assets/it-support-2.jpeg";
import itSupport3 from "../assets/it-support-3.jpeg";
import itSupport4 from "../assets/it-support-4.jpeg";
import itSupport5 from "../assets/it-support-5.jpeg";



const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Invoice Payment System',
      description: 'An invoice management and payment platform that supports invoice generation, payment tracking, and secure online payments using Paystack, with a simple admin dashboard.',
      tags: ['Blade', 'Laravel', 'Mysql', 'Paystack'],
      image: Invonix,
      category: 'fullstack',
      github: 'https://github.com/ojingwaDaniel/invoice-payment-system',
      live: 'https://invonix.bcommz.com/login',
      featured: true,
    },
    {
      id: 2,
      title: 'BuildUp – Digital Marketing Agency Website',
      description: 'A modern marketing agency website for BuildUp, designed to showcase digital marketing services, brand strategy, and growth solutions that help businesses turn ideas from vision to viral.',
      tags: ['React JS', 'Tailwind CSS', 'Hostinger'],
      image: bildup,
      category: 'frontend',
      github: 'https://github.com/ojingwaDaniel/Bildup-Agency-website',
      live: 'https://bildup.net/',
      featured: true,
    },
    {
      id: 3,
      title: 'Care Just 4U – Healthcare Support Website',
      description: 'A mobile-friendly healthcare support website designed for Care Just 4U, showcasing compassionate care services, personalized support options, and a warm, trust-focused user experience.',
      tags: ['React js', 'UI Design', 'Custom Css'],
      image: care4u,
      category: 'frontend',
      github: 'https://github.com/GhubTeam/care-just4U',
      live: 'https://care-just-4-u.netlify.app/',
    },
    {
      id: 4,
      title: "Graciee's Foodstuff Export – Full-Stack Business Website",
      description: "A full-stack web application built with Laravel and Blade for backend management and React.js for the customer-facing frontend. The platform allows administrators to add, edit, and manage food products, while customers can browse premium food items and place orders easily via WhatsApp.",
      tags: ['Laravel', 'Blade', 'React JS', 'MySQL', 'WhatsApp Ordering'],
      image: gracieesFoodstuff,
      category: 'fullstack',
      github: 'https://github.com/ojingwaDaniel/Graciee-s-Foodstuff-Export',
      live: 'https://graciees-foodstuff-export.netlify.app/',
    },
  {
  id: 5,
  title: 'Event IT Support & Network Setup',
  description: 'Provided on-site IT support and network setup for event management programs.',
  tags: ['IT Support', 'Networking', 'Event Tech'],
  image: itSupport1,
  category: 'it-support',
  featured: true,
},
{
  id: 6,
  title: 'Audio-Visual & System Setup',
  description: 'Handled system setup and technical support for live event presentations.',
  tags: ['AV Setup', 'Technical Support', 'Events'],
  image: itSupport2,
  category: 'it-support',
},
{
  id: 7,
  title: 'Hardware & Device Support',
  description: 'Provided hardware setup and troubleshooting during event operations.',
  tags: ['Hardware Support', 'Troubleshooting', 'Events'],
  image: itSupport3,
  category: 'it-support',
},
{
  id: 8,
  title: 'On-site Technical Assistance',
  description: 'Supported event teams with real-time technical assistance and system monitoring.',
  tags: ['On-site Support', 'IT Assistance', 'Events'],
  image: itSupport4,
  category: 'it-support',
},
{
  id: 9,
  title: 'Event Technology Management',
  description: 'Managed technical systems and ensured smooth IT operations throughout events.',
  tags: ['Event Tech', 'System Management', 'IT Support'],
  image: itSupport5,
  category: 'it-support',
},

    
  ];

  const filters = [
    { id: 'all', label: 'All Projects', icon: Code2 },
    { id: 'fullstack', label: 'Full Stack', icon: Server },
    { id: 'frontend', label: 'Frontend', icon: Smartphone },
    { id: 'it-support', label: 'IT Support', icon: Shield },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  

 

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-500/20 mb-4">
            <span className="gradient-text font-semibold">PORTFOLIO SHOWCASE</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Showcasing both development projects and hands-on IT support experience
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`group inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === id
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg shadow-primary-500/25'
                  : 'glass-effect hover:bg-white/20 dark:hover:bg-dark-800/20'
              }`}
            >
              <Icon className={`w-4 h-4 mr-2 transition-transform group-hover:rotate-12 ${
                activeFilter === id ? 'text-white' : 'text-primary-500'
              }`} />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className={`group relative rounded-2xl overflow-hidden card-hover ${
                project.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/50 to-transparent" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    project.category === 'it-support' 
                      ? 'bg-blue-500/20 text-blue-600 dark:text-blue-400'
                      : project.category === 'fullstack'
                      ? 'bg-purple-500/20 text-purple-600 dark:text-purple-400'
                      : 'bg-green-500/20 text-green-600 dark:text-green-400'
                  }`}>
                    {project.category === 'it-support' ? 'IT Support' : 
                     project.category === 'fullstack' ? 'Full Stack' : 'Frontend'}
                  </span>
                </div>
                
                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full glass-effect text-xs font-medium backdrop-blur-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg glass-effect hover:bg-white/20 transition-colors"
                      aria-label="View code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg glass-effect hover:bg-white/20 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative p-6 glass-effect">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-300 mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary-500/10 dark:bg-primary-500/20 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* IT Support Services List */}
                {project.category === 'it-support' && project.services && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2">
                      Services Provided:
                    </h4>
                    <ul className="space-y-1">
                      {project.services.slice(0, 3).map((service, idx) => (
                        <li key={idx} className="flex items-center text-sm text-dark-600 dark:text-dark-400">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2" />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* View Project Button */}
                <div className="flex items-center justify-between">
                  {project.live && project.live !== '#' ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors group/link"
                    >
                      View Project
                      <Eye className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  ) : project.category === 'it-support' ? (
                    <span className="inline-flex items-center text-blue-500 font-medium">
                      <Settings className="w-4 h-4 mr-2" />
                      IT Support Service
                    </span>
                  ) : null}
                  
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 dark:text-yellow-400 text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        


        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold hover:shadow-xl hover:shadow-primary-500/25 transition-all duration-300 group"
            >
              <span className="mr-3">Discuss Your Project</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 rounded-full glass-effect hover:bg-white/20 dark:hover:bg-dark-800/20 transition-all duration-300 group"
            >
              <span className="mr-3">Download Resume</span>
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;