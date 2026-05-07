"use client";

import React from 'react';
import { motion } from 'motion/react';
import { SlideUp, StaggerContainer, StaggerItem } from './ui/scroll-animations';

export function MissionVisionValues() {
  const data = [
    {
      title: 'رؤيتنا',
      icon: 'visibility',
      content: 'نؤمن بأن الخبرة والمهارات القانونية ضرورية وهي عامل أساسي في نجاح مكاتب وشركات المحاماة، ونعلم أيضاً بأن الأخلاق الحميدة يثمنها عملاؤنا وتعتبر عاملاً مهماً في نجاح أي محام أو مستشار.',
      delay: 0.1
    },
    {
      title: 'رسالتنا',
      icon: 'track_changes',
      content: 'نسعى إلى الريادة في تقديم خدماتنا للأفراد والشركات وذلك من خلال ابتكار أنسب الحلول القانونية والسعي الدائم إلى جعل المعاملات القانونية وقائية قبل أن تكون علاجية.',
      delay: 0.2
    },
    {
      title: 'قيمنا',
      icon: 'verified_user',
      content: 'نؤمن بالنزاهة والشفافية والالتزام بأعلى معايير الأخلاق المهنية. نسعى لتحقيق العدالة والتميز في كل ما نقوم به، مع التركيز على تقديم حلول قانونية مخصصة تلبي احتياجات عملائنا وتحمي حقوقهم.',
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 bg-[#131313] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#4870bb]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-[#25395e]/15 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <StaggerItem key={index}>
              <div className="group relative bg-white/[0.03] border border-white/10 backdrop-blur-sm rounded-[32px] p-10 md:p-12 h-full flex flex-col items-center text-center transition-all duration-500 hover:bg-white/[0.07] hover:border-[#4870bb]/40 hover:-translate-y-3">
                
                {/* Decorative Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4870bb]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[32px]" />

                {/* Icon Container - Using Website Blue Theme */}
                <div className="w-24 h-24 rounded-[28px] bg-[#131313] border border-white/10 flex items-center justify-center mb-10 group-hover:bg-[#4870bb] group-hover:border-[#4870bb] group-hover:shadow-[0_15px_35px_rgba(72,112,187,0.3)] transition-all duration-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="material-symbols-outlined text-4xl text-[#4870bb] group-hover:text-white transition-all duration-500 z-10" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300" }}>
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-3xl font-display font-black text-white mb-6 relative z-10 group-hover:text-[#b9c7e4] transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/60 font-primary text-lg leading-relaxed relative z-10 group-hover:text-white/80 transition-colors">
                  {item.content}
                </p>

                {/* Subtle Bottom Line Accent */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#4870bb]/20 rounded-full group-hover:w-24 group-hover:bg-[#4870bb] transition-all duration-500" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
