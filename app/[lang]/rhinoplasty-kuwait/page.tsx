import React from 'react';
import type { Metadata } from 'next';
import { Locale, content } from '@/lib/dictionary';
import {
  PhysicianMasterSchema,
  MedicalProcedureSchema,
  FAQSchema,
} from '@/components/schema/MedicalSchema';
import { CheckCircle2, Stethoscope, Clock, ShieldCheck } from 'lucide-react';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = content[lang].rhinoplasty;
  const url = `https://drbuabbas.com/${lang}/rhinoplasty-kuwait`;

  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: {
      canonical: url,
      languages: {
        'en-KW': 'https://drbuabbas.com/en/rhinoplasty-kuwait',
        'ar-KW': 'https://drbuabbas.com/ar/rhinoplasty-kuwait',
      },
    },
    openGraph: {
      title: c.metaTitle,
      description: c.metaDescription,
      url,
      type: 'article',
    },
  };
}

export default async function RhinoplastyPage({ params }: Props) {
  const { lang } = await params;
  const c = content[lang].rhinoplasty;
  const currentUrl = `https://drbuabbas.com/${lang}/rhinoplasty-kuwait`;

  return (
    <>
      <PhysicianMasterSchema lang={lang} />
      <MedicalProcedureSchema
        name={lang === 'ar' ? 'عملية تجميل وترميم الأنف' : 'Aesthetic & Functional Rhinoplasty'}
        description={c.metaDescription}
        bodyLocation="Nose"
        url={currentUrl}
      />
      <FAQSchema items={c.faqs} />

      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-navy text-white pt-20 pb-20 md:pt-28 md:pb-28 border-b border-brand-gold/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs md:text-sm font-medium mb-6">
                <Stethoscope className="w-4 h-4" />
                <span>{c.tag}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                {c.title}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {c.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`/${lang}/contact`}
                  className="px-7 py-3.5 rounded-lg bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold transition shadow-lg text-sm sm:text-base"
                >
                  {content[lang].common.directCall}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Procedural Modalities */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-12 text-center">
              {c.modalitiesTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {c.items.map((item, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-xl bg-brand-sand border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-brand-navy text-brand-gold flex items-center justify-center font-bold mb-6">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-brand-slate mb-4">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-brand-slate/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>In-person diagnostic scope required</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consent Documentation Note */}
        <section className="py-12 bg-brand-sand border-y border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <ShieldCheck className="w-10 h-10 text-brand-gold mx-auto mb-3" />
            <h3 className="text-lg font-bold text-brand-navy mb-2">
              {lang === 'ar' ? 'سجلات المتابعة والتوثيق الطبي' : 'Clinical Photographic Records'}
            </h3>
            <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {lang === 'ar'
                ? 'وفقاً للأطر المنظمة في وزارة الصحة، تتاح سجلات التعافي المقارنة أثناء الاستشارة السريرية داخل العيادة فقط، بناءً على موافقة المرضى المستنيرة والمسبقة.'
                : 'In accordance with regional medical privacy policies and MOH standards, comparative surgical outcomes are reviewed privately inside the clinic during consultation.'}
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-10 text-center">
              {c.faqsTitle}
            </h2>
            <div className="space-y-6">
              {c.faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-lg border border-slate-200 bg-slate-50">
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
