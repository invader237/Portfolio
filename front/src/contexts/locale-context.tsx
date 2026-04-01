'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { setApiLocale, type SupportedLocale } from '@/services/api/axiosConfig';

type LocaleContextValue = {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  toggleLocale: () => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const STORAGE_KEY = 'portfolio-locale';

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>('en');

  useEffect(() => {
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);

    if (storedLocale === 'fr' || storedLocale === 'en') {
      setLocaleState(storedLocale);
      setApiLocale(storedLocale);
      return;
    }

    setApiLocale('en');
  }, []);

  useEffect(() => {
    setApiLocale(locale);
    window.localStorage.setItem(STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((nextLocale: SupportedLocale) => {
    setLocaleState(nextLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((previousLocale) => (previousLocale === 'fr' ? 'en' : 'fr'));
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, toggleLocale }),
    [locale, setLocale, toggleLocale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }

  return context;
}
