import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              With over 3 years of experience in full-stack development, I've had the privilege
              of working with industry leaders like Accenture and OSS Technologies. My journey
              in tech has been driven by a passion for creating efficient, scalable, and
              user-friendly applications.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              I specialize in modern web technologies including React, Node.js, and AWS,
              combining technical expertise with a keen eye for design to deliver exceptional
              digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-gray-800 p-6 rounded-lg">
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-400">Writing maintainable, efficient code is my passion</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
              <p className="text-gray-400">Building systems that grow with your business</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Best Practices</h3>
              <p className="text-gray-400">Following industry standards and patterns</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;