'use client';

import processSteps from '@/libs/data/process_steps';
import { useViewport } from 'app/hooks/useViewport';
import { SafeHydrate } from 'components/SafeHydrate';

import ProcessArrow from './_components/arrow';
import ProcessLine from './_components/line';
import ProcessStep from './step';

function ProcessGrid() {
  const { isMobile } = useViewport();

  const steps = isMobile ? processSteps.mobile : processSteps.desktop;

  return (
    <SafeHydrate>
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
    </SafeHydrate>
  );
}

export default ProcessGrid;
