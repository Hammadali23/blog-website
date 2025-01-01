"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-black shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/logo.jpg"
              alt="Blog Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-xl sm:text-2xl font-bold text-white">BLOG</span>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-xl text-white">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${
            isOpen 
              ? 'translate-x-0 opacity-100 visible' 
              : 'translate-x-full opacity-0 invisible'
          } lg:hidden fixed top-[73px] right-0 bottom-0 w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out z-40`}
        >
          <div className="flex flex-col py-4">
            <Link 
              href="/" 
              className="px-6 py-3 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="px-6 py-3 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="px-6 py-3 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* Overlay for mobile menu */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </header>
  );
}