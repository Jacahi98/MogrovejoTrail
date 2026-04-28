'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, FileText, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

const cards = [
  {
    href: '/informacion',
    icon: FileText,
    titleKey: 'overview.info.title',
    bodyKey: 'overview.info.body',
  },
  {
    href: '/media',
    icon: Camera,
    titleKey: 'overview.media.title',
    bodyKey: 'overview.media.body',
  },
  {
    href: '/contacto',
    icon: Mail,
    titleKey: 'overview.contact.title',
    bodyKey: 'overview.contact.body',
  },
] as const;

export function SiteSectionsOverview() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <h2 className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)]">
            {t('overview.title')}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="flex h-full flex-col justify-between rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-6"
              >
                <div>
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--bg-primary)] text-[var(--accent-primary)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-roboto-condensed text-2xl font-bold text-[var(--text-primary)]">
                    {t(card.titleKey)}
                  </h3>
                  <p className="mt-3 text-[var(--text-secondary)] leading-7">
                    {t(card.bodyKey)}
                  </p>
                </div>

                <Link
                  href={card.href}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-[var(--accent-primary)] transition-colors hover:text-[var(--accent-secondary)]"
                >
                  {t('overview.cta')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
