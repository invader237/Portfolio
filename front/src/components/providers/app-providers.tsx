'use client';

import { LocaleProvider } from '@/contexts/locale-context';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
