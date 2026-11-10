import React from 'react';
import type { Metadata } from 'next';
import { Locale, content } from '@/lib/dictionary';
import { PhysicianMasterSchema } from '@/components/schema/MedicalSchema';
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react';

type Props = {
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const c = content[lang].contact;

  return {
    title: c.metaTitle,
    description: c.metaDescription,
  };
}

export default async function ContactPage({ params }: Props) {
  const { lang } = await params;
  const c = content[lang].contact;
  const common = content[lang].common;

  return (
    <>
      <PhysicianMasterSchema lang={lang} />

      <main className="min-h-screen py-20 bg-brand-sand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
              {c.title}
            </h1>
            <p className="text-slate-600">{c.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-2">
                    {c.formName}
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-2">
                    {c.formPhone}
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm text-start"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-2">
                    {c.formProcedure}
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm bg-white">
                    <option value="rhinoplasty">Rhinoplasty / تجميل الأنف</option>
                    <option value="botox">Botox / البوتوكس</option>
                    <option value="fillers">Facial Fillers / الفيلر</option>
                    <option value="consultation">General ENT / استشارة عامة</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-brand-navy uppercase mb-2">
                    {c.formNotes}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold text-sm"
                  />
                </div>
                <button
                  type="button"
                  className="w-full py-4 rounded-lg bg-brand-gold hover:bg-brand-gold/90 text-brand-navy font-bold transition uppercase tracking-wider text-sm shadow-md"
                >
                  {c.formSubmit}
                </button>
              </form>
            </div>

            {/* Clinic NAP Info */}
            <div className="flex flex-col justify-between space-y-8">
              <div className="p-8 bg-brand-navy text-white rounded-2xl shadow-sm border border-brand-gold/30">
                <h3 className="text-xl font-bold text-brand-gold mb-6">
                  {lang === 'ar' ? 'معلومات العيادة والموقع' : 'Clinic Details & Location'}
                </h3>
                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                    <span>{c.clinicAddress}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                    <span dir="ltr">{common.directCall}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                    <span>{c.hours}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center">
                <MessageSquare className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                <h4 className="font-bold text-brand-navy mb-2">
                  {lang === 'ar' ? 'التواصل السريع عبر واتساب' : 'Instant WhatsApp Inquiries'}
                </h4>
                <p className="text-xs text-slate-500 mb-6">
                  {lang === 'ar'
                    ? 'يمكنكم مراسلة المنسقة الطبية مباشرة لتنسيق المواعيد والإجابة على الاستفسارات.'
                    : 'Directly reach our patient coordination team for appointments and clinical scheduling.'}
                </p>
                <a
                  href="https://wa.me/96541111840"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition"
                >
                  {common.whatsappBtn}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
