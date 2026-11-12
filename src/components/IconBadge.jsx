const colors = {
  blue: 'bg-blue-600',
  green: 'bg-green-600',
  amber: 'bg-amber-600',
  red: 'bg-red-500',
  purple: 'bg-purple-600',
  teal: 'bg-teal-600',
};

const sizes = {
  sm: { box: 'size-9 rounded-lg', icon: 'size-[18px]' },
  md: { box: 'size-11 rounded-xl', icon: 'size-5' },
  lg: { box: 'size-14 rounded-2xl', icon: 'size-7' },
};

export default function IconBadge({ icon: Icon, color = 'blue', size = 'md', className = '' }) {
  const s = sizes[size] ?? sizes.md;
  return (
    <div
      className={`${s.box} ${colors[color] ?? colors.blue} flex items-center justify-center shrink-0 shadow-sm ${className}`}
    >
      <Icon className={`${s.icon} text-white`} stroke={2} aria-hidden="true" />
    </div>
  );
}