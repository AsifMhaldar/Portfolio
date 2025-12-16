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
    <section id="Contact" className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block mb-3">
            <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full">
              CONTACT ME
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Column - Contact Form & Quick Connect */}
          <div className="space-y-4">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <FaPaperPlane className="text-lg text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Send Message</h3>
              </div>
              
              <form
                action="https://formspree.io/f/mzzakewv"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-3"
              >
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      required
                      placeholder="Asif Mhaldar"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all duration-300 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="asif.mhaldar03@gmail.com"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all duration-300 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all duration-300 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Hello, I'd like to discuss..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all duration-300 resize-none text-sm"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-xs" />
                  Send Message
                </motion.button>
              </form>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 p-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200"
                >
                  <div className="flex items-center gap-2 text-green-600 text-xs">
                    <span>✅</span>
                    <span className="font-medium">Message sent! I'll respond within 24 hours.</span>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Quick Connect - No bottom space */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl shadow-lg text-white"
            >
              <div className="flex items-center gap-2 mb-3">
                <FaPaperPlane className="text-sm" />
                <h4 className="text-sm font-bold">Quick Connect</h4>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                <a
                  href="https://www.linkedin.com/in/asif-mhaldar-ab818b297"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg text-center transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-1">
                    <FaLinkedin className="text-sm" />
                    <span className="text-xs">LinkedIn</span>
                  </div>
                </a>
                
                <a
                  href="mailto:asifmhaldar27@gmail.com"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg text-center transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-1">
                    <FaEnvelope className="text-sm" />
                    <span className="text-xs">Email</span>
                  </div>
                </a>
                
                <a
                  href="https://github.com/AsifMhaldar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg text-center transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-1">
                    <FaGithub className="text-sm" />
                    <span className="text-xs">GitHub</span>
                  </div>
                </a>
                
                <a
                  href="https://drive.google.com/file/d/13PMxW2PVKaYlenrkPs3EWVA1ckfYR3Od/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-2 rounded-lg text-center transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-1">
                    <FaFileDownload className="text-sm" />
                    <span className="text-xs">Resume</span>
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
            <div className="grid md:grid-cols-2 gap-4">
              {/* Contact Details */}
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded">
                    <FaEnvelope className="text-sm text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">Contact Info</h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-blue-100 rounded">
                      <FaEnvelope className="text-xs text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Email</p>
                      <a 
                        href="mailto:asifmhaldar27@gmail.com"
                        className="text-blue-600 hover:text-blue-700 text-xs"
                      >
                        asif.mhaldar03@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-purple-100 rounded">
                      <FaMapMarkerAlt className="text-xs text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Location</p>
                      <p className="text-gray-800 text-xs">Pune, India</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-green-100 rounded">
                      <FaFileDownload className="text-xs text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Resume</p>
                      <a
                        href="https://drive.google.com/file/d/13PMxW2PVKaYlenrkPs3EWVA1ckfYR3Od/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-xs"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-4 rounded-2xl shadow-lg text-white">
                <div className="flex items-center gap-2 mb-3">
                  <FaBriefcase className="text-sm" />
                  <h4 className="text-sm font-bold">Available For</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white/10 p-2 rounded-lg text-center">
                    <FaBriefcase className="text-xs mb-1 mx-auto" />
                    <span className="text-[10px] font-medium">Full-time</span>
                  </div>
                  
                  <div className="bg-white/10 p-2 rounded-lg text-center">
                    <FaHandshake className="text-xs mb-1 mx-auto" />
                    <span className="text-[10px] font-medium">Freelance</span>
                  </div>
                  
                  <div className="bg-white/10 p-2 rounded-lg text-center">
                    <span className="text-xs mb-1">👨‍💻</span>
                    <span className="text-[10px] font-medium">Internship</span>
                  </div>
                  
                  <div className="bg-white/10 p-2 rounded-lg text-center">
                    <span className="text-xs mb-1">💡</span>
                    <span className="text-[10px] font-medium">Collaboration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Map - Full width, no left space */}
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded">
                  <FaMapMarkerAlt className="text-sm text-white" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Location</h3>
              </div>
              
              <div className="relative h-40 rounded-xl overflow-hidden">
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
              
              <p className="text-xs text-gray-600 text-center mt-2">
                Pune, Maharashtra • Available for remote opportunities
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;