'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Locale, content } from '@/lib/dictionary';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { Stethoscope, Menu, X } from 'lucide-react';

export default function Header({ lang }: { lang: Locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = content[lang].nav;

  const navLinks = [
    { href: `/${lang}`, label: t.home },
    { href: `/${lang}/rhinoplasty-kuwait`, label: t.rhinoplasty },
    { href: `/${lang}/botox-kuwait`, label: t.botox },
    { href: `/${lang}/facial-fillers-kuwait`, label: t.fillers },
    { href: `/${lang}/facial-aesthetics`, label: t.aesthetics },
    { href: `/${lang}/about`, label: t.about },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-brand-navy/95 backdrop-blur-md border-b border-brand-gold/20 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-navy transition">
            <Stethoscope className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base sm:text-lg tracking-wide text-white group-hover:text-brand-gold transition">
              {lang === 'ar' ? 'د. محمد بو عباس' : 'Dr. Mohammad Bu Abbas'}
            </span>
            <span className="text-[10px] sm:text-xs text-slate-300">
              {lang === 'ar' ? 'استشاري جراحة الأنف والوجه' : 'Consultant ENT & Facial Plastics'}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-200 hover:text-brand-gold transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Section: Language Switcher, Consultation Button & Hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher currentLang={lang} />
          
          <Link
            href={`/${lang}/contact`}
            className="hidden sm:inline-block px-4 py-2 rounded-lg bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold text-xs uppercase tracking-wider transition"
          >
            {t.bookConsultation}
          </Link>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-brand-gold hover:bg-white/5 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-navy border-b border-brand-gold/20 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-brand-gold transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-brand-gold/20">
            <Link
              href={`/${lang}/contact`}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2.5 rounded-lg bg-brand-gold text-brand-navy font-bold text-xs uppercase tracking-wider transition"
            >
              {t.bookConsultation}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}