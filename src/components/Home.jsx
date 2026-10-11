import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import heroImg from '../assets/hero-pets.png';
import dogsImg from '../assets/categories/dogs.jpg';
import catsImg from '../assets/categories/cats.jpg';
import birdsImg from '../assets/categories/birds.jpg';
import { getFeaturedArticles } from '../services/articleService';
import { getCategoryMeta } from '../utils/articleCategories';
import {
  IconHome as HomeIcon,
  IconStethoscope as StethoscopeIcon,
  IconShield as ShieldIcon,
  IconUser as UserIcon,
  IconArrowRight as ArrowRightIcon,
} from '@tabler/icons-react';

const species = [
  { image: dogsImg, label: "Dogs", desc: "20+ breed guides", to: "/breeds", available: true },
  { image: catsImg, label: "Cats", desc: "Guides on the way", to: null, available: false },
  { image: birdsImg, label: "Birds", desc: "Guides on the way", to: null, available: false },
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
            Trusted by pet parents
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Give your pet the care they deserve
          </h1>
          <p className="text-sm md:text-base text-white/85 mb-6 max-w-md">
            Breed guides, nutrition advice, insurance comparisons, and expert health information, all in one place.
          </p>
          <div className="flex gap-3">
            <Link to="/breeds" className="bg-white text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
              Find your breed
            </Link>
            <Link to="/insurance" className="bg-white/15 text-white border border-white/40 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-white/25 transition-colors backdrop-blur-sm">
              Get insurance
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-gray-200">
          <Stat value="20+" label="Breed guides" />
          <Stat value="20" label="In-depth profiles" />
          <Stat value="Expert" label="Written guides" />
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {species.map((s) => (
            <SpeciesCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* Featured articles */}
      <section className="bg-gray-50 py-14">
        <div className="px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xl font-semibold mb-1">Featured articles</p>
              <p className="text-sm text-gray-500">Guidance from our editorial team</p>
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

      <Footer />

      {/* Mobile bottom nav */}
      <nav className="md:hidden flex justify-around py-3 border-t border-gray-200 fixed bottom-0 left-0 right-0 bg-white">
        <Link to="/" aria-label="Home"><HomeIcon className="size-5 text-blue-600" /></Link>
        <Link to="/articles" aria-label="Learning hub"><StethoscopeIcon className="size-5 text-gray-400" /></Link>
        <Link to="/insurance" aria-label="Insurance"><ShieldIcon className="size-5 text-gray-400" /></Link>
        <Link to="/contact" aria-label="Contact"><UserIcon className="size-5 text-gray-400" /></Link>
      </nav>
    </div>
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
      <p className="text-xl font-bold">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{label}</p>
    </div>
  );
}

function ArticleRow({ article }) {
  const { icon: Icon, bg, color } = getCategoryMeta(article.category);
  return (
    <Link
      to={`/articles/${article.slug}`}
      className="flex gap-3 items-center bg-white rounded-lg p-4 hover:shadow-sm transition-shadow"
    >
      <div className={`size-10 rounded-lg ${bg} flex items-center justify-center shrink-0`}>
        <Icon className={`size-[18px] ${color}`} />
      </div>
      <div>
        <p className="text-sm font-medium">{article.title}</p>
        <p className="text-xs text-gray-400">{article.readTime} min read</p>
      </div>
    </Link>
  );
}