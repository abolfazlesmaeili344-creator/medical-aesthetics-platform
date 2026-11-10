'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ lang }: { lang: 'en' | 'ar' }) {
  const isAr = lang === 'ar';
  const prefillMessage = encodeURIComponent(
    isAr
      ? 'السلام عليكم دكتور محمد بو عباس، أود الاستفسار عن موعد استشارة.'
      : 'Hello, I would like to inquire about a clinical consultation with Dr. Mohammad Bu Abbas.'
  );

  return (
    <aside
      aria-label="Direct Consultation via WhatsApp"
      className="fixed bottom-6 end-6 z-50 flex items-center group focus-within:ring-2 focus-within:ring-emerald-500 rounded-full"
    >
      <a
        href={`https://wa.me/96541111840?text=${prefillMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-105"
        aria-label={isAr ? 'تواصل عبر واتساب' : 'Chat via WhatsApp'}
      >
        <MessageCircle className="w-6 h-6 stroke-[2.2]" />
        <span className="font-semibold text-sm hidden md:inline tracking-wide">
          {isAr ? 'واتساب العيادة' : 'WhatsApp Consultation'}
        </span>
      </a>
    </aside>
  );
}
