"use client";
import React from "react";
import { motion } from "motion/react";

export type Testimonial = {
  id: number;
  content: string;
  name: string;
  role: string;
  rating: number;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ content, name, role, rating }, i) => (
                <div 
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative group w-full min-w-[300px] max-w-sm hover:-translate-y-1 transition-transform duration-300"
                >
                  {/* Giant Quote mark in background */}
                  <span className="material-symbols-outlined absolute top-4 left-4 text-7xl text-white/5 pointer-events-none group-hover:text-[#4870bb]/20 transition-colors duration-500 transform rotate-180">
                    format_quote
                  </span>
                  
                  {/* Star Rating */}
                  <div className="flex gap-1 mb-6 text-[#e9c176]">
                    {[...Array(rating)].map((_, rIndex) => (
                      <span key={rIndex} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>

                  {/* Review Content */}
                  <p className="text-[#d1d5db] font-primary text-[15px] leading-relaxed mb-8 relative z-10 text-right">
                    "{content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25395e] to-[#4870bb] flex items-center justify-center text-white font-display font-bold shadow-inner shrink-0">
                      {name.charAt(0)}
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-white font-display font-extrabold text-[15px]">
                        {name}
                      </span>
                      <span className="text-[#a5a5aa] font-primary text-[13px]">
                        {role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
