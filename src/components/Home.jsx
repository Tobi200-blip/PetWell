import { Link } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import heroImg from '../assets/hero-pets.png';
import dogsImg from '../assets/categories/dogs.jpg';
import catsImg from '../assets/categories/cats.jpg';
import birdsImg from '../assets/categories/birds.jpg';
import {
  IconHeart as HeartIcon,
  IconBone as BoneIcon,
  IconHome as HomeIcon,
  IconStethoscope as StethoscopeIcon,
  IconShield as ShieldIcon,
  IconUser as UserIcon,
  IconArrowRight as ArrowRightIcon,
} from '@tabler/icons-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col pb-16 md:pb-0">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[520px] flex items-center">
        <img
          src={heroImg}
          alt="Happy pets"
          className="absolute inset-0 w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="relative z-10 px-6 md:px-16 max-w-xl">
          <span className="inline-block text-xs bg-white/20 text-white px-3 py-1 rounded-full mb-4 backdrop-blur-sm">
            Trusted by pet parents
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Give your pet the care they deserve
          </h1>
          <p className="text-sm md:text-base text-white/85 mb-6 max-w-md">
            Breed guides, nutrition advice, insurance comparisons, and vet-reviewed health information — all in one place.
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
          <Stat value="50k+" label="Pet parents" />
          <Stat value="Vet" label="Reviewed content" />
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
          {[
            { image: dogsImg, label: "Dogs", desc: "20+ breed guides", to: "/breeds" },
            { image: catsImg, label: "Cats", desc: "Coming soon", to: "/breeds" },
            { image: birdsImg, label: "Birds", desc: "Coming soon", to: "/breeds" },
          ].map(({ image, label, desc, to }) => (
            <Link
              key={label}
              to={to}
              className="relative group rounded-xl overflow-hidden h-56"
            >
              <img
                src={image}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white font-semibold text-lg">{label}</p>
                <p className="text-white/80 text-xs mt-0.5">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured articles */}
      <section className="px-6 md:px-12 pb-16 max-w-5xl mx-auto w-full bg-gray-50 py-14">
        <p className="text-xl font-semibold mb-1">Featured articles</p>
        <p className="text-sm text-gray-500 mb-6">Guidance from our editorial team</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <ArticleRow
            to="/article/pet-insurance"
            icon={HeartIcon}
            iconBg="bg-green-100"
            iconColor="text-green-700"
            title="Choosing the right pet insurance"
            meta="5 min read"
          />
          <ArticleRow
            to="/article/pet-insurance"
            icon={BoneIcon}
            iconBg="bg-amber-100"
            iconColor="text-amber-700"
            title="Best food by breed and age"
            meta="4 min read"
          />
        </div>
      </section>

      <Footer />

      {/* Mobile bottom nav */}
      <nav className="md:hidden flex justify-around py-3 border-t border-gray-200 fixed bottom-0 left-0 right-0 bg-white">
        <Link to="/"><HomeIcon className="size-5 text-blue-600" /></Link>
        <Link to="/article/pet-insurance"><StethoscopeIcon className="size-5 text-gray-400" /></Link>
        <Link to="/insurance"><ShieldIcon className="size-5 text-gray-400" /></Link>
        <UserIcon className="size-5 text-gray-400" />
      </nav>
    </div>
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

function ArticleRow({ to, icon: Icon, iconBg, iconColor, title, meta }) {
  return (
    <Link to={to} className="flex gap-3 items-center bg-white rounded-lg p-4 hover:shadow-sm transition-shadow">
      <div className={`size-10 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
        <Icon className={`size-[18px] ${iconColor}`} />
      </div>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-gray-400">{meta}</p>
      </div>
    </Link>
  );
}