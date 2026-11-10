import React from 'react';
import type { Metadata } from 'next';
import { Locale, content } from '@/lib/dictionary';
import {
  PhysicianMasterSchema,
  MedicalProcedureSchema,
  FAQSchema,
} from '@/components/schema/MedicalSchema';
import { ShieldCheck, Clock, Sparkles } from 'lucide-react';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = content[lang].fillers;
  const url = `https://drbuabbas.com/${lang}/facial-fillers-kuwait`;

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        'en-KW': 'https://drbuabbas.com/en/facial-fillers-kuwait',
        'ar-KW': 'https://drbuabbas.com/ar/facial-fillers-kuwait',
      },
    },
  };
}

export default async function FillersPage({ params }: Props) {
  const { lang } = await params;
  const c = content[lang].fillers;
  const currentUrl = `https://drbuabbas.com/${lang}/facial-fillers-kuwait`;

  return (
    <>
      <PhysicianMasterSchema lang={lang} />
      <MedicalProcedureSchema
        name={lang === 'ar' ? 'حقن الفيلر الطبي' : 'Hyaluronic Acid Dermal Fillers'}
        description={c.metaDescription}
        bodyLocation="Midface and Lower Face"
        url={currentUrl}
      />
      <FAQSchema items={c.faqs} />

      <main className="min-h-screen">
        <section className="bg-brand-navy text-white pt-20 pb-20 md:pt-28 md:pb-28 border-b border-brand-gold/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs md:text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>{c.tag}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                {c.title}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">{c.subtitle}</p>
              <a
                href={`/${lang}/contact`}
                className="px-7 py-3.5 rounded-lg bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold transition shadow-lg text-sm sm:text-base inline-block"
              >
                {content[lang].nav.bookConsultation}
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-12 text-center">
              {c.modalitiesTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {c.items.map((item, idx) => (
                <div key={idx} className="p-8 rounded-xl bg-brand-sand border border-slate-200">
                  <div className="w-10 h-10 rounded-lg bg-brand-navy text-brand-gold flex items-center justify-center font-bold mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-brand-slate mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-brand-sand">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-10 text-center">
              {c.faqsTitle}
            </h2>
            <div className="space-y-6">
              {c.faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-lg border border-slate-200 bg-white">
                  <h3 className="text-lg font-bold text-brand-navy mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-brand-gold shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-slate-600 text-sm ps-7 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
