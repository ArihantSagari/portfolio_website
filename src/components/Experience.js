import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        role: "Intern - Gear Shop Analysis & Time Study",
        company: "Tata Hitachi Construction Machinery",
        duration: "Aug 2022 - Sep 2022",
        description:
          "Conducted a detailed time study and efficiency analysis of gear shop operations to optimize productivity.",
      },
  {
    role: "Java Full Stack Developer (Trainee)",
    company: "Jspiders Marathahalli",
    duration: "2023",
    description:
      "Completed training in Java Full Stack Development, gaining expertise in Java, Spring Boot, web Development, and database management.",
  },
  {
    role: "Contract-Based Employee",
    company: "URSC - ISRO",
    duration: "2024 sep to present",
    description:
      "Worked as a contract-based employee at URSC, gaining experience in software development and system integration.",
  },
  
];

const Experience = ({ darkMode }) => {
  return (
    <section
      id="experience"
      className={`py-16 px-6 md:px-12 lg:px-24 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experience
      </motion.h2>

      {/* Experience Timeline */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 dark:bg-gray-700 h-full"></div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: index * 0.2 }}
          >
            {/* Experience Box */}
            <div
              className={`relative bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-5/12 ${
                index % 2 === 0 ? "md:mr-12" : "md:ml-12"
              }`}
            >
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-blue-500 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{exp.duration}</p>
              <p className="text-md">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
