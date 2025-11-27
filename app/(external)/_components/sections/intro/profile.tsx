'use client';

import { AspectRatio } from '@ui/aspect-ratio';
import Image from 'next/image';
import { useState } from 'react';

import LizzyImg from 'public/image/lizzy.jpg';

function IntroProfile(): React.JSX.Element {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-1/2 h-1/2 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AspectRatio ratio={1 / 1}>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-2xl scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700" />
        
        {/* Animated rings */}
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[ping_2s_ease-in-out_infinite]" />
          <div className="absolute inset-0 rounded-full border-2 border-secondary/30 animate-[ping_2s_ease-in-out_infinite_0.5s]" />
        </div>

        <div className="relative w-full h-full overflow-hidden rounded-full ring-4 ring-primary/20 ring-offset-4 ring-offset-background transition-all duration-500 group-hover:ring-8 group-hover:ring-primary/40 group-hover:ring-offset-8 group-hover:shadow-2xl z-10">
          <Image
            src={LizzyImg}
            alt="Lizzy"
            fill
            className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110 brightness-105' : 'scale-100'}`}
          />
          
          {/* Overlay gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </AspectRatio>
    </div>
  );
}

export default IntroProfile;
