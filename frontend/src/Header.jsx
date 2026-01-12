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
  FaGraduationCap
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
    { name: 'Resume', href: 'https://drive.google.com/file/d/13PMxW2PVKaYlenrkPs3EWVA1ckfYR3Od/view?usp=sharing', icon: <FaFileDownload /> },
    { name: 'GitHub', href: 'https://github.com/AsifMhaldar', icon: <FaGithub /> },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/asif-mhaldar-ab818b297', icon: <FaLinkedin /> },
    { name: 'LeetCode', href: 'https://leetcode.com/', icon: <SiLeetcode /> },
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

  // Check if path is active
  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with NavLink */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <NavLink to="/" className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="block">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Asif Mhaldar
                </span>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  MERN Stack Developer
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
                className={({ isActive }) => `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 relative ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {({ isActive }) => (
                  <>
                    <motion.span 
                      className="text-sm"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Separator */}
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>

            {/* External Links */}
            {externalLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2.5 rounded-full ${
                  link.name === 'Resume'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                } transition-all duration-300 mx-1`}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}

            {/* Dark Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 ml-2 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
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
            className="lg:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 shadow-xl border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-4 py-6">
              {/* Navigation Items */}
              <div className="space-y-2 mb-6">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </NavLink>
                ))}
              </div>

              {/* External Links Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {externalLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl ${
                      link.name === 'Resume'
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                    } transition-colors font-medium`}
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
                className="flex items-center justify-center gap-3 w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </motion.button>
            </div>

            {/* Mobile Menu Footer */}
            <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Available for opportunities
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Progress Indicator - Only show on home page */}
      {location.pathname === '/' && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            initial={{ width: 0 }}
            animate={{
              width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`
            }}
            transition={{ type: 'spring', stiffness: 100 }}
          />
        </div>
      )}
    </motion.header>
  );
}

export default Header;