'use client';

import { AspectRatio } from '@ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@ui/carousel';
import { cn } from '@/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import carouselImage1 from 'public/image/hero/lizzy-004.jpg';
import carouselImage2 from 'public/image/hero/lizzy-006.jpg';
import carouselImage3 from 'public/image/hero/lizzy-014.jpg';

const slides = [
  {
    image: carouselImage1,
    title: '평온한 마음',
    subtitle: '요가로 찾는 내면의 평화',
  },
  {
    image: carouselImage2,
    title: '건강한 몸',
    subtitle: '균형잡힌 자세와 호흡',
  },
  {
    image: carouselImage3,
    title: '행복한 일상',
    subtitle: '산토샤 요가와 함께',
  },
];

function HeroCarousel(): React.JSX.Element {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollToSlide = (index: number) => {
    if (!api) {
      return;
    }

    api.scrollTo(index);
  };

  return (
    <div className="relative overflow-hidden">
      <Carousel
        opts={{ align: 'center', loop: true }}
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        className="relative"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <AspectRatio ratio={16 / 9} className="bg-muted">
                  <Image
                    src={slide.image}
                    alt={`santosha yoga ${slide.title}`}
                    className="md:rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
                    fill
                    priority={index === 0}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:rounded-2xl" />

                  {/* Text overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in text-center drop-shadow-lg">
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-2xl animate-fade-in text-center drop-shadow-md opacity-90">
                      {slide.subtitle}
                    </p>
                  </div>
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex left-4 h-12 w-12 border-2 border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white" />
        <CarouselNext className="hidden md:flex right-4 h-12 w-12 border-2 border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white" />
      </Carousel>
      <Dots
        count={count}
        current={current}
        onClick={scrollToSlide}
        className="absolute bottom-6 w-full z-10"
      />
    </div>
  );
}

function Dots({
  count,
  current,
  onClick,
  className,
}: {
  count: number;
  current: number;
  onClick: (_index: number) => void;
  className?: string;
}): React.JSX.Element {
  return (
    <div className={cn('flex justify-center gap-2', className)}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          aria-label={`Go to slide ${i + 1}`}
          className={cn(
            'h-2 rounded-full transition-all duration-300',
            i === current - 1 ? 'w-8 bg-white shadow-lg' : 'w-2 bg-white/50 hover:bg-white/75',
          )}
        />
      ))}
    </div>
  );
}

export default HeroCarousel;
