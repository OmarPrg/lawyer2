"use client";

import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '@/lib/services-data';

export function CaseStudyDialog({ caseStudy, children }: { caseStudy: CaseStudy, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200000]"
              />
            </Dialog.Overlay>
            
            <Dialog.Content asChild>
              <div className="fixed inset-0 flex items-center justify-center p-4 z-[200001] pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className="bg-[#131313] border border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative pointer-events-auto"
                >
                  {/* Decorative Header Background */}
                  <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#4870bb]/20 to-transparent pointer-none" />
                  
                  <div className="p-8 md:p-12 relative z-10">
                    <div className="flex justify-between items-start mb-8">
                       <Dialog.Close className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined">close</span>
                      </Dialog.Close>
                      <div className="text-right">
                        <span className="inline-block py-1 px-3 rounded-md bg-[#4870bb]/20 text-[#4870bb] text-xs font-bold mb-2">
                           {caseStudy.year}
                        </span>
                        <Dialog.Title className="text-2xl md:text-3xl font-display font-extrabold text-white">
                          {caseStudy.title}
                        </Dialog.Title>
                      </div>
                    </div>

                    <div className="space-y-6 text-right" dir="rtl">
                      <div>
                        <h4 className="text-[#b9c7e4] font-display font-bold mb-2">ملخص القضية</h4>
                        <p className="text-white font-primary leading-relaxed text-lg opacity-90">
                          {caseStudy.summary}
                        </p>
                      </div>

                      <div className="h-[1px] bg-white/10 w-full" />

                      <div>
                        <h4 className="text-[#b9c7e4] font-display font-bold mb-2">التفاصيل والنتيجة</h4>
                        <p className="text-white/70 font-primary leading-relaxed">
                          {caseStudy.fullContent}
                        </p>
                      </div>

                      <div className="bg-white/5 border border-white/5 rounded-2xl p-6 mt-8">
                        <div className="flex items-center gap-3 justify-end text-white">
                           <span className="font-display font-bold">{caseStudy.outcome}</span>
                           <span className="material-symbols-outlined text-[#4870bb]">check_circle</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
