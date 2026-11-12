import { Link, useParams } from 'react-router-dom';
import {
  IconChevronLeft as ChevronLeftIcon,
  IconChevronRight as ChevronRightIcon,
  IconChevronDown as ChevronDownIcon,
  IconCircleCheck as CircleCheckIcon,
  IconRosetteDiscountCheck as VerifiedIcon,
} from '@tabler/icons-react';
import { getArticleBySlug, getRelatedArticles } from '../services/articleService';
import { getCategoryMeta } from '../utils/articleCategories';
import { getArticleImage } from '../utils/articleImages';
import { articleMedia } from '../data/articleMedia';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound';
import PageHero from './PageHero';
import healthHero from '../assets/heroes/health.jpg';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) return <NotFound />;

  const media = articleMedia[slug] || {};
  const heroImage = getArticleImage(media.hero?.file) || healthHero;
  const related = getRelatedArticles(slug);
  const isInsurance = article.category === 'Insurance';
  const sections = article.sections || [];
  const intro = article.intro || [];
  const keyPoints = article.keyPoints || [];
  const faqs = article.faqs || [];
  const showToc = sections.length >= 4;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <PageHero
        image={heroImage}
        badge={`${article.category} - ${article.readTime} min read`}
        title={article.title}
        subtitle={article.excerpt}
      />

      <div className="max-w-5xl mx-auto w-full px-6 md:px-12 py-10 flex-1">
        <div className="flex items-center justify-between mb-8 text-sm">
          <Link to="/articles" className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900">
            <ChevronLeftIcon className="size-4" /> All articles
          </Link>
          <div className="flex items-center gap-3 text-gray-500">
            <span>Updated {article.date}</span>
            {article.vetReviewed && (
              <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                <VerifiedIcon className="size-3.5" /> Vet-reviewed
              </span>
            )}
          </div>
        </div>

        <div className={showToc ? 'grid lg:grid-cols-[220px_1fr] gap-12' : ''}>
          {showToc && (
            <aside className="hidden lg:block">
              <nav className="sticky top-6" aria-label="In this article">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                  In this article
                </p>
                <ol className="flex flex-col gap-2 text-sm">
                  {sections.map((s, i) => (
                    <li key={s.heading}>
                      <a href={`#s-${i + 1}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                  {faqs.length > 0 && (
                    <li>
                      <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                        Frequently asked questions
                      </a>
                    </li>
                  )}
                </ol>
              </nav>
            </aside>
          )}

          <article className={`w-full max-w-2xl ${showToc ? '' : 'mx-auto'}`}>
            {intro.map((p, i) => (
              <p
                key={i}
                className={`leading-relaxed mb-4 ${
                  i === 0 ? 'text-base md:text-lg text-gray-800' : 'text-sm md:text-base text-gray-600'
                }`}
              >
                {p}
              </p>
            ))}

            {keyPoints.length > 0 && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 my-8">
                <p className="text-sm font-semibold text-blue-700 mb-3">Key takeaways</p>
                <ul className="flex flex-col gap-2.5">
                  {keyPoints.map((k) => (
                    <li key={k} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                      <CircleCheckIcon className="size-5 text-blue-600 shrink-0" stroke={2} />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {sections.map((s, i) => (
              <ArticleSection
                key={s.heading}
                section={s}
                id={`s-${i + 1}`}
                figure={media.sections?.[s.heading]}
              />
            ))}

            {faqs.length > 0 && (
              <section id="faq" className="mb-10 scroll-mt-6">
                <h2 className="text-xl font-semibold mb-4">Frequently asked questions</h2>
                <div className="flex flex-col gap-2">
                  {faqs.map((f) => (
                    <details key={f.q} className="group bg-gray-50 border border-gray-100 rounded-lg px-4 py-3">
                      <summary className="flex items-center justify-between gap-4 cursor-pointer text-sm font-medium list-none [&::-webkit-details-marker]:hidden">
                        {f.q}
                        <ChevronDownIcon className="size-4 text-blue-600 shrink-0 transition-transform group-open:rotate-180" stroke={2.25} />
                      </summary>
                      <p className="text-sm text-gray-600 leading-relaxed mt-2">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <p className="text-xs text-gray-500 border-t border-gray-100 pt-4 mb-8">
              {isInsurance
                ? 'This article is general information, not financial advice. Check the terms of any policy before you buy.'
                : "This article is general information, not veterinary advice. Always consult a licensed veterinarian about your pet's specific health."}
            </p>

            <Link to={isInsurance ? '/insurance' : '/breeds'}>
              <button className="px-6 h-11 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                {isInsurance ? 'See the insurance page' : 'Browse breed guides'}
              </button>
            </Link>
          </article>
        </div>
      </div>

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
                    className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow"
                  >
                    <div className={`size-10 rounded-lg ${bg} flex items-center justify-center shrink-0 shadow-sm`}>
                      <Icon className={`size-[18px] ${color}`} stroke={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium leading-snug">{r.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{r.readTime} min read</p>
                    </div>
                    <ChevronRightIcon className="size-4 text-gray-500 shrink-0" />
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

function ArticleSection({ section, id, figure }) {
  // Support both the older single `list` and the newer `lists` array
  const lists = [
    ...(section.list ? [{ items: section.list }] : []),
    ...(section.lists || []),
  ];
  const imageSrc = getArticleImage(figure?.file);

  return (
    <section id={id} className="mb-10 scroll-mt-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-3">{section.heading}</h2>

      {imageSrc && (
        <figure className="mb-5">
          <img
            src={imageSrc}
            alt={figure.alt || ''}
            loading="lazy"
            decoding="async"
            className="w-full max-h-96 object-cover rounded-xl"
          />
          {figure.caption && (
            <figcaption className="text-xs text-gray-500 mt-2">{figure.caption}</figcaption>
          )}
        </figure>
      )}

      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
          {p}
        </p>
      ))}

      {lists.map((list, i) => (
        <div key={i} className="mb-4">
          {list.title && <p className="text-sm font-semibold mb-2">{list.title}</p>}
          {list.ordered ? (
            <ol className="flex flex-col gap-3">
              {list.items.map((item, n) => (
                <li key={item} className="flex gap-3 text-sm md:text-base text-gray-600 leading-relaxed">
                  <span className="size-6 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    {n + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          ) : (
            <ul className="flex flex-col gap-2">
              {list.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm md:text-base text-gray-600 leading-relaxed">
                  <span className="mt-2.5 size-1.5 rounded-full bg-blue-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      {section.callout && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3">
          <p className="text-xs font-semibold text-blue-700 mb-1">{section.callout.title}</p>
          <p className="text-sm text-gray-700 leading-relaxed">{section.callout.text}</p>
        </div>
      )}
    </section>
  );
}