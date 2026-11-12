import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconCheck as CheckIcon,
  IconClock as ClockIcon,
  IconBook2 as BookIcon,
  IconArrowRight as ArrowRightIcon,
} from '@tabler/icons-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import IconBadge from './IconBadge';
import QuoteForm from './QuoteForm';
import insuranceHero from '../assets/heroes/insurance.jpg';

// Preview of planned cover levels only. No prices until real plans are confirmed.
const plans = [
  {
    name: "Basic",
    desc: "Accident-only cover",
    features: ["Accidents and injuries", "Claims support"],
  },
  {
    name: "Complete",
    desc: "Accident, illness, and hereditary conditions",
    features: ["Everything in Basic", "Illness and hereditary conditions", "Prescription cover"],
  },
  {
    name: "Premium",
    desc: "Everything, plus wellness and dental",
    features: ["Everything in Complete", "Routine wellness visits", "Dental care"],
  },
];

export default function Insurance() {
  const [notifyPlan, setNotifyPlan] = useState(null);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <PageHero
        image={insuranceHero}
        badge="Pet insurance"
        title="Pet insurance, coming soon"
        subtitle="Preview the cover levels we are planning, and get notified when plans open."
      />

      <div className="max-w-5xl mx-auto w-full px-6 md:px-12 py-12 flex-1">
        {/* Notice */}
        <div className="flex gap-4 bg-blue-50 border border-blue-100 rounded-xl p-5 mb-10">
          <IconBadge icon={ClockIcon} color="blue" size="md" />
          <div>
            <p className="text-sm font-semibold mb-1">Plans and pricing are not available yet</p>
            <p className="text-sm text-gray-600 leading-relaxed">
              We are still finalizing plan details and pricing. The cover levels below are previews only and are not an offer of insurance. Join the waiting list and we will email you when plans open.
            </p>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col"
            >
              <span className="text-xs bg-blue-100 text-blue-700 font-medium px-3 py-1 rounded-full self-start mb-3">
                Coming soon
              </span>
              <p className="font-semibold text-lg">{plan.name}</p>
              <p className="text-sm text-gray-600 mt-1 mb-4">{plan.desc}</p>
              <p className="text-base font-semibold text-gray-500 mb-5">Pricing coming soon</p>

              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Planned cover
              </p>
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckIcon className="size-4 text-green-600 shrink-0" stroke={2.5} /> {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setNotifyPlan(plan.name)}
                className="w-full h-11 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Notify me
              </button>
            </div>
          ))}
        </div>

        {/* Learn first */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5 bg-white border border-gray-200 rounded-xl p-6">
          <IconBadge icon={BookIcon} color="green" size="lg" />
          <div className="flex-1">
            <p className="font-semibold mb-1">Not sure what to look for in pet insurance?</p>
            <p className="text-sm text-gray-600">
              Read our guide to how pet insurance works, the types of cover, and what to check before you buy.
            </p>
          </div>
          <Link
            to="/articles/choosing-pet-insurance"
            className="inline-flex items-center justify-center gap-1 h-11 px-5 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors whitespace-nowrap"
          >
            Read the guide <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>

      {notifyPlan && <QuoteForm plan={notifyPlan} onClose={() => setNotifyPlan(null)} />}

      <Footer />
    </div>
  );
}