import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe2, Layout, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="w-8 h-8 text-blue-500" />,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className="w-8 h-8 text-green-500" />,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="w-8 h-8 text-purple-500" />,
      skills: [
        { name: 'Node.js', level: 85 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: <Code2 className="w-8 h-8 text-red-500" />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Jira', level: 80 },
      ],
    },
    // {
    //   title: 'Mobile Development',
    //   icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
    //   skills: [
    //     { name: 'React Native', level: 82 },
    //     { name: 'Expo', level: 85 },
    //     { name: 'Mobile UI/UX', level: 80 },
    //     { name: 'App Store Deploy', level: 75 },
    //   ],
    // },
    // {
    //   title: 'Other',
    //   icon: <Globe2 className="w-8 h-8 text-indigo-500" />,
    //   skills: [
    //     { name: 'Testing', level: 85 },
    //     { name: 'SEO', level: 78 },
    //     { name: 'Agile', level: 88 },
    //     { name: 'UI/UX Design', level: 80 },
    //   ],
    // },
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
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;