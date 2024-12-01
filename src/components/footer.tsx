'use client'

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-center md:text-left text-sm">&copy; 2024 BridgeForce Data Solution.</p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
