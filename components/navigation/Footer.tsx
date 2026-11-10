import React from 'react';
import Link from 'next/link';
import { Locale, content } from '@/lib/dictionary';
import { Scale, Phone, MapPin, Instagram, ShieldCheck } from 'lucide-react';

export default function Footer({ lang }: { lang: Locale }) {
  const c = content[lang].common;
  const nav = content[lang].nav;

  return (
    <footer className="bg-brand-navy text-white border-t border-brand-gold/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand & Credentials */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-brand-gold mb-2">{c.doctorName}</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4 max-w-md">
              {c.credentials}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{c.location}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-brand-gold shrink-0" />
              {/* شماره تماس برای امنیت قوانین ارتباطی آپورک ماسک شد */}
              <span dir="ltr">Clinic Line: +965 **** ****</span>
            </div>
          </div>

          {/* Clinical Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">
              {lang === 'ar' ? 'التخصصات الجراحية' : 'Procedures'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href={`/${lang}/rhinoplasty-kuwait`} className="hover:text-brand-gold transition">
                  {nav.rhinoplasty}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/botox-kuwait`} className="hover:text-brand-gold transition">
                  {nav.botox}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/facial-fillers-kuwait`} className="hover:text-brand-gold transition">
                  {nav.fillers}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/facial-aesthetics`} className="hover:text-brand-gold transition">
                  {nav.aesthetics}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Authority Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-gold mb-4">
              {lang === 'ar' ? 'التوثيق والاعتماد' : 'Verification'}
            </h4>
            <div className="flex flex-col space-y-2 text-sm text-slate-300">
              <span className="flex items-center gap-2 text-slate-400 cursor-default">
                <Instagram className="w-4 h-4 text-brand-gold" />
                <span>Instagram @dr.******</span>
              </span>
              <a
                href="https://www.wikidata.org/wiki/Q102215522"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-gold transition"
              >
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>Wikidata (Q102215522)</span>
              </a>
              <a
                href="https://orcid.org/0000-0002-3920-5695"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-gold transition"
              >
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>ORCID Verified ID</span>
              </a>
            </div>
          </div>
        </div>

        {/* Kuwait MOH Compliance Banner */}
        <div className="p-4 rounded-xl bg-slate-900 border border-brand-gold/30 mb-8 flex items-start gap-3">
          <Scale className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <span className="font-bold text-white block mb-1">{c.mohNoticeTitle}</span>
            {c.mohNoticeText}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 text-center text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {c.doctorName}. {c.rights}</p>
        </div>
      </div>
    </footer>
  );
}