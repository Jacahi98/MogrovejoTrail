'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

/**
 * Sección de Modalidades
 * Presenta las dos formas de participar en la carrera
 */
export function ModalitiesSection() {
  const { t } = useLanguage();

  const modalities = [
    { id: 1, title: t('modalities.trail.shortTitle'), description: t('modalities.trail.shortDesc'), startTime: t('modalities.trail.startTime'), modalityId: 'trail' },
    { id: 2, title: t('modalities.andarines.shortTitle'), description: t('modalities.andarines.shortDesc'), startTime: t('modalities.andarines.startTime'), modalityId: 'andarines' },
    { id: 3, title: t('modalities.infantiles.shortTitle'), description: t('modalities.infantiles.shortDesc'), startTime: t('modalities.infantiles.startTime'), modalityId: 'infantiles' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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

        {/* Tarjeta de información del recorrido */}
        <motion.div
          className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-8 mb-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-[var(--text-secondary)] text-sm uppercase tracking-wide mb-2">
                {t('modalities.routeCard.distance')}
              </p>
              <p className="font-roboto-condensed text-3xl font-bold text-[var(--text-primary)]">
                9 km
              </p>
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <p className="text-[var(--text-secondary)] text-sm uppercase tracking-wide mb-2">
                {t('modalities.routeCard.elevation')}
              </p>
              <p className="font-roboto-condensed text-3xl font-bold text-[var(--text-primary)]">
                +800m
              </p>
            </div>
            <div className="flex justify-center sm:justify-end">
              <a
                href="https://www.wikiloc.com/running-trails/mogrovejo-10k-trail-141347749?h=3p7yarw26p&wa=so"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded transition-colors text-sm"
              >
                {t('modalities.routeCard.wikiloc')}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Modalidades */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {modalities.map((modality) => (
            <Link key={modality.id} href={`/info?modality=${modality.modalityId}`}>
              <motion.div
                className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-8 hover:border-[var(--accent-primary)] transition-all duration-300 cursor-pointer h-full"
                variants={itemVariants}
                whileHover={{ y: -4 }}
              >
                <p className="font-roboto-condensed text-3xl font-bold text-[var(--text-primary)] mb-2 hover:text-[var(--accent-primary)] transition-colors">
                  {modality.title}
                </p>
                <p className="text-[var(--text-secondary)] mb-3">
                  {modality.description}
                </p>
                <p className="text-sm font-semibold text-[var(--accent-primary)]">
                  {modality.startTime}
                </p>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
