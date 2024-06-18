'use client';

import Link from 'next/link';

import useScrollDirection from 'app/hooks/useScrollDirection';
import { useViewport } from 'app/hooks/useViewport';

import DesktopHeaderNavMenu from './DesktopNavMenu';
import MobileHeaderNavMenu from './MobileNavMenu';

function Header(): React.JSX.Element {
  const { scrollDirection } = useScrollDirection();
  const { isMobile } = useViewport();

  return (
    <header
      className={`fixed flex w-full ${scrollDirection === 'down' && isMobile ? 'top-[-4rem]' : 'top-0'} md:top:0 left-1/2 md:max-w-[var(--max-width)] h-16 translate-x-[-50%] justify-between items-center mx-1 md:mx-auto bg-white z-40 transition-all ease-in-out duration-[200ms]`}
    >
      <Link href="/" replace className="flex items-center justify-center">
        <div className="flex w-min items-center justify-center pl-2 md:pl-0">
          <h1 className="text-3xl md:text-4xl font-bold self-center">Santosha</h1>
        </div>
      </Link>
      <DesktopHeaderNavMenu />
      <MobileHeaderNavMenu />
    </header>
  );
}

export default Header;
