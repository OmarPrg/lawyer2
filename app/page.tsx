"use client";

import { Hero } from "@/components/Hero";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FadeIn, SlideUp } from "@/components/ui/scroll-animations";
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

      {/* SEO Optimized FAQ Section */}
      <FAQ />
    </main>
  );
}
