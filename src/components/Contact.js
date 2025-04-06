import React from "react";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Importing X (Twitter) icon

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Kabutar</h2>
          <p className="text-gray-400">
            A platform to connect and explore amazing conversations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-400 transition">
                Projects
              </Link>
            </li>
            <li>
              <a href="mailto:arihantsagari08@gmail.com" className="hover:text-blue-400 transition">
                Contact: arihantsagari08@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com/share/16ADoEJNUc/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
              <FaXTwitter size={24} />
            </a>
            <a href="https://linkedin.com/in/arihant-sagari-aa55532ab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/ArihantSagari" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.instagram.com/arihant_sagari?igsh=cXkzaHlqc2ZhNnhy&utm_source=ig_contact_invite" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-6 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
