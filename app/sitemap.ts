import { MetadataRoute } from 'next';
import { createUnauthenticatedClient } from '@/lib/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createUnauthenticatedClient();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bottlestore.netlify.app';

  const { data: products } = await supabase
    .from('products')
    .select('slug, updated_at')
    .eq('active', true);

  const { data: categories } = await supabase
    .from('categories')
    .select('slug');

  const productUrls = products?.map((product) => ({
    url: `${baseUrl}/productos/${product.slug}`,
    lastModified: new Date(product.updated_at),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  })) || [];

  const categoryUrls = categories?.map((category) => ({
    url: `${baseUrl}/productos?category=${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  })) || [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/productos`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ofertas`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    ...productUrls,
    ...categoryUrls,
  ];
}
