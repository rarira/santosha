import Hero from './_components/hero';
import ClassSection from './_components/sections/class';
import ContactSection from './_components/sections/contact';
import IntroSection from './_components/sections/intro';
import ProcessSection from './_components/sections/process';
import ScheduleSection from './_components/sections/schedule';

export const dynamic = 'force-dynamic';

export default async function Page(): Promise<React.JSX.Element> {
  return (
    <main className="flex-col w-full pb-10 pt-16">
      <Hero />
      <IntroSection />
      <ClassSection />
      <ScheduleSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
