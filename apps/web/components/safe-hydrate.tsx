'use client';
import React, { Suspense } from 'react';

import { useMounted } from 'app/hooks/useMounted';

export function SafeHydrate({ children }: { children: React.ReactNode }) {
  const isMounted = useMounted();
  return <Suspense key={isMounted ? 'client' : 'server'}>{children}</Suspense>;
}
