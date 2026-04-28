'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { MapPin, Download, ExternalLink, Mountain } from 'lucide-react';
import { ElevationProfile } from './elevation-profile';

interface RouteData {
  id: number;
  distance: '10K' | '25K' | '50K';
  totalDistance: number;
  elevationGain: number;
  maxAltitude: number;
  minAltitude: number;
  description: string;
  wikiloc: string;
  elevationProfile: Array<{ distance: number; altitude: number }>;
}

const routeData: RouteData[] = [
  {
    id: 1,
    distance: '10K',
    totalDistance: 10,
    elevationGain: 800,
    maxAltitude: 1200,
    minAltitude: 320,
    description: 'Ruta técnica iniciación por los bosques de pinos de Mogrovejo. Ascenso constante con vistas panorámicas.',
    wikiloc: 'https://www.wikiloc.com/running-trails/mogrovejo-10k-trail-2026-69891640',
    elevationProfile: [
      { distance: 0, altitude: 320 },
      { distance: 2, altitude: 550 },
      { distance: 4, altitude: 850 },
      { distance: 6, altitude: 1050 },
      { distance: 7, altitude: 1200 },
      { distance: 8, altitude: 1100 },
      { distance: 10, altitude: 320 },
    ],
  },
  {
    id: 2,
    distance: '25K',
    totalDistance: 25,
    elevationGain: 1800,
    maxAltitude: 1380,
    minAltitude: 320,
    description: 'Ruta intermedia con técnica media-alta. Recorrido por altas cumbres con terreno variado y descensos técnicos.',
    wikiloc: 'https://www.wikiloc.com/running-trails/mogrovejo-25k-trail-2026-69891641',
    elevationProfile: [
      { distance: 0, altitude: 320 },
      { distance: 3, altitude: 550 },
      { distance: 7, altitude: 950 },
      { distance: 12, altitude: 1380 },
      { distance: 16, altitude: 1200 },
      { distance: 20, altitude: 900 },
      { distance: 25, altitude: 320 },
    ],
  },
  {
    id: 3,
    distance: '50K',
    totalDistance: 50,
    elevationGain: 3500,
    maxAltitude: 1430,
    minAltitude: 320,
    description: 'Ultra trail exigente. Circuito completo de Picos de Europa con múltiples cimas y terreno alpino desafiante.',
    wikiloc: 'https://www.wikiloc.com/running-trails/mogrovejo-50k-trail-2026-69891642',
    elevationProfile: [
      { distance: 0, altitude: 320 },
      { distance: 5, altitude: 650 },
      { distance: 12, altitude: 1200 },
      { distance: 18, altitude: 1380 },
      { distance: 24, altitude: 1100 },
      { distance: 32, altitude: 1430 },
      { distance: 40, altitude: 900 },
      { distance: 50, altitude: 320 },
    ],
  },
];

export function RouteMapSection() {
  const { t } = useLanguage();
  const [selectedDistance, setSelectedDistance] = useState<'10K' | '25K' | '50K'>('10K');

  const currentRoute = routeData.find((r) => r.distance === selectedDistance)!;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="recorrido" className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('recorrido.title')}
        </motion.h2>

        {/* Selector de modalidad */}
        <motion.div
          className="mb-12 flex gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {(['10K', '25K', '50K'] as const).map((distance) => (
            <motion.button
              key={distance}
              onClick={() => setSelectedDistance(distance)}
              variants={itemVariants}
              className={`px-4 py-2 rounded transition-all font-semibold ${
                selectedDistance === distance
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'
              }`}
            >
              {distance}
            </motion.button>
          ))}
        </motion.div>

        {/* Perfil de elevación */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={selectedDistance}
            className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ElevationProfile
              data={currentRoute.elevationProfile}
              maxAltitude={currentRoute.maxAltitude}
              minAltitude={currentRoute.minAltitude}
              totalDistance={currentRoute.totalDistance}
            />
          </motion.div>
        </AnimatePresence>

        {/* Descripción y estadísticas */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`${selectedDistance}-info`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Descripción */}
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6">
              <h3 className="font-roboto-condensed text-xl font-bold text-[var(--text-primary)] mb-4">
                Descripción
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {currentRoute.description}
              </p>

              <div className="space-y-2 mb-6">
                <a
                  href={currentRoute.wikiloc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t('recorrido.wikiloc')}
                </a>
              </div>

              <a
                href="/gpx/mogrovejo-10k.gpx"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded transition-all"
              >
                <Download className="w-4 h-4" />
                {t('recorrido.gpx')}
              </a>
            </div>

            {/* Estadísticas */}
            <div className="space-y-3">
              <motion.div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Mountain className="w-6 h-6 text-[var(--accent-primary)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">
                      Desnivel Positivo
                    </p>
                    <p className="text-3xl font-bold text-[var(--text-primary)]">
                      {currentRoute.elevationGain.toLocaleString()}m
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[var(--accent-primary)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">
                      Distancia Total
                    </p>
                    <p className="text-3xl font-bold text-[var(--text-primary)]">
                      {currentRoute.totalDistance}km
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-3">
                <motion.div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-4">
                  <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-2">
                    {t('recorrido.maxAlt')}
                  </p>
                  <p className="text-2xl font-bold text-[var(--text-primary)]">
                    {currentRoute.maxAltitude}m
                  </p>
                </motion.div>

                <motion.div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-4">
                  <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-2">
                    {t('recorrido.minAlt')}
                  </p>
                  <p className="text-2xl font-bold text-[var(--text-primary)]">
                    {currentRoute.minAltitude}m
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
