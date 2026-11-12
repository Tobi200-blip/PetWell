import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  IconChevronLeft as ChevronLeftIcon,
  IconChevronDown as ChevronDownIcon,
  IconChevronRight as ChevronRightIcon,
  IconDog as DogIcon,
  IconBone as BoneIcon,
  IconRosetteDiscountCheck as VerifiedIcon,
} from '@tabler/icons-react';
import { getBreedBySlug, getSimilarBreeds } from '../services/breedService';
import { getBreedImage } from '../utils/breedImages';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound';

export default function BreedDetail() {
  const { slug } = useParams();
  const breed = getBreedBySlug(slug);

  if (!breed) return <NotFound />;

  const image = getBreedImage(slug);
  const { profile } = breed;
  const similar = getSimilarBreeds(slug);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="bg-blue-50">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-8 md:py-12">
          <Link
            to="/breeds"
            className="inline-flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900 mb-6"
          >
            <ChevronLeftIcon className="size-4" /> All breeds
          </Link>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {image ? (
              <img
                src={image}
                alt={breed.name}
                fetchPriority="high"
                className="w-full h-64 md:h-80 object-cover rounded-2xl"
              />
            ) : (
              <div className="w-full h-64 md:h-80 rounded-2xl bg-blue-100 flex items-center justify-center">
                <DogIcon className="size-16 text-blue-600" />
              </div>
            )}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {breed.size} breed
                </span>
                {profile?.origin && (
                  <span className="text-xs bg-white text-gray-600 px-3 py-1 rounded-full border border-gray-200">
                    Origin: {profile.origin}
                  </span>
                )}
                {profile?.vetReviewed && (
                  <span className="inline-flex items-center gap-1 text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                    <VerifiedIcon className="size-3.5" /> Vet-reviewed
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{breed.name}</h1>
              <p className="text-gray-600 mb-6">{profile?.summary || breed.temperament}</p>
              <div className="grid grid-cols-2 gap-3">
                <StatCard label="Lifespan" value={breed.lifespan} />
                <StatCard label="Weight" value={breed.weight} />
                <StatCard label="Exercise" value={breed.exercise} />
                <StatCard label="Grooming" value={breed.grooming} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-5xl mx-auto w-full px-6 md:px-12 py-12 flex-1">
        {profile ? (
          <ProfileLayout key={slug} breed={breed} profile={profile} />
        ) : (
          <BasicLayout breed={breed} />
        )}
      </div>

      {/* Similar breeds */}
      {similar.length > 0 && (
        <section className="bg-gray-50 px-6 md:px-12 py-12">
          <div className="max-w-5xl mx-auto">
            <p className="text-xl font-semibold mb-6">Similar breeds</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {similar.map((s) => {
                const img = getBreedImage(s.slug);
                return (
                  <Link
                    key={s.slug}
                    to={`/breed/${s.slug}`}
                    className="flex items-center gap-3 bg-white border border-gray-100 rounded-lg p-3 hover:shadow-sm transition-shadow"
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={s.name}
                        loading="lazy"
                        className="size-12 rounded-full object-cover shrink-0"
                      />
                    ) : (
                      <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <DogIcon className="size-5 text-blue-600" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{s.name}</p>
                      <p className="text-xs text-gray-500">{s.size}</p>
                    </div>
                    <ChevronRightIcon className="size-4 text-gray-500" />
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

function ProfileLayout({ breed, profile }) {
  const { sections, faqs = [] } = profile;
  // The first section starts open; the rest are closed
  const [open, setOpen] = useState(() => new Set(sections[0] ? [sections[0].id] : []));
  const allOpen = open.size === sections.length;

  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const scrollToId = (id) => {
    requestAnimationFrame(() =>
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    );
  };

  const openSection = (id) => {
    setOpen((prev) => new Set(prev).add(id));
    scrollToId(id);
  };

  // Support links like /breed/beagle#health
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id && sections.some((s) => s.id === id)) openSection(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid lg:grid-cols-[200px_1fr] gap-12">
      {/* Table of contents */}
      <aside className="hidden lg:block">
        <nav className="sticky top-6" aria-label="Sections">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
            On this page
          </p>
          <ul className="flex flex-col gap-2 text-sm">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => openSection(s.id)}
                  className={`text-left transition-colors ${
                    open.has(s.id)
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {s.title}
                </button>
              </li>
            ))}
            {faqs.length > 0 && (
              <li>
                <button
                  type="button"
                  onClick={() => scrollToId('faq')}
                  className="text-left text-gray-600 hover:text-blue-600 transition-colors"
                >
                  FAQ
                </button>
              </li>
            )}
          </ul>
        </nav>
      </aside>

      {/* Content */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-600">{sections.length} sections</p>
          <button
            type="button"
            onClick={() =>
              setOpen(allOpen ? new Set() : new Set(sections.map((s) => s.id)))
            }
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            {allOpen ? 'Collapse all' : 'Expand all'}
          </button>
        </div>

        <div className="flex flex-col gap-3 mb-12">
          {sections.map((section) => (
            <AccordionItem
              key={section.id}
              section={section}
              open={open.has(section.id)}
              onToggle={() => toggle(section.id)}
            >
              <SectionBody section={section} breed={breed} />
            </AccordionItem>
          ))}
        </div>

        {faqs.length > 0 && (
          <section id="faq" className="mb-12 scroll-mt-6">
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

        <Link to="/insurance" className="inline-block">
          <button className="px-6 h-11 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Learn about pet insurance
          </button>
        </Link>
      </div>
    </div>
  );
}

function AccordionItem({ section, open, onToggle, children }) {
  const panelId = `panel-${section.id}`;
  const buttonId = `button-${section.id}`;

  return (
    <section
      id={section.id}
      className="scroll-mt-6 border border-gray-200 rounded-xl bg-white overflow-hidden"
    >
      <h2>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="text-base md:text-lg font-semibold">{section.title}</span>
          <span
            className={`size-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
              open ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'
            }`}
          >
            <ChevronDownIcon
              className={`size-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              stroke={2.5}
            />
          </span>
        </button>
      </h2>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-6 pt-1">{children}</div>
        </div>
      </div>
    </section>
  );
}

function SectionBody({ section, breed }) {
  return (
    <>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
          {p}
        </p>
      ))}

      {section.lists?.map((list, i) => (
        <div key={i} className="mb-4">
          {list.title && <p className="text-sm font-semibold mb-2">{list.title}</p>}
          {list.ordered ? (
            <ol className="flex flex-col gap-2.5">
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

      {section.note && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-4">
          <p className="text-xs font-semibold text-blue-700 mb-1">{section.note.title || 'Good to know'}</p>
          <p className="text-sm text-gray-700 leading-relaxed">{section.note.text}</p>
        </div>
      )}

      {section.id === 'feeding' && <FoodCard breed={breed} />}
      {section.id === 'health' && <HealthTags issues={breed.issues} />}
    </>
  );
}

function BasicLayout({ breed }) {
  return (
    <div className="max-w-3xl">
      <div className="bg-gray-50 border border-gray-100 rounded-xl p-5 mb-10">
        <p className="text-sm font-medium mb-1">Full profile coming soon</p>
        <p className="text-xs text-gray-600">
          We're expanding this guide with history, care, training, and health details.
        </p>
      </div>
      <h2 className="text-xl font-semibold mb-3">Feeding</h2>
      <FoodCard breed={breed} />
      <h2 className="text-xl font-semibold mb-3 mt-10">Health</h2>
      <HealthTags issues={breed.issues} />
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-lg p-3 text-center">
      <p className="text-xs text-gray-600">{label}</p>
      <p className="text-base font-medium mt-1">{value}</p>
    </div>
  );
}

function FoodCard({ breed }) {
  return (
    <div className="flex gap-3 items-center bg-amber-50 border border-amber-100 rounded-lg p-4 mt-2">
      <div className="size-10 rounded-lg bg-amber-600 flex items-center justify-center shrink-0">
        <BoneIcon className="size-5 text-white" stroke={2} />
      </div>
      <div>
        <p className="text-sm font-medium">{breed.food}</p>
        <p className="text-xs text-gray-600">{breed.foodNote}</p>
      </div>
    </div>
  );
}

function HealthTags({ issues = [] }) {
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-2">
        {issues.map((tag) => (
          <span key={tag} className="text-sm bg-red-100 text-red-700 px-3 py-1.5 rounded-lg">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        This is general breed information, not a diagnosis. Always consult a licensed veterinarian about your pet's specific health.
      </p>
    </>
  );
}