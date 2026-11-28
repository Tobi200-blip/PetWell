import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconSearch as SearchIcon, IconX as XIcon } from '@tabler/icons-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import FaqList from './Faq';
import { faqCategories } from '../data/faqs';

export default function FaqPage() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('all');

  const q = query.trim().toLowerCase();

  const visible = useMemo(() => {
    return faqCategories
      .filter((c) => active === 'all' || c.id === active)
      .map((c) => ({
        ...c,
        items: c.items.filter(
          (f) => !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
        ),
      }))
      .filter((c) => c.items.length > 0);
  }, [q, active]);

  // Google-friendly markup for every question on this page
  useEffect(() => {
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-faq-schema', 'true');
    el.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqCategories.flatMap((c) => c.items).map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
    document.head.appendChild(el);
    return () => el.remove();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <PageHero
        badge="Help"
        title="Frequently asked questions"
        subtitle="Quick answers about AllPetsLoft, our guides, and how to use the site."
      >
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 h-11">
          <SearchIcon className="size-4 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search questions..."
            aria-label="Search questions"
            className="bg-transparent outline-none text-sm w-full"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search" className="text-gray-400 hover:text-gray-600">
              <XIcon className="size-4" />
            </button>
          )}
        </div>
      </PageHero>

      <div className="max-w-3xl mx-auto w-full px-6 md:px-12 py-8 flex-1">
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
          {[{ id: 'all', title: 'All' }, ...faqCategories].map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-pressed={active === c.id}
              className={`text-sm px-4 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                active === c.id ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-sm text-gray-600 mb-2">No questions match “{query}”.</p>
            <p className="text-sm text-gray-500">
              Try a different word, or{' '}
              <Link to="/contact" className="text-blue-700 font-medium hover:underline">ask us directly</Link>.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {visible.map((c) => (
              <section key={c.id} aria-labelledby={`faq-${c.id}`}>
                <h2 id={`faq-${c.id}`} className="text-lg font-semibold mb-3">{c.title}</h2>
                <FaqList faqs={c.items} schema={false} />
              </section>
            ))}
          </div>
        )}

        <div className="mt-12 rounded-xl bg-gray-50 border border-gray-100 p-5 text-center">
          <p className="text-sm font-medium mb-1">Still have a question?</p>
          <p className="text-sm text-gray-500 mb-3">Send us a message and we will get back to you.</p>
          <Link to="/contact">
            <button className="px-6 h-10 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Contact us
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
