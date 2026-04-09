"use client";

import { motion, useSpring } from "motion/react";
import React, { useEffect, useState } from "react";

const SPRING = {
  mass: 0.1, 
  damping: 10,
  stiffness: 131,
};

export const GlobalMouseFollow = () => {
  const xSpring = useSpring(0, SPRING);
  const ySpring = useSpring(0, SPRING);
  const opacitySpring = useSpring(0, SPRING);
  const scaleSpring = useSpring(0, SPRING);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    
    // Explicitly ensure the system cursor is visible
        setIsMounted(true);

    const handlePointerMove = (e: MouseEvent) => {
      // Use clientX and clientY for window-relative coordinates natively with Fixed positioning
      xSpring.set(e.clientX - 6);
      ySpring.set(e.clientY - 6);
      
      if (opacitySpring.get() === 0) opacitySpring.set(1);
      if (scaleSpring.get() === 0) scaleSpring.set(1);
    };

    const handleMouseEnter = () => {
      opacitySpring.set(1);
      scaleSpring.set(1);
    };

    const handleMouseLeave = () => {
      opacitySpring.set(0);
      scaleSpring.set(0);
    };
    
    window.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };

  }, [xSpring, ySpring, opacitySpring, scaleSpring]);

  // Don't render until client to prevent hydration mismatch
  if (!isMounted) return null;

  return (
    <motion.div
      style={{
        x: xSpring,
        y: ySpring,
        opacity: opacitySpring,
        scale: scaleSpring,
      }}
      // Universal visibility using mix-blend-difference. 
      // Small size (12px) for a subtle trailing effect.
      // Hidden on mobile and tablet devices
      className="hidden lg:block pointer-events-none fixed top-0 left-0 z-[999999] w-3 h-3 rounded-full bg-white mix-blend-difference"
    />
  );
};
