import Navbar from './Navbar';
import Footer from './Footer';

export default function LegalLayout({ title, updated, children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="max-w-3xl mx-auto w-full px-6 py-12 flex-1">
        <h1 className="text-3xl font-semibold mb-2">{title}</h1>
        <p className="text-sm text-gray-400 mb-10">Last updated: {updated}</p>
        <div className="flex flex-col gap-8">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export function Section({ heading, children }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-2">{heading}</h2>
      <p className="text-sm text-gray-600 leading-relaxed">{children}</p>
    </section>
  );
}