'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@ui/carousel';
import { cn } from '@/lib/utils';
import { HERO_SLIDES } from '@/lib/statics';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
        {HERO_SLIDES.map((slide, index) => (
          <CarouselItem key={index} className="relative">
            {/* 모바일: 1:1, 데스크톱: 16:9 - CSS로 처리 */}
            <div className="relative w-full aspect-square md:aspect-video md:rounded-2xl overflow-hidden">
              <Image
                src={slide.image}
                alt={`santosha yoga ${slide.title}`}
                className="object-cover transition-transform duration-700 hover:scale-105"
                fill
                priority={index === 0}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in text-center drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl animate-fade-in text-center drop-shadow-md opacity-90">
                  {slide.subtitle}
                </p>
              </div>
              
              {/* Pagination dots */}
              {index === current - 1 && (
                <Dots
                  count={count}
                  current={current}
                  onClick={scrollToSlide}
                  className="absolute bottom-6 left-0 right-0 z-10"
                />
              )}
              
              {/* Navigation arrows - 현재 슬라이드에만 표시 */}
              {index === current - 1 && (
                <>
                  <button
                    onClick={() => api?.scrollPrev()}
                    aria-label="Previous slide"
                    className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors z-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={() => api?.scrollNext()}
                    aria-label="Next slide"
                    className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-colors z-10"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
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
