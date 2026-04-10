import React from 'react';
import { notFound } from 'next/navigation';
import { services } from '@/lib/services-data';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SlideUp, FadeIn, StaggerContainer, StaggerItem } from '@/components/ui/scroll-animations';
import { CaseStudyDialog } from '@/components/CaseStudyDialog';
import { SmoothScroll } from '@/components/ui/smooth-scroll';
import Link from 'next/link';

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = services.find(s => s.id === id);

  if (!service) {
    notFound();
  }

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#131313] text-white">
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden bg-[#131313]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#25395e] to-[#131313] opacity-100" />
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-[#4870bb] blur-[150px] opacity-20" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-white">
            <FadeIn>
              <nav className="flex items-center gap-2 text-sm text-[#a5a5aa] mb-8" dir="rtl">
                <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <span className="text-[#4870bb]">خدماتنا</span>
                <span className="material-symbols-outlined text-xs">chevron_left</span>
                <span className="text-white">{service.title}</span>
              </nav>

              <div className="flex flex-col items-start  text-right space-y-8">
                <div className="flex items-center gap-6 justify-start w-full">
                  <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight text-white order-2">
                    {service.title}
                  </h1>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#4870bb]/20 border border-[#4870bb]/40 flex items-center justify-center text-[#4870bb] shadow-2xl backdrop-blur-md order-1">
                     <span className="material-symbols-outlined text-2xl md:text-3xl">{service.icon}</span>
                  </div>
                </div>
                <p className="text-xl text-white/80 font-primary max-w-3xl border-r-4 border-[#4870bb] pr-6">
                  {service.fullDescription}
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f6f6f6] rounded-full -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <SlideUp className="order-2 lg:order-1">
                <div className="relative aspect-square max-w-md mx-auto">
                   <div className="absolute inset-0 border-2 border-[#4870bb]/10 rounded-3xl -rotate-6 translate-x-4 translate-y-4" />
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#25395e] to-[#4870bb] rounded-3xl shadow-2xl flex items-center justify-center p-8">
                     <span className="material-symbols-outlined text-9xl text-white/20 absolute bottom-4 right-4">{service.icon}</span>
                     <p className="text-2xl font-display font-bold text-center leading-relaxed italic opacity-90 text-white">
                       "نؤمن بأن العدالة ليست مجرد هدف، بل هي الطريق الذي نسلكه في كل قضية."
                     </p>
                   </div>
                </div>
              </SlideUp>

              <div className="order-1 lg:order-2 text-right">
                <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-4 justify-start text-[#1c0305]">
                  <div className="w-10 h-[2px] bg-[#4870bb]" />
                   مجالات تخصصنا الدقيقة
                </h2>
                <StaggerContainer className="grid grid-cols-1 gap-4">
                  {service.features.map((feature, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-center gap-4 justify-end p-5 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] hover:border-[#4870bb]/30 hover:bg-white transition-all group shadow-sm hover:shadow-md">
                        <span className="text-[#616161] font-primary font-medium">{feature}</span>
                        <div className="w-2 h-2 rounded-full bg-[#4870bb] group-hover:scale-150 transition-transform" />
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies (Articles) Section */}
        <section className="py-24 bg-[#f6f6f6] relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#4870bb]/5 rounded-full -translate-y-1/2 -translate-x-1/4 pointer-events-none blur-3xl opacity-50" />
          
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="inline-block py-1.5 px-6 rounded-full bg-[#4870bb]/10 text-[#4870bb] border border-[#4870bb]/20 font-primary text-sm tracking-widest uppercase mb-4 shadow-sm">النتائج تتحدث</span>
              <h2 className="text-4xl font-display font-extrabold text-[#1c0305]">قضايا سابقة مماثلة (المقالات)</h2>
              <p className="text-[#616161] mt-4 max-w-2xl font-primary text-lg">
                استعرض بعض القضايا التي حققنا فيها نتائج استثنائية وبنينا من خلالها ثقة عملائنا.
              </p>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.caseStudies.map((caseStudy) => (
                <StaggerItem key={caseStudy.id}>
                  <CaseStudyDialog caseStudy={caseStudy}>
                    <div className="group cursor-pointer bg-white border border-[#e2e8f0] rounded-3xl p-8 hover:shadow-[0_20px_50px_rgba(72,112,187,0.1)] transition-all duration-500 relative overflow-hidden text-right">
                       <div className="absolute top-0 right-0 w-2 h-full bg-[#4870bb] scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                       <span className="text-xs font-bold text-[#4870bb] mb-4 block uppercase tracking-wider">{caseStudy.year}</span>
                       <h3 className="text-2xl font-display font-bold mb-4 text-[#1c0305] group-hover:text-[#4870bb] transition-colors">
                         {caseStudy.title}
                       </h3>
                       <p className="text-[#616161]/80 font-primary leading-relaxed mb-6 line-clamp-2">
                         {caseStudy.summary}
                       </p>
                       <div className="flex items-center gap-2 justify-end text-[#4870bb] font-bold group-hover:gap-4 transition-all">
                          <span className="text-sm">قراءة التفاصيل</span>
                          <span className="material-symbols-outlined text-sm">arrow_back</span>
                       </div>
                    </div>
                  </CaseStudyDialog>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        {/* <section className="py-20 bg-gradient-to-l from-[#25395e] to-[#4870bb] rounded-t-[50px] relative z-10">
           <div className="container mx-auto px-6 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-extrabold mb-8 text-white">هل تحتاج إلى استشارة قانونية في هذا المجال؟</h2>
              <Link 
                href="/#contact" 
                className="px-12 py-5 bg-white text-[#25395e] hover:bg-black hover:text-white rounded-2xl font-display font-extrabold text-xl transition-all shadow-2xl inline-block"
              >
                احجز موعدك الآن
              </Link>
           </div>
        </section> */}

        <Footer />
      </main>
    </SmoothScroll>
  );
}
