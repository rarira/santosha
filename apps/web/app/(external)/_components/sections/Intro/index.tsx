import IntroContent from './content';
import IntroProfile from './profile';
import IntroSpeechBubble from './speech-bubble';
import SectionContainer from '../_components/section-container';
import SectionTitle from '../_components/section-title';

function IntroSection(): React.JSX.Element {
  return (
    <SectionContainer sectionName="intro">
      <SectionTitle title="산토샤 요가 소개" />
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
