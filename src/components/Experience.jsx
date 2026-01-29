import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award, TrendingUp, Users } from 'lucide-react';

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
    color: 'from-blue-500 to-cyan-500',
  },
  {
    company: 'Nix Technologies Limited',
    role: 'Software Developer(Intern)',
    period: '2025',
    location: 'Wuse 2, Abuja',
    description:
      'Designed and developed full-stack web applications using modern frameworks and best practices. Collaborated with designers and backend teams to deliver scalable, secure, and high-performance solutions for enterprise clients.',
    achievements: ['Full-Stack Development', 'API Integration', 'Scalable Systems'],
    icon: TrendingUp,
    color: 'from-purple-500 to-pink-500',
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
    color: 'from-green-500 to-emerald-500',
  },
];


  const certifications = [
    { name: 'Laravel 11 ', issuer: 'Udemy', year: '2025' },
    { name: 'Google Cloud Professional', issuer: 'Google Cloud', year: '2022' },
    { name: 'React Advanced Concepts', issuer: 'Scrimba', year: '2022' },
    { name: 'HTML and Css', issuer: 'Udemy', year: '2021' },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 dark:bg-primary-500/20 mb-4">
            <span className="gradient-text font-semibold">CAREER JOURNEY</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            My professional journey through innovative companies and impactful projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-primary-500" />
              Work Experience
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/20 via-primary-500/50 to-primary-500/20" />
              
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
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 border-4 border-white dark:border-dark-900" />
                  
                  <div className="ml-16">
                    {/* Card */}
                    <div className="p-6 rounded-2xl glass-effect card-hover">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                          <div className="flex items-center text-primary-500 font-medium mb-2">
                            <exp.icon className="w-4 h-4 mr-2" />
                            {exp.company}
                          </div>
                        </div>
                        <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-medium`}>
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-dark-600 dark:text-dark-300 text-sm mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                      
                      <p className="text-dark-700 dark:text-dark-300 mb-6">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div>
                        <h5 className="font-semibold mb-3 text-dark-700 dark:text-dark-300">Key Achievements</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.achievements.map((achievement, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1.5 rounded-full bg-primary-500/10 dark:bg-primary-500/20 text-sm font-medium"
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
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Award className="w-6 h-6 mr-3 text-primary-500" />
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
                  className="p-4 rounded-xl glass-effect card-hover"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold">{cert.name}</h4>
                      <p className="text-sm text-dark-600 dark:text-dark-300">{cert.issuer}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary-500/10 dark:bg-primary-500/20 text-sm font-medium">
                      {cert.year}
                    </span>
                  </div>
                  <div className="w-full h-1 bg-gradient-to-r from-primary-500/20 to-primary-500 rounded-full" />
                </motion.div>
              ))}
            </div>
            
            {/* Skills Progress */}
            <h3 className="text-2xl font-bold mb-8">Technical Expertise</h3>
            <div className="space-y-6">
              {[
                { skill: 'React/Next.js', level: 95 },
                { skill: 'Laravel', level: 95 },
                { skill: 'Mysql', level: 90 },
                { skill: 'Cloud Architecture', level: 88 },
                { skill: 'Database Design', level: 95 },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{item.skill}</span>
                    <span className="gradient-text font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-dark-200 dark:bg-dark-800 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-primary-500 to-purple-600"
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