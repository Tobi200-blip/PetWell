import { Link } from 'react-router-dom';
import { IconPaw as PawIcon } from '@tabler/icons-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="size-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
          <PawIcon className="size-7 text-blue-600" />
        </div>
        <p className="text-5xl font-bold text-gray-900 mb-2">404</p>
        <p className="text-lg font-medium text-gray-700 mb-2">This page wandered off</p>
        <p className="text-sm text-gray-500 mb-8 max-w-sm">
          We couldn't find the page you're looking for. It may have been moved, renamed, or doesn't exist yet.
        </p>
        <div className="flex gap-3">
          <Link
            to="/"
            className="bg-gray-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            Back to home
          </Link>
          <Link
            to="/breeds"
            className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            Browse breeds
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}