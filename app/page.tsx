import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { AboutUs } from "@/components/AboutUs";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex-col items-center justify-center bg-[#131313] min-h-screen">
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
  );
}
