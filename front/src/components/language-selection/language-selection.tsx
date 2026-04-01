'use client';

import React, { useEffect, useRef, useState } from 'react';
import TranslateIcon from '@mui/icons-material/Translate';
import { useLocale } from '@/contexts/locale-context';

export default function LanguageSelection() {
  const { locale, setLocale } = useLocale();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const options: Array<{ value: 'fr' | 'en'; label: string }> = [
    { value: 'fr', label: 'Français' },
    { value: 'en', label: 'English' },
  ];

  return (
    <div
      ref={containerRef}
      className="relative rounded-xl border border-white/20 bg-white/10 p-2 shadow-md backdrop-blur-md transition hover:bg-white/20"
    >
      <button
        type="button"
        className="flex items-center justify-center transition hover:scale-110"
        onClick={() => setIsMenuOpen((previousValue) => !previousValue)}
        aria-label="Open language menu"
        aria-expanded={isMenuOpen}
        aria-haspopup="menu"
        title={`Current language: ${locale === 'fr' ? 'Français' : 'English'}`}
      >
        <span className="mr-2 text-xs font-semibold uppercase tracking-wide text-white/90">
          {locale}
        </span>
        <TranslateIcon className="text-2xl text-white" />
      </button>

      {isMenuOpen && (
        <div
          role="menu"
          className="absolute right-0 top-12 z-50 min-w-[140px] rounded-xl border border-white/20 bg-white/10 p-1 shadow-xl backdrop-blur-md gap-1 flex flex-col"
        >
          {options.map((option) => {
            const isActive = locale === option.value;

            return (
              <button
                key={option.value}
                type="button"
                role="menuitemradio"
                aria-checked={isActive}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
                onClick={() => {
                  setLocale(option.value);
                  setIsMenuOpen(false);
                }}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
