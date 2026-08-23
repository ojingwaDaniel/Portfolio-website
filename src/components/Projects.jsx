import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Code2,
  Server,
  Smartphone,
  Shield,
  Settings,
} from "lucide-react";

import Invonix from "../../src/assets/dashboard.png";
import bildup from "../../src/assets/bildup.png";
import care4u from "../assets/care-4-U.png";
import gracieesFoodstuff from "../assets/graciees-foodstuff.png";
import jobBoard from "../assets/job-board.png";
import itSupport1 from "../assets/it-support-1.jpeg";
import itSupport2 from "../assets/it-support-2.jpeg";
import itSupport3 from "../assets/it-support-3.jpeg";
import itSupport4 from "../assets/it-support-4.jpeg";
import itSupport5 from "../assets/it-support-5.jpeg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Invoice Payment System",
      description:
        "An invoice management and payment platform that supports invoice generation, payment tracking, and secure online payments using Paystack, with a simple admin dashboard.",
      tags: ["Blade", "Laravel", "Mysql", "Paystack"],
      image: Invonix,
      category: "fullstack",
      github: "https://github.com/ojingwaDaniel/invoice-payment-system",
      live: "https://invonix.bcommz.com/login",
    },
    {
      id: 2,
      title: "Job Board",
      description:
        "A modern job board platform that enables employers to post job listings, manage applications, and connect with qualified candidates through an intuitive and responsive interface.",
      tags: ["Blade", "Laravel", "Mysql"],
      image: jobBoard,
      category: "fullstack",
      github: "https://github.com/ojingwaDaniel/Job-Board",
    },
    {
      id: 3,
      title: "BuildUp – Digital Marketing Agency Website",
      description:
        "A modern marketing agency website for BuildUp, designed to showcase digital marketing services, brand strategy, and growth solutions that help businesses turn ideas from vision to viral.",
      tags: ["React JS", "Tailwind CSS", "Hostinger"],
      image: bildup,
      category: "frontend",
      github: "https://github.com/ojingwaDaniel/Bildup-Agency-website",
      live: "https://bildup.net/",
    },
    {
      id: 4,
      title: "Care Just 4U – Healthcare Support Website",
      description:
        "A mobile-friendly healthcare support website designed for Care Just 4U, showcasing compassionate care services, personalized support options, and a warm, trust-focused user experience.",
      tags: ["React js", "UI Design", "Custom Css"],
      image: care4u,
      category: "frontend",
      github: "https://github.com/GhubTeam/care-just4U",
      live: "https://care-just-4-u.netlify.app/",
    },
    {
      id: 5,
      title: "Graciee's Foodstuff Export – Full-Stack Business Website",
      description:
        "A full-stack web application built with Laravel and Blade for backend management and React.js for the customer-facing frontend. The platform allows administrators to add, edit, and manage food products, while customers can browse premium food items and place orders easily via WhatsApp.",
      tags: ["Laravel", "Blade", "React JS", "MySQL", "WhatsApp Ordering"],
      image: gracieesFoodstuff,
      category: "fullstack",
      github: "https://github.com/ojingwaDaniel/Graciee-s-Foodstuff-Export",
      live: "https://graciees-foodstuff-export.netlify.app/",
    },
    {
      id: 6,
      title: "Event IT Support & Network Setup",
      description:
        "Provided on-site IT support and network setup for event management programs.",
      tags: ["IT Support", "Networking", "Event Tech"],
      image: itSupport1,
      category: "it-support",
      featured: true,
    },
    {
      id: 7,
      title: "Audio-Visual & System Setup",
      description:
        "Handled system setup and technical support for live event presentations.",
      tags: ["AV Setup", "Technical Support", "Events"],
      image: itSupport2,
      category: "it-support",
    },
    {
      id: 8,
      title: "Hardware & Device Support",
      description:
        "Provided hardware setup and troubleshooting during event operations.",
      tags: ["Hardware Support", "Troubleshooting", "Events"],
      image: itSupport3,
      category: "it-support",
    },
    {
      id: 9,
      title: "On-site Technical Assistance",
      description:
        "Supported event teams with real-time technical assistance and system monitoring.",
      tags: ["On-site Support", "IT Assistance", "Events"],
      image: itSupport4,
      category: "it-support",
    },
    {
      id: 10,
      title: "Event Technology Management",
      description:
        "Managed technical systems and ensured smooth IT operations throughout events.",
      tags: ["Event Tech", "System Management", "IT Support"],
      image: itSupport5,
      category: "it-support",
    },
  ];

  const filters = [
    { id: "all", label: "All Projects", icon: Code2 },
    { id: "fullstack", label: "Full Stack", icon: Server },
    { id: "frontend", label: "Frontend", icon: Smartphone },
    { id: "it-support", label: "IT Support", icon: Shield },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 mb-4">
            <span className="text-black dark:text-white font-semibold font-body">
              PORTFOLIO SHOWCASE
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6">
            Featured <span className="text-gray-600 dark:text-gray-400">Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-body max-w-2xl mx-auto">
            Showcasing both development projects and hands-on IT support
            experience
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
              className={`group inline-flex items-center px-6 py-3 rounded-full font-body font-medium transition-all duration-300 ${
                activeFilter === id
                  ? "bg-black dark:bg-white text-white dark:text-black shadow-lg"
                  : "border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
              }`}
            >
              <Icon
                className={`w-4 h-4 mr-2 transition-transform group-hover:rotate-12 ${
                  activeFilter === id
                    ? "text-white dark:text-black"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              />
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
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-[480px] flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 flex-shrink-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-body font-medium border border-white/20">
                    {project.category === "it-support"
                      ? "IT Support"
                      : project.category === "fullstack"
                      ? "Full Stack"
                      : "Frontend"}
                  </span>
                </div>

                {/* Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-body border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors border border-white/20"
                      aria-label="View code"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors border border-white/20"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 border-t-0 rounded-b-2xl">
                <div>
                  <h3 className="text-xl font-heading font-bold text-black dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-body text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 my-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-body font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project / IT Support indicator */}
                  <div className="flex items-center justify-between">
                    {project.live && project.live !== "#" ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-black dark:text-white font-body font-medium hover:text-gray-600 dark:hover:text-gray-400 transition-colors group/link text-sm"
                      >
                        View Project
                        <Eye className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    ) : project.category === "it-support" ? (
                      <span className="inline-flex items-center text-gray-600 dark:text-gray-400 font-body font-medium text-sm">
                        <Settings className="w-4 h-4 mr-2" />
                        IT Support Service
                      </span>
                    ) : null}

                    {project.featured && (
                      <span className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-body font-medium">
                        Featured
                      </span>
                    )}
                  </div>
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
              className="inline-flex items-center px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold font-body hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span className="mr-3">Discuss Your Project</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Ojingwa_Daniel_Nmesoma_CV.docx"
              className="inline-flex items-center px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group font-body font-medium text-gray-700 dark:text-gray-300"
              rel="noopener noreferrer"
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