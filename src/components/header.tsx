'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Moon, Shirt, Sun, X } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';
import { useLanguage } from '@/contexts/language-context';

const navItems = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.infoPage', href: '/info' },
  { key: 'nav.mediaPage', href: '/media' },
  { key: 'nav.contactPage', href: '/contacto' },
] as const;

const RESULTS_URL =
  'https://sportmaniacs.com/es/races/mogrovejo-trail-2026/6a64b778-a614-46e2-9dc6-43f7ac1f2075/results#rankings';

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Next.js Link no siempre vuelve a hacer scroll a un hash si la URL
  // resultante es idéntica a la actual (p. ej. si ya estás en /#reserva-camiseta
  // y vuelves a pinchar, o si ya estás en / sin hash y el navegador no dispara
  // el scroll nativo). Forzamos el scroll a mano cuando ya estamos en home.
  const handleTshirtClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('reserva-camiseta');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', '/#reserva-camiseta');
      }
    }
  };

  return (
    <>
      <div className="bg-[var(--accent-primary)] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-2 gap-y-1 px-4 py-2 text-center text-sm sm:px-6 lg:px-8">
          <span className="font-semibold">🏁 {t('race.finishedBanner')}</span>
          <a
            href={RESULTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 whitespace-nowrap"
          >
            {t('race.viewResults')} →
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[color-mix(in_srgb,var(--bg-primary)_86%,transparent)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-roboto-condensed text-sm sm:text-xl font-bold tracking-wide text-[var(--text-primary)] whitespace-nowrap">
            MOGROVEJO<span className="text-[var(--accent-primary)]">TRAIL</span> 2026
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-[var(--accent-primary)] text-white'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/#reserva-camiseta"
            onClick={handleTshirtClick}
            className="rounded-lg p-2 transition-colors hover:bg-[var(--bg-secondary)]"
            aria-label={t('nav.tshirt')}
            title={t('nav.tshirt')}
          >
            <Shirt className="h-5 w-5 text-[var(--text-primary)]" />
          </Link>

          <motion.button
            onClick={toggleTheme}
            className="rounded-lg p-2 transition-colors hover:bg-[var(--bg-secondary)]"
            whileTap={{ scale: 0.95 }}
            title={theme === 'light' ? 'Modo oscuro' : 'Modo claro'}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5 text-[var(--text-primary)]" />
            ) : (
              <Sun className="h-5 w-5 text-[var(--text-primary)]" />
            )}
          </motion.button>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'es' | 'en' | 'fr')}
            aria-label="Seleccionar idioma"
            className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-sm text-[var(--text-primary)]"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>

          <a
            href={RESULTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--accent-primary)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-secondary)] whitespace-nowrap"
          >
            {t('hero.cta')}
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <Link
            href="/#reserva-camiseta"
            onClick={(e) => {
              handleTshirtClick(e);
              setIsOpen(false);
            }}
            className="rounded-lg p-2 text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-secondary)]"
            aria-label={t('nav.tshirt')}
            title={t('nav.tshirt')}
          >
            <Shirt className="h-6 w-6" />
          </Link>

          <button
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-lg p-2 text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-secondary)]"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)] md:hidden"
          >
            <div className="space-y-3 px-4 py-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-semibold ${
                      isActive
                        ? 'bg-[var(--accent-primary)] text-white'
                        : 'bg-[var(--bg-secondary)] text-[var(--text-primary)]'
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={toggleTheme}
                  className="rounded-lg border border-[var(--border-color)] p-3"
                  aria-label="Cambiar tema"
                >
                  {theme === 'light' ? (
                    <Moon className="h-5 w-5 text-[var(--text-primary)]" />
                  ) : (
                    <Sun className="h-5 w-5 text-[var(--text-primary)]" />
                  )}
                </button>

                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as 'es' | 'en' | 'fr')}
                  className="flex-1 rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-3 text-sm text-[var(--text-primary)]"
                >
                  <option value="es">ES</option>
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                </select>
              </div>

              <a
                href={RESULTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-[var(--accent-primary)] px-4 py-3 text-center text-sm font-semibold text-white whitespace-nowrap"
              >
                {t('hero.cta')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
