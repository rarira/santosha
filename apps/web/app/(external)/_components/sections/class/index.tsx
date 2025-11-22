import ClassList from './list';
import SectionContainer from '../_components/section-container';
import SectionTitle from '../_components/section-title';

async function ClassSection(): Promise<React.JSX.Element> {
  return (
    <SectionContainer sectionName="class">
      <SectionTitle title="요가 수업 종류" subtitle="다양한 종류의 요가를 함께 할 수 있어요" />
      <ClassList />
    </SectionContainer>
  );
}

export default ClassSection;
