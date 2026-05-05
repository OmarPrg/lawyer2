"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn, SlideUp } from "./ui/scroll-animations";

const faqs = [
  {
    question: "ما هي أنواع القضايا التي يتولاها المكتب؟",
    answer: "نتخصص في تقديم خدمات قانونية شاملة تشمل القضايا التجارية، الدفاع الجنائي، الأحوال الشخصية، قضايا العمل والعمال، والمطالبات العقارية. كما نقدم خدمات الاستشارات القانونية الوقائية لتحصين أعمالكم."
  },
  {
    question: "كيف يمكنني حجز موعد لاستشارة قانونية؟",
    answer: "يمكنك حجز موعد بسهولة عبر الاتصال بنا مباشرة، أو التواصل عبر الواتساب من خلال الأيقونة العائمة، أو زيارة مقرنا في الرياض. نوفر استشارات حضورية وعن بعد حسب رغبة العميل."
  },
  {
    question: "هل يقدم المكتب تمثيلاً قانونياً أمام جميع المحاكم؟",
    answer: "نعم، مكتبنا مرخص للتمثيل والترافع أمام جميع المحاكم السعودية بمختلف درجاتها، بما في ذلك المحاكم العامة، الجزائية، التجارية، العمالية، وديوان المظالم."
  },
  {
    question: "ما هي معايير تحديد أتعاب المحاماة؟",
    answer: "نعتمد الشفافية التامة في تقدير الأتعاب، حيث يتم تحديدها بناءً على نوع القضية، مدى تعقيدها القانوني، والجهد والوقت المتوقع بذله. نحرص دائماً على تقديم قيمة مضافة لموكلينا بأعلى معايير المهنية."
  },
  {
    question: "هل يقدم المكتب خدمات صياغة العقود التجارية؟",
    answer: "نعم، نتميز بخبرة طويلة في صياغة ومراجعة كافة أنواع العقود التجارية والاتفاقيات، بما يضمن حماية حقوق أطراف العقد وتجنب المنازعات المستقبلية."
  }
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Structured Data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 bg-[#131313] relative overflow-hidden">
      {/* Schema.org for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Decorative Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4870bb] opacity-[0.03] blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SlideUp>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              الأسئلة الشائعة
            </h2>
            <p className="text-white/60 font-primary text-lg max-w-2xl mx-auto">
              إجابات واضحة ومباشرة لأبرز الاستفسارات القانونية التي قد تهمك.
            </p>
          </div>
        </SlideUp>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <SlideUp key={index} delay={index * 0.1}>
              <div 
                className={`group border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'bg-white/5 border-[#4870bb]/40' : 'bg-transparent'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-right"
                >
                  <span className={`text-xl font-display font-bold transition-colors ${
                    activeIndex === index ? 'text-[#4870bb]' : 'text-white/90 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <span className={`material-symbols-outlined text-[#4870bb] transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}>
                    keyboard_arrow_down
                  </span>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-white/60 font-primary leading-relaxed text-[17px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
