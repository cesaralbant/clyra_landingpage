import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2 neon-text neon-white futuristic-text">CLYRA</h3>
            <p className="text-gray-400 futuristic-text">Empowering businesses with innovative software solutions</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 neon-text neon-white futuristic-text">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300 futuristic-text">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition duration-300 futuristic-text">Services</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-white transition duration-300 futuristic-text">Portfolio</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300 futuristic-text">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4 neon-text neon-white futuristic-text">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Linkedin /></a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 futuristic-text">&copy; 2024 Clyra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;