'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { Droplets, UtensilsCrossed, HeartPulse, Package } from 'lucide-react';

interface SupplyPoint {
  id: number;
  km: number;
  name: string;
  elevation: number;
  distance: '10K' | '25K' | '50K';
  services: {
    water: boolean;
    food: boolean;
    medical: boolean;
    dropbag: boolean;
  };
}

const supplyPoints: SupplyPoint[] = [
  {
    id: 1,
    km: 0,
    name: 'Salida',
    elevation: 320,
    distance: '10K',
    services: { water: true, food: true, medical: true, dropbag: false },
  },
  {
    id: 2,
    km: 3.5,
    name: 'Control Técnico',
    elevation: 850,
    distance: '10K',
    services: { water: true, food: true, medical: true, dropbag: false },
  },
  {
    id: 3,
    km: 7,
    name: 'Cumbre Mogrovejo',
    elevation: 1200,
    distance: '10K',
    services: { water: true, food: true, medical: true, dropbag: false },
  },
  {
    id: 4,
    km: 10,
    name: 'Meta',
    elevation: 320,
    distance: '10K',
    services: { water: true, food: true, medical: true, dropbag: false },
  },

  {
    id: 5,
    km: 0,
    name: 'Salida',
    elevation: 320,
    distance: '25K',
    services: { water: true, food: true, medical: true, dropbag: false },
  },
  {
    id: 6,
    km: 5,
    name: 'Control Cabaña',
    elevation: 950,
    distance: '25K',
    services: { water: true, food: true, medical: true, dropbag: true },
  },
  {
    id: 7,
    km: 12,
    name: 'Control Alto Duje',
    elevation: 1380,
    distance: '25K',
    services: { water: true, food: true, medical: true, dropbag: true },
  },
  {
    id: 8,
    km: 18,
    name: 'Control Camarena',
    elevation: 1100,
    distance: '25K',
    services: { water: true, food: true, medical: true, dropbag: true },
  },
  {
    id: 9,
    km: 25,
    name: 'Meta',
    elevation: 320,
    distance: '25K',
    services: { water: true, food: true, medical: true, dropbag: false },
  },

  {
    id: 10,
    km: 0,
    name: 'Salida',
    elevation: 320,
    distance: '50K',
    services: { water: true, food: true, medical: true, dropbag: false },
  },
  {
    id: 11,
    km: 8,
    name: 'Control Cabaña',
    elevation: 950,
    distance: '50K',
    services: { water: true, food: true, medical: true, dropbag: true },
  },
  {
    id: 12,
    km: 16,
    name: 'Control Alto Duje',
    elevation: 1380,
    distance: '50K',
    services: { water: true, food: true, medical: true, dropbag: true },
  },
  {
    id: 13,
    km: 24,
    name: 'Control Camarena',
    elevation: 1100,
    distance: '50K',
    services: { water: true, food: true, medical: true, dropbag: true },
  },
  {
    id: 14,
    km: 32,
    name: 'Control Áliva',
    elevation: 1430,
    distance: '50K',
    services: { water: true, food: true, medical: true, dropbag: true },
  },
  {
    id: 15,
    km: 40,
    name: 'Control Potes',
    elevation: 320,
    distance: '50K',
    services: { water: true, food: true, medical: true, dropbag: true },
  },
  {
    id: 16,
    km: 50,
    name: 'Meta',
    elevation: 320,
    distance: '50K',
    services: { water: true, food: true, medical: true, dropbag: false },
  },
];

export function SupplySection() {
  const { t } = useLanguage();
  const [selectedDistance, setSelectedDistance] = useState<'10K' | '25K' | '50K'>('10K');

  const filteredPoints = supplyPoints.filter((p) => p.distance === selectedDistance);

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.5, ease: 'easeInOut' },
    },
  };

  const pointVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="avituallamiento"
      className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('avit.title')}
        </motion.h2>

        {/* Selector de modalidad */}
        <div className="mb-12 flex gap-3">
          {(['10K', '25K', '50K'] as const).map((distance) => (
            <button
              key={distance}
              onClick={() => setSelectedDistance(distance)}
              className={`px-4 py-2 rounded transition-all font-semibold ${
                selectedDistance === distance
                  ? 'bg-[var(--accent-primary)] text-white'
                  : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'
              }`}
            >
              {distance}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Línea conectora horizontal */}
          <motion.div
            className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] origin-left"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          {/* Puntos de avituallamiento */}
          <div className="relative flex justify-between">
            {filteredPoints.map((point, index) => (
              <motion.div
                key={point.id}
                className="flex flex-col items-center"
                variants={pointVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Círculo del punto */}
                <div className="w-12 h-12 rounded-full bg-[var(--accent-primary)] border-4 border-[var(--bg-primary)] flex items-center justify-center text-white font-bold text-sm z-10">
                  {point.km}
                </div>

                {/* Info del punto */}
                <div className="mt-6 text-center max-w-xs">
                  <h3 className="font-roboto-condensed font-bold text-[var(--text-primary)] text-sm mb-2">
                    {point.name}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    {point.elevation}m
                  </p>

                  {/* Servicios */}
                  <div className="flex justify-center gap-2 flex-wrap">
                    {point.services.water && (
                      <div className="flex items-center gap-1 bg-[var(--bg-secondary)] px-2 py-1 rounded text-xs">
                        <Droplets className="w-3 h-3 text-blue-500" />
                        <span className="text-[var(--text-secondary)]">{t('avit.water')}</span>
                      </div>
                    )}
                    {point.services.food && (
                      <div className="flex items-center gap-1 bg-[var(--bg-secondary)] px-2 py-1 rounded text-xs">
                        <UtensilsCrossed className="w-3 h-3 text-orange-500" />
                        <span className="text-[var(--text-secondary)]">{t('avit.food')}</span>
                      </div>
                    )}
                    {point.services.medical && (
                      <div className="flex items-center gap-1 bg-[var(--bg-secondary)] px-2 py-1 rounded text-xs">
                        <HeartPulse className="w-3 h-3 text-red-500" />
                        <span className="text-[var(--text-secondary)]">{t('avit.medical')}</span>
                      </div>
                    )}
                    {point.services.dropbag && (
                      <div className="flex items-center gap-1 bg-[var(--bg-secondary)] px-2 py-1 rounded text-xs">
                        <Package className="w-3 h-3 text-purple-500" />
                        <span className="text-[var(--text-secondary)]">{t('avit.dropbag')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
