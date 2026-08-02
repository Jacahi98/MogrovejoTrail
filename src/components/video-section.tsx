'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

interface VideoItem {
  id: string;
  titleKey: string;
}

const videos: VideoItem[] = [
  { id: 'yyBXJuFjYbg', titleKey: 'videoSection.title2026' },
  { id: 'LOchXZ-JBSk', titleKey: 'videoSection.title' },
];

export function VideoSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  const currentVideo = videos[currentIndex];
  const isLast = currentIndex === videos.length - 1;

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const navButton = videos.length > 1 && (
    <motion.button
      type="button"
      aria-label={isLast ? 'Ver el vídeo anterior' : 'Ver el otro vídeo'}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={isLast ? goToPrevious : goToNext}
      className="shrink-0 rounded-full p-2 bg-[var(--bg-secondary)] hover:bg-[var(--border-color)] transition-colors"
    >
      {isLast ? (
        <ChevronLeft className="w-6 h-6 text-[var(--text-primary)]" />
      ) : (
        <ChevronRight className="w-6 h-6 text-[var(--text-primary)]" />
      )}
    </motion.button>
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center gap-3 mb-6">
          {isLast && navButton}

          <AnimatePresence mode="wait">
            <motion.h2
              key={currentVideo.titleKey}
              className="font-roboto-condensed text-3xl font-bold text-[var(--text-primary)] text-center"
              initial={{ opacity: 0, y: -20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              exit={{ opacity: 0 }}
            >
              {t(currentVideo.titleKey)}
            </motion.h2>
          </AnimatePresence>

          {!isLast && navButton}
        </div>
        <motion.div
          className="relative w-full aspect-video rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        >
          <AnimatePresence mode="wait">
            <motion.iframe
              key={currentVideo.id}
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1&mute=1&loop=1&playlist=${currentVideo.id}`}
              title={t(currentVideo.titleKey)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </motion.div>

        <div className="flex justify-center gap-2 mt-4">
          {videos.map((video, i) => (
            <button
              key={video.id}
              type="button"
              aria-label={`Ir al vídeo ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex ? 'bg-[var(--accent-primary)] w-6' : 'bg-[var(--border-color)]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
