'use client';

import { useEffect, useState } from 'react';

import HeroCarousel from "./Carousel";

function Hero(): React.JSX.Element {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex-col max-w-(--max-width) mx-auto overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-[blob_10s_ease-in-out_infinite]" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/8 rounded-full blur-3xl animate-[blob_12s_ease-in-out_infinite_2s]" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/8 rounded-full blur-3xl animate-[blob_14s_ease-in-out_infinite_4s]" />
        
        {/* Floating particles */}
        {mounted && (
          <>
            <div className="particle particle-1" style={{ top: '15%', left: '10%' }} />
            <div className="particle particle-2" style={{ top: '50%', right: '15%' }} />
            <div className="particle particle-3" style={{ bottom: '25%', left: '20%' }} />
            <div className="particle particle-1" style={{ top: '70%', right: '30%' }} />
            <div className="particle particle-2" style={{ top: '30%', left: '60%' }} />
          </>
        )}
      </div>

      {/* Main carousel with enhanced styling */}
      <div className="relative">
        <HeroCarousel />
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export default Hero;
