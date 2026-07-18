'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

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
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
