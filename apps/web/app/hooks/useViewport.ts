import { isServer } from '@tanstack/react-query';
import { useState, useLayoutEffect } from 'react';

export function useViewport() {
  const [width, setWidth] = useState(
    isServer ? 0 : Math.max(document.documentElement.clientWidth, window.innerWidth),
  );

  useLayoutEffect(() => {
    if (isServer) return;

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
