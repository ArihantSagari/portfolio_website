import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaAws, FaDatabase, FaDocker, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiSpringboot, SiNextdotjs, SiKubernetes, SiMysql, SiPostgresql, SiMicrogenetics } from "react-icons/si";
import { MdOutlineScience } from "react-icons/md";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-orange-600" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "React.js", icon: <FaPython className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-300" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "AWS", icon: <FaAws className="text-yellow-400" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-600" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-blue-400" /> },
  { name: "Microservices", icon: <SiMicrogenetics className="text-red-500" /> },
  { name: "AI & ML", icon: <MdOutlineScience className="text-purple-500" /> },
];

const Skills = ({ darkMode }) => {
  return (
    <section
      id="skills"
      className={`py-16 px-6 md:px-12 lg:px-24 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md p-6 rounded-lg hover:shadow-lg transition transform hover:-translate-y-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-lg font-semibold mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
