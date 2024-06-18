import '@repo/ui/globals.css';

import type { Metadata } from 'next';

import { cn } from '@repo/ui/lib/utils';

import { noto_sans_kr } from '@/libs/font';

import Header from './_components/Header';
import Providers from './Providers';

export const metadata: Metadata = {
  title: 'Santosha Yoga Studio',
  description: 'Yoga studio in the heart of the city.',
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html lang="en" className={cn('min-h-screen noto-sans-kr antialiased', noto_sans_kr.variable)}>
      <body className="flex-col justify-items-center">
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
