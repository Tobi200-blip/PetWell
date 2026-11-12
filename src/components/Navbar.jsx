import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  IconMenu2 as MenuIcon,
  IconX as XIcon,
  IconSearch as SearchIcon,
} from '@tabler/icons-react';
import Logo from './Logo';

const navLinks = [
  { label: 'Dog Breeds', to: '/breeds', isActive: (p) => p.startsWith('/breed') },
  { label: 'Learning Hub', to: '/articles', isActive: (p) => p.startsWith('/articles') },
  { label: 'Pet Services', to: '/services', isActive: (p) => p.startsWith('/services') },
  { label: 'Insurance', to: '/insurance', isActive: (p) => p.startsWith('/insurance') },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const searchActive = pathname.startsWith('/search');

  // Close on Escape and lock page scroll while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="flex items-center justify-between gap-6 px-6 md:px-12 py-4 border-b border-gray-200 bg-white relative z-20">
        <Logo />

        <nav className="hidden md:flex items-center gap-8" aria-label="Main">
          {navLinks.map((link) => {
            const active = link.isActive(pathname);
            return (
              <Link
                key={link.label}
                to={link.to}
                aria-current={active ? 'page' : undefined}
                className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
                  active
                    ? 'text-blue-600 border-blue-600'
                    : 'text-gray-700 border-transparent hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/search"
            aria-label="Search"
            className={`size-10 rounded-lg flex items-center justify-center transition-colors ${
              searchActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <SearchIcon className="size-5" stroke={2} />
          </Link>
          <Link
            to="/contact"
            className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact us
          </Link>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <MenuIcon className="size-6 text-gray-800" stroke={2} />
        </button>
      </header>

      {/* Mobile slide-out menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-xl flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <Logo onClick={() => setMenuOpen(false)} />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2"
              >
                <XIcon className="size-5 text-gray-800" stroke={2} />
              </button>
            </div>

            <div className="px-5 pt-4">
              <Link
                to="/search"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-2 h-11 px-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600"
              >
                <SearchIcon className="size-4" stroke={2} />
                Search breeds and articles
              </Link>
            </div>

            <nav className="flex flex-col px-5 py-2 flex-1 overflow-y-auto" aria-label="Mobile">
              {navLinks.map((link) => {
                const active = link.isActive(pathname);
                return (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`text-base font-medium py-3.5 border-b border-gray-100 ${
                      active ? 'text-blue-600' : 'text-gray-800'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="px-5 py-4 border-t border-gray-200">
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center h-11 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}