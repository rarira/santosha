import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
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
      <DropdownMenuContent className="mr-1 px-2">
        <nav>
          {nav_menu.map(menu => (
            <DropdownMenuItem key={menu.url} className="hover:bg-slate-200 my-2">
              <Link href={menu.url} onClick={() => setOpen(false)}>
                {menu.title}
              </Link>
            </DropdownMenuItem>
          ))}
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MobileHeaderNavMenu;
