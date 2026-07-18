'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

export function VolunteersSection() {
  const { t } = useLanguage();

  return (
    <section id="voluntarios" className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-4">
            {t('volunteers.title')}
          </h2>

          <div className="mt-8 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-8">
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              {t('volunteers.text1')}
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {t('volunteers.text2')}
            </p>
          </div>

          <p className="mt-8 text-sm text-[var(--text-secondary)] italic">
            {t('volunteers.cta')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
