import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#131313] rounded-b-[40px] lg:rounded-b-[80px] shadow-xl z-20">
      {/* Layer 1: Background Pattern (Geometric elegance in subtle brand blue) */}
      <div className="absolute inset-0 opacity-[0.04] z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0zM30 2L4 30L30 58L56 30L30 2z' fill='%234870bb' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px'
      }} />

      {/* Layer 2: Subtle Brand Blue/Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/90 to-[#1c2436]/80 z-0" />

      {/* Subtle Glow behind text */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#4870bb] opacity-[0.08] blur-[150px] rounded-full z-0" />

      {/* Layer 3: Foreground Content */}
      <div className="relative z-10 container mx-auto px-8 lg:px-12 h-full min-h-screen flex flex-col md:flex-row items-center justify-between pt-24 md:pt-0">

        {/* Right Side: Text Information (Appears second on mobile, first on desktop) */}
        <StaggerContainer className="flex-1 w-full flex flex-col items-start justify-center text-right space-y-6 md:space-y-8 max-w-3xl mb-16 md:mb-0 relative z-30 order-2 md:order-1 mt-6 md:mt-0">

          {/* <StaggerItem>
            <div className="inline-flex items-center gap-3 py-2 px-6 rounded-full bg-[#4870bb]/10 border border-[#4870bb]/20 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#4870bb] shadow-[0_0_10px_#4870bb]"></span>
              <span className="text-[#a5bce6] font-primary text-sm tracking-widest font-medium uppercase">
                بوابة  والاحترافية
              </span>
            </div>
          </StaggerItem> */}

          <StaggerItem>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold font-display leading-[1.3] text-white my-4 drop-shadow-lg md:whitespace-nowrap">
              مكتب الأستاذ شعبان عبد الناصر
              <span className="block mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-[#4870bb] pr-1 pb-2">
                للمحاماة والاستشارات القانونية
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-base md:text-lg lg:text-xl font-primary text-[#d1d5db] leading-relaxed border-r-4 border-[#4870bb] pr-5 opacity-90 max-w-2xl">
              متخصصون في كبرى القضايا الجنائية والمدنية، نقدم خبرات قانونية متراكمة وحلولاً استراتيجية مبتكرة لضمان حماية حقوقكم.
            </p>
          </StaggerItem>

          <StaggerItem className="w-full">
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/contact" className="w-full sm:w-auto group relative px-8 py-4 bg-[#4870bb] overflow-hidden rounded-xl font-display font-bold text-base sm:text-lg text-white transition-all duration-500 hover:-translate-y-1 block text-center min-w-[200px] shadow-[0_10px_30px_rgba(72,112,187,0.3)]">
                <span className="relative z-10 flex items-center justify-center gap-3">
                  راسلنا الآن
                  <span className="material-symbols-outlined text-2xl transition-transform duration-500 group-hover:-translate-x-2">
                    trending_flat
                  </span>
                </span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </Link>
              <Link href="/#services" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#4870bb]/40 hover:border-[#4870bb] hover:bg-[#4870bb]/10 hover:-translate-y-1 rounded-xl font-display font-bold text-white transition-all duration-500 text-base sm:text-lg block text-center min-w-[200px]">
                قراءة المزيد
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Mobile View Image Frame (Appears first on mobile, hidden on desktop) */}
        <SlideUp className="w-full flex md:hidden justify-center items-end relative z-20 px-8 order-1 md:order-2 mt-4" delay={0.2}>
          <div className="flex-1 mt-12 md:mt-0 relative flex justify-center scale-x-[-1]">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-2 border-[#4870bb]/30 overflow-hidden">
              <Image
                src="/assets/lawyer2.webp"
                alt="Shaban Abdelnasser"
                fill
                className="object-cover object-top filter contrast-[1.1] transition-all duration-700"
              />
            </div>
          </div>
        </SlideUp>

        {/* Desktop View Minimalist Circle Image Frame */}
        <SlideUp className="absolute bottom-0 left-0 md:left-5 lg:left-20 justify-start items-end pointer-events-none z-20 mb-0 shrink-0 hidden md:flex" delay={0.4}>
          <div className="relative w-[400px] md:w-[500px] lg:w-[600px] h-[75vh] flex justify-center items-end">

            {/* Giant Minimalist Circle Background Motif */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[550px] md:h-[550px] rounded-full border-[2px] border-[#4870bb]/30 z-0 transition-transform duration-1000 group-hover:scale-105"></div>

            {/* Secondary subtle inner ring */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[520px] md:h-[520px] rounded-full border border-white/5 z-0 shadow-[inset_0_0_80px_rgba(72,112,187,0.03)]"></div>

            {/* Small decorative dot */}
            <div className="absolute top-1/4 right-0 w-3 h-3 bg-[#4870bb] rounded-full shadow-[0_0_15px_#4870bb] z-0 animate-pulse"></div>

            {/* The Image - Original color */}
            <div
              className="absolute bottom-0 w-[400px] md:w-[550px] lg:w-[650px] h-[88vh] z-10 flex justify-center pointer-events-auto group cursor-default"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)'
              }}
            >
              <Image
                src="/assets/lawyer2.webp"
                alt="المحامي شعبان عبد الناصر"
                width={800}
                height={950}
                priority
                className="w-auto h-full object-contain object-top drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-700"
              />
            </div>
          </div>
        </SlideUp>

      </div>
    </section>
  );
}
