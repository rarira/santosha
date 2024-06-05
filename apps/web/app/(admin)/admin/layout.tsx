import type { Metadata } from 'next';

import type { JSX } from 'react';

import { noto_sans_kr } from '@/libs/font';

export const metadata: Metadata = {
  title: 'Santosha Yoga Studio',
  description: 'Yoga studio in the heart of the city.',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en" className={`${noto_sans_kr.variable}`}>
      <body>{children}</body>
    </html>
  );
}
