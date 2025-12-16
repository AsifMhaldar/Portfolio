import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeart, 
  FaArrowUp, 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope,
  FaCode,
  FaCoffee,
  FaRegCopyright
} from 'react-icons/fa';
import { SiGmail, SiLeetcode } from 'react-icons/si';

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Show scroll-to-top button when scrolling down
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/asif-mhaldar-ab818b297",
      color: "hover:bg-blue-700 bg-blue-600"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/AsifMhaldar",
      color: "hover:bg-gray-900 bg-gray-800"
    },
    {
      icon: <SiGmail />,
      label: "Gmail",
      url: "mailto:asif.mhaldar03@gmail.com",
      color: "hover:bg-red-600 bg-red-500"
    },
    {
      icon: <SiLeetcode />,
      label: "LeetCode",
      url: "https://leetcode.com/u/AsifMhaldar/",
      color: "hover:bg-yellow-600 bg-yellow-500"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#Home" },
    { name: "About", href: "#About" },
    { name: "Education", href: "#education" },
    { name: "Work", href: "#Work" },
    { name: "Contact", href: "#Contact" }
  ];

  const technologies = [
    "React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "JavaScript"
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                <FaCode className="text-xl" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Asif Mhaldar
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer specializing in MERN stack applications. 
              Passionate about creating innovative solutions and seamless user experiences.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <FaCoffee className="text-amber-500" />
              <span className="text-sm">Fueled by coffee & code</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:underline transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Let's Connect</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:asif.mhaldar03@gmail.com" className="hover:underline">
                  asif.mhaldar03@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center mb-8">
          <h4 className="text-lg font-medium mb-4">Follow My Journey</h4>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full ${social.color} text-white shadow-lg transition-all duration-300`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <FaRegCopyright />
            <span>{currentYear} Asif Mhaldar. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-400">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaHeart className="text-red-500 mx-1" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="text-sm text-gray-500">
            <span>Version 1.0 • Last updated: {new Date().toLocaleDateString('en-US', { 
              month: 'long', 
              year: 'numeric' 
            })}</span>
          </div>
        </div>

        {/* Visitor Counter (Placeholder) */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">
              Thanks for visiting! Let's build something amazing together.
            </span>
          </div>
        </div>

        {/* Back to Top (Mobile) */}
        <div className="mt-8 md:hidden text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-full hover:bg-gray-700 transition-colors"
          >
            <FaArrowUp />
            <span>Back to Top</span>
          </button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="relative h-4 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-gray-800"
          ></path>
        </svg>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
}

export default Footer;