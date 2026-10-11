import { articles } from '../data/articles';

export function getArticles() {
  return articles;
}

export function getFeaturedArticles(limit = 4) {
  return articles.filter((a) => a.featured).slice(0, limit);
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) || null;
}

export function getCategories() {
  return [...new Set(articles.map((a) => a.category))];
}

export function getRelatedArticles(slug, limit = 3) {
  const current = articles.find((a) => a.slug === slug);
  if (!current) return [];
  const others = articles.filter((a) => a.slug !== slug);
  const sameCategory = others.filter((a) => a.category === current.category);
  const rest = others.filter((a) => a.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}