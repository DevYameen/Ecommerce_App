import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Company Info */}
        <p className="text-center md:text-left mb-2 md:mb-0 text-white-600 hover:text-red-600">&copy; 2024 || E-commerce Store. All rights reserved.</p>

        {/* Quick Links */}
        <div className="flex space-x-6 text-center md:text-left mb-2 md:mb-0">
          <Link to="/about" className="hover:text-red-600">
           About Us
          </Link>
          <Link to="/support" className="hover:text-red-600">
           Support
          </Link>
          <Link to="/contact" className="hover:text-red-600">
           Contact Us
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-2">
          <a href="#" className="hover:text-red-600 text-xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-red-600 text-xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-red-600 text-xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
