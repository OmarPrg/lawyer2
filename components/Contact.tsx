import React from 'react';
import { FadeIn, SlideInLeft, SlideUp } from "@/components/ui/scroll-animations";

export function Contact() {
  return (
    <section id="contact" className="w-full py-24 bg-[#f6f6f6] relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <FadeIn className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-6 rounded-full bg-white text-[#25395e] border border-[#e2e8f0] font-primary text-sm tracking-widest shadow-sm mb-4">
            تواصل معنا
          </span>
          
          <h2 className="text-4xl md:text-5xl font-extrabold font-display leading-[1.2] text-[#1c0305] my-4">
            نحن هنا للاستماع إليك و<span className="text-transparent bg-clip-text bg-gradient-to-l from-[#25395e] to-[#4870bb]">مساعدتك</span>
          </h2>
          <p className="text-[#616161] font-primary text-lg leading-relaxed">
            لا تتردد في زيارة مكتبنا أو التواصل معنا لحجز استشارتك القانونية. فريقنا متواجد لخدمتك.
          </p>
        </FadeIn>

        <SlideUp className="flex flex-col lg:flex-row gap-12 lg:gap-16 bg-white rounded-3xl shadow-[0_20px_50px_rgba(37,57,94,0.05)] border border-[#e2e8f0] p-6 md:p-10 lg:p-14 overflow-hidden relative">
          
          {/* Subtle Graphic background */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#4870bb]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Right Side: Contact Information */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-8 text-right">
            <div>
              <h3 className="text-2xl font-display font-bold text-[#1c0305] mb-6">معلومات التواصل</h3>
              <p className="text-[#616161] font-primary text-[15px] leading-relaxed mb-8">
                نرحب بزيارتكم لمكتبنا خلال أوقات العمل الرسمية، أو يمكنكم التواصل معنا عبر الهاتف أو البريد الإلكتروني.
              </p>
            </div>

            <SlideInLeft>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25395e]/5 flex items-center justify-center text-[#25395e] shrink-0 border border-[#25395e]/10">
                <span className="material-symbols-outlined">location_on</span>
              </div>
                <div>
                   <h4 className="font-display font-bold text-[#1c0305] mb-1">العنوان</h4>
                   <p className="font-primary text-[#616161] text-sm">شارع الملك فهد الفرعي، برج العليا التجاري، الدور الخامس، الرياض.</p>
                </div>
            </div>
              </SlideInLeft>

            <SlideInLeft>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25395e]/5 flex items-center justify-center text-[#25395e] shrink-0 border border-[#25395e]/10">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div className="text-right" dir="ltr">
                <h4 className="font-display font-bold text-[#1c0305] mb-1 text-right" dir="rtl">الهاتف</h4>
                <p className="font-primary text-[#616161] text-sm font-semibold">+966 50 123 4567</p>
                <p className="font-primary text-[#616161] text-sm font-semibold">+966 11 987 6543</p>
              </div>
            </div>
              </SlideInLeft>

            <SlideInLeft>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25395e]/5 flex items-center justify-center text-[#25395e] shrink-0 border border-[#25395e]/10">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-[#1c0305] mb-1">البريد الإلكتروني</h4>
                <p className="font-primary text-[#616161] text-sm font-semibold">info@ezzeldin-law.com</p>
              </div>
            </div>
              </SlideInLeft>
            
              <SlideInLeft>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#25395e]/5 flex items-center justify-center text-[#25395e] shrink-0 border border-[#25395e]/10">
                <span className="material-symbols-outlined">schedule</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-[#1c0305] mb-1">أوقات العمل</h4>
                <p className="font-primary text-[#616161] text-sm">الأحد - الخميس: 9:00 صباحاً حتي 5:00 مساءً</p>
              </div>
            </div>
              </SlideInLeft>

          </div>

          {/* Left Side: Map Location */}
          <div className="w-full lg:w-2/3 bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl overflow-hidden h-[450px] md:h-auto min-h-[450px] relative shadow-inner">
             {/* Google Maps Embed (Placeholder targeting Riyadh) */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1726.9802615096753!2d31.754727449618976!3d30.03799039486872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f3c8c51accb5%3A0x734626cd9e915ca0!2sPresidential%20Palace%20of%20Egypt!5e0!3m2!1sen!2seg!4v1775848937592!5m2!1sen!2seg" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
             ></iframe>
          </div>

        </SlideUp>
      </div>
    </section>
  );
}
