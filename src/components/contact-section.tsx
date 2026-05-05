'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, TimerReset } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

const contactCards = [
  {
    icon: Mail,
    titleKey: 'contact.cards.email.title',
    textKey: 'contact.cards.email.text',
    href: 'mailto:Mogrovejo10ktrail@gmail.com',
    hrefLabel: 'Mogrovejo10ktrail@gmail.com',
  },
  {
    icon: Phone,
    titleKey: 'contact.cards.phone.title',
    textKey: 'contact.cards.phone.text',
    href: 'tel:+34633165086',
    hrefLabel: '633 165 086',
  },
  {
    icon: MapPin,
    titleKey: 'contact.cards.location.title',
    textKey: 'contact.cards.location.text',
    href: 'https://maps.google.com/?q=43.1827,-4.8477',
    hrefLabel: 'Mogrovejo, Camaleno',
  },
  {
    icon: TimerReset,
    titleKey: 'contact.cards.reply.title',
    textKey: 'contact.cards.reply.text',
    href: 'mailto:Mogrovejo10ktrail@gmail.com?subject=Consulta%20Mogrovejo%20Trail',
    hrefLabel: 'Enviar consulta',
  },
] as const;

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[var(--border-color)] bg-[var(--bg-primary)] py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-secondary)] p-8"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--accent-primary)]">
            {t('contact.eyebrow')}
          </p>
          <h2 className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)]">
            {t('contact.title')}
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
            {t('contact.description')}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.a
                  key={card.titleKey}
                  href={card.href}
                  target={card.href.startsWith('https') ? '_blank' : undefined}
                  rel={card.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] p-5 transition-colors hover:border-[var(--accent-primary)]"
                >
                  <Icon className="h-5 w-5 text-[var(--accent-primary)]" />
                  <h3 className="mt-4 font-roboto-condensed text-xl font-bold text-[var(--text-primary)]">
                    {t(card.titleKey)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                    {t(card.textKey)}
                  </p>
                  <p className="mt-4 font-semibold text-[var(--accent-primary)]">
                    {card.hrefLabel}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="rounded-lg border border-[var(--border-color)] bg-[linear-gradient(180deg,rgba(44,74,111,0.14),transparent),var(--bg-secondary)] p-8"
        >
          <h3 className="font-roboto-condensed text-3xl font-bold text-[var(--text-primary)]">
            {t('contact.box.title')}
          </h3>
          <p className="mt-4 text-[var(--text-secondary)] leading-7">
            {t('contact.box.description')}
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
                {t('contact.box.scheduleLabel')}
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                {t('contact.box.schedule')}
              </p>
            </div>

            <div className="rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
                {t('contact.box.topicsLabel')}
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                {t('contact.box.topics')}
              </p>
            </div>

            <a
              href="https://www.gedsports.com/race/mogrovejo-trail-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--accent-primary)] px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-[var(--accent-secondary)]"
            >
              {t('contact.box.cta')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
