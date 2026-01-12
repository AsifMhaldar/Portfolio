import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaUser, 
  FaBriefcase, 
  FaEnvelope, 
  FaFileDownload,
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
  FaGraduationCap,
  FaCaretDown
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Start with dark mode enabled
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize dark mode on mount
  useEffect(() => {
    // Start with dark mode for consistency with Home page
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#0f172a'; // slate-900
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    
    if (newDarkMode) {
      // Switch to dark mode
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f172a'; // slate-900
      document.body.style.backgroundImage = 'none';
    } else {
      // Switch to light mode
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc'; // slate-50
      document.body.style.backgroundImage = 'linear-gradient(to bottom, #f1f5f9, #e2e8f0)';
    }
  };

  const navItems = [
    { name: 'Home', path: '/', icon: <FaHome />, id: 'home' },
    { name: 'About', path: '/about', icon: <FaUser />, id: 'about' },
    { name: 'Education', path: '/education', icon: <FaGraduationCap />, id: 'education' },
    { name: 'Work', path: '/work', icon: <FaBriefcase />, id: 'work' },
    { name: 'Contact', path: '/contact', icon: <FaEnvelope />, id: 'contact' },
  ];

  const externalLinks = [
    { name: 'Resume', href: 'https://drive.google.com/file/d/13PMxW2PVKaYlenrkPs3EWVA1ckfYR3Od/view?usp=sharing', icon: <FaFileDownload />, color: 'from-cyan-600 to-blue-600' },
    { name: 'GitHub', href: 'https://github.com/AsifMhaldar', icon: <FaGithub />, color: 'from-gray-700 to-gray-900' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/asif-mhaldar-ab818b297', icon: <FaLinkedin />, color: 'from-blue-600 to-blue-800' },
    { name: 'LeetCode', href: 'https://leetcode.com/', icon: <SiLeetcode />, color: 'from-orange-600 to-yellow-600' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? darkMode 
            ? 'bg-gray-900/90 backdrop-blur-xl shadow-2xl shadow-cyan-500/10 border-b border-gray-800/50' 
            : 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-500/10 border-b border-gray-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with NavLink */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer group relative"
          >
            <NavLink to="/" className="flex items-center gap-3 relative">
              {/* Glowing orb effect */}
              <div className={`absolute -inset-3 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                darkMode ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20' : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
              }`}></div>
              
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg ${
                  darkMode 
                    ? 'bg-gradient-to-br from-cyan-600 via-blue-600 to-purple-600 shadow-cyan-500/30' 
                    : 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-blue-500/30'
                }`}>
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div className={`absolute -inset-1 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 ${
                  darkMode ? 'bg-gradient-to-r from-cyan-600 to-purple-600' : 'bg-gradient-to-r from-blue-600 to-pink-600'
                }`}></div>
              </div>
              
              <div className="block">
                <span className={`text-2xl font-bold bg-clip-text text-transparent ${
                  darkMode 
                    ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400' 
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
                }`}>
                  Asif Mhaldar
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium flex items-center gap-1 ${
                    darkMode ? 'text-cyan-300' : 'text-blue-600'
                  }`}>
                    <span className={`w-2 h-2 rounded-full animate-pulse ${
                      darkMode ? 'bg-cyan-500' : 'bg-blue-500'
                    }`}></span>
                    MERN Stack Developer
                  </span>
                </div>
              </div>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 relative group ${
                  isActive
                    ? darkMode
                      ? 'bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 backdrop-blur-sm text-cyan-300 border border-cyan-500/30'
                      : 'bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 backdrop-blur-sm text-blue-600 border border-blue-500/30'
                    : darkMode
                      ? 'text-gray-300 hover:bg-gray-800/50 backdrop-blur-sm hover:text-cyan-300 hover:border hover:border-cyan-500/20'
                      : 'text-gray-700 hover:bg-gray-100/80 backdrop-blur-sm hover:text-blue-600 hover:border hover:border-blue-500/20'
                }`}
              >
                {({ isActive }) => (
                  <>
                    <motion.span 
                      className="text-sm"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="font-medium relative">
                      {item.name}
                      {!isActive && (
                        <span className={`absolute -bottom-1 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                          darkMode 
                            ? 'bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0' 
                            : 'bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0'
                        }`}></span>
                      )}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={`absolute -bottom-1 left-4 right-4 h-0.5 rounded-full shadow-lg ${
                          darkMode
                            ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 shadow-cyan-500/30'
                            : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-blue-500/30'
                        }`}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Separator with glow */}
            <div className="relative w-px h-8 mx-4">
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-${darkMode ? 'cyan' : 'blue'}-500/50 to-transparent`}></div>
            </div>

            {/* External Links */}
            <div className="flex items-center gap-2">
              {externalLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group relative p-3 rounded-xl backdrop-blur-sm transition-all duration-300 border ${
                    link.name === 'Resume'
                      ? `bg-gradient-to-br ${link.color} text-white ${darkMode ? 'border-cyan-500/30' : 'border-blue-500/30'} hover:shadow-xl ${darkMode ? 'hover:shadow-cyan-500/25' : 'hover:shadow-blue-500/25'}`
                      : darkMode
                        ? 'bg-gray-900/50 text-gray-300 border-gray-700/50 hover:border-cyan-500/30 hover:bg-gray-800/70'
                        : 'bg-gray-100/80 text-gray-700 border-gray-300/50 hover:border-blue-500/30 hover:bg-gray-200/80'
                  }`}
                  aria-label={link.name}
                >
                  {/* Tooltip */}
                  <span className={`absolute -top-10 left-1/2 transform -translate-x-1/2 text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border backdrop-blur-sm ${
                    darkMode 
                      ? 'bg-gray-900 text-cyan-300 border-cyan-500/30' 
                      : 'bg-white text-blue-600 border-blue-500/30'
                  }`}>
                    {link.name}
                    <FaCaretDown className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${
                      darkMode ? 'text-gray-900' : 'text-white'
                    }`} />
                  </span>
                  
                  {/* Icon */}
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  
                  {/* Glow effect */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode ? 'bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0' : 'bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0'
                  }`}></div>
                </motion.a>
              ))}

              {/* Dark/Light Mode Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`group relative p-3 rounded-xl backdrop-blur-sm ${
                  darkMode 
                    ? 'bg-gray-900/50 text-cyan-300 hover:text-yellow-300 border border-gray-700/50 hover:border-cyan-500/30 hover:bg-gray-800/70' 
                    : 'bg-gray-100/80 text-blue-600 hover:text-orange-500 border border-gray-300/50 hover:border-blue-500/30 hover:bg-gray-200/80'
                } transition-all duration-300`}
                aria-label="Toggle dark mode"
              >
                <span className="group-hover:rotate-180 transition-transform duration-500">
                  {darkMode ? <FaSun /> : <FaMoon />}
                </span>
                
                {/* Pulsing glow */}
                <div className={`absolute inset-0 rounded-xl animate-pulse-slow ${
                  darkMode ? 'bg-yellow-500/10' : 'bg-blue-500/10'
                }`}></div>
              </motion.button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden group relative p-3 rounded-xl backdrop-blur-sm ${
              darkMode
                ? 'bg-gray-900/50 text-cyan-300 hover:text-white border border-gray-700/50 hover:border-cyan-500/30'
                : 'bg-gray-100/80 text-blue-600 hover:text-purple-600 border border-gray-300/50 hover:border-blue-500/30'
            } transition-all`}
            aria-label="Toggle menu"
          >
            {/* Animated background */}
            <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              darkMode ? 'bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0' : 'bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0'
            }`}></div>
            
            {/* Menu icon */}
            <div className="relative">
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </div>
            
            {/* Pulsing dot */}
            <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse ${
              isOpen 
                ? darkMode ? 'bg-red-500' : 'bg-red-500' 
                : darkMode ? 'bg-cyan-500' : 'bg-blue-500'
            }`}></div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className={`lg:hidden absolute top-20 left-0 right-0 backdrop-blur-xl shadow-2xl border-t ${
              darkMode
                ? 'bg-gray-900/95 shadow-cyan-500/10 border-gray-800/50'
                : 'bg-white/95 shadow-blue-500/10 border-gray-200/50'
            }`}
          >
            <div className="relative px-4 py-6">
              {/* Navigation Items */}
              <div className="space-y-3 mb-8">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `flex items-center gap-4 px-5 py-4 rounded-xl transition-all backdrop-blur-sm border ${
                      isActive
                        ? darkMode
                          ? 'bg-gradient-to-r from-cyan-900/30 via-blue-900/30 to-purple-900/30 text-cyan-300 border-cyan-500/30'
                          : 'bg-gradient-to-r from-blue-50/80 via-purple-50/80 to-pink-50/80 text-blue-600 border-blue-500/30'
                        : darkMode
                          ? 'text-gray-300 hover:bg-gray-800/50 border-transparent hover:border-cyan-500/20'
                          : 'text-gray-700 hover:bg-gray-100/80 border-transparent hover:border-blue-500/20'
                    }`}
                  >
                    <motion.span 
                      className="text-lg"
                      variants={itemVariants}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="font-medium text-lg">{item.name}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className={`ml-auto w-2 h-2 rounded-full animate-pulse ${
                        darkMode ? 'bg-cyan-500' : 'bg-blue-500'
                      }`}></div>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* External Links Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {externalLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-center gap-3 px-4 py-3 rounded-xl backdrop-blur-sm border font-medium ${
                      link.name === 'Resume'
                        ? `bg-gradient-to-br ${link.color} text-white ${darkMode ? 'border-cyan-500/30' : 'border-blue-500/30'}`
                        : darkMode
                          ? 'bg-gray-800/50 text-gray-300 border-gray-700/50'
                          : 'bg-gray-100/80 text-gray-700 border-gray-300/50'
                    } transition-colors`}
                  >
                    {link.icon}
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Dark Mode Toggle */}
              <motion.button
                variants={itemVariants}
                onClick={() => {
                  toggleDarkMode();
                  setIsOpen(false);
                }}
                className={`flex items-center justify-center gap-4 w-full px-5 py-4 rounded-xl backdrop-blur-sm border font-medium text-lg ${
                  darkMode
                    ? 'bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-cyan-500/30'
                    : 'bg-gray-100/80 text-gray-700 border-gray-300/50 hover:border-blue-500/30'
                }`}
              >
                {darkMode ? <FaSun className="text-yellow-300" /> : <FaMoon className="text-blue-600" />}
                {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              </motion.button>
            </div>

            {/* Mobile Menu Footer */}
            <div className={`relative px-4 py-4 border-t ${
              darkMode ? 'border-gray-800/50 bg-gray-900/50' : 'border-gray-200/50 bg-gray-50/80'
            } backdrop-blur-sm`}>
              {/* Animated line */}
              <div className={`absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-${darkMode ? 'cyan' : 'blue'}-500/50 to-transparent`}></div>
              
              <p className={`text-center text-sm font-medium ${
                darkMode ? 'text-cyan-300/70' : 'text-blue-600/70'
              }`}>
                <span className="inline-flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full animate-pulse ${
                    darkMode ? 'bg-cyan-500' : 'bg-blue-500'
                  }`}></span>
                  Available for opportunities
                  <span className={`w-2 h-2 rounded-full animate-pulse ${
                    darkMode ? 'bg-cyan-500' : 'bg-blue-500'
                  }`}></span>
                </span>
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Progress Indicator - Only show on home page */}
      {location.pathname === '/' && (
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${
          darkMode ? 'bg-gray-800/50' : 'bg-gray-200/50'
        } overflow-hidden`}>
          <motion.div
            className={`h-full ${
              darkMode 
                ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500' 
                : 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'
            }`}
            initial={{ width: 0 }}
            animate={{
              width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          />
          {/* Glow effect */}
          <div className={`absolute inset-0 blur-sm ${
            darkMode 
              ? 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20' 
              : 'bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20'
          }`}></div>
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes ping-slow {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          70%, 100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </motion.header>
  );
}

export default Header;