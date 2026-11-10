import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://drbuabbas.com';
  const routes = [
    '',
    '/rhinoplasty-kuwait',
    '/botox-kuwait',
    '/facial-fillers-kuwait',
    '/facial-aesthetics',
    '/about',
    '/contact',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${route}`,
          ar: `${baseUrl}/ar${route}`,
        },
      },
    });
    sitemapEntries.push({
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          en: `${baseUrl}/en${route}`,
          ar: `${baseUrl}/ar${route}`,
        },
      },
    });
  });

  return sitemapEntries;
}
