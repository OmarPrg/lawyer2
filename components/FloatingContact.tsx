"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';

export function FloatingContact() {
  return (
    <div className="fixed bottom-8 left-8 z-[100] flex flex-col gap-4">
      {/* Telegram Floating Button (Static) */}
      <div className="pointer-events-auto">
        <Link 
          href="https://t.me/ezzeldin_law" 
          target="_blank"
          className="w-14 h-14 rounded-full bg-[#24A1DE] text-white flex items-center justify-center shadow-xl hover:-translate-y-1 transition-all duration-300 group relative"
        >
          <span className="material-symbols-outlined text-3xl">send</span>
          <span className="absolute left-full ml-4 px-3 py-1 bg-[#131313] text-white text-[11px] rounded bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-primary border border-white/10">
            تيليجرام
          </span>
        </Link>
      </div>

      {/* WhatsApp Floating Button (Static & Same Size) */}
      <div className="pointer-events-auto">
        <Link 
          href="https://wa.me/966119876543" 
          target="_blank"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:-translate-y-1 transition-all duration-300 group relative"
        >
          <span className="material-symbols-outlined text-3xl">call</span>
          <span className="absolute left-full ml-4 px-3 py-1 bg-[#131313] text-white text-[11px] rounded bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-primary border border-white/10">
            واتساب
          </span>
        </Link>
      </div>
    </div>
  );
}
