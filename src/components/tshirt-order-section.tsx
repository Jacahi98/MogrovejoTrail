'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Clock, Shirt } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeqEkTEbK43eLJul4KR3lZQdxVaIgT49TQNGhnJFpMUyES6Xw/viewform';

export function TshirtOrderSection() {
  const { t } = useLanguage();

  return (
    <section
      id="reserva-camiseta"
      className="scroll-mt-20 border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-16"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8 text-center"
        >
          <p className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-primary)]">
            <Shirt className="h-4 w-4" />
            {t('tshirtOrder.eyebrow')}
          </p>
          <h2 className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)]">
            {t('tshirtOrder.title')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            {t('tshirtOrder.description')}
          </p>

          <p className="mx-auto mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-[var(--accent-primary)]">
            <Clock className="h-4 w-4" />
            {t('tshirtOrder.deadline')}
          </p>

          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--accent-primary)] px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
          >
            {t('tshirtOrder.button')}
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
