'use client';

import { useRef } from 'react';

import { useIsVisible } from 'app/hooks/useIsVisible';
interface SectionContainerProps {
  children: React.ReactNode;
  sectionName: string;
  variant?: 'default' | 'elevated' | 'bordered' | 'floating';
}

function SectionContainer({ 
  children, 
  sectionName,
  variant = 'default' 
}: SectionContainerProps): React.JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);

  const baseClasses = "flex-col max-w-(--max-width) md:mx-auto pt-20 pb-8 px-4 md:px-8 transition-all ease-out duration-700";
  
  const variantClasses = {
    default: "",
    elevated: "relative bg-morph",
    bordered: "relative border-l-4 border-primary/30 pl-6 md:pl-12",
    floating: "relative",
  };

  const animationClasses = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8';

  return (
    <section
      key={sectionName}
      ref={sectionRef}
      id={`${sectionName}-section`}
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses}`}
    >
      {/* Decorative particles for elevated variant */}
      {variant === 'elevated' && (
        <>
          <div className="particle particle-1" style={{ top: '10%', left: '5%' }} />
          <div className="particle particle-2" style={{ top: '60%', right: '8%' }} />
          <div className="particle particle-3" style={{ bottom: '20%', left: '15%' }} />
        </>
      )}
      
      {/* Floating card effect */}
      {variant === 'floating' && (
        <div className="absolute inset-0 -z-10">
          <div className="blob bg-primary" style={{ top: '-10%', right: '5%', width: '300px', height: '300px' }} />
          <div className="blob bg-accent" style={{ bottom: '-5%', left: '10%', width: '250px', height: '250px' }} />
        </div>
      )}

      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}

export default SectionContainer;
