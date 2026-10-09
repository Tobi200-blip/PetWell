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
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-6"
          >
            <ChevronLeftIcon className="size-4" /> All breeds
          </Link>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {image ? (
              <img
                src={image}
                alt={breed.name}
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
              <p className="text-gray-500 mb-6">{profile?.summary || breed.temperament}</p>
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
        <div className="grid lg:grid-cols-[200px_1fr] gap-12">
          {/* Table of contents */}
          {profile && (
            <aside className="hidden lg:block">
              <nav className="sticky top-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  On this page
                </p>
                <ul className="flex flex-col gap-2 text-sm">
                  {profile.sections.map((s) => (
                    <li key={s.id}>
                      <a href={`#${s.id}`} className="text-gray-500 hover:text-blue-600 transition-colors">
                        {s.title}
                      </a>
                    </li>
                  ))}
                  {profile.faqs?.length > 0 && (
                    <li>
                      <a href="#faq" className="text-gray-500 hover:text-blue-600 transition-colors">
                        FAQ
                      </a>
                    </li>
                  )}
                </ul>
              </nav>
            </aside>
          )}

          {/* Content */}
          <div className={profile ? '' : 'lg:col-span-2 max-w-3xl'}>
            {profile ? (
              profile.sections.map((section) => (
                <section key={section.id} id={section.id} className="mb-10 scroll-mt-6">
                  <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3">
                      {p}
                    </p>
                  ))}

                  {section.id === 'feeding' && <FoodCard breed={breed} />}
                  {section.id === 'health' && <HealthTags issues={breed.issues} />}
                </section>
              ))
            ) : (
              <>
                <div className="bg-gray-50 rounded-xl p-5 mb-10">
                  <p className="text-sm font-medium mb-1">Full profile coming soon</p>
                  <p className="text-xs text-gray-500">
                    We're expanding this guide with history, care, training, and health details.
                  </p>
                </div>
                <h2 className="text-xl font-semibold mb-3">Feeding</h2>
                <FoodCard breed={breed} />
                <h2 className="text-xl font-semibold mb-3 mt-10">Health</h2>
                <HealthTags issues={breed.issues} />
              </>
            )}

            {/* FAQ */}
            {profile?.faqs?.length > 0 && (
              <section id="faq" className="mb-10 scroll-mt-6">
                <h2 className="text-xl font-semibold mb-4">Frequently asked questions</h2>
                <div className="flex flex-col gap-2">
                  {profile.faqs.map((f) => (
                    <details key={f.q} className="group bg-gray-50 rounded-lg px-4 py-3">
                      <summary className="flex items-center justify-between cursor-pointer text-sm font-medium list-none">
                        {f.q}
                        <ChevronDownIcon className="size-4 text-gray-400 transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="text-sm text-gray-600 leading-relaxed mt-2">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <Link to="/insurance" className="inline-block">
              <button className="px-6 h-11 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
                Compare insurance plans
              </button>
            </Link>
          </div>
        </div>
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
                    className="flex items-center gap-3 bg-white rounded-lg p-3 hover:shadow-sm transition-shadow"
                  >
                    {img ? (
                      <img src={img} alt={s.name} className="size-12 rounded-full object-cover shrink-0" />
                    ) : (
                      <div className="size-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <DogIcon className="size-5 text-blue-600" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{s.name}</p>
                      <p className="text-xs text-gray-400">{s.size}</p>
                    </div>
                    <ChevronRightIcon className="size-4 text-gray-400" />
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

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-lg p-3 text-center">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-base font-medium mt-1">{value}</p>
    </div>
  );
}

function FoodCard({ breed }) {
  return (
    <div className="flex gap-3 items-center bg-gray-50 rounded-lg p-4 mt-4">
      <BoneIcon className="size-6 text-amber-600 shrink-0" />
      <div>
        <p className="text-sm font-medium">{breed.food}</p>
        <p className="text-xs text-gray-400">{breed.foodNote}</p>
      </div>
    </div>
  );
}

function HealthTags({ issues }) {
  return (
    <>
      <div className="flex flex-wrap gap-2 mt-4">
        {issues.map((tag) => (
          <span key={tag} className="text-sm bg-red-100 text-red-700 px-3 py-1.5 rounded-lg">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-xs text-gray-400 mt-3">
        This is general breed information, not a diagnosis. Always consult a licensed veterinarian about your pet's specific health.
      </p>
    </>
  );
}