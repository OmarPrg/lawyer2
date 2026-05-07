"use client";

import React from 'react';
import { FadeIn, SlideUp, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animations";
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const contactMethods = [
    { title: 'اتصال هاتفي مباشر', value: '+20 01018155874', label: 'تحدث مع أحد مستشارينا الآن', icon: 'call', href: 'tel:+2001018155874', type: 'primary' },
    { title: 'محادثة واتساب', value: '+20 01018155874', label: 'رد فوري على استفساراتكم', icon: 'chat', href: 'https://wa.me/2001018155874', type: 'secondary' },
    { title: 'تيليجرام', value: '@shaban_law', label: 'تواصل آمن وسريع', icon: 'send', href: '#', type: 'ghost' },
    { title: 'البريد الإلكتروني', value: 'shaban.law.office@gmail.com', label: 'نستقبل ملفاتكم واستفساراتكم', icon: 'mail', href: 'mailto:shaban.law.office@gmail.com', type: 'ghost' },
  ];

  const officeHours = [
    { day: 'السبت - الخميس', hours: '١٠:٠٠ ص - ٠٨:٠٠ م' },
    { day: 'الجمعة', hours: 'مغلق' },
  ];

  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      {/* Header Section - Welcoming & Clear */}
      <section className="relative pt-44 pb-32 bg-[#131313] overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/heroBackground.webp.webp" 
            alt="Background" 
            fill 
            className="object-cover opacity-60 grayscale brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#131313]/80 via-[#131313]/40 to-[#131313]/80 z-10" />
          <div className="absolute inset-0 bg-[#25395e]/10 z-10" />
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#4870bb] blur-[180px] opacity-15 z-10" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10" />

        <div className="container mx-auto px-6 lg:px-12 relative z-20 text-right">
          <div className="max-w-4xl mx-auto text-center" dir="rtl">
            <FadeIn>
              <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-[#4870bb]/10 border border-[#4870bb]/20 text-[#a5bce6] font-display font-bold text-sm mb-8">
                نحن هنا لمساعدتكم
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-8 leading-tight">
                تواصل معنا <br />
                <span className="text-[#4870bb]">بكل سهولة</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-primary leading-relaxed max-w-3xl mx-auto">
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
                  
                  <div className="space-y-4 sm:space-y-6">
                    {contactMethods.map((method, i) => (
                      <Link 
                        key={i}
                        href={method.href}
                        className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-[#f8fafc] border border-transparent hover:border-[#4870bb]/20 hover:bg-white hover:shadow-xl transition-all duration-300 group overflow-hidden"
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#4870bb]/10 text-[#4870bb] flex items-center justify-center shrink-0 group-hover:bg-[#4870bb] group-hover:text-white transition-all duration-500">
                          <span className="material-symbols-outlined text-2xl">{method.icon}</span>
                        </div>
                        <div className="flex flex-col text-right min-w-0 flex-1">
                          <span className="text-[10px] sm:text-[11px] font-display font-black text-[#a5a5aa] uppercase tracking-widest mb-1">{method.title}</span>
                          <span className="text-base sm:text-xl font-display font-extrabold text-[#131313] truncate" dir="ltr">{method.value}</span>
                        </div>
                        <div className="mr-auto opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block shrink-0">
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
             <div className="lg:col-span-6 bg-[#f8fafc] border border-white rounded-[40px] p-8 sm:p-10 lg:p-14 text-right shadow-sm relative overflow-hidden" dir="rtl">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4870bb]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                
                <SlideUp>
                   <div className="flex items-center gap-3 mb-8">
                      <div className="w-1.5 h-8 bg-[#4870bb] rounded-full"></div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-[#131313]">ساعات العمل</h3>
                   </div>
                   
                   <div className="space-y-4 mb-14">
                      {officeHours.map((item, i) => (
                        <div key={i} className="flex justify-between items-center p-5 rounded-2xl bg-white border border-[#e2e8f0]/60 shadow-sm group hover:border-[#4870bb]/30 transition-all duration-300">
                           <span className="font-primary font-bold text-[#25395e] text-lg">{item.day}</span>
                           <span className={`font-primary font-medium px-4 py-1.5 rounded-lg text-sm ${item.hours === 'مغلق' ? 'bg-red-50 text-red-500' : 'bg-[#4870bb]/10 text-[#4870bb]'}`}>
                              {item.hours}
                           </span>
                        </div>
                      ))}
                   </div>

                   <div className="flex items-center gap-3 mb-8">
                      <div className="w-1.5 h-8 bg-[#4870bb] rounded-full"></div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-[#131313]">العنوان</h3>
                   </div>
                   
                   <div className="flex gap-5 items-start p-6 sm:p-8 rounded-[32px] bg-white border border-[#e2e8f0]/60 shadow-sm mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#4870bb] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#4870bb]/20">
                         <span className="material-symbols-outlined text-3xl">location_on</span>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-primary text-xl text-[#25395e] font-bold mb-2">المقر الرئيسي</p>
                        <p className="font-primary text-lg text-[#616161] leading-relaxed">
                          الدقهلية - المنصورة - طلخا، <br />
                          أمام مجمع المحاكم، <br />
                          جمهورية مصر العربية.
                        </p>
                      </div>
                   </div>
                   
                   {/* Extra padding for mobile floating buttons */}
                   <div className="h-10 lg:hidden"></div>
                </SlideUp>
             </div>

           </div>
        </div>
      </section>

      {/* Interactive Map Area - Enhanced */}
      <section className="relative w-full h-[600px] border-t border-[#e2e8f0]">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.6666666666665!2d31.37833333333333!3d31.06666666666666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7777777777777%3A0x7777777777777777!2sTalkha%20Courts%20Complex!5e0!3m2!1sen!2seg!4v1775857087674!5m2!1sen!2seg" 
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
