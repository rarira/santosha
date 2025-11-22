import { useState, useLayoutEffect } from 'react';

import U from '@/libs/util';

export function useViewport() {
  const [width, setWidth] = useState(
    U.isServer ? 0 : Math.max(document.documentElement.clientWidth, window.innerWidth),
  );

  useLayoutEffect(() => {
    if (U.isServer) return;

    const handleWindowResize = () =>
      setWidth(Math.max(document.documentElement.clientWidth, window.innerWidth));
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return {
    width,
    isMobile: width < 768,
  };
}
