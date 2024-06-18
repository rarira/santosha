// import { MovingText } from '@repo/ui/components/ui/moving-text';

import HeroCarousel from './Carousel';

function Hero(): React.JSX.Element {
  return (
    <div className="relative flex-col max-w-[var(--max-width)] mx-auto">
      <HeroCarousel />
      {/* <div className="absolute flex top-0 left-0 bottom-0 right-0 flex-row justify-center items-center">
        {'NAMASTE'.split('').map((letter, index) => (
          <MovingText key={index} className="text-lg">
            {letter}
          </MovingText>
        ))}
      </div> */}
    </div>
  );
}

export default Hero;
