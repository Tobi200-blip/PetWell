import { writeFileSync } from 'node:fs';
import { breeds } from '../src/data/breeds.js';
import { breedsBatch2 } from '../src/data/breedsBatch2.js';
import { breedsBatch3 } from '../src/data/breedsBatch3.js';
import { breedsBatch4 } from '../src/data/breedsBatch4.js';
import { articles } from '../src/data/articles.js';
import { longArticles } from '../src/data/articlesLong.js';
import { longArticles2 } from '../src/data/articlesLong2.js';
import { longArticles3 } from '../src/data/articlesLong3.js';
import { longArticles4 } from '../src/data/articlesLong4.js';

const SITE = 'https://allpetsloft.com';
const today = new Date().toISOString().slice(0, 10);

const staticPaths = [
  '/',
  '/breeds',
  '/articles',
  '/insurance',
  '/services',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
];

const breedPaths = [
  ...new Set(
    [...breeds, ...breedsBatch2, ...breedsBatch3, ...breedsBatch4].map((b) => `/breed/${b.slug}`)
  ),
];

const articlePaths = [
  ...new Set(
    [
      ...articles,
      ...longArticles,
      ...longArticles2,
      ...longArticles3,
      ...longArticles4,
    ].map((a) => `/articles/${a.slug}`)
  ),
];

const urls = [...staticPaths, ...breedPaths, ...articlePaths];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((path) => `  <url>\n    <loc>${SITE}${path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`Wrote public/sitemap.xml with ${urls.length} URLs`);