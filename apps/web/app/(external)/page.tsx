import type { JSX } from 'react';

import Hero from './_components/Hero';
import ClassSection from './_components/sections/Class';
import ContactSection from './_components/sections/Contact';
import IntroSection from './_components/sections/Intro';
import ProcessSection from './_components/sections/Process';

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
