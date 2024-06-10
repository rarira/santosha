import steps from '@/libs/data/process_steps';

import ProcessStep from './Step';
import SectionContainer from '../../SectionContainer';
import SectionTitle from '../../SectionTitle';

function Process(): JSX.Element {
  return (
    <SectionContainer sectionName="process">
      <SectionTitle title="상담 프로세스" subtitle="이렇게 진행 되요" />
      <div className="grid grid-cols-3 gap-4">
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            stepNo={index + 1}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export default Process;
