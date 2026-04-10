"use client";

import { motion, animate, useInView, useScroll, useSpring } from "motion/react";
import React, { useEffect, useRef } from "react";

interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// Balanced Spring config for premium feel without jitters
const PREMIUM_SPRING = {
  type: "spring" as const, 
  stiffness: 80, 
  damping: 20, 
  mass: 1.1,
};

// Global viewport settings to ensure items trigger "just in time" on mobile
const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.1,
  margin: "-5% 0px -5% 0px", // Trigger when 5% into view
};

export const FadeIn = ({ children, className = "", delay = 0 }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, filter: "blur(1px)", scale: 0.98 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ ...PREMIUM_SPRING, delay, duration: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideUp = ({ children, className = "", delay = 0 }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 50, filter: "blur(1px)", scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={VIEWPORT_CONFIG}
      transition={{ ...PREMIUM_SPRING, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideInLeft = ({ children, className = "", delay = 0 }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, x: -50, filter: "blur(1px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={VIEWPORT_CONFIG}
      transition={{ ...PREMIUM_SPRING, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SlideInRight = ({ children, className = "", delay = 0 }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, filter: "blur(1px)" }}
      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      viewport={VIEWPORT_CONFIG}
      transition={{ ...PREMIUM_SPRING, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = "", delayChildren = 0.1, staggerChildren = 0.1 }: { children: React.ReactNode; className?: string; delayChildren?: number; staggerChildren?: number }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_CONFIG}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40, filter: "blur(8px)", scale: 0.95 },
        show: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1, transition: PREMIUM_SPRING },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const TextReveal = ({ text, className = "" }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT_CONFIG}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
      }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mx-1 overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 30, filter: "blur(6px)", rotateX: -30 },
            show: { 
              opacity: 1, 
              y: 0, 
              filter: "blur(0px)", 
              rotateX: 0,
              transition: PREMIUM_SPRING
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Helper for Arabic numbers
const toArabicNumerals = (num: number) => {
  const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return num.toString().replace(/[0-9]/g, function (w) {
    return arabicNumbers[+w];
  });
};

export const AnimatedCounter = ({ from = 0, to, duration = 2.5, prefix = "", suffix = "", className = "" }: { from?: number; to: number; duration?: number; prefix?: string; suffix?: string; className?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { 
    once: VIEWPORT_CONFIG.once, 
    amount: VIEWPORT_CONFIG.amount, 
    margin: VIEWPORT_CONFIG.margin as any 
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = `${prefix}${toArabicNumerals(Math.round(value))}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, prefix, suffix]);

  return <span ref={nodeRef} className={className}>{prefix}{toArabicNumerals(from)}{suffix}</span>;
}

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#25395e] via-[#4870bb] to-white origin-left z-[9999999]"
    />
  );
};
