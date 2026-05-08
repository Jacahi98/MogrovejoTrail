import type { MetadataRoute } from 'next';

const BASE_URL = 'https://mogrovejo-trail.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${BASE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/info`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/media`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contacto`, lastModified, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/resultados`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
