import { Link } from 'react-router-dom';
import Footer from './Footer';
import { IconArrowLeft as ArrowLeftIcon } from '@tabler/icons-react';

export default function Insurance() {
  const plans = [
    { name: "Basic", price: 18, desc: "Accident-only coverage", featured: false },
    { name: "Complete", price: 34, desc: "Accident, illness, and hereditary conditions", featured: true },
    { name: "Premium", price: 52, desc: "Everything plus wellness and dental", featured: false },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center gap-2 px-6 md:px-12 py-4 border-b border-gray-200">
        <Link to="/"><ArrowLeftIcon className="size-5 text-gray-500" /></Link>
        <span className="font-medium">Insurance plans</span>
      </header>

      <p className="max-w-3xl mx-auto px-6 pt-6 text-sm text-gray-500">
        For: Golden retriever, 3 years old
      </p>

      <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-4 p-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-gray-50 rounded-xl p-5 ${plan.featured ? "border-2 border-blue-500" : ""}`}
          >
            {plan.featured && (
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-lg inline-block mb-3">
                Most popular
              </span>
            )}
            <div className="flex justify-between items-center">
              <span className="font-medium">{plan.name}</span>
              <span className="text-lg font-medium">
                ${plan.price}<span className="text-xs text-gray-400">/mo</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{plan.desc}</p>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <button className="w-full sm:w-auto px-6 h-11 bg-gray-900 text-white rounded-lg text-sm font-medium">
          Get a quote
        </button>
      </div>
      <Footer />
    </div>
  );
}