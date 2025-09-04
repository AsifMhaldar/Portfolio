import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-gray-50 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex items-center justify-between h-20">
        
        {/* Logo */}
        <a href="#" className="text-3xl font-bold text-gray-800 cursor-pointer">
          PortFolio
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#Home" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">Home</a>
          <a href="#About" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">About</a>
          <a href="#Work" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">Work</a>
          <a href="#Contact" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">Contact</a>
          <a href="https://drive.google.com/file/d/13PMxW2PVKaYlenrkPs3EWVA1ckfYR3Od/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">Resume</a>
          <a href="https://github.com/AsifMhaldar" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">GitHub</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none cursor-pointer"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-50 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 shadow-lg">
          <ul className="flex flex-col gap-4 p-4">
            <li><a href="#Home" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">Home</a></li>
            <li><a href="#About" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">About</a></li>
            <li><a href="#Work" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">Work</a></li>
            <li><a href="#Contact" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">Contact</a></li>
            <li><a href="https://drive.google.com/file/d/13PMxW2PVKaYlenrkPs3EWVA1ckfYR3Od/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">Resume</a></li>
            <li><a href="https://github.com/AsifMhaldar" target="_blank" rel="noopener noreferrer" className="text-gray-700 text-lg hover:text-blue-600 font-semibold transition">GitHub</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
