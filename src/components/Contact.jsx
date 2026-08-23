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

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_2t4kir2';
  const EMAILJS_TEMPLATE_ID = 'template_ct0jhlb';
  const EMAILJS_PUBLIC_KEY = 'T7bVF96pXUjnps1Eo';

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
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      showNotification('success', 'Message sent successfully! I\'ll get back to you within 24 hours.');
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (error) {
      let errorMessage = 'Failed to send message. Please try again or email me directly.';
      if (error.text) errorMessage = error.text;
      else if (error.message) errorMessage = error.message;
      
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
    { icon: Github, href: 'https://github.com/ojingwaDaniel', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/daniel-ojingwa-0a9450208/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/OjingwaDaniel', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 relative bg-white dark:bg-black">
      {/* Custom Notification - monochrome */}
      {notification && (
        <motion.div
          key={notification.id}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4 rounded-xl shadow-2xl backdrop-blur-sm border ${
            notification.type === 'success' 
              ? 'bg-black dark:bg-white text-white dark:text-black border-gray-700 dark:border-gray-300' 
              : 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black border-red-600 dark:border-red-400'
          }`}
          onAnimationComplete={() => {
            setTimeout(() => setNotification(null), 5000);
          }}
        >
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center">
              {notification.type === 'success' ? (
                <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
              )}
              <p className="font-body font-medium">{notification.message}</p>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="opacity-80 hover:opacity-100 ml-4 flex-shrink-0 text-2xl leading-none"
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
          <span className="inline-block px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 mb-4">
            <span className="text-black dark:text-white font-semibold font-body">GET IN TOUCH</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black dark:text-white mb-6">
            Let's Build <span className="text-gray-600 dark:text-gray-400">Together</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 font-body max-w-2xl mx-auto">
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
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-20 h-20 text-black dark:text-white mx-auto mb-6" />
                  <h3 className="text-2xl font-heading font-bold text-black dark:text-white mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-body mb-6">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-semibold font-body hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
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
                      className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-start space-x-3"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-red-600 dark:text-red-400 text-sm font-body font-medium mb-1">{error}</p>
                        <a 
                          href="mailto:ojingwadanny@gmail.com" 
                          className="text-gray-700 dark:text-gray-300 text-sm underline hover:text-black dark:hover:text-white inline-flex items-center font-body"
                        >
                          Click here to email me directly
                          <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-body font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all font-body"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-body font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all font-body"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-body font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all font-body"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-body font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white focus:ring-2 focus:ring-black dark:focus:ring-white focus:border-transparent outline-none transition-all resize-none font-body"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-body">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-8 py-3 rounded-xl font-body font-semibold transition-all duration-300 flex items-center justify-center min-w-[150px] shadow-lg hover:shadow-xl ${
                        isSubmitting
                          ? 'bg-gray-400 dark:bg-gray-600 text-white dark:text-gray-300 cursor-not-allowed'
                          : 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent rounded-full animate-spin mr-3" />
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
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : '_self'}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center mr-6 group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-black dark:text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-bold text-black dark:text-white text-lg mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 font-body">{info.value}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="p-8 rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-black dark:text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group text-center"
                  >
                    <Icon className="w-6 h-6 mx-auto mb-2 text-black dark:text-white group-hover:scale-125 transition-transform" />
                    <span className="text-sm font-body font-medium text-gray-600 dark:text-gray-400">
                      {label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Availability */}
            <div className="p-8 rounded-3xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <div className="flex items-center mb-4">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                </div>
                <span className="font-heading font-semibold text-black dark:text-white ml-3">
                  Currently Available for Work
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-body mb-6">
                I'm open to discussing new opportunities, freelance projects, or collaborations.
              </p>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-body space-y-2">
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
            
            {/* Direct Email */}
            <div className="p-8 rounded-3xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <h4 className="text-xl font-heading font-bold text-black dark:text-white mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
                Prefer Direct Email?
              </h4>
              <p className="text-gray-600 dark:text-gray-300 font-body mb-4">
                You can also reach me directly at:
              </p>
              <a
                href="mailto:ojingwadanny@gmail.com"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-xl font-body font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group"
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