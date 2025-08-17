"use client";

import { FaTwitter, FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-white">AI Voice Assistant</h2>
            <p className="mt-2 text-sm text-gray-400">
              Building awesome solutions with passion and innovation.  
              We bring ideas to life with modern web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to our newsletter to get the latest updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-lg bg-gray-800 text-gray-200 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg text-white font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>

          {/* Social Media */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://twitter.com" target="_blank" className="hover:text-white transition"><FaTwitter size={20} /></a>
            <a href="https://facebook.com" target="_blank" className="hover:text-white transition"><FaFacebook size={20} /></a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-white transition"><FaLinkedin size={20} /></a>
            <a href="https://github.com" target="_blank" className="hover:text-white transition"><FaGithub size={20} /></a>
            <a href="https://instagram.com" target="_blank" className="hover:text-white transition"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
