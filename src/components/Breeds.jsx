import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  IconSearch as SearchIcon,
  IconDog as DogIcon,
  IconX as XIcon,
} from '@tabler/icons-react';
import { getBreeds, getBreedGroups } from '../services/breedService';
import { getBreedImage } from '../utils/breedImages';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import breedsHero from '../assets/heroes/breeds.jpg';

const breeds = getBreeds();
const groups = getBreedGroups();

const PAGE_SIZE = 12; // raise to 24 once the library grows
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const sizes = ["All sizes", "Small", "Medium", "Large", "Giant"];

export default function Breeds() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [visible, setVisible] = useState(PAGE_SIZE);

  // Filters live in the URL, so a filtered view can be shared or bookmarked
  const query = searchParams.get('q') || '';
  const size = searchParams.get('size') || 'All sizes';
  const group = searchParams.get('group') || 'All groups';
  const letter = searchParams.get('letter') || '';

  const setParam = (key, value, defaultValue = '') => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === defaultValue) next.delete(key);
    else next.set(key, value);
    setSearchParams(next, { replace: true });
    setVisible(PAGE_SIZE);
  };

  const clearAll = () => {
    setSearchParams({}, { replace: true });
    setVisible(PAGE_SIZE);
  };

  // Everything except the A-Z letter, so the letter bar knows which letters have results
  const matchesFilters = useMemo(() => {
    const q = query.trim().toLowerCase();
    return breeds.filter(
      (b) =>
        (!q || b.name.toLowerCase().includes(q)) &&
        (size === 'All sizes' || b.size === size) &&
        (group === 'All groups' || b.group === group)
    );
  }, [query, size, group]);

  const availableLetters = useMemo(
    () => new Set(matchesFilters.map((b) => b.name[0].toUpperCase())),
    [matchesFilters]
  );

  const filtered = useMemo(
    () =>
      letter
        ? matchesFilters.filter((b) => b.name[0].toUpperCase() === letter)
        : matchesFilters,
    [matchesFilters, letter]
  );

  const shown = filtered.slice(0, visible);
  const hasFilters = query || size !== 'All sizes' || group !== 'All groups' || letter;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <PageHero
        image={breedsHero}
        badge="Breed guides"
        title="Find the right dog breed for your life"
        subtitle="Size, temperament, exercise needs, and common health issues for every breed."
      >
        <div className="flex items-center gap-2 bg-white rounded-lg px-3 h-11">
          <SearchIcon className="size-4 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setParam('q', e.target.value)}
            placeholder="Search breeds..."
            aria-label="Search breeds"
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </PageHero>

      <div className="max-w-5xl mx-auto w-full px-6 md:px-12 py-8 flex-1">
        {/* Filters */}
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-5">
          <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 flex-1">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setParam('size', s, 'All sizes')}
                aria-pressed={size === s}
                className={`text-sm px-4 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  size === s ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <select
            value={group}
            onChange={(e) => setParam('group', e.target.value, 'All groups')}
            aria-label="Filter by breed group"
            className="text-sm bg-gray-50 border border-gray-200 rounded-lg px-3 h-10 outline-none"
          >
            <option>All groups</option>
            {groups.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>

        {/* A-Z index */}
        <div className="flex gap-1 overflow-x-auto pb-3 mb-4 border-b border-gray-100">
          <button
            onClick={() => setParam('letter', '')}
            aria-pressed={!letter}
            className={`text-xs font-medium px-3 py-1.5 rounded-md shrink-0 ${
              !letter ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            All
          </button>
          {ALPHABET.map((l) => {
            const enabled = availableLetters.has(l);
            return (
              <button
                key={l}
                disabled={!enabled}
                onClick={() => setParam('letter', letter === l ? '' : l)}
                aria-pressed={letter === l}
                className={`text-xs font-medium size-8 rounded-md shrink-0 transition-colors ${
                  letter === l
                    ? 'bg-blue-600 text-white'
                    : enabled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                {l}
              </button>
            );
          })}
        </div>

        {/* Result count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-gray-500" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? 'breed' : 'breeds'}
          </p>
          {hasFilters && (
            <button
              onClick={clearAll}
              className="inline-flex items-center gap-1 text-sm text-blue-600 hover:underline"
            >
              <XIcon className="size-3.5" /> Clear filters
            </button>
          )}
        </div>

        {/* Breed grid */}
        {shown.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shown.map((breed) => (
              <BreedCard key={breed.slug} breed={breed} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <p className="text-sm font-medium mb-1">No breeds match your filters</p>
            <p className="text-xs text-gray-500 mb-4">Try a different search or clear your filters.</p>
            <button
              onClick={clearAll}
              className="text-sm bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Load more */}
        {shown.length < filtered.length && (
          <div className="text-center mt-10">
            <p className="text-xs text-gray-400 mb-3">
              Showing {shown.length} of {filtered.length}
            </p>
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="bg-gray-900 text-white px-6 h-11 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Load more breeds
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

function BreedCard({ breed }) {
  const image = getBreedImage(breed.slug);

  return (
    <Link
      to={`/breed/${breed.slug}`}
      className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="h-44 bg-blue-50 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={breed.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <DogIcon className="size-10 text-blue-600" />
          </div>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm font-semibold">{breed.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{breed.group} group - {breed.size}</p>
        <p className="text-xs text-gray-500 mt-2 line-clamp-1">{breed.temperament}</p>
      </div>
    </Link>
  );
}