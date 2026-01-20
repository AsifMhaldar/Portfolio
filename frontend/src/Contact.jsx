import React, { useState } from "react";
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaFileDownload, 
  FaPaperPlane, 
  FaUser, 
  FaGlobe,
  FaBriefcase,
  FaHandshake
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="Contact" className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
      {/* Background elements matching Home page */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        href="https://drive.google.com/file/d/13PMxW2PVKaYlenrkPs3EWVA1ckfYR3Od/view?usp=sharing"
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
                    <FaBriefcase className="text-xs mb-1 mx-auto text-cyan-400" />
                    <span className="text-[10px] sm:text-xs font-medium text-gray-300">Full-time</span>
                  </div>
                  
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

export default Contact;