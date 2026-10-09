import { Link } from 'react-router-dom';
import {
  IconStethoscope as StethoscopeIcon,
  IconHeart as HeartIcon,
  IconShieldCheck as ShieldIcon,
} from '@tabler/icons-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import aboutHero from '../assets/heroes/about.jpg';

const values = [
  { icon: StethoscopeIcon, title: "Expert-written", desc: "Health content is written with veterinary accuracy in mind and always points back to licensed professionals." },
  { icon: HeartIcon, title: "Pet-first", desc: "Every guide is built around what's best for the animal, not what's easiest to sell." },
  { icon: ShieldIcon, title: "Transparent", desc: "Clear information on insurance, costs, and care, with no hidden agendas." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <PageHero
        image={aboutHero}
        badge="About us"
        title="About PetWell"
        subtitle="We help pet parents make confident decisions about food, health, and insurance at every stage of their pet's life."
      />

      <section className="max-w-4xl mx-auto w-full px-6 py-14 flex-1">
        <p className="text-xl font-semibold mb-6 text-center">What we stand for</p>
        <div className="grid sm:grid-cols-3 gap-5">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-gray-50 rounded-xl p-5">
              <div className="size-10 rounded-lg bg-blue-100 flex items-center justify-center mb-3">
                <Icon className="size-5 text-blue-600" />
              </div>
              <p className="text-sm font-semibold mb-1">{title}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}