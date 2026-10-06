import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  IconArrowLeft as ArrowLeftIcon,
  IconSearch as SearchIcon,
  IconChevronRight as ChevronRightIcon,
  IconDog as DogIcon,
} from '@tabler/icons-react';
import { breeds } from '../data/breeds';
import { getBreedImage } from '../utils/breedImages';
import Footer from './Footer';

const sizes = ["All sizes", "Small", "Medium", "Large", "Giant"];

export default function Breeds() {
  const [query, setQuery] = useState('');
  const [sizeFilter, setSizeFilter] = useState('All sizes');

  const filtered = useMemo(() => {
    return breeds.filter((b) => {
      const matchesQuery = b.name.toLowerCase().includes(query.toLowerCase());
      const matchesSize = sizeFilter === 'All sizes' || b.size === sizeFilter;
      return matchesQuery && matchesSize;
    });
  }, [query, sizeFilter]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex items-center gap-2 px-6 md:px-12 py-4 border-b border-gray-200">
        <Link to="/"><ArrowLeftIcon className="size-5 text-gray-500" /></Link>
        <span className="font-medium">Dog breeds</span>
      </header>

      <div className="max-w-2xl mx-auto w-full px-6 py-6 flex-1">
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 h-11 mb-4">
          <SearchIcon className="size-4 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search breeds..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-5">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSizeFilter(s)}
              className={`text-sm px-4 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                sizeFilter === s ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-400 mb-3">{filtered.length} breeds</p>

        <div className="flex flex-col divide-y divide-gray-100">
          {filtered.map((breed) => {
            const image = getBreedImage(breed.slug);
            return (
              <Link
                key={breed.slug}
                to={`/breed/${breed.slug}`}
                className="flex items-center gap-3 py-3 hover:bg-gray-50 transition-colors rounded-lg px-2 -mx-2"
              >
                {image ? (
                  <img
                    src={image}
                    alt={breed.name}
                    className="size-11 rounded-full object-cover shrink-0"
                  />
                ) : (
                  <div className="size-11 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <DogIcon className="size-5 text-blue-600" />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-sm font-medium">{breed.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{breed.size} - {breed.temperament}</p>
                </div>
                <ChevronRightIcon className="size-4 text-gray-400" />
              </Link>
            );
          })}
          {filtered.length === 0 && (
            <p className="text-sm text-gray-400 py-8 text-center">No breeds match your search.</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}