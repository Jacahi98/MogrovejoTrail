'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { ElevationProfile } from './elevation-profile';
import { SupplyTimeline } from './supply-timeline';

interface RouteData {
  distance: string;
  totalDistance: number;
  elevationGain: number;
  maxAltitude: number;
  minAltitude: number;
  wikiloc: string;
  elevationProfile: Array<{ distance: number; altitude: number }>;
}

interface SupplyPoint {
  name: string;
  elevation: number;
  label: string;
  location?: string;
  services: {
    water: boolean;
    food: boolean;
  };
}

interface Modality {
  id: string;
  titleKey: string;
  descriptionKey: string;
  route: RouteData;
  supplies: SupplyPoint[];
}

const modalities: Modality[] = [
  {
    id: 'trail',
    titleKey: 'modalities.trail.title',
    descriptionKey: 'modalities.trail.description',
    route: {
      distance: '10K',
      totalDistance: 8.77,
      elevationGain: 410,
      maxAltitude: 956,
      minAltitude: 546,
      wikiloc: 'https://www.wikiloc.com/running-trails/mogrovejo-10k-trail-141347749?h=3p7yarw26p&wa=so&la=en',
      elevationProfile: [
        { distance: 0.0, altitude: 643 },
        { distance: 0.3, altitude: 647 },
        { distance: 0.7, altitude: 613 },
        { distance: 1.0, altitude: 583 },
        { distance: 1.3, altitude: 581 },
        { distance: 1.6, altitude: 555 },
        { distance: 2.0, altitude: 586 },
        { distance: 2.3, altitude: 614 },
        { distance: 2.6, altitude: 664 },
        { distance: 3.0, altitude: 680 },
        { distance: 3.3, altitude: 714 },
        { distance: 3.6, altitude: 740 },
        { distance: 4.0, altitude: 768 },
        { distance: 4.3, altitude: 812 },
        { distance: 4.6, altitude: 836 },
        { distance: 4.9, altitude: 854 },
        { distance: 5.3, altitude: 881 },
        { distance: 5.6, altitude: 916 },
        { distance: 5.9, altitude: 929 },
        { distance: 6.3, altitude: 918 },
        { distance: 6.6, altitude: 946 },
        { distance: 6.9, altitude: 933 },
        { distance: 7.2, altitude: 906 },
        { distance: 7.6, altitude: 891 },
        { distance: 7.9, altitude: 863 },
        { distance: 8.2, altitude: 825 },
        { distance: 8.6, altitude: 807 },
        { distance: 8.9, altitude: 788 },
        { distance: 9.2, altitude: 750 },
        { distance: 9.6, altitude: 693 },
        { distance: 9.9, altitude: 654 },
      ],
    },
    supplies: [
      {
        name: 'Inicio',
        elevation: 546,
        label: 'Inicio',
        services: { water: false, food: false },
      },
      {
        name: 'Líquidos',
        elevation: 850,
        label: '4km',
        location: 'Cuardes',
        services: { water: true, food: false },
      },
      {
        name: 'Sólidos y Líquidos',
        elevation: 546,
        label: 'Meta',
        services: { water: true, food: true },
      },
    ],
  },
  {
    id: 'andarines',
    titleKey: 'modalities.andarines.title',
    descriptionKey: 'modalities.andarines.description',
    route: {
      distance: '10K',
      totalDistance: 8.77,
      elevationGain: 410,
      maxAltitude: 956,
      minAltitude: 546,
      wikiloc: 'https://www.wikiloc.com/running-trails/mogrovejo-10k-trail-141347749?h=3p7yarw26p&wa=so&la=en',
      elevationProfile: [
        { distance: 0.0, altitude: 643 },
        { distance: 0.3, altitude: 647 },
        { distance: 0.7, altitude: 613 },
        { distance: 1.0, altitude: 583 },
        { distance: 1.3, altitude: 581 },
        { distance: 1.6, altitude: 555 },
        { distance: 2.0, altitude: 586 },
        { distance: 2.3, altitude: 614 },
        { distance: 2.6, altitude: 664 },
        { distance: 3.0, altitude: 680 },
        { distance: 3.3, altitude: 714 },
        { distance: 3.6, altitude: 740 },
        { distance: 4.0, altitude: 768 },
        { distance: 4.3, altitude: 812 },
        { distance: 4.6, altitude: 836 },
        { distance: 4.9, altitude: 854 },
        { distance: 5.3, altitude: 881 },
        { distance: 5.6, altitude: 916 },
        { distance: 5.9, altitude: 929 },
        { distance: 6.3, altitude: 918 },
        { distance: 6.6, altitude: 946 },
        { distance: 6.9, altitude: 933 },
        { distance: 7.2, altitude: 906 },
        { distance: 7.6, altitude: 891 },
        { distance: 7.9, altitude: 863 },
        { distance: 8.2, altitude: 825 },
        { distance: 8.6, altitude: 807 },
        { distance: 8.9, altitude: 788 },
        { distance: 9.2, altitude: 750 },
        { distance: 9.6, altitude: 693 },
        { distance: 9.9, altitude: 654 },
      ],
    },
    supplies: [
      {
        name: 'Inicio',
        elevation: 546,
        label: 'Inicio',
        services: { water: false, food: false },
      },
      {
        name: 'Líquidos',
        elevation: 850,
        label: '4km',
        location: 'Cuardes',
        services: { water: true, food: false },
      },
      {
        name: 'Sólidos y Líquidos',
        elevation: 546,
        label: 'Meta',
        services: { water: true, food: true },
      },
    ],
  },
  {
    id: 'infantiles',
    titleKey: 'modalities.infantiles.title',
    descriptionKey: 'modalities.infantiles.description',
    route: {
      distance: 'Variable',
      totalDistance: 0,
      elevationGain: 0,
      maxAltitude: 0,
      minAltitude: 0,
      wikiloc: '',
      elevationProfile: [],
    },
    supplies: [],
  },
];

interface ModilitiesDetailSectionProps {
  initialModality?: string;
}

export function ModilitiesDetailSection({ initialModality }: ModilitiesDetailSectionProps) {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (initialModality) {
      const frame = window.requestAnimationFrame(() => {
        setOpenId(initialModality);
      });
      return () => window.cancelAnimationFrame(frame);
    }
  }, [initialModality]);

  const panelVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <section
      id="recorrido"
      className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('modalities.title')}
        </motion.h2>

        <div className="space-y-3">
          {modalities.map((modality) => (
            <div key={modality.id}>
              <button
                onClick={() => setOpenId(openId === modality.id ? null : modality.id)}
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-6 py-4 text-left hover:border-[var(--text-primary)] transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-roboto-condensed font-bold text-[var(--text-primary)] text-lg">
                  {t(modality.titleKey)}
                </span>
                <motion.div
                  animate={{ rotate: openId === modality.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[var(--accent-primary)]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === modality.id && (
                  <motion.div
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-[var(--bg-secondary)] border border-t-0 border-[var(--border-color)] rounded-b-lg"
                  >
                    <div className="px-6 py-8 space-y-8">
                      <p className="text-[var(--text-secondary)]">
                        {t(modality.descriptionKey)}
                      </p>

                      {/* Perfil de la carrera - solo si hay datos */}
                      {modality.route.elevationProfile.length > 0 && (
                        <div>
                          <h3 className="font-roboto-condensed text-2xl font-bold text-[var(--text-primary)] mb-6">
                            {t('modalities.profile')}
                          </h3>
                          <div className="bg-white dark:bg-[#fafafa] rounded-xl shadow-lg p-8 border-2 border-[var(--border-color)]">
                            <ElevationProfile
                              data={modality.route.elevationProfile}
                              maxAltitude={modality.route.maxAltitude}
                              minAltitude={modality.route.minAltitude}
                              totalDistance={modality.route.totalDistance}
                            />

                            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8 pt-8 border-t-2 border-[var(--border-color)]">
                              <div className="flex flex-wrap gap-2 sm:gap-3 flex-1 w-full">
                                <div className="text-center bg-white dark:bg-white rounded-lg p-2 sm:p-3 border-2 border-[var(--border-color)] flex-1 min-w-[100px]">
                                  <p className="text-[10px] sm:text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wide mb-1">
                                    {t('modalities.distance')}
                                  </p>
                                  <p className="text-base sm:text-lg font-bold text-[var(--accent-primary)]">
                                    {modality.route.totalDistance}km
                                  </p>
                                </div>
                                <div className="text-center bg-white dark:bg-white rounded-lg p-2 sm:p-3 border-2 border-[var(--border-color)] flex-1 min-w-[100px]">
                                  <p className="text-[10px] sm:text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wide mb-1">
                                    {t('modalities.elevation')}
                                  </p>
                                  <p className="text-base sm:text-lg font-bold text-[var(--accent-primary)]">
                                    {modality.route.elevationGain}m
                                  </p>
                                </div>
                                <div className="text-center bg-white dark:bg-white rounded-lg p-2 sm:p-3 border-2 border-[var(--border-color)] flex-1 min-w-[100px]">
                                  <p className="text-[10px] sm:text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wide mb-1">
                                    {t('modalities.max')}
                                  </p>
                                  <p className="text-base sm:text-lg font-bold text-[var(--accent-primary)]">
                                    {modality.route.maxAltitude}m
                                  </p>
                                </div>
                                <div className="text-center bg-white dark:bg-white rounded-lg p-2 sm:p-3 border-2 border-[var(--border-color)] flex-1 min-w-[100px]">
                                  <p className="text-[10px] sm:text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wide mb-1">
                                    {t('modalities.min')}
                                  </p>
                                  <p className="text-base sm:text-lg font-bold text-[var(--accent-primary)]">
                                    {modality.route.minAltitude}m
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                                <a
                                  href="/routes/mogrovejo-10k.gpx"
                                  download
                                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-[#2C4A6F] hover:bg-[#1f3650] text-white font-bold text-sm rounded-lg transition-all shadow-lg whitespace-nowrap"
                                >
                                  <Download className="w-4 h-4" />
                                  GPX
                                </a>
                                <a
                                  href={modality.route.wikiloc}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-3 sm:px-5 py-2 sm:py-3 border-2 border-[#2C4A6F] text-[#2C4A6F] hover:bg-[#f0f5f8] font-bold text-sm rounded-lg transition-all whitespace-nowrap"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Wikiloc
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Avituallamiento */}
                      {modality.supplies.length > 0 && (
                        <div>
                          <h3 className="font-roboto-condensed text-2xl font-bold text-[var(--text-primary)] mb-6">
                            {t('modalities.supplies')}
                          </h3>
                          <SupplyTimeline supplies={modality.supplies} />
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
