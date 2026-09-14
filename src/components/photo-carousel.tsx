'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { DRIVE_ALBUM_2026, FEATURED_2026 } from '@/data/photos-2026';

const photoItems = FEATURED_2026;

export function PhotoCarousel() {
  const { t } = useLanguage();
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
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* 73 de las 76 fotos son verticales: a pantalla completa un
              object-cover las recortaria a una franja central y se perderian
              cabezas y dorsales. Se muestran enteras con object-contain y se
              rellenan los laterales con una copia desenfocada de la propia
              foto, que es el recurso habitual cuando el formato de la imagen
              no coincide con el del contenedor. */}
          <img
            src={currentPhoto.src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-40"
          />
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

      {/* Controles */}
      <div className="absolute inset-0 flex items-center justify-between p-6 z-10 pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToPrevious}
          aria-label="Foto anterior"
          className="pointer-events-auto bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={goToNext}
          aria-label="Foto siguiente"
          className="pointer-events-auto bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all"
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
      <div className="absolute bottom-20 left-8 right-8 z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-sm font-semibold text-white/80 mb-2">
              {currentIndex + 1} / {photoItems.length}
            </p>
            <h3 className="text-3xl font-bold font-roboto-condensed">
              {t('galeria.2026.title')}
            </h3>
            <p className="text-white/70 mt-2">{t('galeria.2026.subtitle')}</p>
          </div>

          <a
            href={DRIVE_ALBUM_2026}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white/20 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/40 sm:self-auto"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            {t('galeria.downloadAll')}
          </a>
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
