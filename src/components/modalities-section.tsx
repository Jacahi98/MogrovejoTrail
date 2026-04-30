'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

interface Route {
  id: number;
  title: string;
  distance: string;
  elevation: string;
  pace: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
}

/**
 * Sección de Modalidades con tarjetas de rutas
 * Datos técnicos: Distancia, Desnivel, Ritmo, Clasificación
 * Tono: Profesional e institucional
 */
export function ModalitiesSection() {
  const { t } = useLanguage();

  const routes: Route[] = [
    { id: 1, title: '10K Mogrovejo Trail', distance: '10 km', elevation: '+800m', pace: 'Moderado', difficulty: 'easy' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="modalidades" className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('modalidades.title')}
        </motion.h2>

        {/* Grid de tarjetas */}
        <motion.div
          className="flex justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {routes.map((route) => (
            <motion.div
              key={route.id}
              className="w-full max-w-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg overflow-hidden hover:border-[var(--text-primary)] transition-all duration-300 p-8"
              variants={cardVariants}
              whileHover={{ y: -4 }}
            >
              <h3 className="font-roboto-condensed text-3xl font-bold text-[var(--text-primary)] mb-4">
                {route.title}
              </h3>

              <div className="flex items-center gap-6 text-[var(--text-secondary)] mb-8 text-lg">
                <span>{route.distance}</span>
                <span className="text-[var(--border-color)]">•</span>
                <span>{route.elevation}</span>
              </div>

              <a
                href="https://www.wikiloc.com/running-trails/mogrovejo-10k-trail-141347749?h=3p7yarw26p&wa=so"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold transition-colors"
              >
                Ver ruta en Wikiloc
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
