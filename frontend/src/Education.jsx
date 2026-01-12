import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaUniversity, 
  FaCalendarAlt, 
  FaAward, 
  FaBook,
  FaCode,
  FaBrain,
  FaRocket
} from 'react-icons/fa';

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science with Specialization in Artificial Intelligence & Machine Learning",
      institution: "Bharati Vidyapeeth's College Of Engineering, Kolhapur",
      year: "2021-2025",
      details: "Specialized in AI & ML, with a focus on software development, data structures, algorithms, and full-stack web technologies integrated with AI.",
      cgpa: "CGPA: 8.5",
      icon: <FaCode />,
      color: "from-blue-500 to-cyan-500",
      highlights: ["AI/ML Specialization", "Full-Stack Development", "Data Structures & Algorithms"]
    },
    {
      degree: "Higher Secondary Certificate (HSC) – Science Stream",
      institution: "Vivakanand College, Kolhapur",
      year: "2020 - 2021",
      percentage: "87.33%",
      icon: <FaBook />,
      color: "from-purple-500 to-pink-500",
      highlights: ["Science Stream", "Mathematics", "Physics & Chemistry"]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Shri Ram High School Baveli, Kolhapur",
      year: "2018 - 2019",
      percentage: "82.80%",
      icon: <FaGraduationCap />,
      color: "from-green-500 to-emerald-500",
      highlights: ["Foundation Studies", "Basic Computer Science", "Mathematics"]
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      id="education" 
      className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"
      ref={ref}
    >
      {/* Animated background elements matching Home page */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-sm md:text-lg text-cyan-400 font-semibold tracking-wider">
              🎓 EDUCATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Academic achievements and learning milestones that shaped my technical journey
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line - Hidden on mobile, visible on md+ */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 sm:w-1 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 hidden sm:block"></div>
          
          {/* Education Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-8 sm:space-y-10 md:space-y-12"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative group ${
                  index % 2 === 0 
                    ? 'sm:pr-1/2 sm:pl-6 md:pl-8' 
                    : 'sm:pl-1/2 sm:pr-6 md:pr-8 sm:text-right'
                }`}
              >
                {/* Timeline Dot - Desktop */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gray-900 border-3 sm:border-4 border-cyan-500 rounded-full z-10 hidden sm:block"></div>
                
                {/* Mobile Timeline Line & Dot */}
                <div className="absolute left-4 sm:left-6 top-10 w-0.5 h-full bg-gradient-to-b from-cyan-500 to-purple-500 sm:hidden"></div>
                <div className="absolute left-3 sm:left-5 top-10 w-2 h-2 sm:w-3 sm:h-3 bg-cyan-500 rounded-full transform -translate-y-1/2 sm:hidden"></div>

                {/* Education Card */}
                <div className={`ml-10 sm:ml-12 md:ml-14 ${
                  index % 2 === 0 ? 'sm:mr-4 md:mr-6 lg:mr-8' : 'sm:ml-4 md:ml-6 lg:ml-8'
                }`}>
                  <div className="relative">
                    {/* Floating Icon */}
                    <div className={`absolute -top-3 sm:-top-4 ${
                      index % 2 === 0 ? 'sm:-left-3 md:-left-4' : 'sm:-right-3 md:-right-4 sm:left-auto'
                    } z-20`}>
                      <div className={`p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br ${edu.color} text-white shadow-lg sm:shadow-xl border border-white/10 backdrop-blur-sm`}>
                        {React.cloneElement(edu.icon, { className: "text-sm sm:text-base md:text-lg" })}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="bg-gradient-to-br from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-sm p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full mb-3 sm:mb-4 md:mb-6 ${
                        index % 2 === 0 ? '' : 'sm:float-right'
                      } bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/30`}>
                        <FaCalendarAlt className="text-cyan-400 text-xs sm:text-sm" />
                        <span className="text-xs sm:text-sm font-semibold text-cyan-400">{edu.year}</span>
                      </div>

                      {/* Degree */}
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 leading-snug sm:leading-tight">
                        {edu.degree}
                      </h3>

                      {/* Institution */}
                      <div className="flex items-center gap-1 sm:gap-2 mb-2 sm:mb-3 md:mb-4">
                        <FaUniversity className="text-gray-400 text-xs sm:text-sm" />
                        <p className="text-sm sm:text-base md:text-lg text-gray-300 font-medium">{edu.institution}</p>
                      </div>

                      {/* Performance */}
                      <div className="mb-3 sm:mb-4">
                        <div className="inline-flex items-center gap-1 sm:gap-2 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30">
                          <FaAward className="text-cyan-400 text-xs sm:text-sm" />
                          <span className="font-bold text-white text-xs sm:text-sm md:text-base">
                            {edu.cgpa || edu.percentage}
                          </span>
                        </div>
                      </div>

                      {/* Details */}
                      {edu.details && (
                        <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-6">
                          {edu.details}
                        </p>
                      )}

                      {/* Highlights */}
                      <div className={`flex flex-wrap gap-1 sm:gap-2 ${
                        index % 2 === 0 ? '' : 'sm:justify-end'
                      }`}>
                        {edu.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="px-2 py-1 text-xs sm:text-sm font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded-full border border-cyan-500/30 backdrop-blur-sm whitespace-nowrap"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Decorative Element */}
                      <div className={`absolute bottom-0 ${
                        index % 2 === 0 ? 'left-0' : 'right-0'
                      } w-16 sm:w-20 md:w-24 lg:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform ${
                        index % 2 === 0 ? '' : 'rotate-180'
                      } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Learning Journey Summary */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ delay: 0.6 }}
          className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 shadow-lg sm:shadow-xl border border-cyan-500/20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
              <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg sm:rounded-xl backdrop-blur-sm">
                <FaRocket className="text-lg sm:text-xl md:text-2xl text-cyan-400" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">Continuous Learning Journey</h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-3 sm:mb-4 md:mb-6">
              My education has provided me with a strong foundation in computer science principles, 
              complemented by hands-on experience in building real-world applications. I continue to 
              expand my knowledge through online courses, technical workshops, and personal projects.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {[
                "Continuous Learning",
                "Practical Application",
                "Problem Solving",
                "Technical Innovation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-gray-800/50 to-gray-900/50 px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full backdrop-blur-sm border border-gray-700/50">
                  <span className="text-sm sm:text-base md:text-lg text-green-400">✅</span>
                  <span className="font-medium text-white text-xs sm:text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
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
        @media (min-width: 640px) {
          .sm\\:pr-1\\/2 {
            padding-right: 50%;
          }
          .sm\\:pl-1\\/2 {
            padding-left: 50%;
          }
        }
      `}</style>
    </section>
  );
}

export default Education;