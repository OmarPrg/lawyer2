import React from 'react';

export function WhyUs() {
  const features = [
    {
      title: 'النزاهة والشفافية',
      description: 'نعتمد مبدأ المكاشفة التامة مع عملائنا في كافة تفاصيل قضاياهم والمسارات القانونية المتاحة، لأن الثقة هي أساس النجاح.',
      icon: 'verified_user'
    },
    {
      title: 'خبرات قانونية متخصصة',
      description: 'نضم نخبة من المحامين والمستشارين المتمرسين في أدق التفاصيل القانونية لضمان تقديم حلول حاسمة ومبتكرة.',
      icon: 'stars'
    },
    {
      title: 'السرية التامة والموثوقية',
      description: 'نصون أسرار عملائنا بأعلى درجات الالتزام المهني والأخلاقي، لنضمن حماية أعمالهم وحياتهم الشخصية.',
      icon: 'lock'
    },
    {
      title: 'استجابة سريعة ودقيقة',
      description: 'ندرك أهمية الوقت في المجال القانوني، لذا نضمن تقديم التدابير السريعة والاستشارات الدقيقة في الوقت المناسب.',
      icon: 'bolt'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-[#f6f6f6] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#4870bb]/5 to-transparent rounded-full translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Right Side: Text & Context */}
          <div className="flex-1 w-full text-right">
            <span className="inline-block py-1.5 px-6 rounded-full bg-white text-[#4870bb] border border-[#e2e8f0] font-primary text-sm tracking-widest shadow-sm mb-6">
              لماذا نحن؟
            </span>
            
            <h2 className="text-4xl lg:text-5xl font-extrabold font-display leading-[1.2] text-[#1c0305] mb-6">
              نلتزم بحماية حقوقك <br />
              عبر <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#25395e] to-[#4870bb]">ممارسات قانونية استثنائية</span>
            </h2>
            
            <p className="text-[#616161] font-primary text-lg leading-relaxed mb-8 border-r-4 border-[#25395e] pr-5">
              لا نكتفي بتقديم المشورة القانونية التقليدية؛ بل نسعى لنكون الشريك الاستراتيجي الذي يحمي مسيرتك وتطلعاتك. يتميز نهجنا بالاحترافية العالية والدقة في دراسة وتحليل كل قضية لضمان تحقيق أفضل النتائج.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-[#e2e8f0]">
                <div className="w-10 h-10 rounded-lg bg-[#25395e]/10 flex items-center justify-center text-[#25395e]">
                  <span className="material-symbols-outlined">assignment_turned_in</span>
                </div>
                <span className="font-display font-bold text-[#1c0305]">تحليل دقيق للقضايا</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-[#e2e8f0]">
                <div className="w-10 h-10 rounded-lg bg-[#4870bb]/10 flex items-center justify-center text-[#4870bb]">
                  <span className="material-symbols-outlined">shield_person</span>
                </div>
                <span className="font-display font-bold text-[#1c0305]">تمثيل قانوني قوي</span>
              </div>
            </div>
          </div>

          {/* Left Side: Features Cards */}
          <div className="flex-1 w-full relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl p-8 border border-[#e2e8f0] shadow-[0_15px_40px_rgba(37,57,94,0.04)] hover:shadow-[0_25px_50px_rgba(72,112,187,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col text-right ${
                    index % 2 !== 0 ? 'sm:mt-12' : ''
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#25395e] to-[#4870bb] text-white flex items-center justify-center mb-6 shadow-md">
                    <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-[#1c0305] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#616161] font-primary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
