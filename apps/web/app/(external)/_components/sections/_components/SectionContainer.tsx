'use client';

import { useRef } from 'react';

import { useIsVisible } from 'app/hooks/useIsVisible';
interface SectionContainerProps {
  children: React.ReactNode;
  sectionName: string;
}

function SectionContainer({ children, sectionName }: SectionContainerProps): React.JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(sectionRef);

  return (
    <section
      key={sectionName}
      ref={sectionRef}
      id={`${sectionName}-section`}
      className={`flex-col max-w-[var(--max-width)] md:mx-auto pt-16 px-4 md:px-0 transition-opacity ease-in duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
