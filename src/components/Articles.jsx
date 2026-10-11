import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { IconSearch as SearchIcon, IconX as XIcon } from '@tabler/icons-react';
import { getArticles, getCategories } from '../services/articleService';
import { getCategoryMeta } from '../utils/articleCategories';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import healthHero from '../assets/heroes/health.jpg';

const articles = getArticles();
const categories = getCategories();

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'All';

  const setParam = (key, value, defaultValue = '') => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === defaultValue) next.delete(key);
    else next.set(key, value);
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter(
      (a) =>
        (category === 'All' || a.category === category) &&
        (!q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))
    );
  }, [query, category]);

  const hasFilters = query || category !== 'All';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <PageHero
        image={healthHero}
        badge="Learning hub"
        title="Guides for every stage of your pet's life"
        subtitle="Nutrition, health, training, grooming, and insurance, explained clearly."
      >
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 h-11">
          <SearchIcon className="size-4 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setParam('q', e.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </PageHero>

      <div className="max-w-5xl mx-auto w-full px-6 md:px-12 py-8 flex-1">
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
          {['All', ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setParam('category', c, 'All')}
              aria-pressed={category === c}
              className={`text-sm px-4 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                category === c ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-5">
          <p className="text-sm text-gray-500" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
          </p>
          {hasFilters && (
            <button
              onClick={() => setSearchParams({}, { replace: true })}
              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
            >
              <XIcon className="size-3.5" /> Clear filters
            </button>
          )}
        </div>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <p className="text-sm font-medium mb-1">No articles match your search</p>
            <p className="text-xs text-gray-500">Try a different keyword or category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

function ArticleCard({ article }) {
  const { icon: Icon, bg, color } = getCategoryMeta(article.category);

  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col"
    >
      <div className={`size-11 rounded-lg ${bg} flex items-center justify-center mb-4`}>
        <Icon className={`size-5 ${color}`} />
      </div>
      <p className="text-xs text-gray-400 mb-1">{article.category}</p>
      <p className="text-base font-semibold leading-snug mb-2 group-hover:text-blue-600 transition-colors">
        {article.title}
      </p>
      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{article.excerpt}</p>
      <p className="text-xs text-gray-400">{article.readTime} min read</p>
    </Link>
  );
}