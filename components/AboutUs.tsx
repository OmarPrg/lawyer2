import React from 'react';

export function AboutUs() {
  const stats = [
    { value: '٩٩٪', label: 'نسبة النجاح', icon: 'trending_up' },
    { value: '+٥٠٠', label: 'قضية رابحة', icon: 'emoji_events' },
    { value: '+٢٠', label: 'عاماً من الخبرة', icon: 'workspace_premium' },
    { value: '+١٠٠٠', label: 'استشارة قانونية', icon: 'handshake' },
  ];

  return (
    <section id="about" className="relative w-full py-24 bg-white overflow-hidden">
      
      {/* Background Decoratives */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f6f6f6] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#4870bb]/5 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Right Side: Text & Content */}
          <div className="flex-1 w-full space-y-8 text-right">
            <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-[#f1f5f9] border border-[#e2e8f0]">
              <span className="w-2 h-2 rounded-full bg-[#25395e] animate-pulse"></span>
              <span className="text-[#25395e] font-display font-bold text-sm tracking-widest">
                من نحن
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-extrabold font-display leading-tight text-[#1c0305]">
              نحن نحمي حقوقك بصوت <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#25395e] to-[#4870bb]">
                العدالة والقانون
              </span>
            </h2>

            <p className="text-lg md:text-xl font-primary text-[#616161] leading-relaxed border-r-4 border-[#4870bb] pr-5">
              يعتبر مكتب المحامي عزالدين عمر صرحاً قانونياً رائداً يسعى دائماً لتقديم الأفضل لعملائه. نؤمن بأن كل قضية هي التزام، وكل استشارة هي أمانة.
            </p>
            
            <p className="text-base md:text-lg font-primary text-[#616161]/80 leading-relaxed max-w-2xl">
              تأسس مكتبنا على مبادئ النزاهة والاحترافية، حيث يضم نخبة من أفضل المحامين والمستشارين القانونيين الذين يمتلكون خبرة واسعة في مختلف التخصصات القانونية. نحن هنا لضمان تقديم حلول قانونية مبتكرة وفعالة تواكب تطلعات عملائنا وتحمي مصالحهم بكل السبل القانونية المتاحة.
            </p>

            <div className="pt-6">
              <button className="group px-8 py-3.5 bg-white border-2 border-[#25395e] text-[#25395e] hover:bg-[#25395e] hover:text-white rounded-xl font-display font-bold text-lg transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 flex items-center gap-3">
                اكتشف تاريخنا
                <span className="material-symbols-outlined transform transition-transform group-hover:-translate-x-2">
                  arrow_back
                </span>
              </button>
            </div>
          </div>

          {/* Left Side: Statistics Grid */}
          <div className="flex-1 w-full relative">
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`bg-[#f6f6f6] border border-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(72,112,187,0.1)] hover:bg-white group ${
                    index % 2 !== 0 ? 'lg:translate-y-12' : ''
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <span className="material-symbols-outlined text-4xl text-[#4870bb]">
                      {stat.icon}
                    </span>
                  </div>
                  <span className="text-4xl font-display font-extrabold text-[#25395e] mb-2 drop-shadow-sm">
                    {stat.value}
                  </span>
                  <span className="text-base font-primary font-medium text-[#616161]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
