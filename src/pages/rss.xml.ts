import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const entries = await getCollection('log');
  const sorted = entries.sort((a, b) => b.data.number - a.data.number);

  return rss({
    title: 'Nathan Englert — One Thread',
    description: 'Projects, notes, and essays — one running log.',
    site: context.site ?? 'https://nathanenglert.com',
    items: sorted.map(entry => ({
      title: entry.data.title,
      description: entry.data.description,
      link: entry.data.url,
      pubDate: new Date(),
    })),
  });
}
