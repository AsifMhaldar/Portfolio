import React, { useState, useEffect } from 'react';
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
      description: "Developed the backend for a Wanderlust clone with features like user authentication, property listings, and booking functionalities. Ensured secure API interactions and efficient data management.",
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
      description: "Designed a real-time AI solution to detect and classify sugarcane buds with high accuracy. Trained ML models achieving 90% detection accuracy. Optimized preprocessing pipeline for real-time inference.",
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
      description: "Built a responsive educational website using HTML and CSS with clean, user-friendly interface. Integrated contact feature for direct communication between learners and platform.",
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
      description: "Developed a responsive movie ticket booking website clone with modern design and seamless user experience for browsing and booking movie tickets.",
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
    { id: 'all', label: 'All Projects', icon: <FaLayerGroup /> },
    { id: 'backend', label: 'Backend', icon: <FaServer /> },
    { id: 'frontend', label: 'Frontend', icon: <FaPalette /> },
    { id: 'ai-ml', label: 'AI/ML', icon: <FaBrain /> }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id='Work' className='relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50'>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-10 blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <FaCode className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing technical skills and problem-solving abilities
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
              }`}
            >
              {filter.icon}
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
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                {/* Project Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-56">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 z-10"></div>
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Overlay Icon */}
                    <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-br ${project.color} text-white shadow-lg z-20`}>
                      {project.icon}
                    </div>
                    
                    {/* Live Demo Button */}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-800 font-medium hover:bg-white transition-colors">
                        <FaPlay className="text-sm" />
                        <span className="text-sm">Live Demo</span>
                      </div>
                    </a>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full border border-blue-100"
                        >
                          <FaTag className="text-xs" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <FaStar className="text-yellow-500 text-xs" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-800 rounded-full font-medium hover:bg-gray-200 transition-colors"
                      >
                        <FaGithub />
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
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white rounded-full shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                Showing {filteredProjects.length} of {projects.length} projects
              </span>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">
                {selectedFilter === 'all' ? 'All Categories' : selectedFilter}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4+', label: 'Projects Completed', icon: '🚀' },
              { value: '100%', label: 'Client Satisfaction', icon: '😊' },
              { value: '90%', label: 'Accuracy Rate', icon: '🎯' },
              { value: '∞', label: 'Learning Growth', icon: '📈' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;