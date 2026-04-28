'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';
import { useLanguage } from '@/contexts/language-context';

const navItems = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.infoPage', href: '/informacion' },
  { key: 'nav.mediaPage', href: '/media' },
  { key: 'nav.contactPage', href: '/contacto' },
] as const;

export function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[color-mix(in_srgb,var(--bg-primary)_86%,transparent)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-roboto-condensed text-2xl font-bold tracking-wide text-[var(--text-primary)]"
        >
          MOGROVEJO<span className="text-[var(--accent-primary)]">TRAIL</span>
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
            className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-2 text-sm text-[var(--text-primary)]"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="fr">FR</option>
          </select>

          <a
            href="https://gedsports.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--accent-primary)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-secondary)]"
          >
            {t('hero.cta')}
          </a>
        </div>

        <button
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-lg p-2 text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-secondary)] md:hidden"
          aria-label="Abrir menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
                href="https://gedsports.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-[var(--accent-primary)] px-4 py-3 text-center text-sm font-semibold text-white"
              >
                {t('hero.cta')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
