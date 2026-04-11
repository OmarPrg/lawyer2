import React from 'react';
import { SlideUp, StaggerContainer, StaggerItem, AnimatedCounter, TextReveal } from "@/components/ui/scroll-animations";
import Link from 'next/link';

export function AboutUs() {
  const stats = [
    { value: '٩٩٪', numeric: 99, prefix: '', suffix: '٪', label: 'نسبة النجاح', icon: 'trending_up', duration: 2 },
    { value: '+٥٠٠', numeric: 500, prefix: '+', suffix: '', label: 'قضية رابحة', icon: 'emoji_events', duration: 2.5 },
    { value: '+٢٠', numeric: 20, prefix: '+', suffix: '', label: 'عاماً من الخبرة', icon: 'workspace_premium', duration: 1.5 },
    { value: '+١٠٠٠', numeric: 1000, prefix: '+', suffix: '', label: 'استشارة قانونية', icon: 'handshake', duration: 3 },
  ];

  return (
    <section id="about" className="relative w-full py-24 bg-white overflow-hidden">

      {/* Background Decoratives */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f6f6f6] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#4870bb]/5 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Right Side: Text & Content */}
          <SlideUp className="flex-1 w-full space-y-8 text-right">
            <div className="flex flex-col items-start text-right space-y-6">
              {/* Shimmer Accent Line */}
              <div className="w-40 h-[2px] bg-gradient-to-l from-transparent via-[#4870bb] to-transparent relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#f1f5f9] border border-[#e2e8f0]">
                <span className="w-2 h-2 rounded-full bg-[#25395e] animate-pulse"></span>
                <span className="text-[#25395e] font-display font-bold text-sm tracking-widest uppercase">
                  من نحن
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold font-display leading-[1.3] text-[#1c0305] text-right">
                <TextReveal text="نحن نحمي حقوقك بصوت" />
                <div className="mt-2">
                  <span className=" bg-clip-text bg-gradient-to-l from-[#25395e] to-[#4870bb]">
                    <TextReveal text="العدالة والقانون" />
                  </span>
                </div>
              </h2>

              <p className="text-lg md:text-xl font-primary text-[#616161] leading-relaxed border-r-4 border-[#4870bb] pr-5">
                يعتبر مكتب المحامي عزالدين عمر صرحاً قانونياً رائداً يسعى دائماً لتقديم الأفضل لعملائه. نؤمن بأن كل قضية هي التزام، وكل استشارة هي أمانة.
              </p>

              <p className="text-base md:text-lg font-primary text-[#616161]/80 leading-relaxed max-w-2xl">
                تأسس مكتبنا على مبادئ النزاهة والاحترافية، حيث يضم نخبة من أفضل المحامين والمستشارين القانونيين الذين يمتلكون خبرة واسعة في مختلف التخصصات.
              </p>

              <div className="pt-8 w-full flex justify-start">
                <Link 
                  href="/about" 
                  className="group px-10 py-4 bg-[#25395e] text-white hover:bg-[#4870bb] rounded-2xl font-display font-bold text-lg transition-all duration-500 shadow-xl hover:-translate-y-2 flex items-center gap-4"
                >
                  اكتشف تاريخنا الكامل
                  <span className="material-symbols-outlined transform transition-transform group-hover:-translate-x-2">
                    arrow_back
                  </span>
                </Link>
              </div>
            </div>
          </SlideUp>

          {/* Left Side: Statistics Grid */}
          <div className="flex-1 w-full relative">
            <StaggerContainer className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <StaggerItem key={index}>
                  <div
                    className={`bg-[#f6f6f6] border border-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(72,112,187,0.1)] hover:bg-white group h-full ${index % 2 !== 0 ? 'lg:translate-y-12' : ''
                      }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                      <span className="material-symbols-outlined text-4xl text-[#4870bb]">
                        {stat.icon}
                      </span>
                    </div>
                    <AnimatedCounter
                      from={0}
                      to={stat.numeric}
                      duration={stat.duration}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      className="text-4xl font-display font-extrabold text-[#25395e] mb-2 drop-shadow-sm inline-block min-w-[100px]"
                    />
                    <span className="text-base font-primary font-medium text-[#616161]">
                      {stat.label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
}
