import { Link } from 'react-router-dom';
import {
  IconPaw as PawIcon,
  IconMenu2 as MenuIcon,
  IconSearch as SearchIcon,
  IconDog as DogIcon,
  IconCat as CatIcon,
  IconFeather as FeatherIcon,
  IconFish as FishIcon,
  IconHeart as HeartIcon,
  IconBone as BoneIcon,
  IconHome as HomeIcon,
  IconStethoscope as StethoscopeIcon,
  IconShield as ShieldIcon,
  IconUser as UserIcon,
} from '@tabler/icons-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-gray-200">
        <span className="font-semibold text-lg flex items-center gap-2">
          <PawIcon className="size-5 text-blue-600" />
          PetWell
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900">Home</Link>
          <Link to="/article/pet-insurance" className="hover:text-gray-900">Health</Link>
          <Link to="/insurance" className="hover:text-gray-900">Insurance</Link>
          <span className="hover:text-gray-900 cursor-pointer">Account</span>
        </nav>
        <button className="md:hidden">
          <MenuIcon className="size-6 text-gray-500" />
        </button>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 py-12 md:py-20 text-center bg-blue-50">
        <p className="text-2xl md:text-4xl font-semibold mb-3">Everything your pet needs</p>
        <p className="text-sm md:text-base text-gray-500 mb-6 max-w-xl mx-auto">
          Food, health, and insurance guides for every species
        </p>
        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 h-11 max-w-md mx-auto">
          <SearchIcon className="size-4 text-gray-400" />
          <span className="text-sm text-gray-400">Search breeds, food, articles...</span>
        </div>
      </section>

      {/* Species grid */}
      <section className="px-6 md:px-12 py-10 max-w-5xl mx-auto">
        <p className="text-sm text-gray-500 mb-4">Browse by species</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: DogIcon, label: "Dogs", slug: "dogs" },
            { icon: CatIcon, label: "Cats", slug: "cats" },
            { icon: FeatherIcon, label: "Birds", slug: "birds" },
            { icon: FishIcon, label: "Fish", slug: "fish" },
          ].map(({ icon: Icon, label, slug }) => (
            <Link key={label} to={`/species/${slug}`} className="text-center group">
              <div className="size-16 rounded-full bg-gray-50 flex items-center justify-center mx-auto mb-2 group-hover:bg-blue-50 transition-colors">
                <Icon className="size-7 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured articles */}
      <section className="px-6 md:px-12 pb-16 max-w-5xl mx-auto">
        <p className="text-sm text-gray-500 mb-4">Featured articles</p>
        <div className="grid sm:grid-cols-2 gap-3">
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

function ArticleRow({ to, icon: Icon, iconBg, iconColor, title, meta }) {
  return (
    <Link to={to} className="flex gap-3 items-center bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
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