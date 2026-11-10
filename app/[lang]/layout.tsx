import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Cairo } from 'next/font/google';
import '@/app/globals.css';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';
import { Locale } from '@/lib/dictionary';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const arabicFont = Cairo({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isAr = lang === 'ar';
  const siteUrl = 'https://drbuabbas.com';

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: isAr
        ? 'د. محمد بو عباس | استشاري جراحة الأنف والأذن والحنجرة وتجميل الوجه - الكويت'
        : 'Dr. Mohammad Bu Abbas | Consultant ENT & Facial Plastic Surgeon Kuwait',
      template: isAr ? '%s | د. محمد بو عباس' : '%s | Dr. Mohammad Bu Abbas',
    },
    description: isAr
      ? 'استشارات جراحية متقدمة في تجميل الأنف، وترميم الوجه والرقبة في دولة الكويت وفق أعلى المعايير الطبية المعتمدة.'
      : 'Consultant-led facial plastic surgery, functional rhinoplasty, and head & neck reconstruction services based in Kuwait.',
    alternates: {
      canonical: `${siteUrl}/${lang}`,
      languages: {
        'en-KW': `${siteUrl}/en`,
        'ar-KW': `${siteUrl}/ar`,
        'x-default': `${siteUrl}/en`,
      },
    },
    openGraph: {
      type: 'website',
      locale: isAr ? 'ar_KW' : 'en_KW',
      url: `${siteUrl}/${lang}`,
      siteName: isAr ? 'د. محمد بو عباس' : 'Dr. Mohammad Bu Abbas',
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const fontClass = lang === 'ar' ? arabicFont.variable : sansFont.variable;

  return (
    <html lang={lang} dir={dir} className={`${fontClass} scroll-smooth`}>
      <body className="min-h-screen bg-brand-sand text-brand-slate antialiased font-sans flex flex-col">
        <Header lang={lang} />
        <div className="flex-1">{children}</div>
        <Footer lang={lang} />
        <FloatingWhatsApp lang={lang} />
      </body>
    </html>
  );
}
