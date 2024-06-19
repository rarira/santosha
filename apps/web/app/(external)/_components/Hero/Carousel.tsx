'use client';

import { AspectRatio } from '@repo/ui/components/ui/aspect-ratio';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@repo/ui/components/ui/carousel';
import { cn } from '@ui/lib/utils';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import carouselImage1 from 'public/image/hero/lizzy-004.jpg';
import carouselImage2 from 'public/image/hero/lizzy-006.jpg';
import carouselImage3 from 'public/image/hero/lizzy-014.jpg';

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
    <div className="relative">
      <Carousel
        opts={{ align: 'center', loop: true }}
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="relative"
      >
        <CarouselContent>
          <CarouselItem>
            <AspectRatio ratio={16 / 10}>
              <Image
                src={carouselImage1}
                alt="santosha yoga hero image1"
                className="md:rounded-lg object-cover"
                fill
              />
            </AspectRatio>
          </CarouselItem>
          <CarouselItem>
            <AspectRatio ratio={16 / 10}>
              <Image
                src={carouselImage2}
                alt="santosha yoga hero image2"
                className="md:rounded-lg object-cover"
                fill
              />
            </AspectRatio>
          </CarouselItem>
          <CarouselItem>
            <AspectRatio ratio={16 / 10}>
              <Image
                src={carouselImage3}
                alt="santosha yoga hero image3"
                className="md:rounded-lgobject-cover"
                fill
              />
            </AspectRatio>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <Dots
        count={count}
        current={current}
        onClick={scrollToSlide}
        className="absolute bottom-3 w-full"
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
    <div className={cn('flex justify-center', className)}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          onClick={() => onClick(i)}
          className={`w-2 h-2 mx-1 rounded-full border-x border-y border-primary ${i === current - 1 ? 'bg-primary' : 'bg-slate-50'}`}
        />
      ))}
    </div>
  );
}

export default HeroCarousel;
