'use client';

import { useRef } from 'react';

import { useIsVisible } from 'app/hooks/useIsVisible';
import { Separator } from '@ui/separator';

interface ProcessStepProps {
  stepNo: number;
  title: string;
  description: string;
}

function ProcessStep({ stepNo, title, description }: ProcessStepProps): React.JSX.Element {
  const stepRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(stepRef);

  return (
    <div 
      ref={stepRef}
      className={`group relative p-8 text-center glass-border rounded-2xl transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${stepNo * 100}ms`,
      }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      
      {/* Step Number Badge with pulse effect */}
      <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/80 font-bold text-2xl shadow-lg mb-6 group-hover:scale-125 transition-all duration-500">
        <span className="text-white drop-shadow-md relative z-10">{stepNo}</span>
        <div className="absolute inset-0 rounded-full bg-secondary/50 animate-[ping_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-75" />
      </div>

      <Separator className="my-4 bg-gradient-to-r from-transparent via-neutral-light/40 to-transparent" />

      <h4 className="text-xl font-semibold mb-3 text-primary group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-accent group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
        {description}
      </p>

      {/* Corner decoration */}
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
}

export default ProcessStep;
