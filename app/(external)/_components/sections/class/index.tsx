import { SECTIONS } from '@/lib/statics';

import ClassList from './list';
import SectionContainer from '../_components/section-container';
import SectionTitle from '../_components/section-title';

async function ClassSection(): Promise<React.JSX.Element> {
  const { title, subtitle } = SECTIONS.class;

  return (
    <SectionContainer sectionName="class" variant="floating">
      <SectionTitle title={title} subtitle={subtitle} variant="outlined" />
      <ClassList />
    </SectionContainer>
  );
}

export default ClassSection;
