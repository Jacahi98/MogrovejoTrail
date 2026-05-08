'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Componente de navegación superior (Navbar)
 * Incluye: logo, menú de navegación y menú móvil responsivo
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Reglamento', href: '#reglamento' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-slate-900/95 to-transparent backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-80 transition-opacity"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 1a4 4 0 100 8 4 4 0 000-8zm0 14c-6.627 0-10 3.373-10 5v2h20v-2c0-1.627-3.373-5-10-5z" />
              </svg>
            </div>
            <span>MogrovejoTrail</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <a
            href="https://www.gedsports.com/race/mogrovejo-trail-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-orange-500/50 transition-all"
          >
            Inscribirse
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            className="md:hidden text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            id="mobile-nav"
            className="md:hidden overflow-hidden bg-slate-900/50 border-t border-white/10"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://www.gedsports.com/race/mogrovejo-trail-2026"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-center text-sm hover:shadow-lg transition-all mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Inscribirse
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
