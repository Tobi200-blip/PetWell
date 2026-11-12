import { articles } from '../data/articles';
import { longArticles } from '../data/articlesLong';
import { longArticles2 } from '../data/articlesLong2';
import { longArticles3 } from '../data/articlesLong3';
import { longArticles4 } from '../data/articlesLong4';

const WORDS_PER_MINUTE = 230;

const words = (text) =>
  text ? String(text).trim().split(/\s+/).filter(Boolean).length : 0;

const sumWords = (items = []) => items.reduce((n, item) => n + words(item), 0);

function countWords(a) {
  let total = words(a.title) + words(a.excerpt) + sumWords(a.intro) + sumWords(a.keyPoints);

  (a.sections || []).forEach((s) => {
    total += words(s.heading) + sumWords(s.paragraphs) + sumWords(s.list);
    (s.lists || []).forEach((l) => {
      total += words(l.title) + sumWords(l.items);
    });
    if (s.callout) total += words(s.callout.title) + words(s.callout.text);
  });

  (a.faqs || []).forEach((f) => {
    total += words(f.q) + words(f.a);
  });

  return total;
}

const withReadTime = (a) => ({
  ...a,
  readTime: Math.max(1, Math.ceil(countWords(a) / WORDS_PER_MINUTE)),
});

// Add future long-article files to this list.
const allLongArticles = [
  ...longArticles,
  ...longArticles2,
  ...longArticles3,
  ...longArticles4,
];

// Long articles come first, and replace any short article with the same slug
const replaced = new Set(allLongArticles.map((a) => a.slug));
const allArticles = [
  ...allLongArticles,
  ...articles.filter((a) => !replaced.has(a.slug)),
].map(withReadTime);

export function getArticles() {
  return allArticles;
}

export function getFeaturedArticles(limit = 4) {
  return allArticles.filter((a) => a.featured).slice(0, limit);
}

export function getArticleBySlug(slug) {
  return allArticles.find((a) => a.slug === slug) || null;
}

export function getCategories() {
  return [...new Set(allArticles.map((a) => a.category))];
}

export function getRelatedArticles(slug, limit = 3) {
  const current = allArticles.find((a) => a.slug === slug);
  if (!current) return [];
  const others = allArticles.filter((a) => a.slug !== slug);
  const sameCategory = others.filter((a) => a.category === current.category);
  const rest = others.filter((a) => a.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}