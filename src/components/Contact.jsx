import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, Linkedin, Github, Twitter, AlertCircle, ExternalLink } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [notification, setNotification] = useState(null);

  // EmailJS Configuration - Updated with working test credentials
  const EMAILJS_SERVICE_ID = 'service_x8eawe8';
  const EMAILJS_TEMPLATE_ID = 'template_ct0jhlb';
  const EMAILJS_PUBLIC_KEY = 'T7bVF96pXUjnps1Eo';

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const showNotification = (type, message) => {
    setNotification({ type, message, id: Date.now() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields');
      showNotification('error', 'Please fill in all fields');
      setIsSubmitting(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      showNotification('error', 'Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result.text);

      // Show success notification
      showNotification('success', 'Message sent successfully! I\'ll get back to you within 24 hours.');

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Auto reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      
      // Check specific error
      let errorMessage = 'Failed to send message. Please try again or email me directly.';
      if (error.text) {
        errorMessage = error.text;
      } else if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
      showNotification('error', errorMessage);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (error) setError('');
  };

 

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'ojingwadanny@gmail.com',
      href: 'mailto:ojingwadanny@gmail.com',
      clickable: true
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 810 133 8296',
      href: 'tel:+2348101338296',
      clickable: true
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Abuja, Nigeria',
      href: 'https://www.google.com/maps/place/Abuja',
      clickable: true
    },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/ojingwaDaniel', 
      label: 'GitHub',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/daniel-ojingwa-0a9450208/', 
      label: 'LinkedIn',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    { 
      icon: Twitter, 
      href: 'https://x.com/OjingwaDaniel', 
      label: 'Twitter',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Custom Notification */}
      {notification && (
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4 rounded-xl shadow-2xl backdrop-blur-sm border border-white/20 ${
            notification.type === 'success' 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
              : 'bg-gradient-to-r from-red-500 to-rose-600'
          }`}
          onAnimationComplete={() => {
            setTimeout(() => setNotification(null), 5000);
          }}
        >
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              {notification.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-white mr-3 flex-shrink-0" />
              )}
              <p className="text-white font-medium">{notification.message}</p>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="text-white/80 hover:text-white ml-4 flex-shrink-0"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
      
     
      
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
            <span className="gradient-text font-semibold">GET IN TOUCH</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-3xl glass-effect shadow-xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-4">Message Sent Successfully!</h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-6">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start space-x-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-red-600 dark:text-red-400 text-sm font-medium mb-1">{error}</p>
                        <a 
                          href="mailto:ojingwadanny@gmail.com" 
                          className="text-red-700 dark:text-red-300 text-sm underline hover:text-red-800 dark:hover:text-red-200 inline-flex items-center"
                        >
                          Click here to email me directly
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl glass-effect focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl glass-effect focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl glass-effect focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-dark-700 dark:text-dark-300">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl glass-effect focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-dark-500 dark:text-dark-400">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center min-w-[150px] ${
                        isSubmitting
                          ? 'bg-primary-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-primary-500 to-purple-600 hover:shadow-xl hover:shadow-primary-500/25'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-3 w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards - FIXED CLICKABLE LINKS */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                info.clickable ? (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : '_self'}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-6 rounded-2xl glass-effect card-hover group cursor-pointer"
                    onClick={(e) => {
                      // Special handling for mailto links
                      if (info.href.startsWith('mailto:')) {
                        window.location.href = info.href;
                        e.preventDefault();
                      }
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary-500 to-purple-600 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                      <p className="text-dark-600 dark:text-dark-300">{info.value}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ) : (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-6 rounded-2xl glass-effect"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary-500 to-purple-600 flex items-center justify-center mr-6">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                      <p className="text-dark-600 dark:text-dark-300">{info.value}</p>
                    </div>
                  </motion.div>
                )
              ))}
            </div>
            
            {/* Social Links */}
            <div className="p-8 rounded-3xl glass-effect">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label, target, rel }) => (
                  <a
                    key={label}
                    href={href}
                    target={target}
                    rel={rel}
                    className="flex-1 p-4 rounded-xl glass-effect hover:bg-white/20 dark:hover:bg-dark-800/20 transition-all duration-300 group text-center card-hover cursor-pointer"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Availability Status */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-primary-500/10 to-purple-600/10 border border-primary-500/20">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <span className="font-semibold ml-3">Currently Available for Work</span>
              </div>
              <p className="text-dark-600 dark:text-dark-300 mb-6">
                I'm open to discussing new opportunities, freelance projects, or collaborations.
              </p>
              <div className="text-sm text-dark-600 dark:text-dark-300 space-y-2">
                <div className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>Timezone: WAT (GMT+1)</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">⏰</span>
                  <span>Response Time: Usually within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">💼</span>
                  <span>Available for: Full-time, Part-time, Freelance</span>
                </div>
              </div>
            </div>
            
            {/* Direct Email CTA - FIXED LINK */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-600/10 border border-blue-500/20">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-500" />
                Prefer Direct Email?
              </h4>
              <p className="text-dark-600 dark:text-dark-300 mb-4">
                You can also reach me directly at:
              </p>
              <a
                href="mailto:ojingwadanny@gmail.com"
                onClick={(e) => {
                  window.location.href = 'mailto:ojingwadanny@gmail.com';
                  e.preventDefault();
                }}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group cursor-pointer"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Me Directly
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;