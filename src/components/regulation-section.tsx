'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { ChevronDown } from 'lucide-react';

const RESULTS_URL =
  'https://sportmaniacs.com/es/races/mogrovejo-trail-2026/6a64b778-a614-46e2-9dc6-43f7ac1f2075/results#rankings';

interface RegulationPanel {
  id: number;
  title: string;
  content: React.ReactNode;
}

export function RegulationSection() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(0);

  const regulationPanels: RegulationPanel[] = [
    {
      id: 0,
      title: t('reglamento.schedule.title'),
      content: (
        <div className="space-y-4">
          <div className="bg-[var(--bg-primary)] p-4 rounded border border-[var(--border-color)]">
            <h4 className="font-bold text-[var(--text-primary)] mb-3">{t('reglamento.schedule.bibPickup')}</h4>
            <p className="text-[var(--text-secondary)] text-sm mb-3">
              <strong>{t('reglamento.schedule.bibDate')}</strong> de <strong>{t('reglamento.schedule.bibTime')}</strong>
            </p>
            <p className="text-[var(--text-secondary)] text-sm">
              {t('reglamento.schedule.bibLocation')}
            </p>
          </div>
          <div className="bg-[var(--bg-primary)] p-4 rounded border border-[var(--border-color)]">
            <h4 className="font-bold text-[var(--text-primary)] mb-3">{t('reglamento.schedule.startTimes')}</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>{t('reglamento.schedule.market')}</li>
              <li>{t('reglamento.schedule.startKids')}</li>
              <li>{t('reglamento.schedule.abilityTraining')}</li>
              <li>{t('reglamento.schedule.startTrail')}</li>
              <li>{t('reglamento.schedule.startAndarines')}</li>
              <li>{t('reglamento.schedule.awards')}</li>
              <li>{t('reglamento.schedule.paella')}</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: t('reglamento.prices'),
      content: (
        <div className="space-y-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left py-2 font-semibold text-[var(--text-primary)]">{t('reglamento.prices.colModality')}</th>
                <th className="text-left py-2 font-semibold text-[var(--text-primary)]">{t('reglamento.prices.colBefore')}</th>
                <th className="text-left py-2 font-semibold text-[var(--text-primary)]">{t('reglamento.prices.colAfter')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">{t('reglamento.prices.modal10k')}</td>
                <td className="py-3">{t('reglamento.prices.early')}</td>
                <td className="py-3">{t('reglamento.prices.late')}</td>
              </tr>
              <tr>
                <td className="py-3">{t('reglamento.prices.andarines10k')}</td>
                <td className="py-3">{t('reglamento.prices.early')}</td>
                <td className="py-3">{t('reglamento.prices.late')}</td>
              </tr>
            </tbody>
          </table>
          <p className="text-[var(--text-secondary)] text-sm mt-4">
            <strong>{t('reglamento.prices.includes')}</strong>
          </p>
          <p className="text-[var(--text-secondary)] text-sm">
            {t('reglamento.prices.register')}
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: t('reglamento.important.title'),
      content: (
        <div className="space-y-4">
          <div className="bg-[var(--bg-primary)] p-3 rounded border border-[var(--border-color)] text-sm text-[var(--text-secondary)]">
            <p className="mb-2">{t('reglamento.important.bib')}</p>
            <p className="mb-2">{t('reglamento.important.clothing')}</p>
            <p className="mb-2">{t('reglamento.important.animals')}</p>
            <p className="mb-2">{t('reglamento.important.noAnimals')}</p>
            <p className="mb-2">{t('reglamento.important.insurance')}</p>
            <p>{t('reglamento.important.minors')}</p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: t('reglamento.supplies.title'),
      content: (
        <div className="space-y-4">
          <div className="bg-[var(--bg-primary)] p-4 rounded border border-[var(--border-color)]">
            <h4 className="font-bold text-[var(--text-primary)] mb-3">{t('reglamento.supplies.trail')}</h4>
            <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
              <li>• <strong>{t('reglamento.supplies.at5km')}</strong></li>
              <li>• <strong>{t('reglamento.supplies.atFinish')}</strong></li>
            </ul>
          </div>
          <div className="bg-[var(--bg-primary)] p-4 rounded border border-[var(--border-color)]">
            <h4 className="font-bold text-[var(--text-primary)] mb-3">{t('reglamento.supplies.andarines')}</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              {t('reglamento.supplies.andarinesText')}
            </p>
          </div>
          <p className="text-xs text-[var(--text-secondary)] italic">
            {t('reglamento.supplies.tip')}
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: t('reglamento.refund.title'),
      content: (
        <div className="space-y-4 text-sm text-[var(--text-secondary)]">
          <p className="leading-relaxed">
            <strong>{t('reglamento.refund.noRefund')}</strong>
          </p>
          <p className="leading-relaxed">
            <strong>{t('reglamento.refund.exceptions')}</strong>
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>{t('reglamento.refund.noPermit')}</li>
            <li>{t('reglamento.refund.authority')}</li>
            <li>{t('reglamento.refund.traffic')}</li>
          </ul>
        </div>
      ),
    },
  ];

  const panelVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <section
      id="reglamento"
      className="py-16 bg-[radial-gradient(circle_at_top_left,_rgba(44,74,111,0.24),_transparent_42%),linear-gradient(180deg,var(--bg-primary),var(--bg-secondary))] border-b border-[var(--border-color)]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('reglamento.title')}
        </motion.h2>

        {/* Acordeón */}
        <div className="space-y-3 mb-12">
          {regulationPanels.map((panel) => (
            <div key={panel.id}>
              <button
                onClick={() => setOpenId(openId === panel.id ? null : panel.id)}
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-6 py-4 text-left hover:border-[var(--text-primary)] transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-roboto-condensed font-bold text-[var(--text-primary)]">
                  {panel.title}
                </span>
                <motion.div
                  animate={{ rotate: openId === panel.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[var(--accent-primary)]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === panel.id && (
                  <motion.div
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-[var(--bg-secondary)] border border-t-0 border-[var(--border-color)] rounded-b-lg"
                  >
                    <div className="px-6 py-4">{panel.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--text-secondary)] mb-6">
            {t('reglamento.readyToRace')}
          </p>
          <a
            href={RESULTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded transition-all uppercase tracking-wide"
          >
            {t('reglamento.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
