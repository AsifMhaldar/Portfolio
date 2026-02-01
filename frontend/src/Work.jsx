import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaExternalLinkAlt, 
  FaGithub, 
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
      description:
        "Developed backend for Wanderlust clone with user auth, property listings, and booking features.",
      live: "https://backend-wanderlust.onrender.com/listings",
      github: "https://github.com/AsifMhaldar/BackEnd-Wanderlust",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "REST API"],
      category: "backend",
      icon: <FaServer />,
      color: "from-blue-500 to-cyan-500",
      features: ["User Authentication", "Property CRUD", "Booking System"]
    },
    {
      id: 2,
      title: "SugarCane Bud Detection",
      img: Sugarcane,
      description:
        "Real-time AI solution to detect sugarcane buds with 90% accuracy.",
      live: "https://drive.google.com/file/d/1Uld4fwhIdrXYfch40Z6nzQPjUePuQYlU/view?usp=sharing",
      github: "https://github.com/AsifMhaldar/Sugarcane",
      tags: ["Python", "Machine Learning", "Computer Vision"],
      category: "ai-ml",
      icon: <FaBrain />,
      color: "from-green-500 to-emerald-500",
      features: ["90% Accuracy", "Real-time Detection", "Model Training"]
    },
    {
      id: 3,
      title: "Thapa Eduhub Clone",
      img: Thapa,
      description:
        "Responsive educational website using HTML and CSS.",
      live: "https://thapaeduhubplatform.netlify.app/",
      github: "https://github.com/AsifMhaldar/thapaeduhub-frontend",
      tags: ["HTML5", "CSS3", "Responsive Design"],
      category: "frontend",
      icon: <FaPalette />,
      color: "from-purple-500 to-pink-500",
      features: ["Mobile Responsive", "Clean UI", "Cross-browser"]
    },
    {
      id: 4,
      title: "Book My Show - Frontend",
      img: BookMyShow,
      description:
        "Movie ticket booking website clone with modern UI.",
      live: "https://bookmyshowweb.netlify.app/",
      github: "https://github.com/AsifMhaldar/bookmyshow",
      tags: ["HTML5", "CSS3", "JavaScript"],
      category: "frontend",
      icon: <FaLayerGroup />,
      color: "from-orange-500 to-red-500",
      features: ["Ticket Booking UI", "Movie Listings", "User Flow"]
    }
  ];

  const filters = [
    { id: 'all', label: 'All', icon: <FaLayerGroup /> },
    { id: 'backend', label: 'Backend', icon: <FaServer /> },
    { id: 'frontend', label: 'Frontend', icon: <FaPalette /> },
    { id: 'ai-ml', label: 'AI/ML', icon: <FaBrain /> }
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter(p => p.category === selectedFilter);

  return (
    <section
      id="Work"
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden min-h-screen"
    >
      {/* === SAME BACKGROUND AS EDUCATION === */}

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Depth Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/30 to-gray-900/70 pointer-events-none" />

      {/* === CONTENT === */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="text-cyan-400 font-semibold tracking-wider">
            🚀 MY WORK
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
        </div>

        {/* FILTERS */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-full border backdrop-blur-sm transition ${
                selectedFilter === filter.id
                  ? 'bg-cyan-600 text-white border-cyan-400'
                  : 'bg-gray-800/50 text-gray-300 border-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <AnimatePresence>
          <motion.div
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                className="bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-400 hover:text-white text-sm"
                    >
                      Live
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 hover:text-white text-sm"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BLOB ANIMATION */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-50px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(0.9); }
          100% { transform: translate(0,0) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
}

export default Work;
