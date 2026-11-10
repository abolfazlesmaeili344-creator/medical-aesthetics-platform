import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Locale, content } from '@/lib/dictionary';
import { PhysicianMasterSchema } from '@/components/schema/MedicalSchema';
import { ArrowRight, Compass, Shield } from 'lucide-react';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = content[lang].aesthetics;

  return {
    title: c.metaTitle,
    description: c.metaDescription,
  };
}

export default async function AestheticsHubPage({ params }: Props) {
  const { lang } = await params;
  const c = content[lang].aesthetics;
  const nav = content[lang].nav;

  return (
    <>
      <PhysicianMasterSchema lang={lang} />

      <main className="min-h-screen">
        <section className="bg-brand-navy text-white pt-20 pb-20 md:pt-28 md:pb-28 border-b border-brand-gold/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Compass className="w-12 h-12 text-brand-gold mx-auto mb-4" />
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6">
              {c.title}
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {c.subtitle}
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 md:p-12 rounded-2xl bg-brand-sand border border-slate-200 mb-12">
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                {lang === 'ar' ? 'فلسفة التناغم الجراحي وغير الجراحي' : 'Integrated Aesthetic Philosophy'}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                {c.hubDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Link
                  href={`/${lang}/rhinoplasty-kuwait`}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-brand-gold transition group flex items-center justify-between"
                >
                  <span className="font-bold text-brand-slate text-sm">{nav.rhinoplasty}</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold rtl:rotate-180" />
                </Link>
                <Link
                  href={`/${lang}/botox-kuwait`}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-brand-gold transition group flex items-center justify-between"
                >
                  <span className="font-bold text-brand-slate text-sm">{nav.botox}</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold rtl:rotate-180" />
                </Link>
                <Link
                  href={`/${lang}/facial-fillers-kuwait`}
                  className="p-5 rounded-xl bg-white border border-slate-200 hover:border-brand-gold transition group flex items-center justify-between"
                >
                  <span className="font-bold text-brand-slate text-sm">{nav.fillers}</span>
                  <ArrowRight className="w-4 h-4 text-brand-gold rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
