'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { Droplets, UtensilsCrossed } from 'lucide-react';

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
    name: '',
    elevation: 546,
    label: 'Inicio',
    services: { water: false, food: false, medical: false, dropbag: false },
  },
  {
    id: 1,
    km: 5,
    name: 'Líquidos',
    elevation: 850,
    label: '5',
    services: { water: true, food: false, medical: false, dropbag: false },
  },
  {
    id: 2,
    km: 9,
    name: 'Sólidos y Líquidos',
    elevation: 546,
    label: 'Fin',
    services: { water: true, food: true, medical: false, dropbag: false },
  },
];

export function SupplySection() {
  const { t } = useLanguage();

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
            {supplyPoints.map((point, index) => (
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
                  {point.label}
                </div>

                {/* Info del punto */}
                <div className="mt-6 text-center max-w-xs">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {point.services.water && <Droplets className="w-4 h-4 text-blue-500" />}
                    {point.services.food && <UtensilsCrossed className="w-4 h-4 text-orange-500" />}
                    <h3 className="font-roboto-condensed font-bold text-[var(--text-primary)] text-sm">
                      {point.name}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">
                    ↑ {point.elevation}m
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
