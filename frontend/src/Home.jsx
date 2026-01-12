import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ProfileImg from './assets/profile.jpg';
import { 
  FaLinkedin, 
  FaGithub, 
  FaArrowDown, 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaPalette,
  FaWhatsapp 
} from 'react-icons/fa';

// Import your components
import About from './About';
import Education from './Education';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';

function Home() {
  const textRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const educationSectionRef = useRef(null);
  const workSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  
  // Add theme state
  const [darkMode, setDarkMode] = useState(true);

  // Listen for theme changes from Header
  useEffect(() => {
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setDarkMode(isDark);
    };

    // Initial check
    handleThemeChange();

    // Observe DOM changes for theme class
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleTypingEffect = () => {
      const textElement = textRef.current;
      if (!textElement) return;

      const text = "MERN Stack Developer";
      let index = 0;
      
      const typeWriter = () => {
        if (index < text.length) {
          textElement.innerHTML = text.substring(0, index + 1) + 
            '<span class="animate-pulse">|</span>';
          index++;
          setTimeout(typeWriter, 100);
        } else {
          textElement.innerHTML = text + '<span class="animate-pulse opacity-0">|</span>';
        }
      };
      
      setTimeout(typeWriter, 500);
    };

    handleTypingEffect();
  }, []);

  // Responsive particle background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId;
    let resizeTimeout;

    // Track mouse position
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleResize = () => {
      // Debounce resize to prevent performance issues
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        setCanvasDimensions();
        initParticles();
      }, 200);
    };

    setCanvasDimensions();
    window.addEventListener('resize', handleResize);

    // Particle class - Update colors based on theme
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Responsive particle size
        this.size = Math.random() * (window.innerWidth < 640 ? 1.5 : 2) + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        // Different colors for light/dark mode
        if (darkMode) {
          this.color = `hsla(${Math.random() * 60 + 200}, 70%, 70%, ${Math.random() * 0.4 + 0.1})`;
        } else {
          this.color = `hsla(${Math.random() * 60 + 220}, 80%, 50%, ${Math.random() * 0.3 + 0.1})`;
        }
        this.baseColor = this.color;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Boundary check with wrap-around
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;

        // Mouse interaction (only on desktop)
        if (window.innerWidth > 768) {
          const dx = mouseRef.current.x - this.x;
          const dy = mouseRef.current.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 100;

          if (distance < maxDistance) {
            const angle = Math.atan2(dy, dx);
            const force = (maxDistance - distance) / maxDistance;
            this.x -= Math.cos(angle) * force * 2;
            this.y -= Math.sin(angle) * force * 2;
            
            // Change color when near mouse
            if (darkMode) {
              this.color = `hsla(${Math.random() * 60 + 250}, 100%, 80%, 0.8)`;
            } else {
              this.color = `hsla(${Math.random() * 60 + 240}, 100%, 60%, 0.8)`;
            }
          } else {
            this.color = this.baseColor;
          }
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles with responsive density
    const initParticles = () => {
      particlesArray = [];
      // Adjust particle count based on screen size
      let particleDensity;
      if (window.innerWidth < 640) {
        particleDensity = 8000; // Mobile: fewer particles
      } else if (window.innerWidth < 1024) {
        particleDensity = 10000; // Tablet: medium particles
      } else {
        particleDensity = 12000; // Desktop: more particles
      }
      
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / particleDensity);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    // Draw connections between particles
    const drawConnections = () => {
      const maxDistance = window.innerWidth < 640 ? 100 : 150;
      const lineWidth = window.innerWidth < 640 ? 0.5 : 0.8;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            let lineColor;
            if (darkMode) {
              lineColor = `hsla(${Math.random() * 60 + 210}, 100%, 80%, ${opacity * 0.3})`;
            } else {
              lineColor = `hsla(${Math.random() * 60 + 230}, 100%, 60%, ${opacity * 0.2})`;
            }
            
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw grid lines (only on larger screens)
    const drawGridLines = () => {
      if (window.innerWidth < 768) return; // Skip grid on mobile
      
      const gridSize = window.innerWidth < 1024 ? 60 : 80;
      const opacity = window.innerWidth < 1024 ? 0.03 : 0.05;
      
      if (darkMode) {
        ctx.strokeStyle = `hsla(210, 100%, 80%, ${opacity})`;
      } else {
        ctx.strokeStyle = `hsla(230, 100%, 60%, ${opacity * 0.5})`;
      }
      ctx.lineWidth = 0.3;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      drawGridLines();
      
      // Update and draw particles
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections
      drawConnections();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    animate();

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]); // Re-run when darkMode changes

  const scrollToSection = (section) => {
    let ref;
    switch(section) {
      case 'about': ref = aboutSectionRef; break;
      case 'education': ref = educationSectionRef; break;
      case 'work': ref = workSectionRef; break;
      case 'contact': ref = contactSectionRef; break;
      default: return;
    }
    
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen overflow-hidden relative ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Particle Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Responsive gradient overlays */}
      {darkMode ? (
        <>
          <div className="fixed inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/5 md:from-blue-900/10 md:via-transparent md:to-purple-900/10 pointer-events-none" />
          <div className="fixed inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent md:from-gray-900/20 md:via-transparent md:to-transparent pointer-events-none" />
        </>
      ) : (
        <>
          <div className="fixed inset-0 bg-gradient-to-br from-blue-200/20 via-transparent to-purple-200/20 md:from-blue-200/30 md:via-transparent md:to-purple-200/30 pointer-events-none" />
          <div className="fixed inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent md:from-white/20 md:via-transparent md:to-transparent pointer-events-none" />
        </>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        {/* Responsive animated blobs */}
        <div className={`absolute inset-0 overflow-hidden ${
          darkMode ? 'opacity-20 md:opacity-30' : 'opacity-10 md:opacity-15'
        }`}>
          <div className={`absolute top-5 left-5 w-40 h-40 md:top-10 md:left-10 md:w-72 md:h-72 rounded-full mix-blend-overlay filter blur-xl md:blur-3xl animate-blob ${
            darkMode ? 'bg-cyan-500' : 'bg-blue-400'
          }`}></div>
          <div className={`absolute top-20 right-5 w-40 h-40 md:top-40 md:right-10 md:w-72 md:h-72 rounded-full mix-blend-overlay filter blur-xl md:blur-3xl animate-blob animation-delay-2000 ${
            darkMode ? 'bg-blue-500' : 'bg-purple-400'
          }`}></div>
          <div className={`absolute bottom-10 left-1/4 w-40 h-40 md:bottom-20 md:left-1/3 md:w-72 md:h-72 rounded-full mix-blend-overlay filter blur-xl md:blur-3xl animate-blob animation-delay-4000 ${
            darkMode ? 'bg-purple-500' : 'bg-pink-400'
          }`}></div>
        </div>

        <div className="relative px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left w-full lg:w-1/2 xl:w-3/5"
            >
              {/* Greeting */}
              <div className="mb-3 sm:mb-4 md:mb-5">
                <span className={`text-xs xs:text-sm sm:text-base md:text-lg font-semibold tracking-wider ${
                  darkMode ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  👋 HELLO, MY NAME IS
                </span>
              </div>

              {/* Name with gradient - Responsive font sizes */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 md:mb-4">
                <span className={darkMode ? 'text-white' : 'text-gray-900'}>Asif </span>
                <span className={`bg-clip-text text-transparent ${
                  darkMode 
                    ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400' 
                    : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
                }`}>
                  Mhaldar
                </span>
              </h1>

              {/* Animated title */}
              <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6">
                <p className={`text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1 sm:mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  I am a 
                  <span className={`ml-1 sm:ml-2 font-bold ${
                    darkMode ? 'text-cyan-400' : 'text-blue-600'
                  }`}>
                    <span ref={textRef} className="inline-block min-h-[1.5em]"></span>
                  </span>
                </p>
              </div>

              {/* Description */}
              <p className={`leading-relaxed mb-4 sm:mb-5 md:mb-6 lg:mb-7 max-w-lg mx-auto lg:mx-0 text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Crafting modern web applications with cutting-edge technologies.
                Passionate about building scalable solutions with beautiful UI/UX.
              </p>

              {/* Tech Stack Icons - Responsive layout */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 md:gap-3 mb-4 sm:mb-5 md:mb-6">
                <div className={`flex items-center gap-1 sm:gap-1.5 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border text-xs sm:text-sm group hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-900/40 border-cyan-500/20 hover:shadow-cyan-500/30' 
                    : 'bg-white/80 border-blue-500/20 hover:shadow-blue-500/30'
                }`}>
                  <FaCode className={`text-xs sm:text-sm md:text-base group-hover:scale-110 transition-transform ${
                    darkMode ? 'text-cyan-400' : 'text-blue-600'
                  }`} />
                  <span className={`font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>React.js</span>
                </div>
                <div className={`flex items-center gap-1 sm:gap-1.5 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border text-xs sm:text-sm group hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-900/40 border-green-500/20 hover:shadow-green-500/30' 
                    : 'bg-white/80 border-green-500/20 hover:shadow-green-500/30'
                }`}>
                  <FaServer className={`text-xs sm:text-sm md:text-base group-hover:scale-110 transition-transform ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`} />
                  <span className={`font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>Node.js</span>
                </div>
                <div className={`flex items-center gap-1 sm:gap-1.5 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border text-xs sm:text-sm group hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-900/40 border-yellow-500/20 hover:shadow-yellow-500/30' 
                    : 'bg-white/80 border-yellow-500/20 hover:shadow-yellow-500/30'
                }`}>
                  <FaDatabase className={`text-xs sm:text-sm md:text-base group-hover:scale-110 transition-transform ${
                    darkMode ? 'text-yellow-400' : 'text-yellow-600'
                  }`} />
                  <span className={`font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>MongoDB</span>
                </div>
                <div className={`flex items-center gap-1 sm:gap-1.5 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border text-xs sm:text-sm group hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-900/40 border-purple-500/20 hover:shadow-purple-500/30' 
                    : 'bg-white/80 border-purple-500/20 hover:shadow-purple-500/30'
                }`}>
                  <FaPalette className={`text-xs sm:text-sm md:text-base group-hover:scale-110 transition-transform ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                  <span className={`font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-800'
                  }`}>Express.js</span>
                </div>
              </div>

              {/* Social Links - Responsive layout */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-6 sm:mb-7 md:mb-8">
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 w-full sm:w-auto">
                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/asif-mhaldar-ab818b297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center border ${
                      darkMode 
                        ? 'bg-gradient-to-br from-blue-600/80 to-blue-800/80 border-blue-500/30 hover:border-blue-400/50 hover:shadow-blue-500/40'
                        : 'bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500/50 hover:border-blue-400/70 hover:shadow-blue-500/40'
                    }`}
                  >
                    <FaLinkedin className="text-sm sm:text-base md:text-lg lg:text-xl group-hover:scale-110 transition-transform" />
                    <span className={`absolute -bottom-5 sm:-bottom-6 md:-bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] xs:text-xs font-medium whitespace-nowrap hidden sm:block ${
                      darkMode ? 'text-cyan-300' : 'text-blue-100'
                    }`}>
                      LinkedIn
                    </span>
                  </a>

                  {/* GitHub Button */}
                  <a
                    href="https://github.com/AsifMhaldar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center border ${
                      darkMode 
                        ? 'bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-gray-700/50 hover:border-gray-600/70 hover:shadow-gray-500/40'
                        : 'bg-gradient-to-br from-gray-700 to-gray-900 border-gray-600/50 hover:border-gray-500/70 hover:shadow-gray-500/40'
                    }`}
                  >
                    <FaGithub className="text-sm sm:text-base md:text-lg lg:text-xl group-hover:scale-110 transition-transform" />
                    <span className={`absolute -bottom-5 sm:-bottom-6 md:-bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] xs:text-xs font-medium whitespace-nowrap hidden sm:block ${
                      darkMode ? 'text-cyan-300' : 'text-gray-200'
                    }`}>
                      GitHub
                    </span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/919326307522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative backdrop-blur-sm text-white p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center border ${
                      darkMode 
                        ? 'bg-gradient-to-br from-green-600/80 to-green-800/80 border-green-500/30 hover:border-green-400/50 hover:shadow-green-500/40'
                        : 'bg-gradient-to-br from-green-600 to-green-800 border-green-500/50 hover:border-green-400/70 hover:shadow-green-500/40'
                    }`}
                  >
                    <FaWhatsapp className="text-sm sm:text-base md:text-lg lg:text-xl group-hover:scale-110 transition-transform" />
                    <span className={`absolute -bottom-5 sm:-bottom-6 md:-bottom-7 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] xs:text-xs font-medium whitespace-nowrap hidden sm:block ${
                      darkMode ? 'text-cyan-300' : 'text-green-100'
                    }`}>
                      WhatsApp
                    </span>
                  </a>
                </div>
                
                {/* Get In Touch Button - Responsive */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className={`w-full sm:w-auto px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 backdrop-blur-sm text-white rounded-lg sm:rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 border group ${
                    darkMode 
                      ? 'bg-gradient-to-r from-cyan-600/90 to-blue-600/90 border-cyan-500/30 hover:border-cyan-400/50 hover:shadow-cyan-500/40'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 border-blue-500/50 hover:border-blue-400/70 hover:shadow-blue-500/40'
                  }`}
                >
                  <span className="flex items-center justify-center gap-1 sm:gap-2">
                    Get In Touch
                    <FaArrowDown className="group-hover:animate-bounce text-xs sm:text-sm" />
                  </span>
                </motion.button>
              </div>
            </motion.div>

            {/* Right - Profile Image - Responsive sizes */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-4 sm:mt-6 md:mt-8 lg:mt-0"
            >
              <div className="relative">
                {/* Responsive glowing rings */}
                <div className={`absolute inset-0 rounded-full animate-spin-slow opacity-20 blur-md sm:blur-lg ${
                  darkMode 
                    ? 'bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500' 
                    : 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
                }`}></div>
                
                {/* Image container with glass effect */}
                <div className={`relative rounded-full p-0.5 sm:p-1 md:p-1.5 shadow-2xl backdrop-blur-md border ${
                  darkMode 
                    ? 'bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-purple-900/40 border-white/10' 
                    : 'bg-gradient-to-br from-blue-100/60 via-purple-100/60 to-pink-100/60 border-white/30'
                }`}>
                  <div className={`relative overflow-hidden rounded-full w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 border-4 sm:border-6 md:border-8 ${
                    darkMode ? 'border-gray-900/50' : 'border-white/50'
                  }`}>
                    <img
                      src={ProfileImg}
                      alt="Asif Mhaldar"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Responsive circular floating badges */}
                <div className="absolute inset-0">
                  {/* Top - Graduate Badge */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg animate-bounce-slow z-10 border ${
                    darkMode 
                      ? 'bg-gradient-to-r from-cyan-600/80 to-blue-600/80 border-cyan-400/30' 
                      : 'bg-gradient-to-r from-blue-600/90 to-blue-800/90 border-blue-400/50'
                  }`}>
                    <div className="text-[8px] xs:text-[10px] sm:text-xs font-bold">🎓 Grad 2025</div>
                  </div>
                  
                  {/* Right - MERN Badge (hidden on mobile) */}
                  <div className="hidden sm:block absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg animate-bounce-slow animation-delay-200 z-10 border">
                    <div className={`text-[8px] xs:text-[10px] sm:text-xs font-bold ${
                      darkMode 
                        ? 'bg-gradient-to-r from-purple-600/80 to-pink-600/80 border-purple-400/30' 
                        : 'bg-gradient-to-r from-purple-600/90 to-pink-600/90 border-purple-400/50'
                    }`}>
                      ⚛️ MERN
                    </div>
                  </div>
                  
                  {/* Bottom Right - Quick Learner (hidden on mobile) */}
                  <div className="hidden md:block absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg animate-bounce-slow animation-delay-400 z-10 border">
                    <div className={`text-[8px] xs:text-[10px] sm:text-xs font-bold ${
                      darkMode 
                        ? 'bg-gradient-to-r from-green-600/80 to-emerald-600/80 border-green-400/30' 
                        : 'bg-gradient-to-r from-green-600/90 to-emerald-600/90 border-green-400/50'
                    }`}>
                      Quick Learner
                    </div>
                  </div>
                  
                  {/* Bottom - AI/ML Badge */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg animate-bounce-slow animation-delay-600 z-10 border ${
                    darkMode 
                      ? 'bg-gradient-to-r from-orange-600/80 to-red-600/80 border-orange-400/30' 
                      : 'bg-gradient-to-r from-orange-600/90 to-red-600/90 border-orange-400/50'
                  }`}>
                    <div className="text-[8px] xs:text-[10px] sm:text-xs font-bold">🤖 AI/ML</div>
                  </div>
                  
                  {/* Bottom Left - GitHub Badge (hidden on mobile) */}
                  <div className="hidden sm:block absolute bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg animate-bounce-slow animation-delay-800 z-10 border">
                    <div className={`text-[8px] xs:text-[10px] sm:text-xs font-bold ${
                      darkMode 
                        ? 'bg-gradient-to-r from-gray-700/80 to-gray-900/80 border-gray-600/50' 
                        : 'bg-gradient-to-r from-gray-700/90 to-gray-900/90 border-gray-600/70'
                    }`}>
                      💻 GitHub
                    </div>
                  </div>
                  
                  {/* Top Left - Problem Solver (hidden on mobile) */}
                  <div className="hidden md:block absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm text-white p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg animate-bounce-slow animation-delay-1000 z-10 border">
                    <div className={`text-[8px] xs:text-[10px] sm:text-xs font-bold ${
                      darkMode 
                        ? 'bg-gradient-to-r from-indigo-600/80 to-blue-600/80 border-indigo-400/30' 
                        : 'bg-gradient-to-r from-indigo-600/90 to-blue-600/90 border-indigo-400/50'
                    }`}>
                      📚 Problem Solver
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator - Responsive */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
            <button 
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center transition-colors group"
            >
              <span className={`text-[10px] xs:text-xs sm:text-sm mb-1 group-hover:scale-110 transition-transform ${
                darkMode ? 'text-cyan-300 hover:text-cyan-100' : 'text-blue-600 hover:text-blue-800'
              }`}>
                Explore More
              </span>
              <FaArrowDown className={`text-xs sm:text-sm md:text-base animate-bounce ${
                darkMode ? 'text-cyan-300' : 'text-blue-600'
              }`} />
            </button>
          </div>
        </div>
      </section>

      {/* Sections with responsive padding */}
      <div ref={aboutSectionRef} className="relative z-10">
        <About />
      </div>

      <div ref={educationSectionRef} className="relative z-10">
        <Education />
      </div>

      <div ref={workSectionRef} className="relative z-10">
        <Work />
      </div>

      <div ref={contactSectionRef} className="relative z-10">
        <Contact />
      </div>
      {/* Add custom animations with responsive values */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
        
        /* Responsive canvas adjustments */
        @media (max-width: 640px) {
          canvas {
            filter: contrast(1.1) brightness(1.05);
          }
        }
        
        /* Responsive badge positioning */
        @media (max-width: 640px) {
          .badge-sm-hidden {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;