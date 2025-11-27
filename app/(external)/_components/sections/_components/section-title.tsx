'use client';

import { useRef } from 'react';

import { useIsVisible } from 'app/hooks/useIsVisible';

interface SectionTitleProps {
  title: string;
  subtitle?: string | null;
  variant?: 'default' | 'outlined' | 'gradient' | 'split';
}

function SectionTitle({ 
  title, 
  subtitle, 
  variant = 'default' 
}: SectionTitleProps): React.JSX.Element {
  const titleRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(titleRef);

  const variants = {
    default: (
      <div className="flex-col mb-16 text-center space-y-6">
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight relative z-10">
            {title}
          </h2>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-accent/20 blur-sm" />
        </div>
        {subtitle && (
          <p className="text-base md:text-lg text-neutral max-w-2xl mx-auto font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="flex justify-center gap-2 pt-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-[pulse_2s_ease-in-out_infinite]" />
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-accent" />
          <div className="w-2 h-2 rounded-full bg-secondary animate-[pulse_2s_ease-in-out_infinite_0.5s]" />
        </div>
      </div>
    ),
    outlined: (
      <div className="flex-col mb-16 text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-accent rounded-2xl opacity-50 blur-xl" />
            <p className="text-base md:text-lg text-neutral font-normal leading-relaxed glass-border rounded-2xl p-6 relative z-10">
              {subtitle}
            </p>
          </div>
        )}
        <div className="flex justify-center pt-2">
          <div className="relative">
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute inset-0 w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-secondary to-transparent blur-sm" />
          </div>
        </div>
      </div>
    ),
    gradient: (
      <div className="flex-col mb-16 text-center space-y-6">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-3xl" />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent tracking-tight relative z-10 pb-1">
            {title}
          </h2>
        </div>
        {subtitle && (
          <p className="text-base md:text-lg text-neutral max-w-2xl mx-auto font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="flex justify-center items-center gap-3 pt-2">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
          <div className="w-3 h-3 rounded-full border-2 border-primary relative">
            <div className="absolute inset-0 rounded-full bg-primary animate-[ping_2s_ease-in-out_infinite]" />
          </div>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
        </div>
      </div>
    ),
    split: (
      <div className="flex-col mb-16 text-center space-y-6">
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            {title}
          </h2>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
        </div>
        {subtitle && (
          <div className="relative">
            <p className="text-base md:text-lg text-neutral max-w-2xl mx-auto font-normal leading-relaxed">
              {subtitle}
            </p>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
              <div className="w-1 h-1 rounded-full bg-primary" />
              <div className="w-1 h-1 rounded-full bg-secondary" />
              <div className="w-1 h-1 rounded-full bg-accent" />
            </div>
          </div>
        )}
      </div>
    ),
  };

  return (
    <div
      ref={titleRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {variants[variant]}
    </div>
  );
}

export default SectionTitle;
