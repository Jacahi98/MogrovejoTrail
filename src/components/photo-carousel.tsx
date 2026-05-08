'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PhotoItem {
  id: number;
  url: string;
  alt: string;
}

const photoItems: PhotoItem[] = [
  { id: 1, url: '/img/IMG_7722.webp', alt: 'Mogrovejo Trail 1' },
  { id: 2, url: '/img/IMG_7730.webp', alt: 'Mogrovejo Trail 2' },
  { id: 3, url: '/img/IMG_7736.webp', alt: 'Mogrovejo Trail 3' },
  { id: 4, url: '/img/IMG_7761.webp', alt: 'Mogrovejo Trail 4' },
  { id: 5, url: '/img/IMG_7785.webp', alt: 'Mogrovejo Trail 5' },
  { id: 6, url: '/img/IMG_7791.webp', alt: 'Mogrovejo Trail 6' },
  { id: 7, url: '/img/IMG_7807.webp', alt: 'Mogrovejo Trail 7' },
  { id: 8, url: '/img/IMG_7818.webp', alt: 'Mogrovejo Trail 8' },
  { id: 9, url: '/img/IMG_7819.webp', alt: 'Mogrovejo Trail 9' },
  { id: 10, url: '/img/IMG_7829.webp', alt: 'Mogrovejo Trail 10' },
  { id: 11, url: '/img/IMG_7833.webp', alt: 'Mogrovejo Trail 11' },
  { id: 12, url: '/img/IMG_7852.webp', alt: 'Mogrovejo Trail 12' },
  { id: 13, url: '/img/IMG_7868.webp', alt: 'Mogrovejo Trail 13' },
  { id: 14, url: '/img/IMG_7873.webp', alt: 'Mogrovejo Trail 14' },
  { id: 15, url: '/img/IMG_7882.webp', alt: 'Mogrovejo Trail 15' },
  { id: 16, url: '/img/IMG_7890.webp', alt: 'Mogrovejo Trail 16' },
  { id: 17, url: '/img/IMG_7897.webp', alt: 'Mogrovejo Trail 17' },
];

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay || photoItems.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photoItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  if (photoItems.length === 0) {
    return null;
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photoItems.length) % photoItems.length);
    setAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photoItems.length);
    setAutoPlay(false);
  };

  const currentPhoto = photoItems[currentIndex];

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={currentPhoto.url}
          alt={currentPhoto.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Controles */}
      <div className="absolute inset-0 flex items-center justify-between p-6 z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToPrevious}
          aria-label="Foto anterior"
          className="bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToNext}
          aria-label="Foto siguiente"
          className="bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {photoItems.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setAutoPlay(false);
            }}
            aria-label={`Ir a foto ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : undefined}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>

      {/* Info */}
      <div className="absolute bottom-20 left-8 z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm font-semibold text-white/80 mb-2">
            {currentIndex + 1} / {photoItems.length}
          </p>
          <h3 className="text-3xl font-bold font-roboto-condensed">
            Galería Mogrovejo Trail 2025
          </h3>
          <p className="text-white/70 mt-2">Momentos captados en la carrera</p>
        </motion.div>
      </div>

      {/* Auto-play toggle */}
      <motion.button
        onClick={() => setAutoPlay(!autoPlay)}
        aria-label={autoPlay ? 'Pausar reproducción automática' : 'Activar reproducción automática'}
        aria-pressed={autoPlay}
        className="absolute top-8 right-8 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm transition-all flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
      >
        <div className={`w-2 h-2 rounded-full ${autoPlay ? 'bg-green-400' : 'bg-red-400'}`} />
        {autoPlay ? 'Auto' : 'Manual'}
      </motion.button>
    </section>
  );
}
