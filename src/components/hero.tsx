'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { Calendar, CheckCircle2, MapPin, Mountain, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const RESULTS_URL =
  'https://sportmaniacs.com/es/races/mogrovejo-trail-2026/6a64b778-a614-46e2-9dc6-43f7ac1f2075/results#rankings';

/**
 * Hero section compacto (400px)
 * Incluye montañas SVG animadas y datos dinámicos
 */
export function Hero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Reanuda el vídeo si el navegador móvil lo pausa al salir del viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && video.paused) video.play().catch(() => {}); },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
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

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C4A6F] via-[#1a2f4a] to-[#0f1820] py-20">
      {/* Video de fondo */}
      <video
        ref={videoRef}
        src="/video/Fondo.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay para oscurecer el fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C4A6F]/80 via-[#1a2f4a]/80 to-[#0f1820]/80"></div>

      {/* Contenido */}
      <motion.div
        className="relative z-10 text-center flex flex-col items-center gap-6 max-w-4xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.img
          src="/logos/logoinicio.png"
          alt="Mogrovejo Trail Logo"
          className="w-full max-w-sm h-auto -mt-4 mb-4"
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
            <Calendar className="w-4 h-4 text-white" />
            <span>{t('hero.date')}</span>
          </div>
          <span className="text-white/40">•</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-white" />
            <span>{t('hero.location')}</span>
          </div>
          <span className="text-white/40">•</span>
          <div className="flex items-center gap-2">
            <Mountain className="w-4 h-4 text-white" />
            <span>{t('hero.distances')}</span>
          </div>
        </motion.div>

        {/* Carrera finalizada */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-5 py-2 text-white backdrop-blur-md"
        >
          <CheckCircle2 className="h-5 w-5 text-[var(--accent-primary)]" />
          <span className="font-semibold uppercase tracking-wide text-sm">
            {t('hero.finished')}
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href={RESULTS_URL}
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

        {/* Logos de colaboradores */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 sm:gap-6 mt-8 flex-wrap"
        >
          <img
            src="/logos/ayuntamiento-camaleno.png"
            alt="Ayuntamiento de Camaleño"
            className="h-14 sm:h-16 object-contain"
          />
          <img
            src="/logos/escudo-camaleno.png"
            alt="Escudo de Camaleño"
            className="h-14 sm:h-16 object-contain"
          />
          <img
            src="/logos/02_Caja Rural de Asturias_horizontal_color.png"
            alt="Caja Rural de Asturias"
            className="h-14 sm:h-16 object-contain"
          />
          <img
            src="/logos/liebana2.jpg"
            alt="Liébana"
            className="h-14 sm:h-16 object-contain"
          />
          <img
            src="/logos/logo-CL-FUNDACION-Horizontal.png"
            alt="CL Fundación"
            className="h-14 sm:h-16 object-contain"
          />
          <img
            src="/logos/cropped-liebana-picos.png"
            alt="Liébana Picos de Europa"
            className="h-14 sm:h-16 object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Overlay degradado inferior */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none" />
    </section>
  );
}
