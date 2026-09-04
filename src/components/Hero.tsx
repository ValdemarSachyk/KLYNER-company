'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

const highlights = [
  'Jelenia Góra, Szklarska Poręba, Karpacz',
  'Profesjonalny sprzęt i ekologiczne środki',
  'Elastyczne terminy – 7 dni w tygodniu',
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #F0F7FF 0%, #F7F9FC 50%, #E6F9F6 100%)' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: 'var(--color-primary-light)' }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'var(--color-accent-light)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-5 pb-10 md:py-12 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left – text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
                style={{
                  background: 'var(--color-primary-light)',
                  color: 'var(--color-primary)',
                }}
              >
                ⭐ 5.0 na podstawie opinii w Google
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[38px] font-bold leading-tight mb-6 lg:w-[500px]"
              style={{ color: 'var(--color-ink)' }}
            >
              Profesjonalne sprzątanie{' '}
              <span style={{ color: 'var(--color-primary)' }}>apartamentów, biur</span>{' '}
              Jelenia Góra
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: 'var(--color-ink-secondary)' }}
            >
              Profesjonalne usługi sprzątania. Oferujemy niezawodną obsługę apartamentów Airbnb,
              sprzątanie biur i precyzyjne doczyszczanie pobudowlane.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-3 mb-10"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium"
                  style={{ color: 'var(--color-ink-secondary)' }}>
                  <CheckCircle
                    className="w-5 h-5 shrink-0"
                    style={{ color: 'var(--color-accent)' }}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#kontakt"
                className="flex items-center justify-center gap-2 px-7 h-14 rounded-[10px] text-base font-semibold text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: 'var(--color-primary)',
                  boxShadow: 'var(--shadow-btn)',
                }}
              >
                Zamów bezpłatną wycenę
                <ArrowRight className="w-4 h-4" aria-hidden />
              </a>
              <a
                href="tel:+48734947424"
                className="flex items-center justify-center gap-2 px-7 h-14 rounded-[10px] text-base font-semibold border-2 transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  color: 'var(--color-primary)',
                  borderColor: 'var(--color-primary)',
                  background: 'transparent',
                }}
              >
                <Phone className="w-4 h-4" aria-hidden />
                +48 734 947 424
              </a>
            </motion.div>
          </div>

          {/* Right – visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, type: 'spring', stiffness: 100 }}
            className="hidden md:block"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative p-6">
      {/* Photo */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ boxShadow: 'var(--shadow-card-hover)' }}
      >
        <img
          src="/hero-photo.webp"
          alt="Profesjonalne mycie okien"
          className="w-full h-full object-cover"
          style={{ maxHeight: '520px', display: 'block' }}
        />
      </div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-2 -left-4 rounded-2xl px-5 py-3 flex items-center gap-3"
        style={{
          background: 'white',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
          style={{ background: 'var(--color-accent-light)' }}
        >
          ⭐
        </div>
        <div>
          <div className="text-sm font-bold" style={{ color: 'var(--color-ink)' }}>
            100% satysfakcji
          </div>
          <div className="text-xs" style={{ color: 'var(--color-ink-muted)' }}>
            Gwarantowana jakość
          </div>
        </div>
      </motion.div>
    </div>
  );
}
