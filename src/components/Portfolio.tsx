'use client';

const cards = [
  { id: 1, before: '/portfolio-1-before.webp', after: '/portfolio-1-after.webp' },
  { id: 2, before: '/portfolio-2-before.webp', after: '/portfolio-2-after.webp' },
  { id: 3, before: '/portfolio-3-before.webp', after: '/portfolio-3-after.webp' },
];

function BeforeAfterCard({ before, after }: { before: string; after: string }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{
        aspectRatio: '1080 / 1350',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Before — top half */}
      <div className="absolute inset-x-0 top-0 overflow-hidden" style={{ height: '50%' }}>
        <img
          src={before}
          alt="Przed sprzątaniem"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* After — bottom half */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden" style={{ height: '50%' }}>
        <img
          src={after}
          alt="Po sprzątaniu"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Center badges */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
        style={{ zIndex: 10 }}
      >
        {/* "Przed" badge — upper, arrow pointing up */}
        <div
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg"
          style={{ background: 'white', color: 'var(--color-ink)' }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M6 10V2M6 2L2 6M6 2l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Przed
        </div>

        {/* "Po" badge — lower, arrow pointing down */}
        <div
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold shadow-lg"
          style={{ background: 'var(--color-primary)', color: 'white' }}
        >
          Po
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M6 2v8M6 10l4-4M6 10L2 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="realizacje" className="py-20" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
          >
            Efekty naszej pracy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-ink)' }}>
            Nasze realizacje
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-ink-secondary)' }}>
            Zobacz realne efekty naszej pracy — przed i po sprzątaniu.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {cards.map((c) => (
            <BeforeAfterCard key={c.id} before={c.before} after={c.after} />
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#kontakt"
            className="flex items-center justify-center gap-2 px-8 h-14 rounded-[10px] text-base font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              background: 'var(--color-primary)',
              boxShadow: 'var(--shadow-btn)',
            }}
          >
            Chcesz taki sam efekt? Zamów wycenę
          </a>
        </div>
      </div>
    </section>
  );
}
