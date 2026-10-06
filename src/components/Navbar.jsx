import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconPaw as PawIcon,
  IconMenu2 as MenuIcon,
  IconX as XIcon,
  IconSearch as SearchIcon,
  IconUser as UserIcon,
} from '@tabler/icons-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Shop by pet", to: "/breeds" },
    { label: "Health & Wellness", to: "/article/pet-insurance" },
    { label: "Pet Services", to: "/services" },
    { label: "Insurance", to: "/insurance" },
    { label: "Learning Hub", to: "/article/pet-insurance" },
  ];

  return (
    <>
      <header className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-gray-200 bg-white relative z-20">
        <Link to="/" className="font-semibold text-lg flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <PawIcon className="size-5 text-blue-600" />
          PetWell
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="hover:text-gray-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <SearchIcon className="size-5 text-gray-500 cursor-pointer" />
          <span className="text-sm text-gray-600 cursor-pointer">Account</span>
        </div>
        <button className="md:hidden" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <MenuIcon className="size-6 text-gray-500" />
        </button>
      </header>

      {/* Mobile slide-out menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <span className="font-semibold text-base flex items-center gap-2">
                <PawIcon className="size-5 text-blue-600" />
                PetWell
              </span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <XIcon className="size-5 text-gray-500" />
              </button>
            </div>

            <div className="px-5 py-4">
              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 h-10">
                <SearchIcon className="size-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search breeds, articles..."
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>
            </div>

            <nav className="flex flex-col px-5 flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium py-3.5 border-b border-gray-100"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="px-5 py-4 border-t border-gray-200 flex items-center gap-3">
              <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center">
                <UserIcon className="size-4 text-blue-600" />
              </div>
              <span className="text-sm font-medium">My Account</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}