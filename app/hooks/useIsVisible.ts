import { RefObject, useEffect, useState } from 'react';

export function useIsVisible(ref: RefObject<HTMLElement | null>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIntersecting(entry.isIntersecting);
      }
    });

    if (ref?.current) {
      observer.observe(ref?.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
