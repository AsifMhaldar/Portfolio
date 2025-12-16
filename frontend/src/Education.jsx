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
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      ref={ref}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full">
            <FaGraduationCap className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">ACADEMIC JOURNEY</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Academic achievements and learning milestones that shaped my technical journey
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden md:block"></div>
          
          {/* Education Items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-12"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative group ${
                  index % 2 === 0 
                    ? 'md:pr-1/2 md:pl-8' 
                    : 'md:pl-1/2 md:pr-8 md:text-right'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full z-10 hidden md:block"></div>
                
                {/* Animated Connection Line (Mobile) */}
                <div className="absolute left-6 top-8 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 md:hidden"></div>
                
                {/* Mobile Timeline Dot */}
                <div className="absolute left-5 top-8 w-4 h-4 bg-blue-600 rounded-full transform -translate-y-1/2 md:hidden"></div>

                {/* Education Card */}
                <div className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="relative">
                    {/* Floating Icon */}
                    <div className={`absolute -top-4 ${
                      index % 2 === 0 ? 'md:-left-4' : 'md:-right-4 md:left-auto'
                    } z-20`}>
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${edu.color} text-white shadow-xl`}>
                        {edu.icon}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2">
                      {/* Year Badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                        index % 2 === 0 ? '' : 'md:float-right'
                      } bg-gradient-to-r from-blue-50 to-purple-50`}>
                        <FaCalendarAlt className="text-blue-600" />
                        <span className="text-sm font-semibold text-blue-600">{edu.year}</span>
                      </div>

                      {/* Degree */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {edu.degree}
                      </h3>

                      {/* Institution */}
                      <div className="flex items-center gap-2 mb-4">
                        <FaUniversity className="text-gray-400" />
                        <p className="text-lg text-gray-700 font-medium">{edu.institution}</p>
                      </div>

                      {/* Performance */}
                      <div className="mb-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100">
                          <FaAward className="text-blue-600" />
                          <span className="font-bold text-gray-800">
                            {edu.cgpa || edu.percentage}
                          </span>
                        </div>
                      </div>

                      {/* Details */}
                      {edu.details && (
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {edu.details}
                        </p>
                      )}

                      {/* Highlights */}
                      <div className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? '' : 'md:justify-end'
                      }`}>
                        {edu.highlights.map((highlight, hIndex) => (
                          <span
                            key={hIndex}
                            className="px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-full border border-blue-100"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Decorative Element */}
                      <div className={`absolute bottom-0 ${
                        index % 2 === 0 ? 'left-0' : 'right-0'
                      } w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform ${
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
          transition={{ delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white shadow-xl"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <FaRocket className="text-2xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Continuous Learning Journey</h3>
            </div>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              My education has provided me with a strong foundation in computer science principles, 
              complemented by hands-on experience in building real-world applications. I continue to 
              expand my knowledge through online courses, technical workshops, and personal projects.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {[
                "Continuous Learning",
                "Practical Application",
                "Problem Solving",
                "Technical Innovation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <span className="text-lg">✅</span>
                  <span className="font-medium">{item}</span>
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
        .md\\:pr-1\\/2 {
          padding-right: 50%;
        }
        .md\\:pl-1\\/2 {
          padding-left: 50%;
        }
      `}</style>
    </section>
  );
}

export default Education;