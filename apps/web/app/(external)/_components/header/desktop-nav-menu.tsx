import Link from 'next/link';

import { nav_menu } from '@/libs/data/nav_menu';

import { ThemeToggle } from './theme-toggle';

function DesktopHeaderNavMenu() {
  return (
    <>
      <nav className="hidden md:flex w-full items-center">
        <ul className="flex w-full flex-row justify-around items-center">
          {nav_menu.map(menu => (
            <li key={menu.url}>
              <Link href={menu.url}>{menu.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <ThemeToggle className="hidden md:flex" />
    </>
  );
}

export default DesktopHeaderNavMenu;
