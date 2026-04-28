'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mountain, Calendar, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Componente Hero principal de la carrera de trail
 * Incluye: video/imagen de fondo, cuenta atrás dinámica y botón CTA a GedSports
 */
export function HeroSection() {
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

  // Variantes de animación para Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const countdownItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fondo con gradiente y elementos decorativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Decoración de montañas con líneas */}
        <div className="absolute inset-0 opacity-20">
          <svg
            className="w-full h-full"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M 0 600 L 300 400 L 600 500 L 1000 300 L 1000 1000 L 0 1000 Z"
              fill="url(#mountainGradient)"
            />
            <path
              d="M 0 700 L 250 550 L 500 650 L 750 480 L 1000 600 L 1000 1000 L 0 1000 Z"
              fill="url(#mountainGradient)"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Puntos decorativos animados */}
        <motion.div
          className="absolute top-20 right-10 w-20 h-20 bg-purple-400 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-20"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Icono de montaña animado */}
          <motion.div
            className="flex justify-center"
            variants={floatVariants}
            animate="animate"
          >
            <div className="p-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-2xl">
              <Mountain className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Título principal */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                MogrovejoTrail
              </span>
              <br />
              <span className="text-4xl sm:text-5xl lg:text-6xl text-white/90">
                2026
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-light">
              La carrera de trail más espectacular de las montañas
            </p>
          </motion.div>

          {/* Fecha y evento */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg text-gray-200"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-orange-400" />
              <span>1 de Agosto de 2026</span>
            </div>
            <div className="hidden sm:block text-gray-500">•</div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-400" />
              <span>Múltiples modalidades</span>
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
                  variants={countdownItemVariants}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-300 uppercase tracking-wider mt-2">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Botones de acción */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* CTA principal - GedSports */}
            <a
              href="https://gedsports.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Inscribirse en GedSports
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* CTA secundario - Saber más */}
            <button
              onClick={() => {
                document.querySelector('[data-section="modalidades"]')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
              className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Descubre más
            </button>
          </motion.div>

          {/* Indicador de scroll animado */}
          <motion.div
            className="flex justify-center pt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="text-gray-400 text-sm flex flex-col items-center gap-2">
              <span>Desplázate para explorar</span>
              <svg
                className="w-6 h-6 text-orange-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elemento decorativo inferior con efecto degradado */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
    </section>
  );
}
