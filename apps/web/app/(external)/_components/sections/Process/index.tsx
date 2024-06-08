import SectionContainer from '../../SectionContainer';
import SectionTitle from '../../SectionTitle';

function Process(): JSX.Element {
  return (
    <SectionContainer sectionName="process">
      <SectionTitle title="상담 프로세스" subtitle="이렇게 진행 되요" />
      <div className="grid grid-cols-3 gap-4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </div>
    </SectionContainer>
  );
}

export default Process;
