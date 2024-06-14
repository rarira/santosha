import ProcessGrid from './Grid';
import SectionContainer from '../_components/SectionContainer';
import SectionTitle from '../_components/SectionTitle';

function ProcessSection(): React.JSX.Element {
  return (
    <SectionContainer sectionName="process">
      <SectionTitle title="상담 프로세스" subtitle="이렇게 진행 되요" />
      <ProcessGrid />
    </SectionContainer>
  );
}

export default ProcessSection;
