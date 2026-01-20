import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaCode, 
  FaDatabase, 
  FaServer, 
  FaPalette, 
  FaTools,
  FaBrain,
  FaGraduationCap,
  FaRocket,
  FaAward,
  FaEnvelope,
  FaLinkedin,
  FaLightbulb
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript, SiCplusplus, SiPython, SiMysql } from 'react-icons/si';

const skills = [
  { name: 'C', icon: '🧠', category: 'programming', color: 'text-blue-400' },
  { name: 'C++', icon: <SiCplusplus className="text-blue-500" />, category: 'programming' },
  { name: 'Python', icon: <SiPython className="text-yellow-500" />, category: 'programming' },
  { name: 'Data Structures & Algorithms', icon: '📊', category: 'concepts', color: 'text-purple-400' },
  { name: 'OOPs', icon: '🔄', category: 'concepts', color: 'text-green-400' },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, category: 'frontend' },
  { name: 'SQL', icon: '🗃️', category: 'database', color: 'text-cyan-400' },
  { name: 'MySQL', icon: <SiMysql className="text-blue-400" />, category: 'database' },
  { name: 'React', icon: <SiReact className="text-cyan-400" />, category: 'frontend' },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" />, category: 'backend' },
  { name: 'Express', icon: <SiExpress className="text-gray-300" />, category: 'backend' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-400" />, category: 'database' },
  { name: 'HTML5 & CSS3', icon: '🎨', category: 'frontend', color: 'text-orange-400' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" />, category: 'frontend' },
  { name: 'Git & GitHub', icon: '🐙', category: 'tools', color: 'text-gray-400' },
  { name: 'REST APIs', icon: '🔗', category: 'backend', color: 'text-pink-400' },
  { name: 'Deployment', icon: '🚀', category: 'tools', color: 'text-yellow-300' },
];

const categories = [
  { name: 'all', icon: <FaCode />, color: 'from-cyan-500 to-blue-500' },
  { name: 'programming', icon: '🧠', color: 'from-blue-500 to-indigo-500' },
  { name: 'frontend', icon: <FaPalette />, color: 'from-purple-500 to-pink-500' },
  { name: 'backend', icon: <FaServer />, color: 'from-green-500 to-emerald-500' },
  { name: 'database', icon: <FaDatabase />, color: 'from-yellow-500 to-orange-500' },
  { name: 'concepts', icon: <FaBrain />, color: 'from-pink-500 to-rose-500' },
  { name: 'tools', icon: <FaTools />, color: 'from-gray-600 to-gray-800' },
];

function About() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredSkills(skills);
    } else {
      setFilteredSkills(skills.filter(skill => skill.category === activeFilter));
    }
  }, [activeFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const achievements = [
    { icon: '🏆', title: '4+ Projects', description: 'Completed', color: 'from-yellow-600/20 to-yellow-800/20', text: 'text-yellow-300' },
    { icon: '📚', title: '1000+ Hours', description: 'Coding & Learning', color: 'from-blue-600/20 to-cyan-600/20', text: 'text-cyan-300' },
    { icon: '⚡', title: 'Quick Learner', description: 'Adapt quickly', color: 'from-green-600/20 to-emerald-600/20', text: 'text-green-300' },
    { icon: '🎯', title: 'Problem Solver', description: 'Analytical skills', color: 'from-purple-600/20 to-pink-600/20', text: 'text-purple-300' }
  ];

  return (
    <section 
      id='About' 
      className='relative py-12 md:py-20 lg:py-28 overflow-hidden min-h-screen'
      ref={ref}
    >
      {/* EXACT SAME BACKGROUND AS HOME.JSX */}
      {/* Main background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/30 to-gray-900/70 pointer-events-none" />

      <div className="relative px-4 sm:px-6 md:px-10 lg:px-20 pt-8 md:pt-12 z-10">
        
        {/* Heading matching Home page */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-sm md:text-lg text-cyan-400 font-semibold tracking-wider">
              👨‍💻 ABOUT ME
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white">
            Get to 
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {" "}Know Me
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto px-2">
            Passionate developer crafting modern web applications with cutting-edge technologies
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Column - About Me */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4 md:space-y-6 lg:space-y-8"
          >
            {/* Journey Card */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-br from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg md:rounded-xl backdrop-blur-sm">
                  <FaBrain className="text-lg md:text-xl lg:text-2xl text-cyan-400" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">My Journey</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
                  I'm a passionate <span className="font-bold text-cyan-400">MERN stack developer</span> who 
                  transforms ideas into reality through code. My journey began with curiosity about how 
                  things work behind the scenes, and has evolved into creating impactful digital solutions.
                </p>
                
                <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
                  What excites me most is solving complex problems and building applications that make 
                  a difference. I believe in writing clean, efficient code and creating intuitive user 
                  experiences.
                </p>
              </div>
              
              {/* Highlights */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4 mt-4 md:mt-6 lg:mt-8"
              >
                {[
                  { icon: <FaGraduationCap />, text: 'Lifelong Learner', color: 'from-purple-500/20 to-pink-500/20', iconColor: 'text-purple-400' },
                  { icon: <FaLightbulb />, text: 'Problem Solver', color: 'from-yellow-500/20 to-orange-500/20', iconColor: 'text-yellow-400' },
                  { icon: <FaCode />, text: 'Clean Code', color: 'from-green-500/20 to-emerald-500/20', iconColor: 'text-green-400' },
                  { icon: <FaRocket />, text: 'Fast Learner', color: 'from-pink-500/20 to-rose-500/20', iconColor: 'text-pink-400' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex items-center gap-2 p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${item.color} backdrop-blur-sm border border-white/5`}
                  >
                    <span className={`text-base md:text-lg lg:text-xl ${item.iconColor}`}>{item.icon}</span>
                    <span className="font-medium text-white text-xs md:text-sm lg:text-base">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl border border-cyan-500/20"
            >
              <h4 className="text-base md:text-lg lg:text-xl font-bold text-white mb-4 md:mb-6 text-center">Key Achievements</h4>
              <div className="grid grid-cols-2 gap-2 md:gap-3 lg:gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${achievement.color} backdrop-blur-sm p-3 md:p-4 rounded-xl lg:rounded-2xl text-center border border-white/10`}
                  >
                    <div className="text-2xl md:text-3xl mb-1 md:mb-2">{achievement.icon}</div>
                    <h5 className={`font-bold ${achievement.text} text-xs md:text-sm lg:text-base mb-0.5 md:mb-1`}>{achievement.title}</h5>
                    <p className="text-gray-300 text-xs md:text-sm">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Connect */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-br from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl border border-gray-700/50"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="p-1.5 md:p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded backdrop-blur-sm">
                  <FaEnvelope className="text-base md:text-lg text-cyan-400" />
                </div>
                <h4 className="text-base md:text-lg lg:text-lg font-bold text-white">Quick Connect</h4>
              </div>
              <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                Always open to discuss new opportunities and collaborations.
              </p>
              <div className="flex gap-2">
                <a
                  href="#Contact"
                  className="flex-1 text-center px-2 md:px-3 py-1.5 md:py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded text-xs md:text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 border border-cyan-500/30"
                >
                  <FaEnvelope className="text-xs md:text-sm" />
                  Message
                </a>
                <a
                  href="https://www.linkedin.com/in/asif-mhaldar-ab818b297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-2 md:px-3 py-1.5 md:py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded text-xs md:text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-1 md:gap-2 border border-blue-500/30"
                >
                  <FaLinkedin className="text-xs md:text-sm" />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl border border-cyan-500/20"
            >
              <h4 className="text-base md:text-lg lg:text-xl font-bold text-white mb-3 md:mb-4 text-center">Tech Stack</h4>
              <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap">
                {[SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTailwindcss].map((Icon, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -10, 0],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5
                      }
                    }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-2 md:p-3 rounded-lg md:rounded-xl shadow-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <Icon className="text-xl md:text-2xl lg:text-3xl text-white" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6 lg:space-y-8"
          >
            {/* Skills Filter */}
            <div className="relative bg-gradient-to-br from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl shadow-2xl border border-gray-700/50">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg md:rounded-xl backdrop-blur-sm">
                  <FaTools className="text-lg md:text-xl lg:text-2xl text-purple-400" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">My Skills</h3>
              </div>
              
              {/* Category Filters - Mobile responsive */}
              <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6 lg:mb-8 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveFilter(category.name)}
                    className={`px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap border backdrop-blur-sm ${
                      activeFilter === category.name
                        ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-cyan-500/20 border-cyan-500/50`
                        : 'bg-gray-800/50 text-gray-300 border-gray-600/50 hover:bg-gray-700/50 hover:border-cyan-500/30'
                    }`}
                  >
                    {category.icon} {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                  </button>
                ))}
              </div>

              {/* Skills Grid */}
              <motion.div
                layout
                className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3"
              >
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    layoutId={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-2 md:p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-lg border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
                      <div className="flex flex-col items-center text-center gap-1 md:gap-2">
                        <div className="text-lg md:text-xl lg:text-2xl mb-0.5 md:mb-1">
                          {typeof skill.icon === 'string' ? (
                            <span className={skill.color || 'text-white'}>{skill.icon}</span>
                          ) : (
                            React.cloneElement(skill.icon, { className: "text-base md:text-lg lg:text-xl" })
                          )}
                        </div>
                        <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-cyan-300 transition-colors leading-tight md:leading-normal">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Skill Count */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-700/50">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                  <span className="text-gray-400 text-xs md:text-sm">
                    Showing {filteredSkills.length} of {skills.length} skills
                  </span>
                  <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-gradient-to-r from-cyan-600/30 to-purple-600/30 text-cyan-300 rounded-full font-medium border border-cyan-500/30 backdrop-blur-sm">
                    {activeFilter === 'all' ? 'All Categories' : activeFilter}
                  </span>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-br from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl border border-cyan-500/20"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <FaRocket className="text-lg md:text-xl lg:text-2xl text-cyan-400" />
                <h4 className="text-base md:text-lg lg:text-xl font-bold text-white">What I Bring</h4>
              </div>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-1 md:gap-2">
                  <span className="text-base md:text-lg text-green-400">✅</span>
                  <span className="text-sm md:text-base text-gray-300">Full-stack development expertise</span>
                </li>
                <li className="flex items-start gap-1 md:gap-2">
                  <span className="text-base md:text-lg text-green-400">✅</span>
                  <span className="text-sm md:text-base text-gray-300">Clean, maintainable code architecture</span>
                </li>
                <li className="flex items-start gap-1 md:gap-2">
                  <span className="text-base md:text-lg text-green-400">✅</span>
                  <span className="text-sm md:text-base text-gray-300">Responsive & accessible UI/UX design</span>
                </li>
                <li className="flex items-start gap-1 md:gap-2">
                  <span className="text-base md:text-lg text-green-400">✅</span>
                  <span className="text-sm md:text-base text-gray-300">Performance optimization</span>
                </li>
              </ul>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              variants={fadeInUp}
              className="relative bg-gradient-to-br from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl border border-gray-700/50"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="p-1.5 md:p-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded backdrop-blur-sm">
                  <FaAward className="text-base md:text-lg lg:text-xl text-green-400" />
                </div>
                <h4 className="text-base md:text-lg lg:text-xl font-bold text-white">Current Focus</h4>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm md:text-base">Advanced React patterns</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm md:text-base">System design principles</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm md:text-base">Cloud deployment (AWS)</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-300 text-sm md:text-base">JavaScript mastery</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
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
    </section>
  );
}

export default About;