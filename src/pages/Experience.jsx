import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'OSS Technologies',
      role: ' Full Stack Developer',
      period: '2023 - Present',
      description: [
        'Led development of enterprise-scale React applications serving 100K+ users',
        'Architected and implemented microservices using Node.js and AWS',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
      ],
      technologies: ['React', 'JavaScript','HTML','CSS','Bootstrap','Node.js','Unit Testing'],
    },
    {
      company: 'Accenture',
      role: 'Software Developer',
      period: '2022 - 2023',
      description: [
        'Developed and maintained e-commerce platforms for Fortune 500 clients',
        'Implemented responsive designs and improved mobile UX',
        'Integrated payment gateways and third-party APIs',
        'Reduced server response time by 50% through caching strategies',
      ],
      technologies: ['JavaScript', 'HTML','CSS',],
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-700"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 ${
                  index % 2 === 0 ? 'right-0 md:-right-4' : 'left-0 md:-left-4'
                } w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center`}
              >
                <Briefcase size={16} />
              </div>

              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-2 text-blue-500 mb-2">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <h4 className="text-lg text-gray-400 mb-4">{exp.company}</h4>
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-300">
                      • {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;