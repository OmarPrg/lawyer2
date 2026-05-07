"use client";

import React from 'react';
import { motion } from 'motion/react';
import { FadeIn, SlideUp } from './ui/scroll-animations';

export function CTASection() {
  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden bg-white">
      {/* Background Decorative Elements - Matching Website Colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none">
        <div className="absolute top-[10%] right-[20%] w-[40%] h-[40%] bg-[#4870bb]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-[#25395e]/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-[#131313] rounded-[40px] md:rounded-[60px] p-10 md:p-20 overflow-hidden shadow-[0_20px_50px_rgba(37,57,94,0.3)]">
            
            {/* Inner Decorative Gradients */}
            <div className="absolute top-0 right-0 w-full h-full opacity-30">
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#4870bb]/20 blur-[100px] rounded-full" />
              <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#25395e]/30 blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
              <FadeIn>
                <span className="inline-block py-2 px-6 rounded-full bg-white/5 border border-white/10 text-[#b9c7e4] font-primary text-sm tracking-widest uppercase mb-8">
                  تواصل معنا اليوم
                </span>
              </FadeIn>

              <SlideUp>
                <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-8 leading-tight">
                  هل لديك <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-[#4870bb]">قضية</span> تحتاج لخبرة قانونية؟
                </h2>
              </SlideUp>

              <SlideUp delay={0.1}>
                <p className="text-lg md:text-xl text-white/60 font-primary mb-12 leading-relaxed">
                  نحن هنا لنقدم لك الدعم القانوني الذي تستحقه. ابقَ على اطلاع بأحدث التطورات القانونية أو احصل على استشارة فورية من فريقنا المتخصص.
                </p>
              </SlideUp>

              {/* Newsletter / Contact Input - Styled like the image */}
              <SlideUp delay={0.2} className="w-full max-w-xl">
                <form className="relative flex flex-col sm:flex-row items-center gap-4 group">
                  <div className="relative w-full">
                    <input 
                      type="email" 
                      placeholder="أدخل بريدك الإلكتروني للحصول على استشارة..."
                      className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl text-white font-primary focus:outline-none focus:border-[#4870bb]/50 focus:bg-white/10 transition-all duration-300 placeholder:text-white/30 text-right pr-14"
                      dir="rtl"
                    />
                    <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-white/40">mail</span>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full sm:w-auto px-10 py-5 bg-[#4870bb] text-white rounded-2xl font-display font-bold text-lg whitespace-nowrap hover:bg-[#25395e] hover:shadow-[0_10px_20px_rgba(72,112,187,0.3)] transition-all duration-300 active:scale-95"
                  >
                    اشترك الآن
                  </button>
                </form>
                <p className="mt-4 text-white/30 text-sm font-primary">
                  * نلتزم بالسرية التامة لبياناتكم ولن نرسل أي رسائل مزعجة.
                </p>
              </SlideUp>

            </div>

            {/* Abstract Decorative Lines */}
            <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-[#4870bb]/20 rounded-tr-3xl" />
            <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-[#25395e]/20 rounded-bl-3xl" />
            
          </div>
        </div>
      </div>
    </section>
  );
}
