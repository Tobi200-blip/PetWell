import { Link } from 'react-router-dom';
import Footer from './Footer';
import {
  IconArrowLeft as ArrowLeftIcon,
  IconCircleCheck as CircleCheckIcon,
  IconCoin as CoinIcon,
  IconClock as ClockIcon,
} from '@tabler/icons-react';

export default function HealthArticle() {
  const sections = [
    { icon: CircleCheckIcon, iconColor: "text-green-700", title: "What to look for", body: "Coverage limits, waiting periods, and whether hereditary conditions are included." },
    { icon: CoinIcon, iconColor: "text-amber-700", title: "Average costs", body: "Monthly premiums vary by breed, age, and location - typically $20 to $55." },
    { icon: ClockIcon, iconColor: "text-blue-700", title: "When to enroll", body: "Earlier is better - pre-existing conditions are rarely covered." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center gap-2 px-6 md:px-12 py-4 border-b border-gray-200">
        <Link to="/"><ArrowLeftIcon className="size-5 text-gray-500" /></Link>
        <span className="font-medium">Health articles</span>
      </header>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-lg">Wellness</span>
        <p className="text-2xl font-semibold mt-3 mb-1">Choosing the right pet insurance</p>
        <p className="text-sm text-gray-400 mb-6">5 min read - updated Sep 2026</p>

        <div className="flex flex-col gap-3">
          {sections.map(({ icon: Icon, iconColor, title, body }) => (
            <div key={title} className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium mb-1 flex items-center gap-2">
                <Icon className={`size-[18px] ${iconColor}`} />
                {title}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 pb-16">
        <Link to="/insurance">
          <button className="w-full sm:w-auto px-6 h-11 bg-white border border-gray-300 rounded-lg text-sm font-medium">
            Compare plans for your pet
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}