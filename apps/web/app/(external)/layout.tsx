import './globals.css';

import type { Metadata } from 'next';

import { ReactNode } from 'react';

import { noto_sans_kr } from '@/libs/font';
import { cn } from '@/libs/util';

import Header from './_components/Header';

export const metadata: Metadata = {
  title: 'Santosha Yoga Studio',
  description: 'Yoga studio in the heart of the city.',
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html
      lang="en"
      className={cn('min-h-screen bg-background noto-sans-kr antialiased', noto_sans_kr.variable)}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
