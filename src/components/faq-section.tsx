'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function FAQSection() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(5);

  const faqData: FAQItem[] = [
    {
      id: 5,
      question: t('faq.q5.question'),
      answer: t('faq.q5.answer'),
    },
    {
      id: 6,
      question: t('faq.q6.question'),
      answer: t('faq.q6.answer'),
    },
    {
      id: 7,
      question: t('faq.q7.question'),
      answer: t('faq.q7.answer'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="faq" className="py-16 bg-[radial-gradient(circle_at_top_left,_rgba(44,74,111,0.24),_transparent_42%),linear-gradient(180deg,var(--bg-primary),var(--bg-secondary))] border-b border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('faq.title')}
        </motion.h2>

        {/* Acordeón */}
        <motion.div
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqData.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-4 text-left hover:border-[var(--text-primary)] transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-roboto-condensed font-bold text-[var(--text-primary)] pr-4">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openId === item.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[var(--accent-primary)]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="bg-[var(--bg-secondary)] border border-t-0 border-[var(--border-color)] rounded-b-lg px-4 py-4 text-[var(--text-secondary)] leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Final */}
        <motion.div
          className="mt-12 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--text-secondary)] mb-4">{t('faq.contact')}</p>
          <a
            href="mailto:Mogrovejo10ktrail@gmail.com"
            className="inline-block px-6 py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded transition-all"
          >
            {t('faq.email')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
