import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@ui/dropdown-menu';
import { HamburgerMenuIcon } from '@ui/hamburger-menu-icon';
import Link from 'next/link';
import { useState } from 'react';

import { nav_menu } from '@/libs/data/nav_menu';

import { ThemeToggle } from './theme-toggle';

function MobileHeaderNavMenu(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row md:hidden items-center">
      <ThemeToggle className="mr-2" />
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="md:hidden mr-4">
          <HamburgerMenuIcon className="w-6 h-6 stroke-slate-900 stroke-0 focus:stroke-1" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2 px-2">
          <nav className="flex flex-col p-1">
            {nav_menu.map((item, i) => (
              <Link
                key={i}
                href={item.url}
                onClick={() => setOpen(false)}
                className="p-2 hover:cursor hover:bg-gray-100"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default MobileHeaderNavMenu;
