import { Link } from 'react-router-dom';
import { IconPaw as PawIcon, IconBrandFacebook, IconBrandInstagram, IconBrandX } from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      {/* Newsletter */}
      <div className="border-b border-gray-800 px-6 md:px-12 py-10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg">Join our pet care newsletter</p>
            <p className="text-sm text-gray-400 mt-1">Breed tips, health reminders, and offers — monthly, no spam.</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 text-white text-sm px-4 py-2.5 rounded-lg outline-none flex-1 sm:w-64"
            />
            <button className="bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-blue-500 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
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
              Vet-reviewed guidance for every stage of your pet's life.
            </p>
          </div>
          <FooterColumn
            title="Explore"
            links={[
              { label: "Breed guides", to: "/breeds" },
              { label: "Health articles", to: "/article/pet-insurance" },
              { label: "Insurance", to: "/insurance" },
              { label: "Pet services", to: "/" },
            ]}
          />
          <FooterColumn
            title="Company"
            links={[
              { label: "About us", to: "/" },
              { label: "Careers", to: "/" },
              { label: "Contact", to: "/" },
              { label: "Press", to: "/" },
            ]}
          />
          <FooterColumn
            title="Legal"
            links={[
              { label: "Privacy policy", to: "/" },
              { label: "Terms of service", to: "/" },
              { label: "Cookie policy", to: "/" },
              { label: "Accessibility", to: "/" },
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