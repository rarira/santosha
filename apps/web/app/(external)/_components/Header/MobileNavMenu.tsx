import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@repo/ui/components/ui/dropdown-menu';
import { HamburgerMenuIcon } from '@repo/ui/components/ui/hamburger-menu-icon';
import Link from 'next/link';
import { useState } from 'react';

import { nav_menu } from '@/libs/data/nav_menu';

function MobileHeaderNavMenu(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger>
        <div className="md:hidden mr-4">
          <HamburgerMenuIcon className="w-6 h-6 stroke-slate-900 stroke-0 focus:stroke-1" />
        </div>
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
  );
}

export default MobileHeaderNavMenu;
