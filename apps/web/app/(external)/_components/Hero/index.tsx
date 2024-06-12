import HeroCarousel from './Carousel';

function Hero(): JSX.Element {
  return (
    <div className="flex-col max-w-[var(--max-width)] mx-auto ">
      <HeroCarousel />
    </div>
  );
}

export default Hero;
