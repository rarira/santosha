import Hero from './_components/Hero';
import ClassSection from './_components/sections/Class';
import ContactSection from './_components/sections/Contact';
import IntroSection from './_components/sections/Intro';
import ProcessSection from './_components/sections/Process';

export default async function Page(): Promise<React.JSX.Element> {
  return (
    <main className="flex-col w-full pb-10 pt-16">
      <Hero />
      <IntroSection />
      <ClassSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
