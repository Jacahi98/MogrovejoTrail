'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { Calendar, Clock, MapPin, UserCheck } from 'lucide-react';

export function WorkshopSection() {
  const { t } = useLanguage();

  const handleRegister = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe-2m5LMOD4dR4XEvWtHlx2x4ZO-D1xiJFBJMyifkpJJTcIHg/viewform', '_blank');
  };

  return (
    <section
      id="workshop"
      className="py-16 bg-[linear-gradient(180deg,var(--bg-secondary),var(--bg-primary))] border-b border-[var(--border-color)]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/logos/AbilityRun.png" alt="Ability Run" className="h-24 sm:h-32" />
            <h2 className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)]">
              {t('workshop.title')}
            </h2>
          </div>
        </motion.div>

        <motion.div
          className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-8 space-y-6">
            <p className="text-[var(--text-secondary)] leading-relaxed">
              {t('workshop.description')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="flex items-start gap-4 p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border-color)]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Calendar className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wide">
                    {t('workshop.label.date')}
                  </p>
                  <p className="text-[var(--text-primary)] font-semibold">
                    {t('workshop.date')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border-color)]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wide">
                    {t('workshop.label.time')}
                  </p>
                  <p className="text-[var(--text-primary)] font-semibold">
                    {t('workshop.time')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 bg-[var(--bg-primary)] rounded-lg border border-[var(--border-color)]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wide">
                    {t('workshop.label.location')}
                  </p>
                  <p className="text-[var(--text-primary)] font-semibold">
                    {t('workshop.location')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 p-4 bg-[linear-gradient(135deg,rgba(44,74,111,0.1),rgba(44,74,111,0.05))] rounded-lg border border-[var(--accent-primary)] border-opacity-30"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-1 flex items-center justify-center text-sm font-bold">
                  ✓
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wide">
                    {t('workshop.label.free')}
                  </p>
                  <p className="text-[var(--text-primary)] font-semibold">
                    {t('workshop.free')}
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="flex items-start gap-4 p-4 bg-[linear-gradient(135deg,rgba(44,74,111,0.1),rgba(44,74,111,0.05))] rounded-lg border border-[var(--accent-primary)] border-opacity-30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <UserCheck className="w-5 h-5 text-[var(--accent-primary)] flex-shrink-0 mt-1" />
              <div>
                <p className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wide">
                  {t('workshop.label.instructor')}
                </p>
                <p className="text-[var(--text-primary)] font-semibold">
                  {t('workshop.instructor')}
                </p>
              </div>
            </motion.div>
          </div>

          <div className="px-8 py-6 bg-[var(--bg-primary)] border-t border-[var(--border-color)] flex flex-col sm:flex-row gap-3 sm:gap-4">
            <motion.button
              onClick={handleRegister}
              className="flex-1 px-6 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('workshop.cta')}
            </motion.button>
            <p className="text-sm text-[var(--text-secondary)] flex items-center justify-center sm:justify-start">
              {t('workshop.noLimit')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
