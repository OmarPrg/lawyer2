"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { usePathname } from 'next/navigation';

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Initialize Lenis for buttery smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.2, // Smoother travel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1, // Controlled travel
      touchMultiplier: 2, 
    });

    lenisRef.current = lenis;

    // Integrated Request Animation Frame loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Call resize on mount and window resize
    const handleResize = () => lenis.resize();
    window.addEventListener('resize', handleResize);
    
    // Slight delay to ensure content is measured after layout calculations
    const timeoutId = setTimeout(() => lenis.resize(), 500);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
      lenisRef.current = null;
    };
  }, []);

  // Reset scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
};
