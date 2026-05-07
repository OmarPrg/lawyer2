"use client";

import React from 'react';
import { AboutUs } from "@/components/AboutUs";
import { WhyUs } from "@/components/WhyUs";
import { MissionVisionValues } from "@/components/MissionVisionValues";
import { FadeIn, SlideUp, StaggerContainer, StaggerItem, TextReveal } from "@/components/ui/scroll-animations";
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white overflow-hidden">
      {/* Page Hero - Premium Look */}
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
          <FadeIn>
            <nav className="flex items-center justify-start gap-2 text-sm text-[#a5a5aa] mb-8" dir="rtl">
              <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
              <span className="material-symbols-outlined text-xs">chevron_left</span>
              <span className="text-white">من نحن</span>
            </nav>

            <h1 className="text-5xl md:text-5xl lg:text-6xl font-display font-extrabold text-white mb-11 leading-tight">
              إرث من العدالة والخدمة
            </h1>
            <p className="text-xl md:text-xl text-white/70 font-primary max-w-4xl mx-auto leading-relaxed border-r-4 border-[#4870bb] pr-6 inline-block text-right">
              عبر عقود من الزمن، بنينا سمعتنا على النزاهة والاحترافية، لنكون الدرع القانوني الأول الذي يحمي حقوقكم وتطلعاتكم.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Firm History Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Centered Decorative Header */}
          <div className="flex flex-col items-center mb-16">
            <FadeIn className="w-full flex items-center justify-center gap-8 group">
              <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#25395e]/20 to-[#4870bb] max-w-[200px]" />
              <div className="relative px-4">
                <span className="text-[#25395e] font-display font-black text-2xl md:text-3xl tracking-[0.3em] uppercase relative z-10 transition-colors group-hover:text-[#4870bb]">
                  تاريخ عريق
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#4870bb]/10 blur-sm rounded-full" />
              </div>
              <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#25395e]/20 to-[#4870bb] max-w-[200px]" />
            </FadeIn>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 lg:items-stretch">
            <SlideUp className="flex-1 text-right order-2 lg:order-1 flex flex-col justify-center">
              {/* Fantastic Video-Effect Line */}
              <div className="w-24 h-1.5 bg-[#4870bb] mb-8 relative overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1c0305] mb-8 leading-snug">
                كيف بدأنا رحلة <span className="text-[#25395e]">الدفاع عن الحق</span>
              </h2>
              <div className="space-y-10 text-[#616161] font-primary text-lg leading-relaxed">
                <div className="relative pr-8 overflow-hidden group/para">
                  <div className="absolute right-0 top-0 w-1 h-full bg-[#4870bb] rounded-full origin-top transition-transform duration-500 group-hover/para:scale-y-110" />
                  <p>
                    تأسس مكتب الأستاذ شعبان عبد الناصر للمحاماة في عام <span className="text-[#4870bb] font-bold">٢٠٠٥</span> كفكرة طموحة تهدف إلى إرساء معايير جديدة للعدالة والتمثيل القانوني في المنطقة. بدأنا كمكتب صغير بمدينة <span className="text-[#4870bb] font-bold">المنصورة</span>، مدفوعين بشغف لا ينضب لـ <span className="text-[#4870bb] font-bold">حماية حقوق الأفراد والشركات</span>.
                  </p>
                </div>

                <div className="relative pr-8 group/para">
                  <div className="absolute right-0 top-0 w-1 h-full bg-[#4870bb] rounded-full origin-top transition-transform duration-500 group-hover/para:scale-y-110" />
                  <p>
                    خلال العقد الأول، نجحنا في بناء <span className="text-[#4870bb] font-bold">ثقة راسخة</span> مع عملائنا عبر تحقيق <span className="text-[#4870bb] font-bold">نتائج استثنائية</span> في قضايا معقدة كانت تعتبر تحدياً كبيراً في ذلك الوقت. نمونا لم يكن مجرد زيادة في عدد الموظفين، بل كان تكاملاً في الخبرات وتوسعاً في التخصصات.
                  </p>
                </div>

                <div className="relative pr-8 group/para">
                  <div className="absolute right-0 top-0 w-1 h-full bg-[#4870bb] rounded-full origin-top transition-transform duration-500 group-hover/para:scale-y-110" />
                  <p>
                    اليوم، نفخر بكوننا أحد المكاتب الرائدة التي تجمع بين <span className="text-[#4870bb] font-bold">الأصالة القانونية</span> و <span className="text-[#4870bb] font-bold">التقنيات الحديثة</span>، لنوفر لعملائنا حلولاً استراتيجية تواكب التغيرات السريعة في البيئة التنظيمية والقانونية.
                  </p>
                </div>
              </div>
            </SlideUp>

            <div className="flex-1 relative order-1 lg:order-2">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl h-full min-h-[400px]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/40 to-transparent z-10" />
                <Image
                  src="/assets/heroBackground.webp.webp"
                  alt="Building Justice"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 border-[20px] border-white/10 z-20 pointer-events-none" />
              </div>
              {/* Floating Stat Card */}
              <FadeIn className="absolute -bottom-10 -right-10 bg-[#25395e] text-white p-8 rounded-3xl shadow-2xl z-20 hidden lg:block">
                <span className="text-5xl font-display font-extrabold block mb-2">٢٠+</span>
                <span className="text-sm font-primary opacity-80 uppercase tracking-widest">عاماً من التميز القانوني</span>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-[#f8fafc] overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-extrabold text-[#1c0305]">قيمنا الجوهرية</h2>
            <div className="w-20 h-1 bg-[#4870bb] mx-auto mt-4 rounded-full" />
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
            {[
              { title: 'النزاهة المطلقة', desc: 'نضع المعايير الأخلاقية فوق كل اعتبار، فالصدق هو أساس علاقتنا مع الموكل.', icon: 'verified' },
              { title: 'التميز المهني', desc: 'لا نرضى بأقل من الكمال في دراسة القضايا وتقديم الاستشارات القانونية.', icon: 'stars' },
              { title: 'السرية التامة', desc: 'خصوصية عملائنا هي أمانة نلتزم بصونها بأقصى درجات الحيطة والحرص.', icon: 'lock' },
              { title: 'النتائج الحاسمة', desc: 'تركيزنا دائماً منصب على تحقيق أفضل النتائج الممكنة لموكلينا بكفاءة عالية.', icon: 'ads_click' }
            ].map((value, i) => (
              <StaggerItem key={i}>
                <div className="bg-white p-8 rounded-3xl border border-[#e2e8f0] shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                  <div className="w-14 h-14 rounded-2xl bg-[#f1f5f9] flex items-center justify-center text-[#25395e] mb-6 group-hover:bg-[#25395e] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#1c0305] mb-4">{value.title}</h3>
                  <p className="text-[#616161] font-primary leading-relaxed">{value.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Leadership / Founder Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="bg-[#131313] rounded-[60px] overflow-hidden relative min-h-[500px] flex flex-col md:flex-row items-center p-8 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-l from-[#25395e]/20 to-transparent" />

            <div className="flex-1 relative z-10 text-right space-y-8 md:pr-12">
              <span className="text-[#4870bb] font-display font-bold text-lg tracking-widest uppercase">مؤسس المكتب</span>
              <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white">المحامي شعبان عبد الناصر</h2>
              <p className="text-xl text-white/70 font-primary leading-relaxed max-w-2xl">
                "رسالتنا ليست مجرد كسب القضايا، بل ترسيخ مبادئ العدالة وضمان أن يحصل كل صاحب حق على حقه بكل عزة وكرامة. نحن هنا لنكون صوتكم الحق في وجه التحديات."
              </p>
              <div className="flex flex-wrap gap-4 items-center justify-start">
                <div className="px-6 py-3 rounded-xl border border-[#4870bb]/30 bg-[#4870bb]/10 text-white font-primary text-base shadow-[0_0_15px_rgba(72,112,187,0.1)]">ماجستير في القانون العام</div>
                <div className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white/80 font-primary text-base">محامٍ مقيد لدى محكمة النقض والدستورية العليا</div>
                <div className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white/80 font-primary text-base">خبير في المنازعات الجنائية والمدنية</div>
              </div>
            </div>

            <div className="flex-1 mt-12 md:mt-0 relative flex justify-center scale-x-[-1]">
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-2 border-[#4870bb]/30 overflow-hidden">
                <Image
                  src="/assets/lawyer2.webp"
                  alt="Shaban Abdelnasser"
                  fill
                  className="object-cover object-top filter contrast-[1.1] grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Re-using existing Stats Section for continuity */}
      {/* <div className="py-12 bg-white">
        <AboutUs />
      </div> */}
      {/* Mission, Vision & Values Section - Replaces CTA */}
      <MissionVisionValues />
    </div>
  );
}
