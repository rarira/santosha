'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/accordion';

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
      <Accordion className="w-full space-y-4" {...accordionProps}>
        <AccordionItem
          value="item-1"
          className="border border-border rounded-xl px-5 py-2 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-md"
        >
          <AccordionTrigger className="text-md font-semibold hover:text-primary hover:no-underline">
            <span className="flex items-center gap-2">
              <span className="text-primary">✔️</span>
              1대1 개인레슨
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2 text-muted-foreground leading-relaxed">
            다수와 함께하는 수업에 불편함이나 산만한 느낌을 느끼셨다면, 1대1 수업을 통해 자신의 몸과
            마음에 집중하고 동작과 호흡을 정확히 이어갈 수 있어요.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border border-border rounded-xl px-5 py-2 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-md"
        >
          <AccordionTrigger className="text-md font-semibold hover:text-primary hover:no-underline">
            <span className="flex items-center gap-2">
              <span className="text-primary">✔️</span>
              기업 출강
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2 text-muted-foreground leading-relaxed">
            다수의 기업 출강을 진행한 경험이 있어요. 수업 종류는 세가지로 따로 또는 같이 진행할 수
            있습니다.
            <ul className="pl-6 mt-3 space-y-1 list-disc marker:text-primary">
              <li>스트레칭 수업</li>
              <li>난이도 있는 요가 수업</li>
              <li>명상 수업</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="border border-border rounded-xl px-5 py-2 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-md"
        >
          <AccordionTrigger className="text-md font-semibold hover:text-primary hover:no-underline">
            <span className="flex items-center gap-2">
              <span className="text-primary">✔️</span>
              산토샤의 의미
            </span>
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2 text-muted-foreground leading-relaxed space-y-2">
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
