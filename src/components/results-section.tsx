'use client';

import { motion } from 'framer-motion';
import { ExternalLink, TimerReset } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function ResultsSection() {
  const { t } = useLanguage();

  return (
    <section id="resultados" className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('resultados.title')}
        </motion.h2>

        <motion.div
          className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--bg-primary)] text-[var(--accent-primary)]">
            <TimerReset className="h-6 w-6" />
          </div>

          <h3 className="font-roboto-condensed text-3xl font-bold text-[var(--text-primary)]">
            {t('resultados.pendingTitle')}
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--text-secondary)]">
            {t('resultados.pendingBody')}
          </p>

          <a
            href="https://gedsports.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--accent-primary)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--accent-secondary)]"
          >
            {t('resultados.pendingCta')}
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
