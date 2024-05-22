import './globals.css';

import type { Metadata } from 'next';

import { ReactNode } from 'react';

import { noto_sans_kr } from '@/libs/font';

import Header from './_components/Header';

export const metadata: Metadata = {
  title: 'Santosha Yoga Studio',
  description: 'Yoga studio in the heart of the city.',
};

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en" className={`${noto_sans_kr.variable}`}>
      <body className="flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}