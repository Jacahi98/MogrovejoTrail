'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { CookieBanner } from '@/components/sections';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <section id="contacto" className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {t('nav.contacto')}
          </motion.h1>
          <motion.p
            className="text-[var(--text-secondary)] mb-12 text-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            {t('contact.description')}
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="mailto:Mogrovejo10ktrail@gmail.com"
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6 flex flex-col gap-3 hover:border-[var(--accent-primary)] transition-colors"
            >
              <Mail className="w-6 h-6 text-[var(--accent-primary)]" />
              <h3 className="font-roboto-condensed text-lg font-bold text-[var(--text-primary)]">
                {t('contact.cards.email.title')}
              </h3>
              <span className="text-sm text-[var(--accent-primary)] break-all">
                Mogrovejo10ktrail@gmail.com
              </span>
            </a>

            <a
              href="tel:+34633165086"
              className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6 flex flex-col gap-3 hover:border-[var(--accent-primary)] transition-colors"
            >
              <Phone className="w-6 h-6 text-[var(--accent-primary)]" />
              <h3 className="font-roboto-condensed text-lg font-bold text-[var(--text-primary)]">
                {t('contact.cards.phone.title')}
              </h3>
              <span className="text-sm text-[var(--accent-primary)]">633 165 086</span>
            </a>

            <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6 flex flex-col gap-3">
              <MapPin className="w-6 h-6 text-[var(--accent-primary)]" />
              <h3 className="font-roboto-condensed text-lg font-bold text-[var(--text-primary)]">
                {t('contact.cards.location.title')}
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Mogrovejo, Picos de Europa
                <br />
                Cantabria, España
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <CookieBanner />
    </>
  );
}
