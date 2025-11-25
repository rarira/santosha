import HeroCarousel from "./Carousel";

function Hero(): React.JSX.Element {
  return (
    <div className="relative flex-col max-w-(--max-width) mx-auto">
      <HeroCarousel />
    </div>
  );
}

export default Hero;
