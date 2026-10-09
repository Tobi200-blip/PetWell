export default function PageHero({ image, badge, title, subtitle, children }) {
  return (
    <section className="relative h-64 md:h-80 flex items-center">
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/20" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12">
        {badge && (
          <span className="inline-block text-xs bg-white/20 text-white px-3 py-1 rounded-full mb-3 backdrop-blur-sm">
            {badge}
          </span>
        )}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 max-w-xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-base text-white/85 max-w-lg">{subtitle}</p>
        )}
        {children && <div className="mt-5 max-w-md">{children}</div>}
      </div>
    </section>
  );
}