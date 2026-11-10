'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher({ currentLang }: { currentLang: 'en' | 'ar' }) {
  const pathname = usePathname();

  // Replace locale segment in current URL
  const targetLang = currentLang === 'en' ? 'ar' : 'en';
  let targetPath = `/${targetLang}`;

  if (pathname) {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && (segments[0] === 'en' || segments[0] === 'ar')) {
      segments[0] = targetLang;
      targetPath = `/${segments.join('/')}`;
    } else {
      targetPath = `/${targetLang}${pathname}`;
    }
  }

  return (
    <Link
      href={targetPath}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition text-xs font-semibold"
      aria-label="Switch Language"
    >
      <Globe className="w-3.5 h-3.5" />
      <span>{currentLang === 'en' ? 'العربية' : 'English'}</span>
    </Link>
  );
}
