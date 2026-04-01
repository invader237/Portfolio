'use client';

import React from 'react';
import LanguageSelection from '@/components/language-selection';
import SocialLink from '@/components/social-link';

export default function FloatingActions() {
  return (
    <div className="fixed top-4 right-4 z-50 flex flex-row items-end gap-3">
      <LanguageSelection />
      <SocialLink />
    </div>
  );
}
