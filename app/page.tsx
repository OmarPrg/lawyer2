import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { GlobalMouseFollow } from "@/components/ui/mouse-follow-animations";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { ScrollProgress } from "@/components/ui/scroll-animations";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="w-full flex-col items-center justify-center bg-[#131313] min-h-screen">
        <ScrollProgress />
        <Preloader />
        <GlobalMouseFollow />
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <AboutUs />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="why-us">
        <WhyUs />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Contact internally has id="contact" usually, but let's wrap it to be sure */}
      <div id="contact">
        <Contact />
      </div>

      <Footer />
      </main>
    </SmoothScroll>
  );
}
