"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { services } from '@/lib/services-data';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'خدماتنا', href: '#', hasDropdown: true },
    { name: 'اتصل بنا', href: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#131313]/90 backdrop-blur-md shadow-lg py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <Link href="/" className="flex items-center gap-2 group z-50 relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4870bb] to-[#25395e] flex items-center justify-center text-white shadow-lg">
              <span className="material-symbols-outlined text-[20px]">balance</span>
            </div>
            <span className="text-2xl font-display font-bold text-white tracking-wide transition-colors group-hover:text-[#b9c7e4]">
              عزالدين عمر
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <Link 
                  href={link.href}
                  className="flex items-center gap-1 font-primary text-[#e0e0e0] hover:text-[#4870bb] transition-colors font-semibold text-[15px] py-2"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}>
                      keyboard_arrow_down
                    </span>
                  )}
                </Link>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full right-0 mt-2 w-[280px] bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl p-3"
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.id}`}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#4870bb]/10 flex items-center justify-center text-[#4870bb] group-hover/item:bg-[#4870bb] group-hover/item:text-white transition-all">
                                <span className="material-symbols-outlined text-sm">{service.icon}</span>
                              </div>
                              <span className="text-sm font-primary text-[#a5a5aa] group-hover/item:text-white transition-colors">{service.title}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Call to Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 z-50 relative">
            <Link 
              href="/contact"
              className="hidden sm:flex px-6 py-2.5 bg-white text-[#25395e] hover:bg-[#4870bb] hover:text-white rounded-lg font-display font-bold transition-colors shadow-md border border-white/10"
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

      {/* Mobile Menu Overlay - Premium Redesign */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#131313]/95 backdrop-blur-2xl z-[90] lg:hidden flex flex-col"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[40%] bg-[#4870bb]/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[40%] bg-[#25395e]/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="flex flex-col h-full pt-32 pb-10 px-8 overflow-y-auto">
              
              {/* Navigation Links with Staggered Entrance */}
              <motion.div 
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2
                    }
                  }
                }}
                className="flex flex-col space-y-2 mb-12"
              >
                {navLinks.map((link) => (
                  <motion.div 
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
                    }}
                  >
                    {link.hasDropdown ? (
                      <div className="flex flex-col">
                        <button 
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="flex items-center justify-between w-full py-4 text-right group"
                        >
                          <span className="text-3xl font-display font-black text-white group-hover:text-[#4870bb] transition-colors uppercase tracking-tight">
                            {link.name}
                          </span>
                          <span className={`material-symbols-outlined text-2xl text-white/40 transition-transform duration-500 ${isMobileServicesOpen ? 'rotate-180' : ''}`}>
                            expand_more
                          </span>
                        </button>
                        
                        <AnimatePresence>
                          {isMobileServicesOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="flex flex-col space-y-4 pr-6 pb-6 overflow-hidden border-r-2 border-[#4870bb]/20 mr-2"
                            >
                              {services.map((service) => (
                                <Link 
                                  key={service.id} 
                                  href={`/services/${service.id}`}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 text-lg font-primary text-[#a5a5aa] hover:text-white transition-colors"
                                >
                                  <span className="material-symbols-outlined text-sm text-[#4870bb]">{service.icon}</span>
                                  {service.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link 
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 text-3xl font-display font-black text-white hover:text-[#4870bb] transition-colors uppercase tracking-tight"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="mt-auto">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col space-y-8"
                >
                  {/* Quick Contact Actions */}
                  <div className="grid grid-cols-2 gap-4">
                    <a 
                      href="tel:+966501234567"
                      className="flex items-center justify-center gap-2 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-primary font-bold hover:bg-[#4870bb] transition-all"
                    >
                      <span className="material-symbols-outlined text-lg">call</span>
                      اتصال
                    </a>
                    <a 
                      href="https://wa.me/966119876543"
                      target="_blank"
                      className="flex items-center justify-center gap-2 py-4 bg-[#25d366]/10 border border-[#25d366]/20 rounded-2xl text-[#25d366] font-primary font-bold hover:bg-[#25d366] hover:text-white transition-all"
                    >
                      <span className="material-symbols-outlined text-lg text-inherit">chat</span>
                      واتساب
                    </a>
                  </div>

                  {/* Social Menu Footer */}
                  <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-8">
                      {[
                        { icon: 'public', href: '#', label: 'Twitter' },
                        { icon: 'photo_camera', href: '#', label: 'Instagram' },
                        { icon: 'facebook', href: '#', label: 'Facebook' },
                        { icon: 'send', href: '#', label: 'Telegram' }
                      ].map((social, i) => (
                        <Link 
                          key={i} 
                          href={social.href} 
                          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#4870bb] hover:border-[#4870bb] transition-all"
                        >
                          <span className="material-symbols-outlined text-xl">{social.icon}</span>
                        </Link>
                      ))}
                    </div>
                    <p className="text-[#a5a5aa] font-primary text-xs uppercase tracking-[0.2em] opacity-50">
                      عزالدين عمر للمحاماة &copy; {new Date().getFullYear()}
                    </p>
                  </div>
                </motion.div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
