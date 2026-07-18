'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { MapPin, Clock } from 'lucide-react';

export function AccessSection() {
  const { t } = useLanguage();

  return (
    <section id="acceso" className="py-16 bg-[radial-gradient(circle_at_top_left,_rgba(44,74,111,0.24),_transparent_42%),linear-gradient(180deg,var(--bg-primary),var(--bg-secondary))] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('acceso.parking')}
        </motion.h2>

        {/* Sección de aparcamiento */}
        <motion.div
          className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img
            src="/img/PARKING.png"
            alt={t('acceso.parking')}
            className="w-full h-auto rounded-lg mb-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-[var(--accent-primary)] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Ubicación</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Aparcamiento principal junto a la salida en Mogrovejo. Zona habilitada con líneas de estacionamiento.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="w-6 h-6 text-[var(--accent-primary)] flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Horario</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Acceso a partir de las 6:00 AM el día de la carrera. Salida hasta 2 horas post-cierre de cortes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-6 h-6 text-[var(--accent-primary)] flex-shrink-0 mt-1 font-bold">P</div>
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">{t('acceso.capacity')}</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Aproximadamente 250 plazas. En caso de lleno se habilitará zona secundaria a 500m.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
