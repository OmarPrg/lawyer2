"use client";

import React from 'react';
import { motion } from "motion/react";
import { TestimonialsColumn, Testimonial } from "@/components/ui/testimonials-columns-1";

const testimonialsData: Testimonial[] = [
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
  },
  {
    id: 4,
    name: 'سارة الخالد',
    role: 'سيدة أعمال',
    content: 'دقة في المواعيد واهتمام بأدق التفاصيل، لقد أنقذوا شركتي من خسائر محققة بموجب صياغتهم المحكمة لعقودنا الإستراتيجية.',
    rating: 5,
  },
  {
    id: 5,
    name: 'طارق العمر',
    role: 'مدير الموارد البشرية',
    content: 'استشارات عمالية مبنية على خبرة فعلية في سوق العمل السعودي. وفروا علينا الكثير من المتاعب القانونية عند هيكلة عقود الموظفين.',
    rating: 5,
  },
  {
    id: 6,
    name: 'خالد اليوسف',
    role: 'مستثمر حر',
    content: 'الشريك الاستراتيجي الأفضل لأي مستثمر. لا أتخذ أي قرار استثماري دون الرجوع لاستشاراتهم القانونية المفصلة والواضحة.',
    rating: 5,
  },
  {
    id: 7,
    name: 'نور جمال',
    role: 'عميلة شخصية',
    content: 'قضايا الأحوال الشخصية تتطلب سرية واحتراما تاما، وهذا بالضبط ما وجدته بصدق بالغ في تعاملي مع كافة محامي المكتب والمستشارين.',
    rating: 5,
  },
  {
    id: 8,
    name: 'عبد الرحمن فوزي',
    role: 'صاحب مؤسسة مقاولات',
    content: 'سرعة في الإنجاز وفعالية كبرى في إنهاء الإجراءات الحكومية واستخراج التراخيص المعقدة بقوة النظام. خدمة متكاملة لا توجد في مكان آخر.',
    rating: 5,
  },
  {
    id: 9,
    name: 'ياسمين السيد',
    role: 'مديرة تطوير أعمال',
    content: 'دافعوا بقوة وثبات عن حقوقنا الفكرية ضد الانتهاكات التجارية وحصلنا على تعويضات ممتازة. فريق احترافي لا يرضى إلا بالانتصار.',
    rating: 5,
  }
];

export function Testimonials() {
  const firstColumn = testimonialsData.slice(0, 3);
  const secondColumn = testimonialsData.slice(3, 6);
  const thirdColumn = testimonialsData.slice(6, 9);

  return (
    <section id="testimonials" className="w-full py-24 bg-[#131313] overflow-hidden relative">
      {/* Background Decoratives */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#4870bb] blur-[200px] rounded-[100%] opacity-10 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center py-4">
        
        {/* Animated Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block py-1.5 px-6 rounded-full bg-[#f6f6f6]/10 text-[#b9c7e4] border border-white/10 font-primary text-sm tracking-widest mb-4">
            آراء عملائنا
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display leading-[1.2] text-white my-4">
            قصص نجاح تعكس <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-white to-[#4870bb]">ثقة واستدامة</span>
          </h2>
          <p className="text-[#a5a5aa] font-primary text-lg leading-relaxed">
            نفخر بأن شهادة عملائنا هي أكبر دليل على التزامنا بتقديم خدمات قانونية تصنع الفارق الحقيقي في حماية حقوقهم ومكتسباتهم.
          </p>
        </motion.div>

        {/* Scrolling Columns Container */}
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] w-full max-h-[740px] overflow-hidden pointer-events-auto">
          <TestimonialsColumn testimonials={firstColumn} duration={20} className="w-full md:w-auto" />
          <TestimonialsColumn testimonials={secondColumn} duration={25} className="hidden md:block w-full md:w-auto" />
          <TestimonialsColumn testimonials={thirdColumn} duration={22} className="hidden lg:block w-full lg:w-auto" />
        </div>

      </div>
    </section>
  );
}
