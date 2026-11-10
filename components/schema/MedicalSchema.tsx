import React from 'react';

interface PhysicianSchemaProps {
  lang: 'en' | 'ar';
}

interface ProcedureSchemaProps {
  name: string;
  description: string;
  code?: string;
  bodyLocation?: string;
  url: string;
}

export const PhysicianMasterSchema: React.FC<PhysicianSchemaProps> = ({ lang }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Physician', 'MedicalBusiness'],
        '@id': 'https://drbuabbas.com/#physician',
        name: lang === 'ar' ? 'د. محمد بو عباس' : 'Dr. Mohammad Bu Abbas',
        url: 'https://drbuabbas.com',
        image: 'https://drbuabbas.com/images/dr-mohammad-bu-abbas.jpg',
        telephone: '+96541111840',
        medicalSpecialty: [
          'Otolaryngology',
          'PlasticSurgery',
          'HeadAndNeckSurgery',
        ],
        jobTitle:
          lang === 'ar'
            ? 'استشاري جراحة الأنف والأذن والحنجرة وجراحة تجميل الوجه'
            : 'Consultant Otolaryngologist, Head & Neck and Facial Plastic Surgeon',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'International Hospital Kuwait, Gulf Road',
          addressLocality: 'Salmiya',
          addressRegion: 'Hawalli',
          addressCountry: 'KW',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '29.3375',
          longitude: '48.0758',
        },
        sameAs: [
          'https://www.wikidata.org/wiki/Q102215522',
          'https://orcid.org/0000-0002-3920-5695',
          'https://www.instagram.com/dr.mbuabbas',
          'https://www.tiktok.com/@dr.mbuabbas',
          'https://kw.linkedin.com/in/mohammad-bu-abbas-2a95048b',
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const MedicalProcedureSchema: React.FC<ProcedureSchemaProps> = ({
  name,
  description,
  bodyLocation = 'Face',
  url,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    bodyLocation,
    procedureType: 'SurgicalProcedure',
    performer: {
      '@type': 'Physician',
      '@id': 'https://drbuabbas.com/#physician',
    },
    relevantSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Otolaryngology',
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export const FAQSchema: React.FC<{ items: { q: string; a: string }[] }> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
