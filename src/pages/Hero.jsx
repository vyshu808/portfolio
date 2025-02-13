import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Sreepada Vaishnavi
              <span className="block text-2xl md:text-3xl text-gray-400 mt-2">
                Full-Stack Developer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Crafting exceptional digital experiences with React & Node.js. 
              Turning complex problems into elegant solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center gap-2 transition-colors">
                <FileText size={20} />
                Download Resume
              </button>
              <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center gap-2 transition-colors">
                <Mail size={20} />
                Contact Me
              </button>
            </div>
            <div className="flex gap-6 mt-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;