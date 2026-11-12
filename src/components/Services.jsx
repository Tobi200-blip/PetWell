import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconStethoscope as StethoscopeIcon,
  IconDroplet as DropletIcon,
  IconHome2 as HomeIcon,
  IconSchool as SchoolIcon,
  IconMapPin as MapPinIcon,
} from '@tabler/icons-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import IconBadge from './IconBadge';
import servicesHero from '../assets/heroes/services.jpg';

const services = [
  {
    icon: StethoscopeIcon,
    color: "blue",
    title: "Find a vet",
    desc: "Search licensed veterinarians near you",
  },
  {
    icon: DropletIcon,
    color: "green",
    title: "Grooming",
    desc: "Baths, haircuts, nail trims, and more",
  },
  {
    icon: HomeIcon,
    color: "amber",
    title: "Boarding & daycare",
    desc: "Trusted overnight stays while you're away",
  },
  {
    icon: SchoolIcon,
    color: "red",
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

      <PageHero
        image={servicesHero}
        badge="Pet services"
        title="Care beyond the basics"
        subtitle="Find trusted vets, groomers, boarding, and trainers near you."
      />

      <section className="max-w-3xl mx-auto w-full px-6 py-10 flex-1">
        <form onSubmit={handleSearch} className="flex gap-2 mb-10">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 h-11 flex-1">
            <MapPinIcon className="size-4 text-gray-500" stroke={2} />
            <input
              type="text"
              value={zip}
              onChange={(e) => {
                setZip(e.target.value);
                setSubmitted(false);
              }}
              placeholder="Enter your zip code"
              aria-label="Your location"
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
          <p className="text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-8">
            Thanks. We don't have local listings for "{zip}" yet, but our services directory is on its way.
          </p>
        )}

        <div className="flex flex-col gap-3">
          {services.map(({ icon, color, title, desc }) => (
            <div
              key={title}
              className="flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-lg p-4"
            >
              <IconBadge icon={icon} color={color} size="md" />
              <div className="flex-1">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
              </div>
              <span className="text-xs bg-blue-100 text-blue-700 font-medium px-3 py-1 rounded-full whitespace-nowrap">
                Coming soon
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-gray-50 border border-gray-100 rounded-xl p-6 text-center">
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