import { useEffect, useState } from 'react';

export type ScrollDirection = 'up' | 'down' | null;

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const _scrollY = window.scrollY;
      const direction = _scrollY > lastScrollY ? 'down' : 'up';
      setScrollY(_scrollY);
      if (
        direction !== scrollDirection &&
        (_scrollY - lastScrollY > 2 || _scrollY - lastScrollY < -2)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = _scrollY > 0 ? _scrollY : 0;
    };

    // add event listener
    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      // clean up
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [scrollDirection]);

  return { scrollDirection, scrollY };
};

export default useScrollDirection;
