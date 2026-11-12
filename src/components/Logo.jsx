import { Link } from 'react-router-dom';

const BRAND = '#173B65';

// inverse: white badge with a navy paw, for dark backgrounds
export function LogoMark({ className = 'size-9', inverse = false }) {
  const badge = inverse ? '#FFFFFF' : BRAND;
  const art = inverse ? BRAND : '#FFFFFF';

  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <rect width="40" height="40" rx="11" fill={badge} />
      <path
        d="M8.5 18 20 8.5 31.5 18"
        stroke={art}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="23.2" r="2.1" fill={art} />
      <circle cx="18.3" cy="20.4" r="2.2" fill={art} />
      <circle cx="21.7" cy="20.4" r="2.2" fill={art} />
      <circle cx="26" cy="23.2" r="2.1" fill={art} />
      <path
        d="M20 25.2c-3.2 0-5.6 2.4-5.6 4.6 0 1.7 1.4 2.5 3 2.5 1 0 1.7-.4 2.6-.4s1.6.4 2.6.4c1.6 0 3-.8 3-2.5 0-2.2-2.4-4.6-5.6-4.6z"
        fill={art}
      />
    </svg>
  );
}

// onDark: white wordmark and light badge for dark backgrounds (like the footer)
export default function Logo({ onDark = false, className = '', onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="AllPetsLoft home"
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <LogoMark className="size-9 shrink-0" inverse={onDark} />
      <span
        className={`text-xl font-extrabold tracking-tight leading-none ${
          onDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        AllPets<span className={onDark ? 'text-blue-300' : 'text-blue-600'}>Loft</span>
      </span>
    </Link>
  );
}