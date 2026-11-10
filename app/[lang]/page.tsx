import React from 'react';
import Link from 'next/link';
import { Locale, content } from '@/lib/dictionary';
import { PhysicianMasterSchema } from '@/components/schema/MedicalSchema';
import { ArrowRight, Shield, Stethoscope, Sparkles } from 'lucide-react';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const t = content[lang].home;
  const c = content[lang].common;

  return (
    <>
      <PhysicianMasterSchema lang={lang} />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-brand-navy text-white pt-20 pb-24 md:pt-32 md:pb-36 border-b border-brand-gold/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs md:text-sm font-medium mb-6">
                <Stethoscope className="w-4 h-4" />
                <span>{t.heroTag}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.2]">
                {t.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                {t.heroSubtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={`/${lang}/rhinoplasty-kuwait`}
                  className="px-7 py-3.5 rounded-lg bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold transition shadow-lg text-sm sm:text-base text-center"
                >
                  {t.viewProcedures}
                </Link>
                <Link
                  href={`/${lang}/about`}
                  className="px-7 py-3.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition text-sm sm:text-base text-center"
                >
                  {t.meetDoctor}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Core Specialties Cards */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
                {t.specialtiesTitle}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                {t.specialtiesSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.cards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-brand-sand border border-slate-200/90 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center font-bold mb-6">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-brand-slate mb-3">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>
                  <Link
                    href={`/${lang}${card.href}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-gold transition"
                  >
                    <span>{c.learnMore}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clinical Quality Assurance */}
        <section className="py-16 bg-brand-sand border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <Shield className="w-12 h-12 text-brand-gold mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-brand-navy mb-3">
              {lang === 'ar' ? 'معايير الأمان الإكلينيكي في الكويت' : 'Clinical Safety & Governance in Kuwait'}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {c.mohNoticeText}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
