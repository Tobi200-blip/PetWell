import { Link } from 'react-router-dom';
import {
  IconCircleCheck as CircleCheckIcon,
  IconCoin as CoinIcon,
  IconClock as ClockIcon,
} from '@tabler/icons-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import healthHero from '../assets/heroes/health.jpg';

const sections = [
  { icon: CircleCheckIcon, iconColor: "text-green-700", title: "What to look for", body: "Coverage limits, waiting periods, and whether hereditary conditions are included." },
  { icon: CoinIcon, iconColor: "text-amber-700", title: "Average costs", body: "Monthly premiums vary by breed, age, and location - typically $20 to $55." },
  { icon: ClockIcon, iconColor: "text-blue-700", title: "When to enroll", body: "Earlier is better - pre-existing conditions are rarely covered." },
];

export default function HealthArticle() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <PageHero
        image={healthHero}
        badge="Wellness - 5 min read"
        title="Choosing the right pet insurance"
        subtitle="Updated Sep 2026"
      />

      <div className="max-w-2xl mx-auto w-full px-6 py-10 flex-1">
        <div className="flex flex-col gap-3">
          {sections.map(({ icon: Icon, iconColor, title, body }) => (
            <div key={title} className="bg-gray-50 rounded-lg p-5">
              <p className="font-medium mb-1 flex items-center gap-2">
                <Icon className={`size-[18px] ${iconColor}`} />
                {title}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <Link to="/insurance" className="inline-block mt-8">
          <button className="px-6 h-11 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            Compare plans for your pet
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
}