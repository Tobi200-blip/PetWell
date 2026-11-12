import { Link } from 'react-router-dom';
import {
  IconBook2 as BookIcon,
  IconHeart as HeartIcon,
  IconShieldCheck as ShieldIcon,
} from '@tabler/icons-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import IconBadge from './IconBadge';
import aboutHero from '../assets/heroes/about.jpg';

const values = [
  {
    icon: BookIcon,
    color: 'green',
    title: "Carefully researched",
    desc: "Our guides are researched with care and written in plain language. For any medical decision, they always point you back to a licensed veterinarian.",
  },
  {
    icon: HeartIcon,
    color: 'red',
    title: "Pet-first",
    desc: "Every guide is built around what is best for the animal, not what is easiest to sell.",
  },
  {
    icon: ShieldIcon,
    color: 'blue',
    title: "Transparent",
    desc: "Clear information on insurance, costs, and care, with no hidden agendas.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <PageHero
        image={aboutHero}
        badge="About us"
        title="About AllPetsLoft"
        subtitle="We help pet owners make confident decisions about food, health, and insurance at every stage of their pet's life."
      />

      <section className="max-w-4xl mx-auto w-full px-6 py-14 flex-1">
        <p className="text-xl font-semibold mb-6 text-center">What we stand for</p>
        <div className="grid sm:grid-cols-3 gap-5">
          {values.map(({ icon, color, title, desc }) => (
            <div key={title} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
              <IconBadge icon={icon} color={color} size="md" className="mb-3" />
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