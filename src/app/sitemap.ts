import { MetadataRoute } from 'next';

const baseUrl = 'https://referencement-ndf.netlify.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
