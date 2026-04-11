"use client";

import React from 'react';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations";
import Link from 'next/link';

export default function ContactPage() {
  const contactMethods = [
    { title: 'اتصال هاتفي مباشر', value: '+966 50 123 4567', label: 'تحدث مع أحد مستشارينا الآن', icon: 'call', href: 'tel:+966501234567', type: 'primary' },
    { title: 'محادثة واتساب', value: '+966 11 987 6543', label: 'رد فوري على استفساراتكم', icon: 'chat', href: 'https://wa.me/966119876543', type: 'secondary' },
    { title: 'تيليجرام', value: '@ezzeldin_law', label: 'تواصل آمن وسريع', icon: 'send', href: 'https://t.me/ezzeldin_law', type: 'ghost' },
    { title: 'البريد الإلكتروني', value: 'info@ezzeldin-law.com', label: 'نستقبل ملفاتكم واستفساراتكم', icon: 'mail', href: 'mailto:info@ezzeldin-law.com', type: 'ghost' },
  ];

  const officeHours = [
    { day: 'الأحد - الخميس', hours: '٠٨:٠٠ ص - ٠٥:٠٠ م' },
    { day: 'الجمعة', hours: 'مغلق' },
    { day: 'السبت', hours: 'مواعيد مسبقة فقط' },
  ];

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden pt-28">
      {/* Header Section - Welcoming & Clear */}
      <section className="py-20 lg:py-28 bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center" dir="rtl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-[#4870bb]/10 border border-[#4870bb]/20 text-[#4870bb] font-display font-bold text-sm mb-8">
                نحن هنا لمساعدتكم
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-[#131313] mb-8 leading-tight">
                تواصل معنا <br />
                <span className="text-[#4870bb]">بكل سهولة</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#616161] font-primary leading-relaxed max-w-3xl mx-auto">
                سواء كنت تبحث عن استشارة قانونية أو ترغب في بدء قضية جديدة، نحن نوفر لك طرق تواصل مباشرة وسريعة تناسب احتياجاتك.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
             
             {/* Left Column: Essential Contact Links & Social Media */}
             <div className="lg:col-span-6 space-y-12" dir="rtl">
                <SlideUp>
                  <h2 className="text-3xl font-display font-bold text-[#131313] mb-10 border-r-4 border-[#4870bb] pr-5">قنوات التواصل</h2>
                  
                  <div className="space-y-6">
                    {contactMethods.map((method, i) => (
                      <Link 
                        key={i}
                        href={method.href}
                        className="flex items-center gap-6 p-6 rounded-2xl bg-[#f8fafc] border border-transparent hover:border-[#4870bb]/20 hover:bg-white hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-[#4870bb]/10 text-[#4870bb] flex items-center justify-center shrink-0 group-hover:bg-[#4870bb] group-hover:text-white transition-all duration-500">
                          <span className="material-symbols-outlined text-2xl">{method.icon}</span>
                        </div>
                        <div className="flex flex-col text-right">
                          <span className="text-[11px] font-display font-black text-[#a5a5aa] uppercase tracking-widest mb-1">{method.title}</span>
                          <span className="text-xl font-display font-extrabold text-[#131313]" dir="ltr">{method.value}</span>
                        </div>
                        <div className="mr-auto opacity-0 group-hover:opacity-100 transition-opacity">
                           <span className="material-symbols-outlined text-[#4870bb]">arrow_back</span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-10">
                    <p className="text-[#a5a5aa] font-primary text-sm mb-6">تابعونا على منصات التواصل الاجتماعي</p>
                    <div className="flex gap-4">
                      {[
                        { icon: 'X', name: 'Twitter', href: '#' },
                        { icon: 'photo_camera', name: 'Instagram', href: '#' },
                        { icon: 'facebook', name: 'Facebook', href: '#' },
                      ].map((social, i) => (
                        <Link 
                          key={i} 
                          href={social.href}
                          className="w-14 h-14 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-center text-[#25395e] hover:bg-[#25395e] hover:text-white hover:shadow-lg transition-all duration-500"
                        >
                          <span className="material-symbols-outlined text-2xl">
                             {social.icon === 'X' ? 'brand_awareness' : social.icon}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </SlideUp>
             </div>

             {/* Right Column: Office Hours & Location Text */}
             <div className="lg:col-span-6 bg-[#f8fafc] rounded-[48px] p-10 lg:p-14 text-right" dir="rtl">
                <SlideUp>
                   <h3 className="text-2xl font-display font-bold text-[#131313] mb-8">ساعات العمل</h3>
                   <div className="space-y-6 mb-12">
                      {officeHours.map((item, i) => (
                        <div key={i} className="flex justify-between items-center pb-4 border-b border-[#e2e8f0] last:border-0">
                           <span className="font-primary font-bold text-[#25395e]">{item.day}</span>
                           <span className="font-primary text-[#616161]">{item.hours}</span>
                        </div>
                      ))}
                   </div>

                   <h3 className="text-2xl font-display font-bold text-[#131313] mb-8">العنوان</h3>
                   <div className="flex gap-4 items-start mb-10">
                      <div className="w-10 h-10 rounded-full bg-[#4870bb]/10 text-[#4870bb] flex items-center justify-center shrink-0">
                         <span className="material-symbols-outlined">location_on</span>
                      </div>
                      <p className="font-primary text-lg text-[#616161] leading-relaxed">
                        برج العليا التجاري، الدور الخامس، <br />
                        شارع الملك فهد الفرعي، الرياض، <br />
                        المملكة العربية السعودية.
                      </p>
                   </div>
                </SlideUp>
             </div>

           </div>
        </div>
      </section>

      {/* Interactive Map Area - Enhanced */}
      <section className="relative w-full h-[600px] border-t border-[#e2e8f0]">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18156.02666271582!2d31.726641488760418!3d30.027385341760453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1457f3c8c51accb5%3A0x734626cd9e915ca0!2sPresidential%20Palace%20of%20Egypt!5e0!3m2!1sen!2seg!4v1775857087674!5m2!1sen!2seg" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            className="absolute inset-0 grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-1000"
         ></iframe>
         
         <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
         
         {/* Floating Map Button Overlay */}
         <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 w-full max-w-sm px-6">
            <Link 
              href="https://www.google.com/maps/dir/?api=1&destination=30.0273853,31.7266415" 
              target="_blank"
              className="flex items-center justify-center gap-4 py-6 bg-[#25395e] text-white rounded-[24px] font-display font-bold text-xl shadow-2xl hover:bg-[#4870bb] transition-all transform hover:-translate-y-1 active:scale-95 pointer-events-auto"
            >
              <span>الحصول على الاتجاهات</span>
              <span className="material-symbols-outlined">navigation</span>
            </Link>
         </div>
      </section>
    </div>
  );
}
