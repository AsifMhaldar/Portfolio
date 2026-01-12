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
      color: "from-blue-600 to-blue-800",
      iconColor: "text-blue-400"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/AsifMhaldar",
      color: "from-gray-800 to-gray-900",
      iconColor: "text-gray-300"
    },
    {
      icon: <SiGmail />,
      label: "Gmail",
      url: "mailto:asif.mhaldar03@gmail.com",
      color: "from-red-600 to-red-700",
      iconColor: "text-red-400"
    },
    {
      icon: <SiLeetcode />,
      label: "LeetCode",
      url: "https://leetcode.com/u/AsifMhaldar/",
      color: "from-yellow-600 to-yellow-700",
      iconColor: "text-yellow-400"
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
      {/* Animated Background matching Home page */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #06b6d4 1px, transparent 1px),
                           linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-110 active:scale-95 border border-cyan-500/30 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl" />
        </motion.button>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          
          {/* Brand & About */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="p-1.5 sm:p-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg backdrop-blur-sm border border-cyan-500/30">
                <FaCode className="text-lg sm:text-xl" />
              </div>
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Asif Mhaldar
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Full Stack Developer specializing in MERN stack applications. 
              Passionate about creating innovative solutions and seamless user experiences.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <FaCoffee className="text-amber-500" />
              <span className="text-xs sm:text-sm">Fueled by coffee & code</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Technologies</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-300 rounded-full hover:text-cyan-300 transition-colors duration-300 border border-gray-700/50 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Let's Connect</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-cyan-300 transition-colors">
                <FaEnvelope className="text-cyan-400" />
                <a href="mailto:asif.mhaldar03@gmail.com" className="text-sm sm:text-base hover:underline">
                  asif.mhaldar03@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs sm:text-sm">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4 text-gray-300">Follow My Journey</h4>
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 sm:p-3 rounded-full bg-gradient-to-br ${social.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 backdrop-blur-sm`}
                aria-label={social.label}
              >
                {React.cloneElement(social.icon, { className: "text-base sm:text-lg" })}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-6 sm:my-8"></div>

        {/* Copyright & Credits */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
            <FaRegCopyright />
            <span>{currentYear} Asif Mhaldar. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-400 text-xs sm:text-sm">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FaHeart className="text-red-500 mx-1" />
            </motion.span>
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="text-xs sm:text-sm text-gray-500">
            <span>Version 1.0 • Last updated: {new Date().toLocaleDateString('en-US', { 
              month: 'long', 
              year: 'numeric' 
            })}</span>
          </div>
        </div>

        {/* Visitor Counter (Placeholder) */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700/50">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm text-gray-400">
              Thanks for visiting! Let's build something amazing together.
            </span>
          </div>
        </div>

        {/* Back to Top (Mobile) */}
        <div className="mt-6 sm:mt-8 md:hidden text-center">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-300 rounded-full hover:text-cyan-300 transition-colors border border-gray-700/50"
          >
            <FaArrowUp />
            <span className="text-sm">Back to Top</span>
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
            className="fill-gray-900"
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