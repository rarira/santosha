import { HoverCard, HoverCardContent, HoverCardTrigger } from '@ui/hover-card';
import Link from 'next/link';
import { INTRO_CONTENT } from '@/lib/statics';

function IntroSpeechBubble() {
  const now = new Date().toLocaleString();
  const { speechBubble } = INTRO_CONTENT;

  return (
    <div className="absolute flex flex-row left-[calc(50%-40px)] md:left-[calc(50%-50px)]">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link href={speechBubble.linkTo} replace className="group">
            <div className="relative flex flex-row">
              {/* Arrow - positioned to move with the bubble */}
              <div className="absolute left-[-0.9rem] top-1/2 md:bottom-8 w-0 h-0 border-y-transparent border-y-[0.75rem] border-r-[1rem] border-r-yoga-cream group-hover:scale-105 transition-transform duration-200 origin-right" />

              {/* Speech Bubble */}
              <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-5 bg-yoga-cream rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-200 group-hover:scale-105 border-2 border-yoga-sand/30  bg-background">
                <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                  <span className="text-lg md:text-xl font-bold text-yoga-terracotta">
                    {speechBubble.author}
                  </span>
                  <span className="text-xs font-normal text-muted-foreground">{now}</span>
                </div>
                <p className="text-sm md:text-md font-normal text-foreground/90 leading-relaxed">
                  {speechBubble.message}
                </p>
              </div>
            </div>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="p-3 w-full flex-row rounded-xl shadow-lg text-center bg-card border-yoga-terracotta/20">
          <span className="text-sm font-medium text-yoga-terracotta">
            {speechBubble.hoverText}
          </span>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default IntroSpeechBubble;
