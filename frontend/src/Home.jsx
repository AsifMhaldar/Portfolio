import React, { useEffect, useRef } from 'react';
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

  // Enhanced particle background with lines effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let linesArray = [];
    let animationFrameId;

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

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsla(${Math.random() * 60 + 200}, 70%, 70%, ${Math.random() * 0.4 + 0.1})`;
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

        // Mouse interaction
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
          this.color = `hsla(${Math.random() * 60 + 250}, 100%, 80%, 0.8)`;
        } else {
          this.color = this.baseColor;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Animated line class
    class AnimatedLine {
      constructor(x1, y1, x2, y2, color) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
        this.opacity = 0.1;
        this.speed = Math.random() * 0.02 + 0.01;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.phase += this.speed;
        this.opacity = 0.05 + Math.sin(this.phase) * 0.05;
      }

      draw() {
        const gradient = ctx.createLinearGradient(this.x1, this.y1, this.x2, this.y2);
        gradient.addColorStop(0, this.color.replace('0.1)', `${this.opacity})`));
        gradient.addColorStop(0.5, this.color.replace('0.1)', `${this.opacity * 1.5})`));
        gradient.addColorStop(1, this.color.replace('0.1)', `${this.opacity})`));
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.stroke();
      }
    }

    // Create particles
    const initParticles = () => {
      particlesArray = [];
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 12000);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    // Create lines between particles
    const createLines = () => {
      linesArray = [];
      const maxDistance = 150;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            const lineColor = `hsla(${Math.random() * 60 + 210}, 100%, 80%, ${opacity * 0.3})`;
            
            linesArray.push(new AnimatedLine(
              particlesArray[a].x,
              particlesArray[a].y,
              particlesArray[b].x,
              particlesArray[b].y,
              lineColor
            ));
          }
        }
      }
    };

    // Draw grid lines
    const drawGridLines = () => {
      const gridSize = 80;
      const lineWidth = 0.3;
      const opacity = 0.05;
      
      ctx.strokeStyle = `hsla(210, 100%, 80%, ${opacity})`;
      ctx.lineWidth = lineWidth;
      
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
      
      // Diagonal lines (optional)
      ctx.strokeStyle = `hsla(210, 100%, 80%, ${opacity * 0.5})`;
      const diagonalSpacing = 120;
      
      // Top-left to bottom-right
      for (let d = -canvas.height; d < canvas.width; d += diagonalSpacing) {
        ctx.beginPath();
        ctx.moveTo(d, 0);
        ctx.lineTo(d + canvas.height, canvas.height);
        ctx.stroke();
      }
      
      // Top-right to bottom-left
      for (let d = 0; d < canvas.width + canvas.height; d += diagonalSpacing) {
        ctx.beginPath();
        ctx.moveTo(d, 0);
        ctx.lineTo(d - canvas.height, canvas.height);
        ctx.stroke();
      }
    };

    // Draw connection lines to mouse
    const drawMouseConnections = () => {
      const maxDistance = 200;
      ctx.lineWidth = 0.5;
      
      particlesArray.forEach(particle => {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = 1 - (distance / maxDistance);
          
          // Create gradient from particle to mouse
          const gradient = ctx.createLinearGradient(
            particle.x, particle.y,
            mouseRef.current.x, mouseRef.current.y
          );
          gradient.addColorStop(0, particle.color);
          gradient.addColorStop(1, 'hsla(210, 100%, 100%, 0)');
          
          ctx.strokeStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
          
          // Draw a circle at mouse position when connecting
          if (distance < maxDistance / 2) {
            ctx.fillStyle = `hsla(210, 100%, 100%, ${opacity * 0.2})`;
            ctx.beginPath();
            ctx.arc(mouseRef.current.x, mouseRef.current.y, 5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });
    };

    // Draw animated wave lines
    const drawWaveLines = () => {
      const waveCount = 3;
      const waveHeight = 20;
      const waveSpeed = 0.002;
      const time = Date.now() * waveSpeed;
      
      for (let w = 0; w < waveCount; w++) {
        const yOffset = (canvas.height / (waveCount + 1)) * (w + 1);
        const amplitude = 50 + w * 10;
        
        ctx.strokeStyle = `hsla(${200 + w * 20}, 70%, 70%, 0.1)`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        
        for (let x = 0; x < canvas.width; x += 5) {
          const y = yOffset + Math.sin(x * 0.01 + time + w) * amplitude;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid lines
      drawGridLines();
      
      // Draw wave lines
      drawWaveLines();
      
      // Update and draw particles
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Create new lines based on current particle positions
      createLines();
      
      // Draw animated lines between particles
      linesArray.forEach(line => {
        line.update();
        line.draw();
      });
      
      // Draw mouse connections
      drawMouseConnections();
      
      // Draw a subtle central gradient
      const centerGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.min(canvas.width, canvas.height) / 2
      );
      centerGradient.addColorStop(0, 'hsla(210, 100%, 50%, 0.05)');
      centerGradient.addColorStop(1, 'hsla(210, 100%, 50%, 0)');
      ctx.fillStyle = centerGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize and start animation
    initParticles();
    animate();

    // Cleanup
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden relative">
      {/* Particle Background Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Gradient overlays for depth */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/30 to-gray-900/70 pointer-events-none" />

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        {/* Animated gradient blobs */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative px-4 sm:px-6 md:px-10 lg:px-20 pt-20 md:pt-32 z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-full lg:max-w-2xl animate-fadeInUp">
              {/* Greeting */}
              <div className="mb-4">
                <span className="text-base sm:text-lg md:text-xl text-cyan-400 font-semibold tracking-wider">
                  👋 HELLO, MY NAME IS
                </span>
              </div>

              {/* Name with gradient */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 text-white">
                Asif 
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}Mhaldar
                </span>
              </h1>

              {/* Animated title */}
              <div className="mb-4 sm:mb-6">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2">
                  I am a 
                  <span className="ml-2 font-bold text-cyan-400">
                    <span ref={textRef}></span>
                  </span>
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                Crafting modern web applications with cutting-edge technologies.
                Passionate about building scalable solutions with beautiful UI/UX.
              </p>

              {/* Tech Stack Icons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-1 sm:gap-2 bg-gray-900/40 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-cyan-500/30 hover:shadow-xl transition-all duration-300 border border-cyan-500/20 text-xs sm:text-sm group hover:scale-105">
                  <FaCode className="text-cyan-400 text-sm sm:text-base group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-200">React.js</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-gray-900/40 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-green-500/30 hover:shadow-xl transition-all duration-300 border border-green-500/20 text-xs sm:text-sm group hover:scale-105">
                  <FaServer className="text-green-400 text-sm sm:text-base group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-200">Node.js</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-gray-900/40 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-yellow-500/30 hover:shadow-xl transition-all duration-300 border border-yellow-500/20 text-xs sm:text-sm group hover:scale-105">
                  <FaDatabase className="text-yellow-400 text-sm sm:text-base group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-200">MongoDB</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-gray-900/40 backdrop-blur-sm px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hover:shadow-purple-500/30 hover:shadow-xl transition-all duration-300 border border-purple-500/20 text-xs sm:text-sm group hover:scale-105">
                  <FaPalette className="text-purple-400 text-sm sm:text-base group-hover:scale-110 transition-transform" />
                  <span className="font-medium text-gray-200">Express.js</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto">
                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/asif-mhaldar-ab818b297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-br from-blue-600/80 to-blue-800/80 backdrop-blur-sm text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-blue-500/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center border border-blue-500/30 hover:border-blue-400/50"
                  >
                    <FaLinkedin className="text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform" />
                    <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-cyan-300 whitespace-nowrap hidden sm:block">
                      LinkedIn
                    </span>
                  </a>

                  {/* GitHub Button */}
                  <a
                    href="https://github.com/AsifMhaldar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-gray-500/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center border border-gray-700/50 hover:border-gray-600/70"
                  >
                    <FaGithub className="text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform" />
                    <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-cyan-300 whitespace-nowrap hidden sm:block">
                      GitHub
                    </span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/919326307522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-br from-green-600/80 to-green-800/80 backdrop-blur-sm text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-green-500/40 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center border border-green-500/30 hover:border-green-400/50"
                  >
                    <FaWhatsapp className="text-lg sm:text-xl md:text-2xl group-hover:scale-110 transition-transform" />
                    <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-cyan-300 whitespace-nowrap hidden sm:block">
                      WhatsApp
                    </span>
                  </a>
                </div>
                
                {/* Get In Touch Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-600/90 to-blue-600/90 backdrop-blur-sm text-white rounded-lg sm:rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-cyan-500/40 hover:shadow-xl transition-all duration-300 border border-cyan-500/30 hover:border-cyan-400/50 group"
                >
                  <span className="flex items-center gap-2">
                    Get In Touch
                    <FaArrowDown className="group-hover:animate-bounce" />
                  </span>
                </motion.button>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="relative animate-fadeInUp animation-delay-300 mt-8 sm:mt-0">
              <div className="relative">
                {/* Multiple glowing rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-spin-slow opacity-20 blur-lg"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 animate-spin-slow-reverse opacity-10 blur-md"></div>
                
                {/* Image container with glass effect */}
                <div className="relative bg-gradient-to-br from-cyan-900/40 via-blue-900/40 to-purple-900/40 rounded-full p-1 sm:p-1.5 shadow-2xl backdrop-blur-md border border-white/10">
                  <div className="relative overflow-hidden rounded-full w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 border-4 sm:border-6 md:border-8 border-gray-900/50">
                    <img
                      src={ProfileImg}
                      alt="Asif Mhaldar"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10"></div>
                  </div>
                </div>

                {/* Circular floating badges */}
                <div className="absolute inset-0">
                  {/* Top - Graduate Badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow z-10 border border-cyan-400/30">
                    <div className="text-[10px] xs:text-xs font-bold">🎓 Grad 2025</div>
                  </div>
                  
                  {/* Right - MERN Badge */}
                  <div className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow animation-delay-200 z-10 border border-purple-400/30">
                    <div className="text-[10px] xs:text-xs font-bold">⚛️ MERN</div>
                  </div>
                  
                  {/* Bottom Right - Quick Learner */}
                  <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-green-600/80 to-emerald-600/80 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow animation-delay-400 z-10 border border-green-400/30">
                    <div className="text-[10px] xs:text-xs font-bold">Quick Learner</div>
                  </div>
                  
                  {/* Bottom - AI/ML Badge */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow animation-delay-600 z-10 border border-orange-400/30">
                    <div className="text-[10px] xs:text-xs font-bold">🤖 AI/ML</div>
                  </div>
                  
                  {/* Bottom Left - GitHub Badge */}
                  <div className="absolute bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-gray-700/80 to-gray-900/80 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow animation-delay-800 z-10 border border-gray-600/50">
                    <div className="text-[10px] xs:text-xs font-bold">💻 GitHub</div>
                  </div>
                  
                  {/* Top Left - Problem Solver */}
                  <div className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600/80 to-blue-600/80 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow animation-delay-1000 z-10 border border-indigo-400/30">
                    <div className="text-[10px] xs:text-xs font-bold">📚 Problem Solver</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
            <button 
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center text-cyan-300 hover:text-cyan-100 transition-colors group"
            >
              <span className="text-xs sm:text-sm mb-1 sm:mb-2 group-hover:scale-110 transition-transform">Explore More</span>
              <FaArrowDown className="text-sm sm:text-base animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div ref={aboutSectionRef} className="relative z-10 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent">
        <About />
      </div>

      <div ref={educationSectionRef} className="relative z-10 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent">
        <Education />
      </div>

      <div ref={workSectionRef} className="relative z-10 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent">
        <Work />
      </div>

      <div ref={contactSectionRef} className="relative z-10 bg-gradient-to-b from-transparent via-gray-900/40 to-transparent">
        <Contact />
      </div>

      {/* Add custom animations */}
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
        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 30s linear infinite;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite;
        }
        
        /* Particle glow effect */
        canvas {
          filter: contrast(1.2) brightness(1.1);
        }
      `}</style>
    </div>
  );
}

export default Home;