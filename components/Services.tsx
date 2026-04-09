import React from 'react';

export function Services() {
  const services = [
    {
      id: 1,
      title: 'القانون التجاري والشركات',
      description: 'تأسيس الشركات، صياغة العقود التجارية، تقديم الاستشارات حول حوكمة الشركات والاندماج والاستحواذ.',
      icon: 'domain'
    },
    {
      id: 2,
      title: 'القضايا الجنائية',
      description: 'تمثيل قانوني قوي وحازم في كافة القضايا الجنائية لضمان حماية حقوقك وتحقيق العدالة.',
      icon: 'gavel'
    },
    {
      id: 3,
      title: 'الأحوال الشخصية والأسرة',
      description: 'معالجة قضايا الزواج، الطلاق، الحضانة، والمواريث بأقصى درجات السرية والاحترافية.',
      icon: 'family_restroom'
    },
    {
      id: 4,
      title: 'النزاعات العقارية',
      description: 'تسوية النزاعات المتعلقة بالملكية، الإيجارات، وتوثيق العقود العقارية لضمان حقوقك الاستثمارية.',
      icon: 'real_estate_agent'
    },
    {
      id: 5,
      title: 'حماية الملكية الفكرية',
      description: 'تسجيل العلامات التجارية، براءات الاختراع، وحماية حقوق المؤلف من التعدي والاستغلال.',
      icon: 'lightbulb'
    },
    {
      id: 6,
      title: 'قضايا العمل والعمال',
      description: 'تقديم الاستشارات وتمثيل الأفراد والشركات في المنازعات العمالية وحقوق الموظفين.',
      icon: 'work'
    }
  ];

  return (
    <section id="services" className="w-full py-24 bg-gradient-to-b from-[#25395e] to-[#1a2842] relative overflow-hidden">
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-1/4 w-[40vw] h-[40vw] bg-[#4870bb] rounded-full mix-blend-color-dodge filter blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[30vw] h-[30vw] bg-[#1c0305] rounded-full mix-blend-multiply filter blur-[150px] opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-6 rounded-full bg-[#4870bb]/20 text-[#b9c7e4] border border-[#4870bb]/40 font-primary text-sm tracking-widest mb-4">
            مجالات خبرتنا
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display leading-tight text-white mb-6">
            الخدمات <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-[#4870bb]">القانونية</span> الشاملة
          </h2>
          <p className="text-[#d1d5db] font-primary text-lg md:text-xl leading-relaxed opacity-90">
            نقدم مجموعة واسعة من الخدمات الاستشارية والتقاضي، مصممة خصيصاً لتلبية احتياجاتك وحماية مصالحك بدقة متناهية.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group bg-[#131313]/40 border border-white/10 hover:border-[#4870bb]/60 backdrop-blur-md rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(72,112,187,0.15)] flex flex-col items-start text-right relative overflow-hidden"
            >
              {/* Subtle hover background sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4870bb]/0 to-[#4870bb]/0 group-hover:from-[#4870bb]/10 group-hover:to-transparent transition-all duration-500"></div>

              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#4870bb] group-hover:border-[#4870bb] transition-all duration-500 shadow-lg relative z-10">
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10 group-hover:text-[#b9c7e4] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-[#a5a5aa] font-primary leading-relaxed relative z-10 flex-grow">
                {service.description}
              </p>

              <div className="mt-8 relative z-10">
                <button className="flex items-center gap-2 text-[#b9c7e4] font-primary font-medium group-hover:text-white transition-colors">
                  <span className="w-8 h-[1px] bg-[#4870bb] group-hover:w-12 transition-all duration-300"></span>
                  اعرف المزيد
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
