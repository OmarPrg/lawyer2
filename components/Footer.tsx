import React from 'react';
import Link from 'next/link';
import { FadeIn, SlideInLeft } from "@/components/ui/scroll-animations";

export function Footer() {
  return (
    <footer className="w-full bg-[#131313] border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4870bb] to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <SlideInLeft delay={0} className="flex flex-col items-start w-full">
            <Link href="#" className="flex items-center gap-2 mb-6 group w-full justify-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4870bb] to-[#25395e] flex items-center justify-center text-white shadow-lg">
                <span className="material-symbols-outlined text-[20px]">balance</span>
              </div>
              <span className="text-2xl font-display font-bold text-white tracking-wide transition-colors group-hover:text-[#b9c7e4]">
                عزالدين عمر
              </span>
            </Link>
            <p className="text-[#a5a5aa] font-primary text-sm leading-relaxed mb-6 text-right w-full">
              نلتزم بتقديم أعلى مستويات الدعم القانوني بأساليب مبتكرة تعكس خبرتنا الطويلة وحرصنا الشديد على حماية حقوق موكلينا.
            </p>
            <div className="flex items-center gap-4 w-full justify-start">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e0e0e0] hover:bg-[#4870bb] transition-colors">
                <span className="material-symbols-outlined text-[20px]">language</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e0e0e0] hover:bg-[#4870bb] transition-colors">
                <span className="material-symbols-outlined text-[20px]">mail</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#e0e0e0] hover:bg-[#4870bb] transition-colors">
                <span className="material-symbols-outlined text-[20px]">call</span>
              </a>
            </div>
          </SlideInLeft>

          {/* Column 2: Quick Links */}
          <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
            <h4 className="text-white font-display font-bold mb-6 text-lg">روابط سريعة</h4>
            <ul className="flex flex-col space-y-3 w-full text-right">
              <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
                <li><Link href="#about" className="text-[#a5a5aa] hover:text-[#b9c7e4] font-primary text-sm transition-colors">من نحن</Link></li>
              </SlideInLeft>
              <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
                <li><Link href="#services" className="text-[#a5a5aa] hover:text-[#b9c7e4] font-primary text-sm transition-colors">خدماتنا القانونية</Link></li>
              </SlideInLeft>
              <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
                <li><Link href="#why-us" className="text-[#a5a5aa] hover:text-[#b9c7e4] font-primary text-sm transition-colors">لماذا أختيارك لنا</Link></li>
              </SlideInLeft>
              <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
                <li><Link href="#testimonials" className="text-[#a5a5aa] hover:text-[#b9c7e4] font-primary text-sm transition-colors">أراء وتجارب العملاء</Link></li>
              </SlideInLeft>
            </ul>
          </SlideInLeft>

          {/* Column 3: Services */}
          <SlideInLeft delay={0.4} className="flex flex-col items-start w-full">
            <h4 className="text-white font-display font-bold mb-6 text-lg">أبرز التخصصات</h4>
            <ul className="flex flex-col space-y-3 w-full text-right">
              <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
                <li><Link href="#" className="text-[#a5a5aa] hover:text-[#b9c7e4] font-primary text-sm transition-colors">القانون التجاري والشركات</Link></li>
              </SlideInLeft>
              <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
                <li><Link href="#" className="text-[#a5a5aa] hover:text-[#b9c7e4] font-primary text-sm transition-colors">الدفاع الجنائي</Link></li>
              </SlideInLeft>
              <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
                <li><Link href="#" className="text-[#a5a5aa] hover:text-[#b9c7e4] font-primary text-sm transition-colors">الأحوال الشخصية والأسرة</Link></li>
              </SlideInLeft>
              <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
                <li><Link href="#" className="text-[#a5a5aa] hover:text-[#b9c7e4] font-primary text-sm transition-colors">قضايا العمل والعمال</Link></li>
              </SlideInLeft>
            </ul>
          </SlideInLeft>

          {/* Column 4: Contact Info */}
          <SlideInLeft delay={0.6} className="flex flex-col items-start w-full">
            <h4 className="text-white font-display font-bold mb-6 text-lg">معلومات التواصل</h4>
            <ul className="flex flex-col space-y-4 text-right">
              <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
                <li className="flex items-start gap-3 justify-start">
                  <span className="material-symbols-outlined text-[#4870bb] text-[20px]">location_on</span>
                  <span className="text-[#a5a5aa] font-primary text-[13px] leading-relaxed max-w-xs">
                    شارع الملك فهد الفرعي، برج العليا التجاري، الدور الخامس، الرياض.
                  </span>
                </li>
              </SlideInLeft>
              <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
                <li className="flex items-center gap-3 justify-start">
                  <span className="material-symbols-outlined text-[#4870bb] text-[20px]">call</span>
                  <span className="text-[#a5a5aa] font-primary text-sm font-semibold" dir="ltr">+966 50 123 4567</span>
                </li>
              </SlideInLeft>
              <SlideInLeft delay={0.2} className="flex flex-col items-start w-full">
                <li className="flex items-center gap-3 justify-start">
                  <span className="material-symbols-outlined text-[#4870bb] text-[20px]">mail</span>
                  <span className="text-[#a5a5aa] font-primary text-sm">info@ezzeldin-law.com</span>
                </li>
              </SlideInLeft>
            </ul>
          </SlideInLeft>

        </div>

        {/* Copyright Bar */}
        <FadeIn className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#616161] font-primary text-sm text-center md:text-right">
            جميع الحقوق محفوظة لمكتب عزالدين عمر للمحاماة والاستشارات القانونية &copy; {new Date().getFullYear()}
          </p>
          <p className="text-[#616161] font-primary text-xs flex gap-4">
            <Link href="#" className="hover:text-[#a5a5aa] transition-colors">سياسة الخصوصية</Link>
            <Link href="#" className="hover:text-[#a5a5aa] transition-colors">الشروط والأحكام</Link>
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
