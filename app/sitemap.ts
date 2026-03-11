import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/projects';
import { getAllServiceSlugs } from '@/lib/services';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://studio-arcane.example.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/about', '/portfolio', '/contact', '/privacy'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));

  const projectRoutes = getAllSlugs().map((slug) => ({
    url: `${BASE_URL}/portfolio/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const serviceRoutes = getAllServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...serviceRoutes];
}
