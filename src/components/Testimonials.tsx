'use client';

const reviews = [
  {
    author: 'Laura Grybos',
    text: 'Bardzo polecam, świetna jakość usług i bardzo dokładne sprzątanie 😁',
  },
  {
    author: 'Mariusz Szejn',
    text: 'Bardzo polecam! Usługa wykonana na najwyższym poziomie. Na pewno jeszcze skorzystam!',
  },
  {
    author: 'Emil Przybyszewski',
    text: 'Mega Polecam. Napewno wrócę :)',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 gwiazdek">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="#FBBC04" aria-hidden="true">
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.27l-4.94 2.44.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.2 33.6 29.7 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l6-6C34.5 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.2-4z" />
      <path fill="#34A853" d="M6.3 14.7l7 5.1C15 16.1 19.1 13 24 13c3 0 5.8 1.1 7.9 3l6-6C34.5 6.5 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#FBBC05" d="M24 44c5.4 0 10.3-1.8 14.1-4.9l-6.5-5.3C29.7 35.3 27 36 24 36c-5.7 0-10.2-3.4-11.7-8.3l-7 5.4C8.6 39.5 15.8 44 24 44z" />
      <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.8 2.2-2.2 4.1-4.1 5.3l6.5 5.3C42 35.7 44.5 30.3 44.5 24c0-1.3-.1-2.7-.2-4z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="opinie" className="py-20" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'var(--color-primary-light)', color: 'var(--color-primary)' }}
          >
            Opinie klientów
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: 'var(--color-ink)' }}>
            Co mówią nasi klienci?
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-ink-secondary)' }}>
            Sprawdź, co piszą o nas zadowoleni klienci w Google Maps.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.author}
              className="rounded-2xl p-7 flex flex-col"
              style={{ background: 'white', boxShadow: 'var(--shadow-card)' }}
            >
              <Stars />
              <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: 'var(--color-ink-secondary)' }}>
                "{r.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold" style={{ color: 'var(--color-ink)' }}>
                  {r.author}
                </span>
                <a
                  href="https://maps.app.goo.gl/EsoLVZUTVCm977LM7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:opacity-75 transition-opacity"
                  title="Zobacz opinie w Google Maps"
                >
                  <GoogleLogo />
                  <span className="text-xs" style={{ color: 'var(--color-ink-secondary)' }}>Google Maps</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
