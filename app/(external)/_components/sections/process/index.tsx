import { SECTIONS } from '@/lib/statics';

import ProcessGrid from './grid';
import SectionContainer from '../_components/section-container';
import SectionTitle from '../_components/section-title';

function ProcessSection(): React.JSX.Element {
  const { title, subtitle } = SECTIONS.process;

  return (
    <SectionContainer sectionName="process">
      <SectionTitle title={title} subtitle={subtitle} />
      <ProcessGrid />
    </SectionContainer>
  );
}

export default ProcessSection;
