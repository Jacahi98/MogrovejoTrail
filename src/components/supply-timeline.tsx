'use client';

import { motion } from 'framer-motion';
import { Droplets, UtensilsCrossed } from 'lucide-react';

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
    <div className="flex flex-col gap-2">
      {supplies.map((supply, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-3 px-4 py-2.5 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-lg"
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.08 }}
        >
          {/* Badge km */}
          <span className="shrink-0 px-2 py-0.5 rounded-full bg-[var(--accent-primary)] text-white text-xs font-bold">
            {supply.label}
          </span>

          {/* Nombre */}
          <span className="font-roboto-condensed font-bold text-[var(--text-primary)] text-sm">
            {supply.name}
          </span>

          {/* Altitud */}
          <span className="text-xs text-[var(--text-secondary)] ml-auto shrink-0">
            ↑ {supply.elevation} m
          </span>

          {/* Servicios */}
          {supply.services.water && <Droplets className="w-3.5 h-3.5 text-blue-500 shrink-0" />}
          {supply.services.food && <UtensilsCrossed className="w-3.5 h-3.5 text-orange-500 shrink-0" />}
        </motion.div>
      ))}
    </div>
  );
}
