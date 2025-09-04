import React from 'react';
import ProfileImg from './assets/profile.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
  return (
    <div id="Home" className="bg-gray-50 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="px-4 sm:px-6 md:px-10 mt-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8">

          {/* Left - Text */}
          <div className="text-center md:text-left max-w-full md:max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
              Hello, I'm Asif <span className="text-blue-600">Mhaldar</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-700">
              A Proficient{" "}
              <span className="font-semibold text-blue-600">
                MERN Stack Developer
              </span>
            </p>

            <p className="mt-4 text-base sm:text-lg md:text-lg text-gray-600 max-w-md md:max-w-xl mx-auto md:mx-0">
              I specialize in building modern, responsive web applications using{" "}
              <span className="font-semibold text-blue-600">
                MongoDB, Express, React, and Node.js
              </span>. Passionate about crafting clean UI/UX and writing efficient, scalable code.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 mt-5">
              <a
                href="https://www.linkedin.com/in/asif-mhaldar-ab818b297"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-tr from-blue-600 via-blue-700 to-blue-800 text-white p-3 rounded-full transition-transform hover:scale-110"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://github.com/AsifMhaldar"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-full transition-transform hover:scale-110"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex justify-center md:justify-end w-full md:w-auto mt-6 md:mt-0">
            <img
              src={ProfileImg}
              alt="Asif Mhaldar"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
