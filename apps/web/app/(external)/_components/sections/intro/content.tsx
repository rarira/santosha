'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@repo/ui/components/ui/accordion';

import { SafeHydrate } from '@/components/safe-hydrate';
import { useViewport } from 'app/hooks/useViewport';

function IntroContent() {
  const { isMobile } = useViewport();

  const accordionProps: any = isMobile
    ? {
        type: 'single',
        collapsible: true,
        defaultValue: 'item-1',
      }
    : {
        type: 'multiple',
        defaultValue: ['item-1', 'item-2', 'item-3'],
      };

  return (
    <SafeHydrate>
      <Accordion className="w-full" {...accordionProps}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-md">✔️ 1대1 개인레슨</AccordionTrigger>
          <AccordionContent className="px-4">
            다수와 함께하는 수업에 불편함이나 산만한 느낌을 느끼셨다면, 1대1 수업을 통해 자신의 몸과
            마음에 집중하고 동작과 호흡을 정확히 이어갈 수 있어요.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-md">✔️ 기업 출강</AccordionTrigger>
          <AccordionContent className="px-4">
            다수의 기업 출강을 진행한 경험이 있어요. 수업 종류는 세가지로 따로 또는 같이 진행할 수
            있습니다.
            <ul className="pl-4 mt-2 list-disc">
              <li>스트레칭 수업</li>
              <li>난이도 있는 요가 수업</li>
              <li>명상 수업</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-md">✔️ 산토샤의 의미</AccordionTrigger>
          <AccordionContent className="px-4">
            <p>산토샤는 완전, 전체의 sam과 수용, 만족의 tosha가 합쳐진 단어입니다.</p>
            <p>
              산토샤 요가는 우리의 삶에 부드러움을 챙기며 편안함과 안락함을 느끼는 것에 목적을
              둡니다. 몸과 마음의 균형감을 챙기며 현재의 자신에게 집중해봅니다.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SafeHydrate>
  );
}

export default IntroContent;
