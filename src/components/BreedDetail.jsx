import { Link, useParams } from 'react-router-dom';
import {
  IconArrowLeft as ArrowLeftIcon,
  IconDog as DogIcon,
  IconBone as BoneIcon,
} from '@tabler/icons-react';
import { getBreedBySlug } from '../data/breeds';
import { getBreedImage } from '../utils/breedImages';
import Footer from './Footer';
import NotFound from './NotFound';

export default function BreedDetail() {
  const { slug } = useParams();
  const breed = getBreedBySlug(slug);
  const image = getBreedImage(slug);

  if (!breed) return <NotFound />;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="flex items-center gap-2 px-6 md:px-12 py-4 border-b border-gray-200">
        <Link to="/breeds"><ArrowLeftIcon className="size-5 text-gray-500" /></Link>
        <span className="font-medium">{breed.name}</span>
      </header>

      <div className="max-w-3xl mx-auto w-full px-6 py-10 text-center">
        {image ? (
          <img
            src={image}
            alt={breed.name}
            className="size-32 rounded-full object-cover mx-auto mb-4"
          />
        ) : (
          <div className="size-24 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
            <DogIcon className="size-10 text-blue-700" />
          </div>
        )}
        <p className="text-2xl font-semibold">{breed.name}</p>
        <p className="text-gray-500 mt-1">{breed.size} breed - {breed.temperament}</p>
      </div>

      <div className="max-w-3xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-3 px-6 pb-10">
        <StatCard label="Lifespan" value={breed.lifespan} />
        <StatCard label="Weight" value={breed.weight} />
        <StatCard label="Exercise" value={breed.exercise} />
        <StatCard label="Grooming" value={breed.grooming} />
      </div>

      <div className="max-w-3xl mx-auto w-full px-6 pb-10">
        <p className="text-sm text-gray-500 mb-3">Recommended food</p>
        <div className="flex gap-3 items-center bg-gray-50 rounded-lg p-4">
          <BoneIcon className="size-6 text-amber-600" />
          <div>
            <p className="text-sm font-medium">{breed.food}</p>
            <p className="text-xs text-gray-400">{breed.foodNote}</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto w-full px-6 pb-10">
        <p className="text-sm text-gray-500 mb-3">Common health issues</p>
        <div className="flex flex-wrap gap-2">
          {breed.issues.map((tag) => (
            <span key={tag} className="text-sm bg-red-100 text-red-700 px-3 py-1.5 rounded-lg">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-3">
          This is general breed information, not a diagnosis. Always consult a licensed veterinarian about your pet's specific health.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full px-6 pb-16">
        <Link to="/insurance">
          <button className="w-full sm:w-auto px-6 h-11 bg-gray-900 text-white rounded-lg text-sm font-medium">
            Compare insurance plans
          </button>
        </Link>
      </div>

      <Footer />
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