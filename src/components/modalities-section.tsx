'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { Clock } from 'lucide-react';

interface Route {
  id: number;
  title: string;
  distance: string;
  elevation: string;
  pace: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
}

/**
 * Sección de Modalidades con tarjetas de rutas
 * Datos técnicos: Distancia, Desnivel, Ritmo, Clasificación
 * Tono: Profesional e institucional
 */
export function ModalitiesSection() {
  const { t } = useLanguage();

  const routes: Route[] = [
    { id: 1, title: '10K Mogrovejo', distance: '10 km', elevation: '+800m', pace: 'Moderado', difficulty: 'easy' },
    { id: 2, title: '25K Mogrovejo', distance: '25 km', elevation: '+1800m', pace: 'Exigente', difficulty: 'medium' },
    { id: 3, title: '50K Ultra', distance: '50 km', elevation: '+3500m', pace: 'Muy exigente', difficulty: 'hard' },
  ];

  const difficultyLabels = {
    easy: t('modalidades.easy'),
    medium: t('modalidades.medium'),
    hard: t('modalidades.hard'),
    extreme: t('modalidades.extreme'),
  };

  // Colores más sobrios y profesionales
  const difficultyColors = {
    easy: 'bg-slate-600 text-white',
    medium: 'bg-slate-700 text-white',
    hard: 'bg-slate-800 text-white',
    extreme: 'bg-slate-900 text-white',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="modalidades" className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('modalidades.title')}
        </motion.h2>

        {/* Grid de tarjetas */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {routes.map((route) => (
            <motion.div
              key={route.id}
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg overflow-hidden hover:border-[var(--text-primary)] transition-all duration-300 flex flex-col"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              {/* Header con datos técnicos */}
              <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-4 border-b border-[var(--border-color)]">
                <h3 className="font-roboto-condensed text-xl font-bold text-white mb-3">
                  {route.title}
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Distancia:</span>
                    <span className="font-semibold text-white">{route.distance}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Desnivel:</span>
                    <span className="font-semibold text-white">{route.elevation}</span>
                  </div>
                </div>
              </div>

              {/* Contenido técnico */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Ritmo */}
                <div className="mb-6 pb-6 border-b border-[var(--border-color)]">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[var(--text-secondary)]" />
                    <span className="text-xs uppercase text-[var(--text-secondary)] tracking-wide">
                      {t('modalidades.pace')}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-primary)] font-medium">
                    {route.pace}
                  </p>
                </div>

                {/* Descripción técnica */}
                <p className="text-sm text-[var(--text-secondary)] mb-6 flex-grow">
                  Carrera de trail running de montaña con terreno variado.
                  {route.id === 1 && ' Acceso recomendado para participantes con experiencia en trail.'}
                  {route.id === 2 && ' Requiere buena capacidad cardiovascular y experiencia técnica en descensos.'}
                  {route.id === 3 && ' Ultra-trail exigente. Requiere preparación física y experiencia en eventos de larga duración.'}
                </p>

                {/* Clasificación */}
                <div className={`${difficultyColors[route.difficulty]} px-4 py-2 rounded font-semibold text-sm uppercase tracking-wide text-center`}>
                  {difficultyLabels[route.difficulty]}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
