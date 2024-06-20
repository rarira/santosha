'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';

import useScrollDirection from 'app/hooks/useScrollDirection';
import { useViewport } from 'app/hooks/useViewport';

import DesktopHeaderNavMenu from './DesktopNavMenu';
import MobileHeaderNavMenu from './MobileNavMenu';

function Header(): React.JSX.Element {
  const { scrollDirection } = useScrollDirection();
  const { isMobile } = useViewport();

  return (
    <header
      className={`fixed flex w-full ${scrollDirection === 'down' && isMobile ? 'top-[-4rem]' : 'top-0'} md:top:0 left-1/2 md:max-w-[var(--max-width)] h-16 translate-x-[-50%] justify-between items-center mx-1 md:mx-auto z-40 transition-all ease-in-out duration-[200ms] bg-background`}
    >
      <Link href="/" replace className="flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold self-center pl-2">Santosha</h1>
      </Link>
      <DesktopHeaderNavMenu />
      <MobileHeaderNavMenu />
    </header>
  );
}

export default Header;
