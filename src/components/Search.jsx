import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  IconSearch as SearchIcon,
  IconX as XIcon,
  IconDog as DogIcon,
  IconChevronRight as ChevronRightIcon,
  IconArrowRight as ArrowRightIcon,
} from '@tabler/icons-react';
import { getBreeds } from '../services/breedService';
import { getArticles } from '../services/articleService';
import { getBreedImage } from '../utils/breedImages';
import { getCategoryMeta } from '../utils/articleCategories';
import Navbar from './Navbar';
import Footer from './Footer';

const allBreeds = getBreeds();
const allArticles = getArticles();

const MAX_BREEDS = 12;
const suggestions = [
  'Golden retriever',
  'Beagle',
  'Toy',
  'Large',
  'Feeding',
  'Insurance',
  'Training',
  'Grooming',
];

const lower = (s) => String(s || '').toLowerCase();

// 4 exact name, 3 name starts with, 2 name contains, 1 every word appears somewhere
function score(name, haystack, query, terms) {
  const n = lower(name);
  if (n === query) return 4;
  if (n.startsWith(query)) return 3;
  if (n.includes(query)) return 2;
  return terms.every((t) => haystack.includes(t)) ? 1 : 0;
}

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const raw = searchParams.get('q') || '';
  const query = lower(raw).trim();

  const setQuery = (value) => {
    const next = new URLSearchParams(searchParams);
    if (value) next.set('q', value);
    else next.delete('q');
    setSearchParams(next, { replace: true });
  };

  const { breedResults, articleResults } = useMemo(() => {
    const terms = query.split(/\s+/).filter(Boolean);
    if (!terms.length) return { breedResults: [], articleResults: [] };

    const rank = (items, getName, getHay) =>
      items
        .map((item) => ({ item, s: score(getName(item), getHay(item), query, terms) }))
        .filter((r) => r.s > 0)
        .sort((a, b) => b.s - a.s || getName(a.item).localeCompare(getName(b.item)))
        .map((r) => r.item);

    return {
      breedResults: rank(
        allBreeds,
        (b) => b.name,
        (b) =>
          lower(
            `${b.name} ${b.group} ${b.size} ${b.temperament} ${(b.issues || []).join(' ')}`
          )
      ),
      articleResults: rank(
        allArticles,
        (a) => a.title,
        (a) => lower(`${a.title} ${a.excerpt} ${a.category}`)
      ),
    };
  }, [query]);

  const total = breedResults.length + articleResults.length;
  const shownBreeds = breedResults.slice(0, MAX_BREEDS);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-3xl mx-auto px-6 md:px-12 py-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Search AllPetsLoft</h1>
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 h-12 focus-within:border-blue-500">
            <SearchIcon className="size-5 text-gray-500 shrink-0" stroke={2} />
            <input
              type="search"
              value={raw}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search breeds and articles..."
              aria-label="Search breeds and articles"
              autoFocus
              className="bg-transparent outline-none text-base w-full"
            />
            {raw && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="p-1 text-gray-500 hover:text-gray-800"
              >
                <XIcon className="size-5" />
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto w-full px-6 md:px-12 py-8 flex-1">
        {!query && (
          <div>
            <p className="text-sm font-semibold mb-3">Popular searches</p>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <Link
                  key={s}
                  to={`/search?q=${encodeURIComponent(s)}`}
                  className="text-sm bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
        )}

        {query && (
          <p className="text-sm text-gray-500 mb-6" aria-live="polite">
            {total} {total === 1 ? 'result' : 'results'} for "{raw.trim()}"
          </p>
        )}

        {query && total === 0 && (
          <div className="text-center py-14 bg-gray-50 border border-gray-100 rounded-xl">
            <p className="text-sm font-medium mb-1">Nothing matched your search</p>
            <p className="text-xs text-gray-500 mb-5">
              Try a different word, or browse everything instead.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                to="/breeds"
                className="text-sm bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Browse breeds
              </Link>
              <Link
                to="/articles"
                className="text-sm bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Browse articles
              </Link>
            </div>
          </div>
        )}

        {breedResults.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-semibold mb-3">
              Dog breeds <span className="text-gray-400 font-normal">({breedResults.length})</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {shownBreeds.map((b) => {
                const img = getBreedImage(b.slug);
                return (
                  <Link
                    key={b.slug}
                    to={`/breed/${b.slug}`}
                    className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-3 hover:shadow-sm transition-shadow"
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={b.name}
                        loading="lazy"
                        className="size-14 rounded-lg object-cover shrink-0"
                      />
                    ) : (
                      <div className="size-14 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
                        <DogIcon className="size-6 text-white" stroke={2} />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{b.name}</p>
                      <p className="text-xs text-gray-500">
                        {b.group} group - {b.size}
                      </p>
                    </div>
                    <ChevronRightIcon className="size-4 text-gray-500 shrink-0" />
                  </Link>
                );
              })}
            </div>
            {breedResults.length > MAX_BREEDS && (
              <Link
                to={`/breeds?q=${encodeURIComponent(raw.trim())}`}
                className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline mt-4"
              >
                See all {breedResults.length} breeds <ArrowRightIcon className="size-4" />
              </Link>
            )}
          </section>
        )}

        {articleResults.length > 0 && (
          <section>
            <h2 className="text-lg font-semibold mb-3">
              Articles <span className="text-gray-400 font-normal">({articleResults.length})</span>
            </h2>
            <div className="flex flex-col gap-3">
              {articleResults.map((a) => {
                const { icon: Icon, bg, color } = getCategoryMeta(a.category);
                return (
                  <Link
                    key={a.slug}
                    to={`/articles/${a.slug}`}
                    className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
                  >
                    <div className={`size-11 rounded-lg ${bg} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className={`size-5 ${color}`} stroke={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold">{a.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {a.category} - {a.readTime} min read
                      </p>
                    </div>
                    <ChevronRightIcon className="size-4 text-gray-500 shrink-0" />
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}