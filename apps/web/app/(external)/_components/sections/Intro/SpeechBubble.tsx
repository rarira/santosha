import { HoverCard, HoverCardContent, HoverCardTrigger } from '@repo/ui/components/ui/hover-card';
import Link from 'next/link';

function IntroSpeechBubble() {
  const now = new Date().toLocaleString();

  return (
    <div className="absolute flex flex-row left-[calc(50%-40px)] md:left-[calc(50%-50px)] ">
      <div
        className={`absolute left-[-0.85rem] top-1/2 md:bottom-[2rem] w-0 h-0 border-blue-500 border-y-transparent  border-y-[0.75rem]  border-r-[1rem]`}
      />
      <HoverCard>
        <HoverCardTrigger className="hover:text-lime-200" asChild>
          <Link href="#contact-section" replace>
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 bg-blue-500 rounded-xl shadow-lg shadow-blue-200">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-lg md:text-xl font-bold text-lime-200">Lizzy</span>
                <span className="text-xs font-normal text-white">{now}</span>
              </div>
              <p className="text-sm md:text-md font-normal py-2.5 text-white">
                안녕하세요. 산토샤 요가의 Lizzy입니다. 산토샤요가는 1대1 개인레슨과 단체수업 출강을
                모두 진행하고 있습니다. 궁금하신 사항은 사이트 하단 contact 를 통해 연락주세요🙏🏻
              </p>
            </div>
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="bg-white p-2 w-full flex-row rounded-lg shadow-lg text-center">
          <span className="text-sm text-gray-700">지금 연락하려면 클릭하세요</span>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

export default IntroSpeechBubble;
