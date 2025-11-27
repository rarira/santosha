'use client';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@ui/hover-card';
import Link from 'next/link';
import { INTRO_CONTENT } from '@/lib/statics';

function IntroSpeechBubble() {
  const now = new Date().toLocaleString();
  const { speechBubble } = INTRO_CONTENT;

  return (
    <div className="absolute flex flex-row left-[calc(50%-40px)] md:left-[calc(50%-50px)] animate-[float_3s_ease-in-out_infinite]">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link href={speechBubble.linkTo} replace className="group">
            <div className="relative flex flex-row">
              {/* Arrow with animation */}
              <div className="absolute left-[-0.9rem] top-1/2 md:bottom-8 w-0 h-0 border-y-transparent border-y-[0.75rem] border-r-[1rem] border-r-yoga-cream group-hover:scale-110 group-hover:translate-x-1 transition-all duration-300 origin-right" />

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-105" />

              {/* Speech Bubble */}
              <div className="relative flex flex-col w-full max-w-[320px] leading-1.5 p-5 bg-yoga-cream rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-2 border-yoga-sand/30 bg-background overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[wave_2s_ease-in-out]" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                    <span className="text-lg md:text-xl font-bold text-yoga-terracotta group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {speechBubble.author}
                    </span>
                    <span className="text-xs font-normal text-muted-foreground">{now}</span>
                  </div>
                  <p className="text-sm md:text-md font-normal text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {speechBubble.message}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="p-3 w-full flex-row rounded-xl shadow-lg text-center glass-border border-yoga-terracotta/20 animate-[scaleIn_0.3s_ease-out]">
          <span className="text-sm font-medium text-yoga-terracotta">
            {speechBubble.hoverText}
          </span>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default IntroSpeechBubble;
