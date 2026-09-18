import { Link } from 'react-router-dom';
import { IconPaw as PawIcon } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 px-6 md:px-12 py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-8">
        <div>
          <span className="font-semibold text-lg flex items-center gap-2">
            <PawIcon className="size-5 text-blue-600" />
            PetWell
          </span>
          <p className="text-sm text-gray-500 mt-2 max-w-xs">
            Food, health, and insurance guidance for every pet.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <div>
            <p className="text-sm font-medium mb-2">Explore</p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
              <li><Link to="/species/dogs" className="hover:text-gray-900">Species</Link></li>
              <li><Link to="/article/pet-insurance" className="hover:text-gray-900">Health articles</Link></li>
              <li><Link to="/insurance" className="hover:text-gray-900">Insurance</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Company</p>
            <ul className="flex flex-col gap-1.5 text-sm text-gray-500">
              <li><span className="hover:text-gray-900 cursor-pointer">About</span></li>
              <li><span className="hover:text-gray-900 cursor-pointer">Contact</span></li>
              <li><span className="hover:text-gray-900 cursor-pointer">Privacy policy</span></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-400 text-center mt-8">
        © 2026 PetWell. All rights reserved.
      </p>
    </footer>
  );
}