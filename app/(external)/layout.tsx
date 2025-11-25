import '@/styles/globals.css';

import type { Metadata } from 'next';

import { cn } from '@/lib/utils';

import { noto_sans_kr } from '@/libs/font';

import Header from './_components/header';
import { ThemeProvider } from './_components/providers/theme-provider';

export const metadata: Metadata = {
  title: 'Santosha Yoga Studio',
  description: 'Yoga studio in the heart of the city.',
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <html
      lang="en"
      className={cn('min-h-screen noto-sans-kr antialiased', noto_sans_kr.variable)}
      suppressHydrationWarning
    >
      <body className="flex-col justify-items-center bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
