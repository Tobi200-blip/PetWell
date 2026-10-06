import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconStethoscope as StethoscopeIcon,
  IconDroplet as DropletIcon,
  IconHome2 as HomeIcon,
  IconSchool as SchoolIcon,
  IconChevronRight as ChevronRightIcon,
  IconMapPin as MapPinIcon,
} from '@tabler/icons-react';
import Navbar from './Navbar';
import Footer from './Footer';

const services = [
  {
    icon: StethoscopeIcon,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Find a vet",
    desc: "Search licensed veterinarians near you",
  },
  {
    icon: DropletIcon,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Grooming",
    desc: "Baths, haircuts, nail trims, and more",
  },
  {
    icon: HomeIcon,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "Boarding & daycare",
    desc: "Trusted overnight stays while you're away",
  },
  {
    icon: SchoolIcon,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    title: "Training classes",
    desc: "Obedience, puppy basics, and behavior support",
  },
];

export default function Services() {
  const [zip, setZip] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (zip.trim().length >= 3) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <section className="px-6 md:px-12 py-12 md:py-16 bg-blue-50 text-center">
        <p className="text-2xl md:text-4xl font-semibold mb-3">Care beyond the basics</p>
        <p className="text-sm md:text-base text-gray-500 max-w-md mx-auto">
          Find trusted vets, groomers, boarding, and trainers near you
        </p>
      </section>

      <section className="max-w-3xl mx-auto w-full px-6 py-10">
        <form onSubmit={handleSearch} className="flex gap-2 mb-10">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 h-11 flex-1">
            <MapPinIcon className="size-4 text-gray-400" />
            <input
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Enter your zip code"
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-white px-5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Search
          </button>
        </form>

        {submitted && (
          <p className="text-sm text-blue-600 bg-blue-50 rounded-lg px-4 py-3 mb-8">
            Showing results near {zip}. Service listings are coming soon to this area.
          </p>
        )}

        <div className="flex flex-col gap-3">
          {services.map(({ icon: Icon, iconBg, iconColor, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-4 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className={`size-11 rounded-lg ${iconBg} flex items-center justify-center shrink-0`}>
                <Icon className={`size-5 ${iconColor}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
              </div>
              <ChevronRightIcon className="size-4 text-gray-400" />
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 rounded-xl p-6 text-center">
          <p className="text-sm font-medium mb-1">Not sure where to start?</p>
          <p className="text-xs text-gray-500 mb-4">
            Browse breed-specific care guides for tailored advice first.
          </p>
          <Link
            to="/breeds"
            className="inline-block bg-white border border-gray-300 text-sm font-medium px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View breed guides
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}