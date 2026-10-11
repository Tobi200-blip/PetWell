import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import contactHero from '../assets/heroes/contact.png';
import { submitForm, isValidEmail } from '../services/formService';

const emptyForm = { name: '', email: '', message: '', _gotcha: '' };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!isValidEmail(form.email)) newErrors.email = 'Please enter a valid email';
    if (form.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Bots fill the hidden field; pretend success and send nothing
    if (form._gotcha) {
      setStatus('success');
      return;
    }

    setStatus('loading');
    setServerError('');
    const result = await submitForm('contact', {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });

    if (result.ok) {
      setStatus('success');
      setForm(emptyForm);
    } else {
      setStatus('error');
      setServerError(result.error);
    }
  };

  const inputClass =
    'w-full bg-gray-50 border border-gray-200 rounded-lg px-3 text-sm outline-none focus:border-blue-500 disabled:opacity-60';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <PageHero
        image={contactHero}
        badge="Contact"
        title="We'd love to hear from you"
        subtitle="Questions, feedback, or partnership enquiries."
      />

      <div className="max-w-lg mx-auto w-full px-6 py-12 flex-1">
        {status === 'success' ? (
          <div className="bg-green-50 text-green-700 rounded-xl p-6 text-center">
            <p className="font-semibold mb-1">Message sent</p>
            <p className="text-sm mb-4">Thanks for reaching out. We'll get back to you soon.</p>
            <button
              onClick={() => setStatus('idle')}
              className="text-sm font-medium underline hover:no-underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            {status === 'error' && (
              <div role="alert" className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3">
                {serverError}
              </div>
            )}

            <Field label="Name" htmlFor="name" error={errors.name}>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                disabled={status === 'loading'}
                className={`${inputClass} h-11`}
              />
            </Field>
            <Field label="Email" htmlFor="email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                disabled={status === 'loading'}
                className={`${inputClass} h-11`}
              />
            </Field>
            <Field label="Message" htmlFor="message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                disabled={status === 'loading'}
                className={`${inputClass} py-2.5 resize-none`}
              />
            </Field>

            {/* Honeypot: hidden from people, visible to bots */}
            <input
              type="text"
              name="_gotcha"
              value={form._gotcha}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-gray-900 text-white h-11 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Send message'}
            </button>
          </form>
        )}
      </div>

      <Footer />
    </div>
  );
}

function Field({ label, htmlFor, error, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-medium block mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}