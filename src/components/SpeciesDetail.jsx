import { Link, useParams } from 'react-router-dom';
import {
  IconArrowLeft as ArrowLeftIcon,
  IconDog as DogIcon,
  IconBone as BoneIcon,
} from '@tabler/icons-react';
import { speciesData } from '../data/species';

export default function SpeciesDetail() {
  const { name } = useParams();
  const animal = speciesData[name] || speciesData.dogs;

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center gap-2 px-6 md:px-12 py-4 border-b border-gray-200">
        <Link to="/"><ArrowLeftIcon className="size-5 text-gray-500" /></Link>
        <span className="font-medium capitalize">{name}</span>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-10 text-center">
        <div className="size-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
          <DogIcon className="size-9 text-blue-700" />
        </div>
        <p className="text-2xl font-semibold">{animal.name}</p>
        <p className="text-gray-500 mt-1">{animal.tagline}</p>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 px-6 pb-10">
        <StatCard label="Lifespan" value={animal.lifespan} />
        <StatCard label="Weight" value={animal.weight} />
        <StatCard label="Exercise" value={animal.exercise} />
        <StatCard label="Grooming" value={animal.grooming} />
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-10">
        <p className="text-sm text-gray-500 mb-3">Recommended food</p>
        <div className="flex gap-3 items-center bg-gray-50 rounded-lg p-4">
          <BoneIcon className="size-6 text-amber-600" />
          <div>
            <p className="text-sm font-medium">{animal.food}</p>
            <p className="text-xs text-gray-400">{animal.foodNote}</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-10">
        <p className="text-sm text-gray-500 mb-3">Common health issues</p>
        <div className="flex flex-wrap gap-2">
          {animal.issues.map((tag) => (
            <span key={tag} className="text-sm bg-red-100 text-red-700 px-3 py-1.5 rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <Link to="/insurance">
          <button className="w-full sm:w-auto px-6 h-11 bg-gray-900 text-white rounded-lg text-sm font-medium">
            Compare insurance plans
          </button>
        </Link>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-gray-50 rounded-lg p-3 text-center">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="text-base font-medium mt-1">{value}</p>
    </div>
  );
}