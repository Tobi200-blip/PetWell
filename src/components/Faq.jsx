import { useEffect, useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconPlus as PlusIcon } from '@tabler/icons-react';

const DURATION = 300;

function FaqItem({ q, a, link, open, onToggle }) {
  const uid = useId();
  const buttonId = `${uid}-q`;
  const panelId = `${uid}-a`;

  return (
    <div
      className={`rounded-xl border transition-colors ${
        open ? 'bg-blue-50/60 border-blue-200' : 'bg-white border-gray-200 hover:border-gray-300'
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 text-left px-4 sm:px-5 py-4 min-h-14 rounded-xl focus-visible:outline-2 focus-visible:outline-blue-600"
        >
          <span className={`text-sm sm:text-base font-medium ${open ? 'text-blue-900' : 'text-gray-900'}`}>
            {q}
          </span>
          <span
            className={`shrink-0 size-7 rounded-full flex items-center justify-center transition-colors ${
              open ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
            }`}
            aria-hidden="true"
          >
            <PlusIcon
              className="size-4 transition-transform"
              style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transitionDuration: `${DURATION}ms` }}
              stroke={2.25}
            />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        style={{
          display: 'grid',
          gridTemplateRows: open ? '1fr' : '0fr',
          visibility: open ? 'visible' : 'hidden',
          transition: `grid-template-rows ${DURATION}ms ease, visibility 0s linear ${open ? '0s' : `${DURATION}ms`}`,
        }}
      >
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 pb-4 text-sm sm:text-[15px] text-gray-600 leading-relaxed">
            <p>{a}</p>
            {link && (
              <Link to={link.to} className="inline-block mt-2 text-blue-700 font-medium hover:underline">
                {link.label} &rarr;
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Reusable FAQ accordion.
 * faqs: [{ q, a, link?: { to, label } }]
 * One question open at a time. Adds Google-friendly FAQ markup for the visible questions.
 */
export default function FaqList({ faqs = [], schema = true }) {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    if (!schema || faqs.length === 0) return undefined;
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-faq-schema', 'true');
    el.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
    document.head.appendChild(el);
    return () => el.remove();
  }, [faqs, schema]);

  useEffect(() => setOpenIndex(null), [faqs]);

  return (
    <div className="flex flex-col gap-2.5">
      {faqs.map((f, i) => (
        <FaqItem
          key={f.q}
          {...f}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
