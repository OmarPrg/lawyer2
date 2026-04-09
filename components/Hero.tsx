import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#131313]">
      {/* Layer 1: Background Image */}
      <Image
        src="/assets/heroBackground.webp.webp"
        alt="Background"
        fill
        priority
        className="object-cover object-center opacity-40"
      />

      {/* Layer 2: Gradient Overlay 
          Smooth, rich gradient using the primary brand color (#25395e) and deep accent (#1c0305).
          Right side is dark for text readability, fading out to the left to reveal the lawyer and background. 
      */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-l from-[#1c0305] via-[#25395e]/90 to-[#25395e]/20 md:to-transparent" />

      {/* Layer 3: Foreground Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full min-h-screen flex flex-col md:flex-row items-center justify-between pt-28 md:pt-0">

        {/* Right Side: Text Information */}
        <StaggerContainer className="flex-1 w-full flex flex-col items-start justify-center text-right space-y-6 max-w-2xl mb-4 md:mb-0 relative z-30">

          <StaggerItem>
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4870bb] shadow-[0_0_8px_#4870bb]"></span>
              <span className="text-[#e0e0e0] font-primary text-sm tracking-widest font-medium">
                بوابة العدالة والاحترافية
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold font-display leading-[1.1] text-white my-4 drop-shadow-lg ">
              مكتب عزالدين عمر للمحاماة
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-l from-white to-[#4870bb] pr-1">
                والاستشارات القانونية
              </span>
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-base sm:text-lg md:text-xl font-primary text-[#d1d5db] leading-relaxed border-r-4 border-[#4870bb] pr-5 opacity-90">
              نقدم لكم خبرات قانونية متراكمة وحلولاً استراتيجية مبتكرة لضمان حماية حقوقكم وتعزيز موقفكم بأعلى معايير النزاهة والشفافية.
            </p>
          </StaggerItem>

          <StaggerItem className="w-full">
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="#contact" className="w-full sm:w-auto group relative px-8 py-3.5 sm:py-4 bg-[#4870bb] overflow-hidden rounded-xl font-display font-bold text-base sm:text-lg text-white shadow-[0_0_20px_rgba(72,112,187,0.3)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(72,112,187,0.5)] hover:-translate-y-1 block text-center">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  طلب عرض
                  <span className="material-symbols-outlined text-xl transition-transform duration-300 group-hover:-translate-x-1">
                    arrow_back
                  </span>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link href="#services" className="w-full sm:w-auto px-8 py-3.5 sm:py-4 bg-transparent border border-white/20 hover:bg-white/5 hover:border-white/40 rounded-xl font-display font-semibold text-white transition-all duration-300 text-base sm:text-lg block text-center">
                استكشف خدماتنا
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Mobile View Image Frame (Pop-out 3D Frame) */}
        <SlideUp className="w-full flex md:hidden justify-center items-end relative z-20 mt-16 pb-12 px-6" delay={0.6}>

          <div className="relative w-full max-w-[380px] h-[350px] sm:h-[380px] rounded-[40px] bg-gradient-to-tr from-[#4870bb]/20 to-transparent border border-t-[#4870bb]/50 border-r-[#4870bb]/30 border-l-transparent border-b-transparent backdrop-blur-md shadow-2xl flex justify-center items-end relative">

            {/* Pop-out Image that breaks the top boundary */}
            <div
              className="absolute bottom-0 w-[400px] h-[480px] z-10 flex justify-center pointer-events-none"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
              }}
            >
              <Image
                src="/assets/lawyerImage.webp.webp"
                alt="المحامي عزالدين عمر"
                width={800}
                height={950}
                priority
                className="w-auto h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] scale-[1.35] origin-bottom transition-transform"
              />
            </div>

            {/* Elegant decor rings inside frame */}
            <div className="absolute top-10 right-6 w-32 h-32 border border-[#4870bb]/20 rounded-full" />
            <div className="absolute bottom-20 left-4 w-16 h-16 border border-white/10 rounded-full" />

            {/* Subtle Floating stats badge for mobile */}
            {/* <div className="absolute -bottom-6 right-8 z-30 bg-[#131313] border border-[#4870bb]/50 backdrop-blur-lg py-2 px-5 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="flex flex-col text-right pr-2 border-r border-[#4870bb]/40">
                <span className="text-sm font-display font-extrabold text-[#b9c7e4] leading-tight flex items-center gap-1">20+ <span className="text-xs font-primary font-normal text-white">عاماً</span></span>
                <span className="text-[10px] font-primary text-[#a5a5aa] mt-0.5">من التميز القانوني</span>
              </div>
            </div> */}

          </div>
        </SlideUp>

        {/* Desktop View Creative Lawyer Image Frame (Hidden on Mobile) */}
        <SlideUp className="absolute bottom-0 left-0 md:left-10 lg:left-20 justify-start items-end pointer-events-none z-20 mb-0 shrink-0 hidden md:flex" delay={0.4}>
          {/* Aesthetic Arch Mockup Frame */}
          <div className="relative w-[320px] md:w-[450px] lg:w-[500px] h-[55vh] md:h-[65vh] rounded-t-full border-t border-l border-r border-[#4870bb]/40 bg-gradient-to-b from-[#4870bb]/10 to-transparent backdrop-blur-sm flex justify-center items-end">

            {/* The Image */}
            <div
              className="absolute bottom-0 w-[380px] md:w-[600px] lg:w-[750px]"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
              }}
            >
              <Image
                src="/assets/lawyerImage.webp.webp"
                alt="المحامي عزالدين عمر"
                width={800}
                height={950}
                priority
                className="w-full h-auto object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:mb-5"
              />
            </div>

            {/* Decorative Geometric Rings */}
            <div className="absolute -top-10 -right-6 w-32 h-32 border border-[#4870bb]/30 rounded-full" />
            <div className="absolute top-32 -left-10 w-24 h-24 border border-white/20 rounded-full backdrop-blur-sm" />

          </div>
        </SlideUp>

      </div>

      {/* Bottom overlay for blending into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent dark:from-[#131313] pointer-events-none" />
    </section>
  );
}
