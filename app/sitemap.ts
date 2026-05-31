import { MetadataRoute } from 'next';
import { BLOGS } from '@/lib/content';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://aerotickethub.com';

const staticPaths = [
  '',
  '/about',
  '/flight',
  '/destination',
  '/blog',
  '/contact',
  '/airline-reservation',
  '/flight-changes',
  '/cancellation-refund',
  '/name-correction',
  '/privacy',
  '/terms',
  '/cookie-policy',
  '/disclaimer',
  '/disclosure',
  '/payment-policy',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = staticPaths.map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p === '' ? 1 : 0.7,
  }));
  const posts = BLOGS.map((b) => ({
    url: `${BASE}/blog/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  return [...pages, ...posts];
}
