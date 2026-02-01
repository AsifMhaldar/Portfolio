import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaFileDownload, 
  FaPaperPlane, 
  FaBriefcase,
  FaHandshake
} from 'react-icons/fa';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  // Enhanced particle background with lines effect (same as Home.jsx)
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
      
      // Diagonal lines
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

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <section id="Contact" className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <div className="inline-block mb-2 sm:mb-3">
              <span className="text-sm md:text-lg text-cyan-400 font-semibold tracking-wider">
                📱 CONTACT ME
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
              Let's <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
              Have a project in mind or want to discuss opportunities? Feel free to reach out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {/* Left Column - Contact Form & Quick Connect */}
            <div className="space-y-4">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-2xl shadow-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg backdrop-blur-sm">
                    <FaPaperPlane className="text-sm sm:text-base text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Send Message</h3>
                </div>
                
                <form
                  action="https://formspree.io/f/mzzakewv"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-2 sm:space-y-3"
                >
                  <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="username"
                        required
                        placeholder="Asif Mhaldar"
                        className="w-full px-3 py-2 rounded-lg bg-gray-900/50 border border-gray-700/50 text-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 text-sm placeholder-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-400 mb-1">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="asif.mhaldar03@gmail.com"
                        className="w-full px-3 py-2 rounded-lg bg-gray-900/50 border border-gray-700/50 text-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 text-sm placeholder-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Project Inquiry"
                      className="w-full px-3 py-2 rounded-lg bg-gray-900/50 border border-gray-700/50 text-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 text-sm placeholder-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Hello, I'd like to discuss..."
                      className="w-full px-3 py-2 rounded-lg bg-gray-900/50 border border-gray-700/50 text-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-300 resize-none text-sm placeholder-gray-500"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 border border-cyan-500/30"
                  >
                    <FaPaperPlane className="text-xs" />
                    Send Message
                  </motion.button>
                </form>

                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 sm:mt-3 p-2 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-700/30 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-2 text-green-400 text-xs">
                      <span>✅</span>
                      <span className="font-medium">Message sent! I'll respond within 24 hours.</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Quick Connect */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm p-4 rounded-2xl shadow-2xl border border-cyan-500/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <FaPaperPlane className="text-sm text-cyan-400" />
                  <h4 className="text-sm font-bold text-white">Quick Connect</h4>
                </div>
                
                <div className="grid grid-cols-4 gap-2">
                  <a
                    href="https://www.linkedin.com/in/asif-mhaldar-ab818b297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:from-gray-800/50 hover:to-gray-700/50 p-2 rounded-lg text-center transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/30"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <FaLinkedin className="text-sm text-cyan-400" />
                      <span className="text-xs text-gray-300">LinkedIn</span>
                    </div>
                  </a>
                  
                  <a
                    href="mailto:asifmhaldar27@gmail.com"
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:from-gray-800/50 hover:to-gray-700/50 p-2 rounded-lg text-center transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/30"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <FaEnvelope className="text-sm text-cyan-400" />
                      <span className="text-xs text-gray-300">Email</span>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/AsifMhaldar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:from-gray-800/50 hover:to-gray-700/50 p-2 rounded-lg text-center transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/30"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <FaGithub className="text-sm text-cyan-400" />
                      <span className="text-xs text-gray-300">GitHub</span>
                    </div>
                  </a>
                  
                  <a
                    href="https://drive.google.com/file/d/13PMxW2PVKaYlenrkPs3EWVA1ckfYR3Od/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 hover:from-gray-800/50 hover:to-gray-700/50 p-2 rounded-lg text-center transition-all duration-300 border border-gray-700/50 hover:border-cyan-500/30"
                  >
                    <div className="flex flex-col items-center gap-1">
                      <FaFileDownload className="text-sm text-cyan-400" />
                      <span className="text-xs text-gray-300">Resume</span>
                    </div>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Contact Info, Availability & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              {/* Contact Details & Availability in one row */}
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                {/* Contact Details */}
                <div className="bg-gradient-to-br from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-2xl border border-gray-700/50">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <div className="p-1.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded backdrop-blur-sm">
                      <FaEnvelope className="text-xs sm:text-sm text-cyan-400" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">Contact Info</h3>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1 sm:p-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded backdrop-blur-sm">
                        <FaEnvelope className="text-xs text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-gray-400">Email</p>
                        <a 
                          href="mailto:asifmhaldar27@gmail.com"
                          className="text-cyan-300 hover:text-cyan-200 text-xs sm:text-sm"
                        >
                          asif.mhaldar03@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="p-1 sm:p-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded backdrop-blur-sm">
                        <FaMapMarkerAlt className="text-xs text-purple-400" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-gray-400">Location</p>
                        <p className="text-gray-300 text-xs sm:text-sm">Pune, India</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="p-1 sm:p-1.5 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded backdrop-blur-sm">
                        <FaFileDownload className="text-xs text-green-400" />
                      </div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-gray-400">Resume</p>
                        <a
                          href="https://drive.google.com/file/d/1KayLL33KqtHhtfFJKN6idWW7ZPFTqfNv/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-300 hover:text-cyan-200 text-xs sm:text-sm"
                        >
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-2xl border border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <FaBriefcase className="text-xs sm:text-sm text-cyan-400" />
                    <h4 className="text-xs sm:text-sm font-bold text-white">Available For</h4>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                    <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 p-1.5 sm:p-2 rounded-lg text-center border border-gray-700/30 backdrop-blur-sm">
                      <FaHandshake className="text-xs mb-1 mx-auto text-cyan-400" />
                      <span className="text-[10px] sm:text-xs font-medium text-gray-300">Freelance</span>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 p-1.5 sm:p-2 rounded-lg text-center border border-gray-700/30 backdrop-blur-sm">
                      <span className="text-xs mb-1 mx-auto text-cyan-400">👨‍💻</span>
                      <span className="text-[10px] sm:text-xs font-medium text-gray-300">Internship</span>
                    </div>
                    
                    <div className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 p-1.5 sm:p-2 rounded-lg text-center border border-gray-700/30 backdrop-blur-sm">
                      <span className="text-xs mb-1 mx-auto text-cyan-400">💡</span>
                      <span className="text-[10px] sm:text-xs font-medium text-gray-300">Collaboration</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gradient-to-br from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-2xl border border-gray-700/50">
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <div className="p-1.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded backdrop-blur-sm">
                    <FaMapMarkerAlt className="text-xs sm:text-sm text-red-400" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-white">Location</h3>
                </div>
                
                <div className="relative h-32 sm:h-36 md:h-40 rounded-lg sm:rounded-xl overflow-hidden border border-gray-700/50">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.17048236678!2d73.69781022308634!3d18.52454474161084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1708765037890!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map - Pune, Maharashtra"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                
                <p className="text-[10px] sm:text-xs text-gray-400 text-center mt-1.5 sm:mt-2">
                  Pune, Maharashtra • Available for remote opportunities
                </p>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

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

export default Contact;