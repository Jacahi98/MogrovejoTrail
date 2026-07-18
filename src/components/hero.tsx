'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { Calendar, MapPin, Mountain, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [countdown, setCountdown] = useState<CountdownTime>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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

  // Calcula la cuenta atrás en tiempo real
  useEffect(() => {
    const updateCountdown = () => {
      const eventDate = new Date('2026-07-25').getTime();
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

        {/* Cuenta atrás */}
        <motion.div variants={itemVariants}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: t('hero.countdown.days'), value: countdown.days },
              { label: t('hero.countdown.hours'), value: countdown.hours },
              { label: t('hero.countdown.minutes'), value: countdown.minutes },
              { label: t('hero.countdown.seconds'), value: countdown.seconds },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={countdownVariants}
                className="bg-white/25 backdrop-blur-md rounded-lg p-4 border border-white/30 hover:bg-white/35 transition-colors"
              >
                <div className="text-4xl sm:text-5xl font-bold text-white">
                  {String(item.value).padStart(2, '0')}
                </div>
                <div className="text-xs text-white uppercase tracking-wider mt-2">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="https://www.gedsports.com/race/mogrovejo-trail-2026"
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
            src="/logos/AyuntamientodeCamaleño.png"
            alt="Ayuntamiento de Camaleño"
            className="h-14 sm:h-16 object-contain"
          />
          <img
            src="/logos/Escudo_de_Camaleño_(Cantabria).png"
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
