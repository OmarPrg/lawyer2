"use client";

import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FadeIn } from "@/components/ui/scroll-animations";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full flex flex-col bg-white">
      {/* Hero Section */}
      <Hero />

      {/* About Section - Seamless Transition */}
      <AboutUs />

      {/* Services Section - Seamless Transition */}
      <Services />

      {/* Why Us Section */}
      <WhyUs />

      {/* Testimonials Section */}
      <div className="bg-white">
        <Testimonials />
      </div>

      {/* Refined Minimalist Contact Banner */}
      <section className="py-24 bg-[#131313] relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#4870bb] opacity-[0.05] blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <FadeIn>
            <div className="relative group overflow-hidden rounded-[32px] bg-gradient-to-r from-white/10 to-white/5 p-[1px] shadow-2xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(72,112,187,0.2)] hover:from-[#4870bb]/30 hover:to-transparent">
              {/* Inner Content with Glassmorphism */}
              <div className="relative z-10 bg-[#1a1a1a]/80 backdrop-blur-xl rounded-[31px] px-8 py-10 md:px-16 md:py-14 flex flex-col md:flex-row items-center justify-between gap-10 text-right">
                
                {/* Text Block */}
                <div className="flex flex-col items-start gap-2">
                  <div className="inline-flex items-center gap-2.5 py-1.5 px-4 rounded-full bg-[#4870bb]/10 border border-[#4870bb]/20 shadow-sm mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#4870bb] animate-pulse shadow-[0_0_8px_#4870bb]"></span>
                    <span className="text-[#4870bb] font-display font-bold text-xs tracking-widest uppercase">متاحون للاستشارة</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                    هل لديك تساؤل قانوني؟
                  </h3>
                  <p className="text-white/60 font-primary text-lg max-w-xl">
                    فريقنا جاهز لتقديم الدعم والخبرة التي تحتاجها. تواصل معنا اليوم لنبدأ في حماية حقوقك.
                  </p>
                </div>

                {/* Button Block */}
                <div className="flex items-center gap-6">
                  <Link 
                    href="/contact" 
                    className="group/btn relative px-10 py-4 bg-[#4870bb] hover:bg-white text-white hover:text-[#25395e] rounded-2xl font-display font-bold text-xl transition-all duration-500 flex items-center gap-3 shadow-lg"
                  >
                    <span>تواصل الآن</span>
                    <span className="material-symbols-outlined transition-transform duration-500 group-hover/btn:-translate-x-2">contact_support</span>
                  </Link>
                </div>

                {/* Background Decorative Element */}
                <div className="absolute -top-24 -left-20 w-64 h-64 bg-[#4870bb] opacity-10 blur-[100px] pointer-events-none"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
