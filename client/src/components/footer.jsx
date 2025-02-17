import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { ImageHandler } from '../utils/imagehandler';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Left Section - Logo & Description */}
        <div>
          <img src={ImageHandler.Logo} alt="" className="w-40" />
          <p className="text-gray-400 mt-2">
            Explore insightful stories, ideas, and expert articles from around the world. Join us in the journey of knowledge and inspiration.
          </p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-200">Quick Links</h3>
          <ul className="text-gray-400 space-y-1">
            <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Social Media Links */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-200">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition"><FaTwitter /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition"><FaInstagram /></a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 transition"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
        <p>© {new Date().getFullYear()} OrbPress. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
