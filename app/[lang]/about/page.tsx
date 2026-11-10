import React from 'react';
import type { Metadata } from 'next';
import { Locale, content } from '@/lib/dictionary';
import { PhysicianMasterSchema } from '@/components/schema/MedicalSchema';
import { Award, CheckCircle, ExternalLink, Stethoscope } from 'lucide-react';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = content[lang].about;

  return {
    title: c.metaTitle,
    description: c.metaDescription,
  };
}

export default async function AboutPage({ params }: Props) {
  const { lang } = await params;
  const c = content[lang].about;

  return (
    <>
      <PhysicianMasterSchema lang={lang} />

      <main className="min-h-screen py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start gap-12 mb-16">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] rounded-2xl bg-brand-navy/10 border-2 border-brand-gold/40 flex flex-col items-center justify-center p-6 text-center">
                <Stethoscope className="w-16 h-16 text-brand-gold mb-4" />
                <h3 className="font-bold text-lg text-brand-navy">{c.title}</h3>
                <p className="text-xs text-slate-500 mt-2">{c.subtitle}</p>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h1 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
                {c.title}
              </h1>
              <p className="text-brand-gold font-semibold mb-6">{c.subtitle}</p>
              <p className="text-slate-600 leading-relaxed mb-8 text-base">
                {c.bio}
              </p>

              <div className="p-6 rounded-xl bg-brand-sand border border-slate-200">
                <h3 className="text-lg font-bold text-brand-navy mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-gold" />
                  <span>{c.credentialsHeading}</span>
                </h3>
                <ul className="space-y-3">
                  {c.creds.map((cred, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
