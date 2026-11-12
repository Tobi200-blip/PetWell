import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from '@tabler/icons-react';
import { submitForm, isValidEmail } from '../services/formService';
import Logo from './Logo';

// Add your real social page URLs below. An icon only appears once it has a URL,
// so the footer never shows buttons that lead nowhere.
const socials = [
  { label: 'Facebook', icon: IconBrandFacebook, href: '' },
  { label: 'Instagram', icon: IconBrandInstagram, href: '' },
  { label: 'X', icon: IconBrandX, href: '' },
].filter((s) => s.href);

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
    <footer className="bg-blue-900 text-blue-100">
      {/* Newsletter */}
      <div className="border-b border-blue-800 px-6 md:px-12 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg">Join our pet care newsletter</p>
            <p className="text-sm text-blue-200 mt-1">
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
                className="bg-blue-800 text-white placeholder:text-blue-300 text-sm px-4 py-2.5 rounded-lg outline-none flex-1 sm:w-64 focus:ring-2 focus:ring-blue-300 disabled:opacity-60"
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
                className="bg-white text-blue-700 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-colors whitespace-nowrap disabled:opacity-60"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            <p
              aria-live="polite"
              className={`text-xs mt-2 min-h-4 ${
                status === 'success'
                  ? 'text-green-300'
                  : status === 'error'
                  ? 'text-red-300'
                  : 'text-blue-300'
              }`}
            >
              {status === 'success' || status === 'error' ? (
                message
              ) : (
                <>
                  By subscribing you agree to our{' '}
                  <Link to="/privacy" className="underline hover:text-white">
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
          <div className="col-span-2 sm:col-span-1">
            <Logo onDark className="mb-4" />
            <p className="text-sm text-blue-200 max-w-xs">
              Practical pet care guides, breed profiles, and insurance information, all in one place.
            </p>
          </div>
          <FooterColumn
            title="Explore"
            links={[
              { label: "Dog breeds", to: "/breeds" },
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
      <div className="border-t border-blue-800 px-6 md:px-12 py-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-300">
            © {new Date().getFullYear()} AllPetsLoft. All rights reserved.
          </p>
          {socials.length > 0 && (
            <div className="flex gap-3">
              {socials.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-9 rounded-full bg-blue-800 text-blue-100 flex items-center justify-center hover:bg-white hover:text-blue-700 transition-colors"
                >
                  <Icon className="size-[18px]" stroke={2} />
                </a>
              ))}
            </div>
          )}
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
            <Link to={to} className="text-sm text-blue-200 hover:text-white transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}