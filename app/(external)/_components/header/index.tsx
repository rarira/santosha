"use client";

import Image from "next/image";
import Link from "next/link";

import { SITE_INFO } from "@/lib/statics";
import useScrollDirection from "app/hooks/useScrollDirection";
import { useViewport } from "app/hooks/useViewport";

import DesktopHeaderNavMenu from "./desktop-nav-menu";
import MobileHeaderNavMenu from "./mobile-nav-menu";

function Header(): React.JSX.Element {
  const { scrollDirection, scrollY } = useScrollDirection();
  const { isMobile } = useViewport();

  const isScrolled = scrollY > 100;

  return (
    <header
      className={`fixed flex left-1/2 h-16 translate-x-[-50%] justify-between items-center z-40 transition-all ease-in-out duration-300 bg-background border-b border-border md:border-b-0 ${
        scrollDirection === "down" && isMobile ? "-top-16" : "top-0"
      } ${
        isScrolled
          ? "w-[calc(100%-2rem)] md:top-4 md:max-w-4xl md:rounded-full md:shadow-xl md:px-6 md:backdrop-blur-md md:bg-card/95 md:border md:border-border"
          : "w-full md:top-0 md:max-w-(--max-width) md:bg-background"
      }`}
    >
      <Link href="/" replace className="flex items-center justify-center pl-2">
        <div className={`relative transition-all duration-300 ${
          isScrolled ? "h-10 w-32" : "h-12 w-40"
        }`}>
          <Image
            src={SITE_INFO.logo.path}
            alt={SITE_INFO.logo.alt}
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>
      <DesktopHeaderNavMenu />
      <MobileHeaderNavMenu />
    </header>
  );
}

export default Header;
