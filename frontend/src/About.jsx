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
  FaLightbulb,
  FaCalendarAlt,
  FaUserGraduate,
  FaAward,
  FaEnvelope,
  FaLinkedin
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTailwindcss, SiJavascript } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const skills = [
  { name: 'C', icon: '🧠', category: 'programming' },
  { name: 'C++', icon: '⚡', category: 'programming' },
  { name: 'Python', icon: '🐍', category: 'programming' },
  { name: 'Data Structures & Algorithms', icon: '📊', category: 'concepts' },
  { name: 'OOPs', icon: '🔄', category: 'concepts' },
  { name: 'JavaScript (ES6+)', icon: <SiJavascript className="text-yellow-500" />, category: 'frontend' },
  { name: 'SQL', icon: '🗃️', category: 'database' },
  { name: 'MySQL', icon: '🐬', category: 'database' },
  { name: 'React', icon: <SiReact className="text-blue-400" />, category: 'frontend' },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" />, category: 'backend' },
  { name: 'Express', icon: <SiExpress className="text-gray-800" />, category: 'backend' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, category: 'database' },
  { name: 'HTML5 & CSS3', icon: '🎨', category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" />, category: 'frontend' },
  { name: 'Git & GitHub', icon: '🐙', category: 'tools' },
  { name: 'REST APIs', icon: '🔗', category: 'backend' },
  { name: 'Deployment', icon: '🚀', category: 'tools' },
];

const categories = ['all', 'programming', 'frontend', 'backend', 'database', 'concepts', 'tools'];

function About() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };


  const achievements = [
    { icon: '🏆', title: '4+ Projects', description: 'Completed projects' },
    { icon: '📚', title: '1000+ Hours', description: 'Coding & learning' },
    { icon: '⚡', title: 'Quick Learner', description: 'Adapt quickly' },
    { icon: '🎯', title: 'Problem Solver', description: 'Analytical skills' }
  ];

  return (
    <section 
      id='About' 
      className='relative py-12 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50'
      ref={ref}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading with animation */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-sm md:text-base font-semibold text-blue-600 bg-blue-50 px-3 md:px-4 py-1.5 md:py-2 rounded-full">
              ABOUT ME
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Get to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Know Me</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto px-2">
            Passionate developer crafting digital experiences
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
              className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl border border-gray-100 hover:shadow-xl md:hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-blue-100 rounded-lg md:rounded-xl">
                  <FaBrain className="text-lg md:text-xl lg:text-2xl text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">My Journey</h3>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
                  I'm a passionate <span className="font-bold text-blue-600">MERN stack developer</span> who 
                  transforms ideas into reality through code. My journey began with curiosity about how 
                  things work behind the scenes, and has evolved into creating impactful digital solutions.
                </p>
                
                <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">
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
                  { icon: <FaGraduationCap />, text: 'Lifelong Learner', color: 'text-purple-600', bg: 'bg-purple-50' },
                  { icon: <FaLightbulb />, text: 'Problem Solver', color: 'text-yellow-600', bg: 'bg-yellow-50' },
                  { icon: <FaCode />, text: 'Clean Code', color: 'text-green-600', bg: 'bg-green-50' },
                  { icon: <FaRocket />, text: 'Fast Learner', color: 'text-pink-600', bg: 'bg-pink-50' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex items-center gap-2 p-2 md:p-3 rounded-lg md:rounded-xl ${item.bg}`}
                  >
                    <span className={`text-base md:text-lg lg:text-xl ${item.color}`}>{item.icon}</span>
                    <span className="font-medium text-gray-800 text-xs md:text-sm lg:text-base">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl"
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
                    className="bg-white/90 backdrop-blur-sm p-3 md:p-4 rounded-xl lg:rounded-2xl text-center"
                  >
                    <div className="text-2xl md:text-3xl mb-1 md:mb-2">{achievement.icon}</div>
                    <h5 className="font-bold text-gray-900 text-xs md:text-sm lg:text-base mb-0.5 md:mb-1">{achievement.title}</h5>
                    <p className="text-gray-600 text-xs md:text-sm">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Connect */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl border border-cyan-100"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="p-1.5 md:p-2 bg-cyan-100 rounded">
                  <FaEnvelope className="text-base md:text-lg text-cyan-600" />
                </div>
                <h4 className="text-base md:text-lg lg:text-lg font-bold text-gray-900">Quick Connect</h4>
              </div>
              <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                Always open to discuss new opportunities and collaborations.
              </p>
              <div className="flex gap-2">
                <NavLink
                  to="/contact"
                  className="flex-1 text-center px-2 md:px-3 py-1.5 md:py-2 bg-cyan-600 text-white rounded text-xs md:text-sm font-medium hover:bg-cyan-700 transition-colors flex items-center justify-center gap-1 md:gap-2"
                >
                  <FaEnvelope className="text-xs md:text-sm" />
                  Message
                </NavLink>
                <a
                  href="https://www.linkedin.com/in/asif-mhaldar-ab818b297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-2 md:px-3 py-1.5 md:py-2 bg-blue-600 text-white rounded text-xs md:text-sm font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 md:gap-2"
                >
                  <FaLinkedin className="text-xs md:text-sm" />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            {/* Tech Stack Icons */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl"
            >
              <h4 className="text-base md:text-lg lg:text-xl font-bold text-white mb-3 md:mb-4 text-center">Tech Stack</h4>
              <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap">
                {[SiReact, SiNodedotjs, SiMongodb, SiExpress, SiJavascript, SiTailwindcss].map((Icon, index) => (
                  <motion.div
                    key={index}
                    animate={floatingAnimation}
                    style={{ animationDelay: `${index * 0.5}s` }}
                    className="bg-white p-2 md:p-3 rounded-lg md:rounded-xl shadow-md"
                  >
                    <Icon className="text-xl md:text-2xl lg:text-3xl text-gray-800" />
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
            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl border border-gray-100">
              <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                <div className="p-2 md:p-3 bg-purple-100 rounded-lg md:rounded-xl">
                  <FaTools className="text-lg md:text-xl lg:text-2xl text-purple-600" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900">My Skills</h3>
              </div>
              
              {/* Category Filters - Mobile responsive */}
              <div className="flex flex-wrap gap-1 md:gap-2 mb-4 md:mb-6 lg:mb-8 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-2 md:px-3 lg:px-4 py-1 md:py-1.5 lg:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeFilter === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
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
                    <div className="bg-gradient-to-br from-white to-gray-50 p-2 md:p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-sm border border-gray-100 hover:shadow-md lg:hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                      <div className="flex flex-col items-center text-center gap-1 md:gap-2">
                        <div className="text-lg md:text-xl lg:text-2xl mb-0.5 md:mb-1">
                          {typeof skill.icon === 'string' ? (
                            <span>{skill.icon}</span>
                          ) : (
                            React.cloneElement(skill.icon, { className: "text-base md:text-lg lg:text-xl" })
                          )}
                        </div>
                        <span className="text-xs md:text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors leading-tight md:leading-normal">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Skill Count */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                  <span className="text-gray-600 text-xs md:text-sm">
                    Showing {filteredSkills.length} of {skills.length} skills
                  </span>
                  <span className="text-xs md:text-sm px-2 md:px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                    {activeFilter === 'all' ? 'All Categories' : activeFilter}
                  </span>
                </div>
              </div>
            </div>

            {/* Experience Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl text-white"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <FaRocket className="text-lg md:text-xl lg:text-2xl" />
                <h4 className="text-base md:text-lg lg:text-xl font-bold">What I Bring</h4>
              </div>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-start gap-1 md:gap-2">
                  <span className="text-base md:text-lg">✅</span>
                  <span className="text-sm md:text-base">Full-stack development expertise</span>
                </li>
                <li className="flex items-start gap-1 md:gap-2">
                  <span className="text-base md:text-lg">✅</span>
                  <span className="text-sm md:text-base">Clean, maintainable code architecture</span>
                </li>
                <li className="flex items-start gap-1 md:gap-2">
                  <span className="text-base md:text-lg">✅</span>
                  <span className="text-sm md:text-base">Responsive & accessible UI/UX design</span>
                </li>
                <li className="flex items-start gap-1 md:gap-2">
                  <span className="text-base md:text-lg">✅</span>
                  <span className="text-sm md:text-base">Performance optimization</span>
                </li>
              </ul>
            </motion.div>

            {/* Current Focus */}
            <motion.div
              variants={fadeInUp}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 sm:p-5 md:p-6 rounded-2xl lg:rounded-3xl shadow-lg md:shadow-xl border border-green-100"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <div className="p-1.5 md:p-2 bg-green-100 rounded">
                  <FaAward className="text-base md:text-lg lg:text-xl text-green-600" />
                </div>
                <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900">Current Focus</h4>
              </div>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm md:text-base">Advanced React patterns</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm md:text-base">System design principles</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm md:text-base">Cloud deployment (AWS)</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm md:text-base">JavaScript mastery</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;