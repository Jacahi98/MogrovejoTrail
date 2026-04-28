'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { MapPin, Download, ExternalLink, Mountain } from 'lucide-react';
import { ElevationProfile } from './elevation-profile';

interface RouteData {
  distance: '10K';
  totalDistance: number;
  elevationGain: number;
  maxAltitude: number;
  minAltitude: number;
  description: string;
  wikiloc: string;
  elevationProfile: Array<{ distance: number; altitude: number }>;
}

const routeData: RouteData = {
  distance: '10K',
  totalDistance: 10,
  elevationGain: 800,
  maxAltitude: 1200,
  minAltitude: 320,
  description: 'Mogrovejo 10k trail oficial en Wikiloc. Ruta técnica de iniciación por los bosques de pinos de Mogrovejo con ascenso constante y vistas panorámicas.',
  wikiloc: 'https://www.wikiloc.com/running-trails/mogrovejo-10k-trail-141347749?h=3p7yarw26p&wa=so&la=en',
  elevationProfile: [
    { distance: 0, altitude: 320 },
    { distance: 2, altitude: 550 },
    { distance: 4, altitude: 850 },
    { distance: 6, altitude: 1050 },
    { distance: 7, altitude: 1200 },
    { distance: 8, altitude: 1100 },
    { distance: 10, altitude: 320 },
  ],
};

export function RouteMapSection() {
  const { t } = useLanguage();

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

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6">
            <ElevationProfile
              data={routeData.elevationProfile}
              maxAltitude={routeData.maxAltitude}
              minAltitude={routeData.minAltitude}
              totalDistance={routeData.totalDistance}
            />
          </div>

          <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6">
            <h3 className="font-roboto-condensed text-xl font-bold text-[var(--text-primary)] mb-4">
              Descripción
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              {routeData.description}
            </p>

            <div className="space-y-2 mb-6">
              <a
                href={routeData.wikiloc}
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

            <div className="grid grid-cols-2 gap-3 mt-6">
              <motion.div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg p-4">
                <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-2">
                  {t('recorrido.maxAlt')}
                </p>
                <p className="text-2xl font-bold text-[var(--text-primary)]">
                  {routeData.maxAltitude}m
                </p>
              </motion.div>

              <motion.div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg p-4">
                <p className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-2">
                  {t('recorrido.minAlt')}
                </p>
                <p className="text-2xl font-bold text-[var(--text-primary)]">
                  {routeData.minAltitude}m
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 gap-3 mt-3">
              <motion.div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Mountain className="w-6 h-6 text-[var(--accent-primary)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">
                      Desnivel Positivo
                    </p>
                    <p className="text-3xl font-bold text-[var(--text-primary)]">
                      {routeData.elevationGain.toLocaleString()}m
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div className="bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[var(--accent-primary)] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide">
                      Distancia Total
                    </p>
                    <p className="text-3xl font-bold text-[var(--text-primary)]">
                      {routeData.totalDistance}km
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
