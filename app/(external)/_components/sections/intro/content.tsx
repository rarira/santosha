'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/accordion';

import { SafeHydrate } from '@/components/safe-hydrate';
import { INTRO_CONTENT } from '@/lib/statics';
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
        {INTRO_CONTENT.accordion.map(item => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border border-border rounded-xl px-5 py-2 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:shadow-md"
          >
            <AccordionTrigger className="text-md font-semibold hover:text-primary hover:no-underline">
              <span className="flex items-center gap-2">
                <span className="text-primary">{item.icon}</span>
                {item.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pt-2 text-muted-foreground leading-relaxed">
              {Array.isArray(item.content) ? (
                <div className="space-y-2">
                  {item.content.map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p>{item.content}</p>
              )}
              {'list' in item && item.list && (
                <ul className="pl-6 mt-3 space-y-1 list-disc marker:text-primary">
                  {item.list.map((listItem: string, idx: number) => (
                    <li key={idx}>{listItem}</li>
                  ))}
                </ul>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SafeHydrate>
  );
}

export default IntroContent;
