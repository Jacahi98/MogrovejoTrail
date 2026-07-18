'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { Droplets, UtensilsCrossed, MapPin } from 'lucide-react';

interface SupplyPoint {
  id: number;
  km: number;
  name: string;
  elevation: number;
  label: string;
  services: {
    water: boolean;
    food: boolean;
    medical: boolean;
    dropbag: boolean;
  };
}

const supplyPoints: SupplyPoint[] = [
  {
    id: 0,
    km: 0,
    name: 'Inicio',
    elevation: 546,
    label: '0 km',
    services: { water: false, food: false, medical: false, dropbag: false },
  },
  {
    id: 1,
    km: 4,
    name: 'Líquidos',
    elevation: 850,
    label: '4 km',
    services: { water: true, food: false, medical: false, dropbag: false },
  },
  {
    id: 2,
    km: 10,
    name: 'Sólidos y Líquidos',
    elevation: 546,
    label: 'Meta · 10 km',
    services: { water: true, food: true, medical: false, dropbag: false },
  },
];

export function SupplySection() {
  const { t } = useLanguage();

  return (
    <section
      id="avituallamiento"
      className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('avit.title')}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {supplyPoints.map((point, index) => (
            <motion.div
              key={point.id}
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6 flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              {/* Km badge */}
              <div className="inline-flex self-start px-3 py-1 rounded-full bg-[var(--accent-primary)] text-white text-xs font-bold">
                {point.label}
              </div>

              {/* Nombre */}
              <h3 className="font-roboto-condensed text-xl font-bold text-[var(--text-primary)]">
                {point.name || '—'}
              </h3>

              {/* Altitud */}
              <p className="flex items-center gap-1 text-sm text-[var(--text-secondary)]">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                {point.elevation} m
              </p>

              {/* Servicios */}
              {(point.services.water || point.services.food) && (
                <div className="flex items-center gap-3 pt-1">
                  {point.services.water && (
                    <span className="flex items-center gap-1 text-sm text-blue-500 font-medium">
                      <Droplets className="w-4 h-4" /> Agua
                    </span>
                  )}
                  {point.services.food && (
                    <span className="flex items-center gap-1 text-sm text-orange-500 font-medium">
                      <UtensilsCrossed className="w-4 h-4" /> Sólidos
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
