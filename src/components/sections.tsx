'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { useEffect, useState } from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

/**
 * Sección de Información sobre el recorrido
 */
export function InformationSection() {
  const { t } = useLanguage();

  return (
    <section id="informacion" className="py-16 bg-[var(--bg-accent-green)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('info.title')}
        </motion.h2>

        {/* Contenido 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagen profesional */}
          <motion.div
            className="w-full h-80 relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* SVG de paisaje de montaña */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 500"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2d3d5a" stopOpacity="1" />
                  <stop offset="100%" stopColor="#4a6741" stopOpacity="1" />
                </linearGradient>
                <linearGradient id="mountainGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#5a8a3a" stopOpacity="1" />
                  <stop offset="100%" stopColor="#2d4a1a" stopOpacity="1" />
                </linearGradient>
              </defs>
              {/* Cielo */}
              <rect width="600" height="500" fill="url(#skyGrad)" />

              {/* Montañas de fondo */}
              <polygon
                points="0,350 150,250 300,280 450,200 600,320 600,500 0,500"
                fill="#3a5a2a"
                opacity="0.4"
              />

              {/* Montañas principales */}
              <polygon
                points="0,320 200,150 400,220 600,100 600,500 0,500"
                fill="url(#mountainGrad2)"
              />

              {/* Sendero principal */}
              <path
                d="M 200,150 Q 300,250 400,220 T 500,300"
                stroke="#d4a574"
                strokeWidth="8"
                fill="none"
                opacity="0.6"
              />

              {/* Puntos de interés (refugios, cruces) */}
              <circle cx="200" cy="150" r="8" fill="#f4a460" opacity="0.8" />
              <circle cx="400" cy="220" r="8" fill="#f4a460" opacity="0.8" />

              {/* Arboles/vegetacion */}
              <line x1="150" y1="200" x2="150" y2="240" stroke="#4a7c2e" strokeWidth="3" />
              <polygon points="150,190 140,210 160,210" fill="#3a6a2e" />

              <line x1="350" y1="240" x2="350" y2="280" stroke="#4a7c2e" strokeWidth="3" />
              <polygon points="350,230 340,250 360,250" fill="#3a6a2e" />

              <line x1="480" y1="280" x2="480" y2="320" stroke="#4a7c2e" strokeWidth="3" />
              <polygon points="480,270 470,290 490,290" fill="#3a6a2e" />
            </svg>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-roboto-condensed text-3xl font-bold text-[var(--text-primary)] mb-4">
              {t('info.subtitle')}
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              {t('info.text1')}
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {t('info.text2')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Sección de Sponsors
 */
export function SponsorsSection() {
  const { t } = useLanguage();

  const sponsors = [
    'Trangoworld',
    'Scarpa',
    'Leki',
    'Barrabes',
    'Naak',
    'CajaRural',
    'Hyundai',
    'Wikiloc',
  ];

  return (
    <section id="sponsors" className="py-16 bg-[var(--bg-accent-orange)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('sponsors.title')}
        </motion.h2>

        {/* Grid de sponsors */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={idx}
              className="h-20 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg flex items-center justify-center text-[var(--text-secondary)] text-sm font-medium hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              {sponsor}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Footer con 4 columnas
 */
export function Footer() {
  const { t } = useLanguage();

  const socialIcons = [
    { Icon: Instagram, label: t('footer.instagram'), href: '#' },
    { Icon: Facebook, label: t('footer.facebook'), href: '#' },
    { Icon: Twitter, label: t('footer.twitter'), href: '#' },
    { Icon: Youtube, label: t('footer.youtube'), href: '#' },
  ];

  const footerSections = [
    {
      title: t('footer.contact'),
      items: [
        { label: 'info@mogrovejotrail.com', href: 'mailto:info@mogrovejotrail.com', icon: Mail },
        { label: '+34 942 123 456', href: 'tel:+34942123456', icon: Phone },
      ],
    },
    {
      title: t('footer.follow'),
      custom: true,
      render: () => (
        <div className="flex gap-4">
          {socialIcons.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              title={label}
              className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      ),
    },
    {
      title: t('footer.legal'),
      items: [
        { label: t('footer.legal.notice'), href: '/legal/notice' },
        { label: t('footer.legal.privacy'), href: '/privacy/policy' },
        { label: t('footer.legal.cookies'), href: '/privacy/cookies' },
        { label: t('footer.legal.regulation'), href: '/legal/regulation' },
      ],
    },
    {
      title: t('footer.info'),
      items: [
        { label: t('footer.inscriptions'), href: '/' },
        { label: t('footer.routes'), href: '/informacion' },
        { label: 'Resultados', href: '/resultados' },
        { label: t('footer.faq'), href: '/informacion#faq' },
        { label: t('footer.gallery'), href: '/media' },
      ],
    },
  ];

  return (
    <footer id="contacto" className="bg-gradient-to-br from-[#1a3a1a] to-[#0f2410] border-t border-[var(--border-color)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid de columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-roboto-condensed font-bold text-white mb-4">
                {section.title}
              </h3>
              {section.custom && section.render ? (
                section.render()
              ) : (
                <ul className="space-y-2">
                  {section.items?.map((item: { label: string; href: string; icon?: React.ComponentType<{ className: string }> }, itemIdx: number) => (
                    <li key={itemIdx}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 text-sm text-gray-200 transition-colors hover:text-[var(--accent-primary)]"
                      >
                        {item.icon && <item.icon className="w-4 h-4" />}
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Separador y copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-300 text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

/**
 * Cookie Banner - aparece en la parte inferior
 */
export function CookieBanner() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const accepted = localStorage.getItem('mgt-cookies');
      setVisible(!accepted);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    localStorage.setItem('mgt-cookies', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('mgt-cookies', 'rejected');
    setVisible(false);
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] p-4 sm:p-6 z-40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
    >
      {/* Texto */}
      <div className="flex-1 text-[var(--text-secondary)] text-sm">
        {t('cookie.text')}{' '}
        <a href="/privacy/cookies" className="text-[var(--accent-primary)] font-semibold hover:text-[var(--accent-secondary)]">
          {t('cookie.policy')}
        </a>
        .
      </div>

      {/* Botones */}
      <div className="flex gap-3 w-full sm:w-auto">
        <button
          onClick={handleReject}
          className="flex-1 sm:flex-none px-4 py-2 border border-[var(--border-color)] text-[var(--text-primary)] text-sm font-semibold rounded hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-colors"
        >
          {t('cookie.reject')}
        </button>
        <button
          onClick={handleAccept}
          className="flex-1 sm:flex-none px-4 py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white text-sm font-semibold rounded transition-colors"
        >
          {t('cookie.accept')}
        </button>
      </div>
    </motion.div>
  );
}
