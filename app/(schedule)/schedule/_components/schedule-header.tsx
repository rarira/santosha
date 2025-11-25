'use client';

import Link from 'next/link';
import Image from 'next/image';

function ScheduleHeader(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 py-4">
        <Link href="/" className="inline-flex items-center hover:opacity-80 transition-opacity">
          <Image
            src="/image/santosha_logo.webp"
            alt="Santosha Logo"
            width={120}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>
      </div>
    </header>
  );
}

export default ScheduleHeader;
