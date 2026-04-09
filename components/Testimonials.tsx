import React from 'react';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'محمد الصالح',
      role: 'المدير التنفيذي، شركة أفق الرائدة',
      content: 'كان لمكتب عزالدين عمر دور حاسم في فك نزاع تجاري معقد لشركتنا. لقد أظهروا مستوى غير مسبوق من الاحترافية، الدقة، والفهم العميق للقوانين التجارية.',
      rating: 5,
    },
    {
      id: 2,
      name: 'فاطمة العبدالله',
      role: 'عميلة أفراد (قضية عقارية)',
      content: 'كنت أواجه قضية عقارية معقدة استمرت لسنوات دون حل. بفضل الاستشارات القانونية والتمثيل القوي من قِبل محامي المكتب، تم استرجاع كامل حقوقي بفترة قياسية.',
      rating: 5,
    },
    {
      id: 3,
      name: 'أحمد التميمي',
      role: 'رائد أعمال',
      content: 'ما يميز هذا المكتب هو الشفافية المطلقة. كانوا يضعونني في الصورة خطوة بخطوة، ونسبة استجابتهم لاستفساراتي كانت استثنائية. يستحقون كل الثقة.',
      rating: 5,
    }
  ];

  return (
    <section id="testimonials" className="w-full py-24 bg-[#131313] overflow-hidden relative">
      
      {/* Background Decoratives */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#4870bb] blur-[200px] rounded-[100%] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-6 rounded-full bg-[#f6f6f6]/10 text-[#b9c7e4] border border-white/10 font-primary text-sm tracking-widest mb-4">
            آراء عملائنا
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display leading-[1.2] text-white my-4">
            قصص نجاح تعكس <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-[#4870bb]">ثقة واستدامة</span>
          </h2>
          <p className="text-[#a5a5aa] font-primary text-lg leading-relaxed">
            نفخر بأن شهادة عملائنا هي أكبر دليل على التزامنا بتقديم خدمات قانونية تصنع الفارق الحقيقي في حماية حقوقهم.
          </p>
        </div>

        {/* Testimonials Grid / List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative hover:-translate-y-2 transition-transform duration-300 group"
            >
              {/* Giant Quote mark in background */}
              <span className="material-symbols-outlined absolute top-4 left-4 text-7xl text-white/5 pointer-events-none group-hover:text-[#4870bb]/10 transition-colors duration-500 transform rotate-180">
                format_quote
              </span>
              
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-[#e9c176]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>

              {/* Review Content */}
              <p className="text-[#d1d5db] font-primary text-[15px] md:text-base leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25395e] to-[#4870bb] flex items-center justify-center text-white font-display font-bold shadow-inner">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-display font-extrabold text-[15px]">
                    {testimonial.name}
                  </span>
                  <span className="text-[#a5a5aa] font-primary text-[13px]">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
