'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { Car, Bus, Train, MapPin, Clock } from 'lucide-react';

interface TransportOption {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  label: string;
  directions: string[];
  mapsUrl: string;
}

export function AccessSection() {
  const { t } = useLanguage();

  const transportOptions: TransportOption[] = [
    {
      id: 1,
      icon: Car,
      title: t('acceso.car'),
      label: t('acceso.car'),
      directions: [
        'Desde Santander: ~130 km (2h 15m) vía A-67 + N-634',
        'Desde Potes: ~25 km (45m) vía CA-184',
        'Desde León: ~160 km (2h 45m) vía LE-482 + C-45',
      ],
      mapsUrl: 'https://maps.google.com/?q=43.1827,-4.8477',
    },
    {
      id: 2,
      icon: Bus,
      title: t('acceso.bus'),
      label: t('acceso.bus'),
      directions: [
        'Autobuses ALSA: Santander → Potes (línea 623)',
        'Servicio local AVST: conexiones Potes-Mogrovejo',
        'Consulta horarios en agosto: www.alsa.es',
      ],
      mapsUrl: 'https://maps.google.com/?q=43.1827,-4.8477',
    },
    {
      id: 3,
      icon: Train,
      title: t('acceso.train'),
      label: t('acceso.train'),
      directions: [
        'Renfe: Santander → Potes (línea local, ~2h)',
        'Estación de Potes a 25 km de Mogrovejo',
        'Transporte desde estación no incluido',
      ],
      mapsUrl: 'https://maps.google.com/?q=43.1827,-4.8477',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="acceso" className="py-16 bg-[radial-gradient(circle_at_top_left,_rgba(44,74,111,0.24),_transparent_42%),linear-gradient(180deg,var(--bg-primary),var(--bg-secondary))] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('acceso.title')}
        </motion.h2>

        {/* Grid de opciones de transporte */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {transportOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <motion.div
                key={option.id}
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg overflow-hidden hover:border-[var(--text-primary)] transition-all duration-300 flex flex-col"
                variants={cardVariants}
                whileHover={{ y: -4 }}
              >
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-6 py-6 flex items-center gap-4">
                  <IconComponent className="w-8 h-8 text-[var(--accent-primary)]" />
                  <h3 className="font-roboto-condensed text-xl font-bold text-white">
                    {option.title}
                  </h3>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="space-y-3 mb-6 flex-grow">
                    {option.directions.map((direction, idx) => (
                      <p key={idx} className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {direction}
                      </p>
                    ))}
                  </div>

                  <a
                    href={option.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] font-semibold text-sm transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    {t('acceso.maps')}
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Sección de aparcamiento */}
        <motion.div
          className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-roboto-condensed text-2xl font-bold text-[var(--text-primary)] mb-6">
            {t('acceso.parking')}
          </h3>

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
