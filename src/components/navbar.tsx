'use client'

import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white ">
      <div className="max-w-8xl mx-auto px-4 sm:px-4 lg:px-4">
        <div className="flex justify-between h-20">
          {/* Logo Section */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/bridgeLogo.png"
                alt="Company Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">Memoir Collection</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">Masterpiece Collection</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">Inspire Collection</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">New</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">Bestsellers</a>

            {/* Get Started Button */}
            <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Get Started
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md">Memoir Collection</a>
              <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md">Masterpiece Collection</a>
              <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md">Inspire Collection</a>
              <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md">New</a>
              <a href="#" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 block px-3 py-2 rounded-md">Bestsellers</a>

              {/* Mobile Get Started Button */}
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
