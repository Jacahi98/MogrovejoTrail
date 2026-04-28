'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export function FloatingCTA() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.querySelector('footer');
      const scrolledEnough = window.scrollY > 420;

      if (!footerElement) {
        setIsVisible(scrolledEnough);
        return;
      }

      const footerTop = footerElement.getBoundingClientRect().top;
      const footerVisible = footerTop < window.innerHeight - 120;
      setIsVisible(scrolledEnough && !footerVisible);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const pulseVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <motion.a
            href="https://gedsports.com"
            target="_blank"
            rel="noopener noreferrer"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
            className="group flex items-center gap-3 px-6 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            <span className="text-sm uppercase tracking-wide">{t('floatingcta.text')}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
