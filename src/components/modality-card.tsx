'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const RESULTS_URL =
  'https://sportmaniacs.com/es/races/mogrovejo-trail-2026/6a64b778-a614-46e2-9dc6-43f7ac1f2075/results#rankings';

interface ModalityCardProps {
  title: string;
  distance: string;
  elevation: string;
  description: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
  color: 'orange' | 'red' | 'purple';
  index: number;
}

/**
 * Tarjeta de modalidad de la carrera
 * Muestra: nombre, distancia, desnivel, descripción y dificultad
 */
export function ModalityCard({
  title,
  distance,
  elevation,
  description,
  difficulty,
  color,
  index,
}: ModalityCardProps) {
  const colorMap = {
    orange: {
      gradient: 'from-orange-500 to-yellow-500',
      text: 'text-orange-500',
      badge: 'bg-orange-500/20 text-orange-300',
    },
    red: {
      gradient: 'from-red-500 to-pink-500',
      text: 'text-red-500',
      badge: 'bg-red-500/20 text-red-300',
    },
    purple: {
      gradient: 'from-purple-500 to-pink-500',
      text: 'text-purple-500',
      badge: 'bg-purple-500/20 text-purple-300',
    },
  };

  const difficultyColors = {
    Fácil: 'bg-green-500/20 text-green-300',
    Medio: 'bg-yellow-500/20 text-yellow-300',
    Difícil: 'bg-red-500/20 text-red-300',
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  };

  const hoverVariants = {
    hover: {
      y: -8,
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  const colors = colorMap[color];

  return (
    <motion.div
      variants={{ ...cardVariants, ...hoverVariants }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: '-100px' }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-8 cursor-pointer"
    >
      {/* Fondo decorativo */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${colors.gradient} transition-opacity duration-300`} />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">{title}</h3>
            <Zap className={`w-6 h-6 ${colors.text} opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:rotate-12`} />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} backdrop-blur-sm`}>
              {distance}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.badge} backdrop-blur-sm`}>
              {elevation}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed flex-grow mb-6">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-white/10">
          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${difficultyColors[difficulty]} backdrop-blur-sm`}>
            {difficulty}
          </span>

          <motion.a
            href={RESULTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-sm font-semibold ${colors.text} hover:gap-3 transition-all`}
            whileHover={{ x: 2 }}
            whileTap={{ x: 0 }}
          >
            Ver clasificación
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
