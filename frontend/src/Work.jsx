import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
  FaCode, 
  FaServer, 
  FaBrain, 
  FaPalette,
  FaLayerGroup,
  FaPlay,
  FaTag,
  FaStar
} from 'react-icons/fa';
import Wanderlust from './assets/wanderlust.jpeg';
import Sugarcane from './assets/sugarcane.jpg';
import Thapa from './assets/thapa.jpeg';
import BookMyShow from './assets/BookMyShow.jpg';

function Work() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "BackEnd - Wanderlust",
      img: Wanderlust,
      description: "Developed backend for Wanderlust clone with user auth, property listings, and booking features. Ensured secure API interactions and efficient data management.",
      live: "https://backend-wanderlust.onrender.com/listings",
      github: "https://github.com/AsifMhaldar/BackEnd-Wanderlust",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
      category: "backend",
      icon: <FaServer />,
      color: "from-blue-500 to-cyan-500",
      features: ["User Authentication", "Property CRUD", "Booking System", "Secure APIs"]
    },
    {
      id: 2,
      title: "SugarCane Bud Detection",
      img: Sugarcane,
      description: "Designed real-time AI solution to detect sugarcane buds with 90% accuracy. Trained ML models and optimized preprocessing for real-time inference.",
      live: "https://github.com/AsifMhaldar/Sugarcane",
      github: "https://github.com/AsifMhaldar/Sugarcane",
      tags: ["Python", "Machine Learning", "Computer Vision", "Real-time"],
      category: "ai-ml",
      icon: <FaBrain />,
      color: "from-green-500 to-emerald-500",
      features: ["90% Accuracy", "Real-time Detection", "Model Training", "Image Processing"]
    },
    {
      id: 3,
      title: "Thapa Eduhub Clone",
      img: Thapa,
      description: "Built responsive educational website using HTML and CSS with clean UI. Integrated contact feature for direct communication.",
      live: "https://thapaeduhubplatform.netlify.app/",
      github: "https://github.com/AsifMhaldar/thapaeduhub-frontend",
      tags: ["HTML5", "CSS3", "Responsive Design", "UI/UX"],
      category: "frontend",
      icon: <FaPalette />,
      color: "from-purple-500 to-pink-500",
      features: ["Mobile Responsive", "Contact System", "Clean UI", "Cross-browser"]
    },
    {
      id: 4,
      title: "Book My Show - Frontend",
      img: BookMyShow,
      description: "Developed responsive movie ticket booking website clone with modern design and seamless user experience.",
      live: "https://bookmyshowweb.netlify.app/",
      github: "https://github.com/AsifMhaldar/bookmyshow",
      tags: ["HTML5", "CSS3", "JavaScript", "Frontend"],
      category: "frontend",
      icon: <FaLayerGroup />,
      color: "from-orange-500 to-red-500",
      features: ["Ticket Booking UI", "Movie Listings", "Responsive Layout", "User Flow"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: <FaLayerGroup />, color: "from-cyan-500 to-blue-500" },
    { id: 'backend', label: 'Backend', icon: <FaServer />, color: "from-blue-500 to-indigo-500" },
    { id: 'frontend', label: 'Frontend', icon: <FaPalette />, color: "from-purple-500 to-pink-500" },
    { id: 'ai-ml', label: 'AI/ML', icon: <FaBrain />, color: "from-green-500 to-emerald-500" }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='Work' className='relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-transparent via-gray-900/20 to-transparent'>
      {/* Animated Background matching Home page */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-block mb-2 sm:mb-3 md:mb-4">
            <span className="text-sm md:text-lg text-cyan-400 font-semibold tracking-wider">
              🚀 MY WORK
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            A collection of my recent work showcasing technical skills and problem-solving abilities
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 overflow-x-auto pb-2 px-2"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap border backdrop-blur-sm ${
                selectedFilter === filter.id
                  ? `bg-gradient-to-r ${filter.color} text-white shadow-lg sm:shadow-xl shadow-cyan-500/20 border-cyan-500/50`
                  : 'bg-gray-900/50 text-gray-300 border-gray-700/50 hover:bg-gray-800/50 hover:border-cyan-500/30'
              } text-xs sm:text-sm`}
            >
              {React.cloneElement(filter.icon, { className: "text-xs sm:text-sm" })}
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                {/* Project Card */}
                <div className="bg-gradient-to-br from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 h-full hover:shadow-cyan-500/10">
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-40 sm:h-48 md:h-56">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/40 z-10"></div>
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay Icon */}
                    <div className={`absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg border border-white/10 backdrop-blur-sm z-20`}>
                      {React.cloneElement(project.icon, { className: "text-sm sm:text-base md:text-lg" })}
                    </div>
                    
                    {/* Live Demo Button */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <div className="flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-full text-gray-300 font-medium hover:text-white hover:bg-gray-800 transition-all border border-gray-700/50">
                        <FaPlay className="text-xs sm:text-sm" />
                        <span className="text-xs sm:text-sm">Live</span>
                      </div>
                    </a>
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-4 md:p-5 lg:p-6">
                    {/* Title */}
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 sm:mb-2 md:mb-3 group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-3 sm:mb-4 md:mb-6 leading-relaxed text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 text-xs font-medium bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-cyan-300 rounded-full border border-gray-700/50 backdrop-blur-sm"
                        >
                          <FaTag className="text-xs" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 md:mb-6">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-1 sm:gap-2">
                          <FaStar className="text-yellow-400 text-xs sm:text-sm" />
                          <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-gray-700/50">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-xs sm:text-sm border border-cyan-500/30"
                      >
                        <FaExternalLinkAlt className="text-xs sm:text-sm" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 text-gray-300 rounded-full font-medium hover:text-white hover:bg-gray-800/70 transition-all text-xs sm:text-sm border border-gray-700/50"
                      >
                        <FaGithub className="text-xs sm:text-sm" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Projects Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 md:gap-4 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-full shadow-lg backdrop-blur-sm border border-gray-700/50">
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                Showing {filteredProjects.length} of {projects.length} projects
              </span>
            </div>
            <span className="text-gray-700 hidden sm:inline">|</span>
            <div className="flex items-center gap-1 sm:gap-2 hidden sm:flex">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium text-cyan-300">
                {selectedFilter === 'all' ? 'All Categories' : selectedFilter}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 sm:mt-14 md:mt-16 lg:mt-20 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-2xl border border-cyan-500/20"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[
              { value: '4+', label: 'Projects', icon: '🚀' },
              { value: '100%', label: 'Satisfaction', icon: '😊' },
              { value: '90%', label: 'Accuracy', icon: '🎯' },
              { value: '∞', label: 'Learning', icon: '📈' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl mb-1 sm:mb-2">{stat.icon}</div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
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
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

export default Work;