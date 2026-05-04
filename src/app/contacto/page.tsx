'use client';

import { motion } from 'framer-motion';
import { ContactForm } from '@/components/contact-form';
import { CookieBanner } from '@/components/sections';
import { TeamSection } from '@/components/team-section';

export default function ContactPage() {
  return (
    <>
      <section id="contacto" className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contacto
          </motion.h1>
          <motion.p
            className="text-[var(--text-secondary)] mb-12 text-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            ¿Tienes preguntas? Ponte en contacto con nosotros. Estaremos encantados de ayudarte.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactForm />

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6">
                <h3 className="font-roboto-condensed text-lg font-bold text-[var(--text-primary)] mb-3">
                  Email
                </h3>
                <a
                  href="mailto:info@mogrovejo.com"
                  className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
                >
                  info@mogrovejo.com
                </a>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6">
                <h3 className="font-roboto-condensed text-lg font-bold text-[var(--text-primary)] mb-3">
                  Teléfono
                </h3>
                <a
                  href="tel:+34123456789"
                  className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors"
                >
                  +34 123 456 789
                </a>
              </div>

              <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-6">
                <h3 className="font-roboto-condensed text-lg font-bold text-[var(--text-primary)] mb-3">
                  Ubicación
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  Mogrovejo, Picos de Europa
                  <br />
                  Cantabria, España
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TeamSection />
      <CookieBanner />
    </>
  );
}
