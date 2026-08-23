import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Award, TrendingUp, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Ghub Technology Limited',
      role: 'Project Manager',
      period: '2025 - Present',
      location: 'Covent Garden, London',
      description:
        'Managed cross-functional teams to plan, execute, and deliver software projects on time and within scope. Coordinated project timelines, resources, and stakeholder communication while ensuring alignment with business objectives.',
      achievements: ['Project Leadership', 'Stakeholder Management', 'Process Optimization'],
      icon: Briefcase,
    },
    {
      company: 'Nix Technologies Limited',
      role: 'Software Developer (Intern)',
      period: '2025',
      location: 'Wuse 2, Abuja',
      description:
        'Designed and developed full-stack web applications using modern frameworks and best practices. Collaborated with designers and backend teams to deliver scalable, secure, and high-performance solutions for enterprise clients.',
      achievements: ['Full-Stack Development', 'API Integration', 'Scalable Systems'],
      icon: TrendingUp,
    },
    {
      company: 'Ghub Technologies Limited',
      role: 'Frontend Developer',
      period: '2022 - 2024',
      location: 'Covent Garden, London',
      description:
        'Developed responsive and user-friendly interfaces, translating product requirements into high-quality frontend solutions. Worked closely with product and backend teams to build MVPs and enhance user experience.',
      achievements: ['Frontend Engineering', 'UI/UX Implementation', 'Product Collaboration'],
      icon: Users,
    },
  ];

  const certifications = [
    { name: 'Laravel 11', issuer: 'Udemy', year: '2025' },
    { name: 'Google Cloud Professional', issuer: 'Google Cloud', year: '2022' },
    { name: 'React Advanced Concepts', issuer: 'Scrimba', year: '2022' },
    { name: 'HTML and CSS', issuer: 'Udemy', year: '2021' },
  ];

  const skills = [
    { skill: 'React/Next.js', level: 95 },
    { skill: 'Laravel', level: 95 },
    { skill: 'MySQL', level: 90 },
    { skill: 'Cloud Architecture', level: 88 },
    { skill: 'Database Design', level: 95 },
  ];

  return (
    <section id="experience" className="py-20 relative bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 mb-4">
            <span className="text-black dark:text-white font-semibold font-body">
              CAREER JOURNEY
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6">
            Experience & <span className="text-gray-600 dark:text-gray-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-body max-w-2xl mx-auto">
            My professional journey through innovative companies and impactful projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-black dark:text-white mb-8 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative mb-12 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-black dark:bg-white border-4 border-white dark:border-black" />

                  <div className="ml-16">
                    <div className="p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-heading font-bold text-black dark:text-white mb-1">
                            {exp.role}
                          </h4>
                          <div className="flex items-center text-gray-600 dark:text-gray-400 font-body font-medium mb-2">
                            <exp.icon className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-body font-medium">
                          {exp.period}
                        </div>
                      </div>

                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm font-body mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>

                      <p className="text-gray-700 dark:text-gray-300 font-body mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h5 className="font-heading font-semibold text-black dark:text-white mb-3">
                          Key Achievements
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-body font-medium"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Skills */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-black dark:text-white mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-gray-600 dark:text-gray-400" />
              Certifications
            </h3>

            <div className="space-y-6 mb-12">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-heading font-bold text-black dark:text-white">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-body">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-body font-medium">
                      {cert.year}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full" />
                </motion.div>
              ))}
            </div>

            {/* Skills Progress */}
            <h3 className="text-2xl font-heading font-bold text-black dark:text-white mb-8">
              Technical Expertise
            </h3>
            <div className="space-y-6">
              {skills.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-body font-medium text-black dark:text-white">
                      {item.skill}
                    </span>
                    <span className="font-heading font-bold text-gray-600 dark:text-gray-400">
                      {item.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-black dark:bg-white"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;