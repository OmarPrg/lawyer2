"use client";

import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after a set duration to allow animations to complete
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 2.8s total loading screen duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          // Smoothly fade out and blur slightly when exiting instead of sliding up
          exit={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
          transition={{ duration: 1.2, ease: "easeInOut" }} // smooth, luxurious fade out
          className="fixed inset-0 z-[1000000] flex flex-col items-center justify-center bg-[#1c0305] overflow-hidden"
        >
          {/* Inner Content Wrapper */}
          <div className="flex flex-col items-center">
            
            {/* Top Text (Lawyer Name) */}
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl text-white font-display font-extrabold tracking-wider"
              dir="rtl"
            >
              عزالدين عمر
            </motion.h1>

            {/* Glowing / Expanding Divider Line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.6 }}
              className="h-[2px] bg-gradient-to-r from-transparent via-[#4870bb] to-transparent w-full max-w-[200px] md:max-w-[300px] my-6"
            />

            {/* Bottom Text (Specialization) */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
              className="text-[#a5a5aa] font-primary text-sm md:text-base tracking-[0.2em] font-medium"
              dir="rtl"
            >
              للمحاماة والاستشارات القانونية
            </motion.div>
          </div>
          
          {/* Subtle bottom absolute decorative */}
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.15 }}
             transition={{ duration: 1.5, delay: 0.5 }}
             className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#4870bb] blur-[150px] rounded-[100%] pointer-events-none"
          />

        </motion.div>
      )}
    </AnimatePresence>
  );
}
