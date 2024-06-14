'use client';

import processSteps from '@/libs/data/process_steps';
import { useViewport } from 'app/hooks/userViewport';

import ProcessArrow from './Arrow';
import ProcessLine from './Line';
import ProcessStep from './Step';

function ProcessGrid() {
  const { isMobile } = useViewport();

  const steps = isMobile ? processSteps.mobile : processSteps.desktop;

  return (
    <div className="grid grid-cols-9 md:grid-cols-14 gap-0">
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
  );
}

export default ProcessGrid;
