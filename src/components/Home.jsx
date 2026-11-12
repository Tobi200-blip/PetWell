import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import IconBadge from './IconBadge';
import heroImg from '../assets/hero-pets.png';
import dogsImg from '../assets/categories/dogs.jpg';
import catsImg from '../assets/categories/cats.jpg';
import birdsImg from '../assets/categories/birds.jpg';
import othersImg from '../assets/categories/others.png';
import { getFeaturedArticles, getArticles, getCategories } from '../services/articleService';
import { getBreedCounts } from '../services/breedService';
import { getCategoryMeta } from '../utils/articleCategories';
import { faqs } from '../data/faqs';
import {
  IconHome as HomeIcon,
  IconBook2 as BookIcon,
  IconShieldCheck as ShieldIcon,
  IconMail as MailIcon,
  IconDog as DogIcon,
  IconMapPin as MapPinIcon,
  IconArrowRight as ArrowRightIcon,
  IconChevronDown as ChevronDownIcon,
} from '@tabler/icons-react';

const counts = getBreedCounts();
// 50 -> "50+", 57 -> "50+", 64 -> "60+"; never overstates the real number
const roundedBreeds =
  counts.total >= 10 ? `${Math.floor(counts.total / 10) * 10}+` : String(counts.total);
const articleCount = getArticles().length;
const topicCount = getCategories().length;

const species = [
  { image: dogsImg, label: "Dogs", desc: `${roundedBreeds} breed guides`, to: "/breeds", available: true },
  { image: catsImg, label: "Cats", desc: "Guides on the way", to: null, available: false },
  { image: birdsImg, label: "Birds", desc: "Guides on the way", to: null, available: false },
  { image: othersImg, label: "Others", desc: "Rabbits, fish, reptiles and more", to: null, available: false },
];

const aboutTiles = [
  {
    icon: DogIcon,
    color: 'blue',
    title: 'Breed guides',
    desc: 'History, temperament, care, feeding, training, and health for each breed.',
    to: '/breeds',
  },
  {
    icon: BookIcon,
    color: 'green',
    title: 'Learning hub',
    desc: 'Clear articles on nutrition, health, training, and grooming.',
    to: '/articles',
  },
  {
    icon: ShieldIcon,
    color: 'amber',
    title: 'Insurance',
    desc: 'Learn how pet insurance works, with plans opening soon.',
    to: '/insurance',
  },
  {
    icon: MapPinIcon,
    color: 'purple',
    title: 'Pet services',
    desc: 'Vets, groomers, boarding, and trainers, with local listings on the way.',
    to: '/services',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col pb-16 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-center">
        <img
          src={heroImg}
          alt="Happy pets"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 px-6 md:px-16 max-w-xl">
          <span className="inline-block text-xs bg-white/20 text-white px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
            Pet care, made simple
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Give your pet the care they deserve
          </h1>
          <p className="text-sm md:text-base text-white/85 mb-6 max-w-md">
            Breed guides, nutrition advice, insurance information, and health information, all in one place.
          </p>
          <div className="flex gap-3">
            <Link to="/breeds" className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
              Find your breed
            </Link>
            <Link to="/insurance" className="bg-white/15 text-white border border-white/40 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/25 transition-colors backdrop-blur-sm">
              Insurance guide
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-gray-200">
          <Stat value={roundedBreeds} label="Dog breed guides" />
          <Stat value={articleCount} label="Learning hub articles" />
          <Stat value={topicCount} label="Care topics" />
        </div>
      </section>

      {/* Species grid */}
      <section className="px-6 md:px-12 py-14 max-w-5xl mx-auto w-full">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xl font-semibold">Browse by species</p>
            <p className="text-sm text-gray-500 mt-1">Find care guides tailored to your pet</p>
          </div>
          <Link to="/breeds" className="hidden sm:flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline">
            View all breeds <ArrowRightIcon className="size-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {species.map((s) => (
            <SpeciesCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* What is AllPetsLoft */}
      <section className="bg-gray-50 py-16">
        <div className="px-6 md:px-12 max-w-5xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold text-blue-600 mb-2">About the site</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-5 leading-tight">
              What is AllPetsLoft?
            </h2>
            <div className="flex flex-col gap-4 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                AllPetsLoft is a pet care resource built for people who want to do right by their animals. Whether you are choosing your first dog, settling a new puppy into your home, or looking for better ways to care for a pet you have had for years, we bring the information you need together in one place, in plain language.
              </p>
              <p>
                Our breed guides are the heart of the site. Each one covers where a breed comes from, how it looks and behaves, how much exercise it needs, what it should eat, how to train and groom it, and the health problems owners should watch for. You can search and filter by size and breed group to find a dog that suits your home, your family, and your climate.
              </p>
              <p>
                Beyond breeds, the Learning Hub explains everyday pet care, from feeding and vaccinations to training and grooming, and our insurance section will help you compare cover so an unexpected vet bill does not catch you off guard. A services section for finding local vets, groomers, boarding, and trainers is on its way.
              </p>
              <p>
                We are starting with dogs and growing from there, with cats, birds, and other pets coming next. Everything on AllPetsLoft is general information to help you learn and plan. It is not a replacement for a licensed veterinarian, who should always be your first call when your pet's health is in question.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {aboutTiles.map(({ icon, color, title, desc, to }) => (
              <Link
                key={title}
                to={to}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <IconBadge icon={icon} color={color} size="md" className="mb-4" />
                <p className="text-sm font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                  {title}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured articles */}
      <section className="py-14">
        <div className="px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xl font-semibold mb-1">Featured articles</p>
              <p className="text-sm text-gray-500">Practical guidance for everyday pet care</p>
            </div>
            <Link to="/articles" className="hidden sm:flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline">
              Visit the learning hub <ArrowRightIcon className="size-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {getFeaturedArticles().map((a) => (
              <ArticleRow key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="px-6 md:px-12 max-w-3xl mx-auto w-full">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently asked questions</h2>
            <p className="text-sm text-gray-500">Quick answers to what pet owners ask most.</p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white border border-gray-200 rounded-xl px-5 py-4 open:shadow-sm"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer text-sm md:text-base font-semibold list-none [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDownIcon
                    className="size-5 text-blue-600 shrink-0 transition-transform group-open:rotate-180"
                    stroke={2.25}
                  />
                </summary>
                <p className="text-sm text-gray-600 leading-relaxed mt-3">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-3">Still have a question?</p>
            <Link
              to="/contact"
              className="inline-flex items-center h-11 px-6 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile bottom nav */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 grid grid-cols-4"
        aria-label="Quick links"
      >
        <MobileTab to="/" icon={HomeIcon} label="Home" active />
        <MobileTab to="/articles" icon={BookIcon} label="Learn" />
        <MobileTab to="/insurance" icon={ShieldIcon} label="Insurance" />
        <MobileTab to="/contact" icon={MailIcon} label="Contact" />
      </nav>
    </div>
  );
}

function MobileTab({ to, icon: Icon, label, active = false }) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center gap-1 py-2 text-[11px] font-medium ${
        active ? 'text-blue-600' : 'text-gray-600'
      }`}
    >
      <Icon className="size-5" stroke={2} />
      {label}
    </Link>
  );
}

function SpeciesCard({ image, label, desc, to, available }) {
  const content = (
    <>
      <img
        src={image}
        alt={label}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ${
          available ? 'group-hover:scale-105' : 'grayscale opacity-70'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      {!available && (
        <span className="absolute top-3 right-3 text-xs bg-white/90 text-gray-700 font-medium px-3 py-1 rounded-full">
          Coming soon
        </span>
      )}
      <div className="absolute bottom-0 left-0 p-4">
        <p className="text-white font-semibold text-lg">{label}</p>
        <p className="text-white/80 text-xs mt-0.5">{desc}</p>
      </div>
    </>
  );

  if (!available) {
    return (
      <div
        className="relative rounded-xl overflow-hidden h-56 cursor-not-allowed"
        aria-disabled="true"
      >
        {content}
      </div>
    );
  }

  return (
    <Link to={to} className="relative group rounded-xl overflow-hidden h-56 block">
      {content}
    </Link>
  );
}

function Stat({ value, label }) {
  return (
    <div className="text-center py-5">
      <p className="text-2xl font-extrabold text-blue-600">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
}

function ArticleRow({ article }) {
  const { icon: Icon, bg, color } = getCategoryMeta(article.category);
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="flex gap-3 items-center bg-gray-50 border border-gray-100 rounded-lg p-4 hover:bg-gray-100 transition-colors"
    >
      <div className={`size-10 rounded-lg ${bg} flex items-center justify-center shrink-0 shadow-sm`}>
        <Icon className={`size-[18px] ${color}`} stroke={2} />
      </div>
      <div>
        <p className="text-sm font-medium">{article.title}</p>
        <p className="text-xs text-gray-400">{article.readTime} min read</p>
      </div>
    </Link>
  );
}