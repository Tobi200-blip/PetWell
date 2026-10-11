import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconX as XIcon } from '@tabler/icons-react';
import { getBreeds } from '../services/breedService';
import { submitForm, isValidEmail } from '../services/formService';

const breeds = getBreeds();
const ageOptions = ['Under 1 year', '1 to 3 years', '4 to 7 years', '8 years or older'];

export default function QuoteForm({ plan, onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    petName: '',
    breed: '',
    age: '',
    _gotcha: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverError, setServerError] = useState('');

  // Close on Escape, and stop the page behind from scrolling
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!isValidEmail(form.email)) newErrors.email = 'Please enter a valid email';
    if (!form.petName.trim()) newErrors.petName = "Please enter your pet's name";
    if (!form.breed) newErrors.breed = 'Please choose a breed';
    if (!form.age) newErrors.age = "Please choose your pet's age";
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

    if (form._gotcha) {
      setStatus('success');
      return;
    }

    setStatus('loading');
    setServerError('');
    const result = await submitForm('quote', {
      plan,
      name: form.name.trim(),
      email: form.email.trim(),
      petName: form.petName.trim(),
      breed: form.breed,
      age: form.age,
    });

    if (result.ok) {
      setStatus('success');
    } else {
      setStatus('error');
      setServerError(result.error);
    }
  };

  const inputClass =
    'w-full bg-gray-50 border border-gray-200 rounded-lg px-3 h-11 text-sm outline-none focus:border-blue-500 disabled:opacity-60';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-title"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-start justify-between p-6 pb-2">
          <div>
            <h2 id="quote-title" className="text-xl font-semibold">
              Get a quote
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {plan} plan. Tell us about your pet and we'll follow up.
            </p>
          </div>
          <button onClick={onClose} aria-label="Close" className="p-1 -mr-1 text-gray-400 hover:text-gray-700">
            <XIcon className="size-5" />
          </button>
        </div>

        {status === 'success' ? (
          <div className="p-6 pt-4">
            <div className="bg-green-50 text-green-700 rounded-xl p-5 text-center">
              <p className="font-semibold mb-1">Request received</p>
              <p className="text-sm">
                Thanks, {form.name.split(' ')[0] || 'there'}. We'll be in touch at your email address soon.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full h-11 mt-4 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="p-6 pt-4 flex flex-col gap-4">
            {status === 'error' && (
              <div role="alert" className="bg-red-50 text-red-700 text-sm rounded-lg px-4 py-3">
                {serverError}
              </div>
            )}

            <Field label="Your name" htmlFor="q-name" error={errors.name}>
              <input id="q-name" name="name" value={form.name} onChange={handleChange}
                disabled={status === 'loading'} autoFocus className={inputClass} />
            </Field>

            <Field label="Email" htmlFor="q-email" error={errors.email}>
              <input id="q-email" name="email" type="email" value={form.email} onChange={handleChange}
                disabled={status === 'loading'} className={inputClass} />
            </Field>

            <Field label="Pet's name" htmlFor="q-pet" error={errors.petName}>
              <input id="q-pet" name="petName" value={form.petName} onChange={handleChange}
                disabled={status === 'loading'} className={inputClass} />
            </Field>

            <div className="grid grid-cols-2 gap-3">
              <Field label="Breed" htmlFor="q-breed" error={errors.breed}>
                <select id="q-breed" name="breed" value={form.breed} onChange={handleChange}
                  disabled={status === 'loading'} className={inputClass}>
                  <option value="">Select</option>
                  {breeds.map((b) => (
                    <option key={b.slug} value={b.name}>{b.name}</option>
                  ))}
                  <option value="Mixed or other">Mixed or other</option>
                </select>
              </Field>

              <Field label="Age" htmlFor="q-age" error={errors.age}>
                <select id="q-age" name="age" value={form.age} onChange={handleChange}
                  disabled={status === 'loading'} className={inputClass}>
                  <option value="">Select</option>
                  {ageOptions.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </Field>
            </div>

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
              className="h-11 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Request my quote'}
            </button>

            <p className="text-xs text-gray-400 text-center">
              By submitting you agree to our{' '}
              <Link to="/privacy" className="underline hover:text-gray-600">privacy policy</Link>.
            </p>
          </form>
        )}
      </div>
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