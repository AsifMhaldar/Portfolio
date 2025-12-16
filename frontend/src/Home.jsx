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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative px-4 sm:px-6 md:px-10 lg:px-20 pt-20 md:pt-32">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-full lg:max-w-2xl animate-fadeInUp">
              {/* Greeting */}
              <div className="mb-4">
                <span className="text-base sm:text-lg md:text-xl text-blue-600 font-semibold tracking-wider">
                  👋 HELLO, MY NAME IS
                </span>
              </div>

              {/* Name with gradient */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4">
                Asif 
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {" "}Mhaldar
                </span>
              </h1>

              {/* Animated title */}
              <div className="mb-4 sm:mb-6">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 mb-2">
                  I am a 
                  <span className="ml-2 font-bold text-blue-600">
                    <span ref={textRef}></span>
                  </span>
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
                Crafting modern web applications with cutting-edge technologies.
                Passionate about building scalable solutions with beautiful UI/UX.
              </p>

              {/* Tech Stack Icons - Mobile responsive */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-sm hover:shadow-md transition-shadow text-xs sm:text-sm">
                  <FaCode className="text-blue-600 text-sm sm:text-base" />
                  <span className="font-medium">React.js</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-sm hover:shadow-md transition-shadow text-xs sm:text-sm">
                  <FaServer className="text-green-600 text-sm sm:text-base" />
                  <span className="font-medium">Node.js</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-sm hover:shadow-md transition-shadow text-xs sm:text-sm">
                  <FaDatabase className="text-yellow-600 text-sm sm:text-base" />
                  <span className="font-medium">MongoDB</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full shadow-sm hover:shadow-md transition-shadow text-xs sm:text-sm">
                  <FaPalette className="text-purple-600 text-sm sm:text-base" />
                  <span className="font-medium">Express.js</span>
                </div>
              </div>

              {/* Social Links - Mobile responsive */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 sm:mb-10">
                {/* Social Buttons Grid for Mobile */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto">
                  {/* LinkedIn Button */}
                  <a
                    href="https://www.linkedin.com/in/asif-mhaldar-ab818b297"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-br from-blue-500 to-blue-700 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
                  >
                    <FaLinkedin className="text-lg sm:text-xl md:text-2xl" />
                    <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-gray-600 whitespace-nowrap hidden sm:block">
                      LinkedIn
                    </span>
                  </a>

                  {/* GitHub Button */}
                  <a
                    href="https://github.com/AsifMhaldar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-br from-gray-800 to-gray-900 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
                  >
                    <FaGithub className="text-lg sm:text-xl md:text-2xl" />
                    <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-gray-600 whitespace-nowrap hidden sm:block">
                      GitHub
                    </span>
                  </a>

                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/919326307522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-br from-green-500 to-green-700 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
                  >
                    <FaWhatsapp className="text-lg sm:text-xl md:text-2xl" />
                    <span className="absolute -bottom-7 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-medium text-gray-600 whitespace-nowrap hidden sm:block">
                      WhatsApp
                    </span>
                  </a>
                </div>
                
                {/* Get In Touch Button - Mobile responsive */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg sm:rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </div>
            </div>

            {/* Right - Profile Image - Mobile responsive */}
            <div className="relative animate-fadeInUp animation-delay-300 mt-8 sm:mt-0">
              <div className="relative">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-spin-slow opacity-20 blur-md"></div>
                
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-0.5 sm:p-1 shadow-xl sm:shadow-2xl">
                  <div className="relative overflow-hidden rounded-full w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 border-4 sm:border-6 md:border-8 border-white">
                    <img
                      src={ProfileImg}
                      alt="Asif Mhaldar"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Circular floating badges - Mobile responsive */}
                <div className="absolute inset-0">
                  {/* Top - Graduate Badge */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow z-10">
                    <div className="text-[10px] xs:text-xs font-bold">🎓 Grad 2025</div>
                  </div>
                  
                  {/* Right - MERN Badge */}
                  <div className="absolute top-1/4 right-0 translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow animation-delay-200 z-10">
                    <div className="text-[10px] xs:text-xs font-bold">⚛️ MERN</div>
                  </div>
                  
                  {/* Bottom Right - Projects Badge */}
                  <div className="absolute bottom-1/4 right-0 translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow animation-delay-400 z-10">
                    <div className="text-[10px] xs:text-xs font-bold">Quick Learner</div>
                  </div>
                  
                  {/* Bottom - AI/ML Badge */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow animation-delay-600 z-10">
                    <div className="text-[10px] xs:text-xs font-bold">🤖 AI/ML</div>
                  </div>
                  
                  {/* Bottom Left - GitHub Badge */}
                  <div className="absolute bottom-1/4 left-0 -translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-gray-700 to-black text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow animation-delay-800 z-10">
                    <div className="text-[10px] xs:text-xs font-bold">💻 GitHub</div>
                  </div>
                  
                  {/* Top Left - Quick Learner */}
                  <div className="absolute top-1/4 left-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg sm:shadow-xl animate-bounce-slow animation-delay-1000 z-10">
                    <div className="text-[10px] xs:text-xs font-bold">📚 Problem Solver</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center text-gray-400 hover:text-blue-600 transition-colors"
            >
              <span className="text-xs sm:text-sm mb-1 sm:mb-2">Explore More</span>
              <FaArrowDown className="text-sm sm:text-base" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <div ref={aboutSectionRef}>
        <About />
      </div>

      {/* Education Section */}
      <div ref={educationSectionRef}>
        <Education />
      </div>

      {/* Work Section */}
      <div ref={workSectionRef}>
        <Work />
      </div>

      {/* Contact Section */}
      <div ref={contactSectionRef}>
        <Contact />
      </div>

      {/* Add custom animations to tailwind.config.js or in a style tag */}
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
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
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
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;