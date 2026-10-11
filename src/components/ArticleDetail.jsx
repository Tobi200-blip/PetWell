import { Link, useParams } from 'react-router-dom';
import {
  IconChevronLeft as ChevronLeftIcon,
  IconChevronRight as ChevronRightIcon,
  IconRosetteDiscountCheck as VerifiedIcon,
} from '@tabler/icons-react';
import { getArticleBySlug, getRelatedArticles } from '../services/articleService';
import { getCategoryMeta } from '../utils/articleCategories';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound';
import PageHero from './PageHero';
import healthHero from '../assets/heroes/health.jpg';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) return <NotFound />;

  const related = getRelatedArticles(slug);
  const isInsurance = article.category === 'Insurance';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <PageHero
        image={healthHero}
        badge={`${article.category} - ${article.readTime} min read`}
        title={article.title}
        subtitle={article.excerpt}
      />

      <article className="max-w-2xl mx-auto w-full px-6 py-10 flex-1">
        <div className="flex items-center justify-between mb-8 text-sm">
          <Link to="/articles" className="inline-flex items-center gap-1 text-gray-500 hover:text-gray-900">
            <ChevronLeftIcon className="size-4" /> All articles
          </Link>
          <div className="flex items-center gap-3 text-gray-400">
            <span>Updated {article.date}</span>
            {article.vetReviewed && (
              <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                <VerifiedIcon className="size-3.5" /> Vet-reviewed
              </span>
            )}
          </div>
        </div>

        {article.sections.map((s) => (
          <section key={s.heading} className="mb-8">
            <h2 className="text-xl font-semibold mb-3">{s.heading}</h2>
            {s.paragraphs.map((p, i) => (
              <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="flex flex-col gap-2 mt-2">
                {s.list.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-gray-600 leading-relaxed">
                    <span className="mt-2 size-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <p className="text-xs text-gray-400 border-t border-gray-100 pt-4 mb-8">
          {isInsurance
            ? 'This article is general information, not financial advice. Check the terms of any policy before you buy.'
            : "This article is general information, not veterinary advice. Always consult a licensed veterinarian about your pet's specific health."}
        </p>

        <Link to={isInsurance ? '/insurance' : '/breeds'}>
          <button className="px-6 h-11 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
            {isInsurance ? 'Compare insurance plans' : 'Browse breed guides'}
          </button>
        </Link>
      </article>

      {related.length > 0 && (
        <section className="bg-gray-50 px-6 md:px-12 py-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl font-semibold mb-6">Keep reading</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => {
                const { icon: Icon, bg, color } = getCategoryMeta(r.category);
                return (
                  <Link
                    key={r.slug}
                    to={`/articles/${r.slug}`}
                    className="flex items-center gap-3 bg-white rounded-lg p-3 hover:shadow-sm transition-shadow"
                  >
                    <div className={`size-10 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
                      <Icon className={`size-[18px] ${color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-snug">{r.title}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{r.readTime} min read</p>
                    </div>
                    <ChevronRightIcon className="size-4 text-gray-400 shrink-0" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}