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
      className={`flex-col max-w-[var(--max-width)] md:mx-auto pt-20 pb-8 px-4 md:px-8 transition-all ease-out duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {children}
    </section>
  );
}

export default SectionContainer;
