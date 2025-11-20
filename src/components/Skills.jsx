import React from 'react';
import { motion } from 'framer-motion';

const techSkills = [
  { name: "HTML/CSS", level: 95 },
  { name: "React", level: 90 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 80 },
  { name: "Next.js", level: 70 },
  { name: "MongoDB", level: 75 },
  { name: "PostgreSQL", level: 75 },
  { name: "Java", level: 70 },
  { name: "Python", level: 70 },
  { name: "C#", level: 70 },
  { name: "Git", level: 85 },
  { name: "Docker", level: 65 },
  { name: "RESTful APIs", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: ".NET", level: 70 },
  { name: "Firebase", level: 70 },
];

const cloudPlatforms = ["AWS", "Azure"];
const softSkills = ["Communication", "Teamwork", "Time Management", "Problem-solving", "Adaptability"];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
              Skills and Expertise
            </span>
          </h2>          <p className="text-gray-400">Technologies, tools, and personal strengths I bring to the table.</p>
        </motion.div>

        {/* Tech Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {techSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="bg-gray-800 p-5 rounded-lg shadow">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-blue-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cloud Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-center"
        >
          <h3 className="text-2xl font-semibold mb-2">Cloud Platforms</h3>
          <p className="text-gray-300">{cloudPlatforms.join(" • ")}</p>
        </motion.div>
      </div>
    </section>
  );
}
