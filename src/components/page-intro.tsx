'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden border-b border-[var(--border-color)] bg-[radial-gradient(circle_at_top_left,_rgba(90,125,106,0.24),_transparent_42%),linear-gradient(180deg,var(--bg-primary),var(--bg-secondary))]">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-primary)]">
            {eyebrow}
          </p>
          <h1 className="font-roboto-condensed text-5xl font-bold text-[var(--text-primary)] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--text-secondary)]">
            <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2">
              {t('hero.date')}
            </span>
            <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2">
              {t('hero.location')}
            </span>
            <span className="rounded-full border border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2">
              {t('hero.distances')}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
