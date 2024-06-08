import type { JSX } from 'react';

import Class from './_components/sections/Class';
import Contact from './_components/sections/Contact';
import Intro from './_components/sections/Intro';
import Process from './_components/sections/Process';

export default function Page(): JSX.Element {
  return (
    <main className="flex-col w-full">
      <Intro />
      <Class />
      <Process />
      <Contact />
    </main>
  );
}
