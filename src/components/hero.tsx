'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { Calendar, MapPin, Mountain, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Hero section compacto (400px) con cuenta atrás dinámica
 * Incluye montañas SVG animadas, datos dinámicos y countdown en tiempo real
 */
export function Hero() {
  const { t } = useLanguage();
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calcula la cuenta atrás en tiempo real
  useEffect(() => {
    const updateCountdown = () => {
      const eventDate = new Date('2026-08-01').getTime();
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / 1000 / 60) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const countdownVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2d5016] via-[#1a2a14] to-[#0f1a0c] py-20">
      {/* Fondo decorativo sutíl */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5a7d6a" stopOpacity="1" />
              <stop offset="100%" stopColor="#2a3a2a" stopOpacity="1" />
            </linearGradient>
          </defs>
          <polygon
            points="0,350 300,150 600,250 900,100 1200,300 1200,600 0,600"
            fill="url(#mountainGrad)"
          />
        </svg>
      </div>

      {/* Contenido */}
      <motion.div
        className="relative z-10 text-center flex flex-col items-center gap-6 max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.img
          src="/logos/mogrovejo-trail-logo.png"
          alt="Mogrovejo Trail Logo"
          className="w-full max-w-2xl h-auto -mt-8 -mb-4"
          variants={itemVariants}
        />

        {/* Título */}
        <motion.h1
          className="font-roboto-condensed text-6xl sm:text-7xl font-bold text-white leading-tight"
          variants={itemVariants}
        >
          {t('hero.title')}
        </motion.h1>

        {/* Meta información con iconos - tono profesional */}
        <motion.div className="flex gap-8 text-white/90 flex-wrap justify-center text-sm" variants={itemVariants}>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>{t('hero.date')}</span>
          </div>
          <span className="text-white/40">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>{t('hero.location')}</span>
          </div>
          <span className="text-white/40">•</span>
          <div className="flex items-center gap-2">
            <Mountain className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>{t('hero.distances')}</span>
          </div>
        </motion.div>

        {/* Cuenta atrás */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Días', value: countdown.days },
              { label: 'Horas', value: countdown.hours },
              { label: 'Minutos', value: countdown.minutes },
              { label: 'Segundos', value: countdown.seconds },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={countdownVariants}
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs text-gray-300 uppercase tracking-wider mt-2">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="https://gedsports.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={itemVariants}
          className="group px-8 py-4 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded transition-all uppercase text-sm tracking-wide flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('hero.cta')}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>

      {/* Overlay degradado inferior */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />
    </section>
  );
}
