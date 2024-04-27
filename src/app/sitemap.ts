import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  
  return [
    {
      url: 'https://aimugshotremoval.com',
      lastModified: new Date(),
    },
    {
      url: 'https://aimugshotremoval.com/terms',
      lastModified: new Date(),
    },
    {
      url: 'https://aimugshotremoval.com/privacy',
      lastModified: new Date(),
    },
  ]
}