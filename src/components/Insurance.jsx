import { IconCheck as CheckIcon } from '@tabler/icons-react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import insuranceHero from '../assets/heroes/insurance.jpg';

const plans = [
  { name: "Basic", price: 18, desc: "Accident-only coverage", featured: false, features: ["Accidents and injuries", "24/7 claims support"] },
  { name: "Complete", price: 34, desc: "Accident, illness, and hereditary conditions", featured: true, features: ["Everything in Basic", "Illness and hereditary conditions", "Prescription coverage"] },
  { name: "Premium", price: 52, desc: "Everything plus wellness and dental", featured: false, features: ["Everything in Complete", "Routine wellness visits", "Dental care"] },
];

export default function Insurance() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <PageHero
        image={insuranceHero}
        badge="Pet insurance"
        title="Coverage that keeps up with your pet"
        subtitle="Compare plans side by side and find the right level of protection."
      />

      <div className="max-w-5xl mx-auto w-full px-6 md:px-12 py-12 flex-1">
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-gray-50 rounded-xl p-6 flex flex-col ${plan.featured ? "border-2 border-blue-500" : "border border-transparent"}`}
            >
              {plan.featured && (
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-lg self-start mb-3">
                  Most popular
                </span>
              )}
              <p className="font-semibold">{plan.name}</p>
              <p className="text-3xl font-bold mt-2">
                ${plan.price}<span className="text-sm font-normal text-gray-400">/mo</span>
              </p>
              <p className="text-sm text-gray-500 mt-2 mb-5">{plan.desc}</p>
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckIcon className="size-4 text-green-600 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button className="w-full h-11 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
                Get a quote
              </button>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-6 text-center">
          Prices shown are illustrative examples. Actual premiums vary by breed, age, and location.
        </p>
      </div>

      <Footer />
    </div>
  );
}