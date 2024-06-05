import type { JSX } from 'react';

import Class from './_components/sections/Class';
import Contact from './_components/sections/Contact';
import Flow from './_components/sections/Flow';
import Intro from './_components/sections/Intro';

export default function Page(): JSX.Element {
  return (
    <main className="flex-col mt-32">
      <Intro />
      <Class />
      <Flow />
      <Contact />
    </main>
  );
}
