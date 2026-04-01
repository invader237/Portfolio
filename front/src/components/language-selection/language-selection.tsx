'use client';

import React from 'react';
import TranslateIcon from '@mui/icons-material/Translate';
import { useLocale } from '@/contexts/locale-context';

export default function LanguageSelection() {
  const { locale, toggleLocale } = useLocale();
  const nextLocale = locale === 'fr' ? 'en' : 'fr';

  return (
    <div className="rounded-xl border border-white/20 bg-white/10 p-2 shadow-md backdrop-blur-md transition hover:bg-white/20">
      <button
        type="button"
        className="flex items-center justify-center transition hover:scale-110"
        onClick={toggleLocale}
        aria-label={`Switch language to ${nextLocale === 'fr' ? 'French' : 'English'}`}
        title={`Current: ${locale === 'fr' ? 'Français' : 'English'} | Switch to ${nextLocale === 'fr' ? 'Français' : 'English'}`}
      >
        <span className="mr-2 text-xs font-semibold uppercase tracking-wide text-white/90">
          {locale}
        </span>
        <TranslateIcon className="text-2xl text-white" />
      </button>
    </div>
  );
}
