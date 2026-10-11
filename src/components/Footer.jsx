import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconPaw as PawIcon,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from '@tabler/icons-react';
import { submitForm, isValidEmail } from '../services/formService';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    if (!isValidEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    // Bots fill the hidden field; pretend success and send nothing
    if (honeypot) {
      setStatus('success');
      setMessage("You're subscribed. Thanks for joining!");
      return;
    }

    setStatus('loading');
    const result = await submitForm('newsletter', { email });

    if (result.ok) {
      setStatus('success');
      setMessage("You're subscribed. Thanks for joining!");
      setEmail('');
    } else {
      setStatus('error');
      setMessage(result.error);
    }
  };

  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      {/* Newsletter */}
      <div className="border-b border-gray-800 px-6 md:px-12 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg">Join our pet care newsletter</p>
            <p className="text-sm text-gray-400 mt-1">
              Breed tips, health reminders, and offers, monthly, no spam.
            </p>
          </div>

          <form onSubmit={handleSubscribe} noValidate className="w-full sm:w-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Your email"
                aria-label="Email address"
                disabled={status === 'loading'}
                className="bg-gray-800 text-white text-sm px-4 py-2.5 rounded-lg outline-none flex-1 sm:w-64 focus:ring-1 focus:ring-blue-500 disabled:opacity-60"
              />
              {/* Honeypot: hidden from people, visible to bots */}
              <input
                type="text"
                name="_gotcha"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap disabled:opacity-60"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            <p
              aria-live="polite"
              className={`text-xs mt-2 min-h-4 ${
                status === 'success' ? 'text-green-400' : status === 'error' ? 'text-red-400' : 'text-gray-500'
              }`}
            >
              {status === 'success' || status === 'error' ? (
                message
              ) : (
                <>
                  By subscribing you agree to our{' '}
                  <Link to="/privacy" className="underline hover:text-gray-300">
                    privacy policy
                  </Link>
                  .
                </>
              )}
            </p>
          </form>
        </div>
      </div>

      {/* Link columns */}
      <div className="px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <span className="text-white font-semibold text-base flex items-center gap-2 mb-4">
              <PawIcon className="size-5 text-blue-400" />
              PetWell
            </span>
            <p className="text-sm text-gray-400 max-w-xs">
              Expert-written guidance for every stage of your pet's life.
            </p>
          </div>
          <FooterColumn
            title="Explore"
            links={[
              { label: "Breed guides", to: "/breeds" },
              { label: "Learning hub", to: "/articles" },
              { label: "Insurance", to: "/insurance" },
              { label: "Pet services", to: "/services" },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { label: "About us", to: "/about" },
              { label: "Contact", to: "/contact" },
            ]}
          />
          <FooterColumn
            title="Legal"
            links={[
              { label: "Privacy policy", to: "/privacy" },
              { label: "Terms of service", to: "/terms" },
            ]}
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 px-6 md:px-12 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 PetWell. All rights reserved.</p>
          <div className="flex gap-4">
            <IconBrandFacebook className="size-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <IconBrandInstagram className="size-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <IconBrandX className="size-4 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <p className="text-white text-sm font-semibold mb-4">{title}</p>
      <ul className="flex flex-col gap-2.5">
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link to={to} className="text-sm text-gray-400 hover:text-white transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}