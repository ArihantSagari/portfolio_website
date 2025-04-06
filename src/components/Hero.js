"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Others/my-photo.jpg"
          alt="Arihat Sagari"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="animate-zoom"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-white p-5 md:p-10"
      >
        {/* Name with Cool Animation */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-glow"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Arihat Sagari
        </motion.h1>

        {/* Description with Subtle Fade-in */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl mb-6 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Full Stack Java Developer | Passionate about Scalable Applications
        </motion.p>

        {/* Buttons with Hover & Floating Effects */}
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.8 }}
        >
          {/* Download Resume */}
          <a href="/Others/Arihant_Sagari_Resume.pdf" download="Arihant_Sagari_Resume.pdf">
            <Button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow-xl transition-transform duration-300 hover:scale-110 animate-float">
              📄 Download Resume
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-16 left-16 w-20 h-20 bg-blue-500 rounded-full opacity-50 blur-lg animate-pulse"
        animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
      <motion.div
        className="absolute bottom-16 right-16 w-16 h-16 bg-pink-500 rounded-full opacity-50 blur-lg animate-pulse"
        animate={{ x: [0, -20, 20, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </section>
  );
};

export default Hero;
