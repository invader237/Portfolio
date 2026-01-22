import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://trivino.info/',
      lastModified: new Date(),
    },
  ];
}
