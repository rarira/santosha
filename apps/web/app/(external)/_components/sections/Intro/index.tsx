import IntroContent from './Content';
import IntroProfile from './Profile';
import IntroSpeechBubble from './SpeechBubble';
import SectionContainer from '../_components/SectionContainer';
import SectionTitle from '../_components/SectionTitle';

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
