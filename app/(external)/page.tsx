'use client';

import { useEffect, useState } from 'react';

import Hero from './_components/hero';
import ClassSection from './_components/sections/class';
import ContactSection from './_components/sections/contact';
import IntroSection from './_components/sections/intro';
import ProcessSection from './_components/sections/process';

export default function Page(): React.JSX.Element {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="flex-col w-full pb-10 pt-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 bg-gradient-animated" />
      
      {/* Floating decorative elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />
        <div 
          className="absolute top-1/3 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        />
      </div>

      <Hero />
      <IntroSection />
      <ClassSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
