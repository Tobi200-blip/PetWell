import { useEffect } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import { getBreedBySlug } from '../services/breedService';
import { getArticleBySlug } from '../services/articleService';

const SITE = 'AllPetsLoft';
const DEFAULT_TITLE = 'AllPetsLoft | Dog breed guides, pet care articles and insurance';
const DEFAULT_DESC =
  'AllPetsLoft brings together dog breed guides, pet care articles, insurance information, and pet services in one place.';

const staticPages = {
  '/breeds': {
    title: `Dog breeds | ${SITE}`,
    description:
      'Browse dog breed guides covering history, temperament, exercise, feeding, grooming, training, and health.',
  },
  '/articles': {
    title: `Learning hub | ${SITE}`,
    description:
      'In-depth pet care articles on nutrition, health, training, grooming, and insurance.',
  },
  '/insurance': {
    title: `Pet insurance | ${SITE}`,
    description:
      'Learn how pet insurance works and preview the cover levels we are planning.',
  },
  '/services': {
    title: `Pet services | ${SITE}`,
    description: 'Find vets, groomers, boarding, and trainers. Local listings are coming soon.',
  },
  '/about': {
    title: `About us | ${SITE}`,
    description: 'Learn what AllPetsLoft is and what we stand for.',
  },
  '/contact': {
    title: `Contact us | ${SITE}`,
    description: 'Questions, feedback, or partnership enquiries? Get in touch with AllPetsLoft.',
  },
  '/privacy': {
    title: `Privacy policy | ${SITE}`,
    description: 'How AllPetsLoft collects and uses your information.',
  },
  '/terms': {
    title: `Terms of service | ${SITE}`,
    description: 'The terms for using AllPetsLoft.',
  },
  '/search': {
    title: `Search | ${SITE}`,
    description: 'Search dog breeds and pet care articles on AllPetsLoft.',
  },
};

const trim = (text, max = 158) =>
  text && text.length > max ? `${text.slice(0, max - 1).trimEnd()}…` : text;

function getMeta(pathname) {
  if (pathname === '/') return { title: DEFAULT_TITLE, description: DEFAULT_DESC };

  const breedMatch = matchPath('/breed/:slug', pathname);
  if (breedMatch) {
    const breed = getBreedBySlug(breedMatch.params.slug);
    if (!breed) return { title: `Page not found | ${SITE}`, description: DEFAULT_DESC };
    return {
      title: `${breed.name} breed guide | ${SITE}`,
      description: trim(
        breed.profile?.summary ||
          `${breed.name}: ${breed.temperament}. Typical lifespan ${breed.lifespan}. Read about care, feeding, and health.`
      ),
    };
  }

  const articleMatch = matchPath('/articles/:slug', pathname);
  if (articleMatch) {
    const article = getArticleBySlug(articleMatch.params.slug);
    if (!article) return { title: `Page not found | ${SITE}`, description: DEFAULT_DESC };
    return { title: `${article.title} | ${SITE}`, description: trim(article.excerpt) };
  }

  const normalized = pathname.replace(/\/+$/, '') || '/';
  return (
    staticPages[normalized] || {
      title: `Page not found | ${SITE}`,
      description: DEFAULT_DESC,
    }
  );
}

function setTag(selector, create, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description } = getMeta(pathname);
    document.title = title;

    setTag('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    }, description);

    setTag('meta[property="og:title"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:title');
      return m;
    }, title);

    setTag('meta[property="og:description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:description');
      return m;
    }, description);
  }, [pathname]);

  return null;
}