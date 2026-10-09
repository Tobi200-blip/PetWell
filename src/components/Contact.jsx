import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import PageHero from './PageHero';
import contactHero from '../assets/heroes/contact.png';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) newErrors.email = 'Please enter a valid email';
    if (form.message.trim().length < 10) newErrors.message = 'Message should be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // TODO: connect to a backend or form service (e.g. Formspree, EmailJS)
    setSent(true);
  };

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
        {sent ? (
          <div className="bg-green-50 text-green-700 rounded-xl p-6 text-center">
            <p className="font-semibold mb-1">Message sent</p>
            <p className="text-sm">Thanks for reaching out. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            <Field label="Name" error={errors.name}>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 h-11 text-sm outline-none focus:border-blue-500"
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 h-11 text-sm outline-none focus:border-blue-500"
              />
            </Field>
            <Field label="Message" error={errors.message}>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 resize-none"
              />
            </Field>
            <button
              type="submit"
              className="bg-gray-900 text-white h-11 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
            >
              Send message
            </button>
          </form>
        )}
      </div>

      <Footer />
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="text-sm font-medium block mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
    </div>
  );
}