import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        
        {/* Profile Image with Animation */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/Others/my-photo1.jpeg"
            alt="Arihat Sagari"
            width={250}
            height={250}
            className="rounded-full border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

        {/* About Me Text */}
        <motion.div
          className="w-full md:w-2/3 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Hello! I'm <span className="text-blue-500 font-semibold">Arihat Sagari</span>, a passionate
            <span className="text-green-500 font-semibold"> Full Stack Java Developer</span> with a deep interest in
            building scalable and user-friendly applications. I love writing clean, efficient code and 
            continuously learning new technologies.
          </p>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            {/* Key Info Cards */}
            <motion.div
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-blue-500 font-semibold">🎓 Mechanical Engineer</p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-green-500 font-semibold">💻 Java Full Stack Developer</p>
            </motion.div>
            <motion.div
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-purple-500 font-semibold">🚀 Passion for learning new technologies</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
