import ProcessGrid from './grid';
import SectionContainer from '../_components/section-container';
import SectionTitle from '../_components/section-title';

function ProcessSection(): React.JSX.Element {
  return (
    <SectionContainer sectionName="process">
      <SectionTitle title="상담 프로세스" subtitle="이렇게 진행 되요" />
      <ProcessGrid />
    </SectionContainer>
  );
}

export default ProcessSection;
