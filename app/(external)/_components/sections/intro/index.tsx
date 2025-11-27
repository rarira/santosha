import { SECTIONS } from '@/lib/statics';

import IntroContent from './content';
import IntroProfile from './profile';
import IntroSpeechBubble from './speech-bubble';
import SectionContainer from '../_components/section-container';
import SectionTitle from '../_components/section-title';

function IntroSection(): React.JSX.Element {
  const { title, subtitle } = SECTIONS.intro;

  return (
    <SectionContainer sectionName="intro" variant="elevated">
      <SectionTitle title={title} subtitle={subtitle} variant="gradient" />
      <div className=" flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        <div className="relative flex w-full md:w-1/2 justify-start">
          <IntroProfile />
          <IntroSpeechBubble />
        </div>
        <div className="w-full md:w-1/2">
          <IntroContent />
        </div>
      </div>
    </SectionContainer>
  );
}

export default IntroSection;
