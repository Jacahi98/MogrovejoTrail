'use client';

import { motion } from 'framer-motion';
import { Droplets, UtensilsCrossed, MapPin } from 'lucide-react';

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

interface SupplyTimelineProps {
  supplies: SupplyPoint[];
}

export function SupplyTimeline({ supplies }: SupplyTimelineProps) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Línea conectora horizontal */}
      <motion.div
        className="absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] origin-left"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
      />

      {/* Puntos de avituallamiento */}
      <div className={`relative flex ${supplies.length === 1 ? 'justify-center' : 'justify-between'}`}>
        {supplies.map((supply, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Círculo del punto */}
            <div className="w-12 h-12 rounded-full bg-[var(--accent-primary)] border-4 border-[var(--bg-primary)] flex items-center justify-center text-white font-bold text-xs z-10 text-center px-1">
              {supply.label}
            </div>

            {/* Info del punto */}
            <div className="mt-6 text-center max-w-xs">
              <div className="flex items-center justify-center gap-2 mb-2">
                {supply.services.water && (
                  <Droplets className="w-4 h-4 text-blue-500" />
                )}
                {supply.services.food && (
                  <UtensilsCrossed className="w-4 h-4 text-orange-500" />
                )}
                <h4 className="font-roboto-condensed font-bold text-[var(--text-primary)] text-sm">
                  {supply.name}
                </h4>
              </div>
              <div className="flex items-center justify-center gap-2 text-xs text-[var(--text-secondary)]">
                {supply.location && (
                  <>
                    <MapPin className="w-3 h-3" />
                    <span>{supply.location}</span>
                    <span>•</span>
                  </>
                )}
                <span>↑ {supply.elevation}m</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
