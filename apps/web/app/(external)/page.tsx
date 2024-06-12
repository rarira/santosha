import type { JSX } from 'react';

import Hero from './_components/Hero';
import ClassSection from './_components/Sections/Class';
import ContactSection from './_components/Sections/Contact';
import IntroSection from './_components/Sections/Intro';
import ProcessSection from './_components/Sections/Process';

export default async function Page(): Promise<JSX.Element> {
  return (
    <main className="flex-col w-full">
      <Hero />
      <IntroSection />
      <ClassSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
