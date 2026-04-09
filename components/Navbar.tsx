"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', href: '#home' },
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'لماذا نحن', href: '#why-us' },
    { name: 'آراء العملاء', href: '#testimonials' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#131313]/90 backdrop-blur-md shadow-lg py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Link href="#" className="flex items-center gap-2 group z-50 relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4870bb] to-[#25395e] flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-[20px]">balance</span>
            </div>
            <span className="text-2xl font-display font-bold text-white tracking-wide transition-colors group-hover:text-[#b9c7e4]">
              عزالدين عمر
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="font-primary text-[#e0e0e0] hover:text-[#4870bb] transition-colors font-medium text-[15px]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call to Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 z-50 relative">
            <Link 
              href="#contact"
              className="hidden sm:flex px-6 py-2.5 bg-white text-[#25395e] hover:bg-[#4870bb] hover:text-white rounded-lg font-display font-bold transition-colors shadow-md"
            >
              اتصل بنا
            </Link>
            
            <button 
              className="lg:hidden text-white flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#131313]/95 backdrop-blur-xl z-40 lg:hidden transition-all duration-500 flex flex-col items-center justify-center space-y-8 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 text-center w-full px-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display font-bold text-2xl text-white hover:text-[#4870bb] transition-colors w-full border-b border-white/5 pb-4"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full max-w-[250px] px-8 py-4 bg-gradient-to-r from-[#25395e] to-[#4870bb] text-white rounded-xl font-display font-bold text-xl mt-4 shadow-lg"
          >
            اتصل بنا
          </Link>
        </div>
      </div>
    </>
  );
}
