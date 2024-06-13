import steps from '@/libs/data/process_steps';

import ProcessArrow from './Arrow';
import ProcessLine from './Line';
import ProcessStep from './Step';
import SectionContainer from '../_components/SectionContainer';
import SectionTitle from '../_components/SectionTitle';

function ProcessSection(): React.JSX.Element {
  return (
    <SectionContainer sectionName="process">
      <SectionTitle title="상담 프로세스" subtitle="이렇게 진행 되요" />
      <div className="grid grid-cols-14 gap-0">
        {steps.map((step, index) => {
          if (step.type !== 'content')
            return (
              <div key={index} className={`col-span-${step.span}`}>
                {step.type === 'arrow' ? (
                  <ProcessArrow direction={step.direction} />
                ) : (
                  <ProcessLine direction={step.direction} />
                )}
              </div>
            );

          return (
            <div key={index} className="col-span-4">
              <ProcessStep stepNo={step.stepNo} title={step.title} description={step.description} />
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

export default ProcessSection;
