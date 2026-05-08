'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'carrera' | 'paisaje' | 'participantes' | 'equipo';
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/img/IMG_7659.jpg', alt: 'Mogrovejo Trail 1', category: 'carrera' },
  { id: 2, src: '/img/IMG_7699.jpg', alt: 'Mogrovejo Trail 2', category: 'carrera' },
  { id: 3, src: '/img/IMG_7701.jpg', alt: 'Mogrovejo Trail 3', category: 'participantes' },
  { id: 4, src: '/img/IMG_7702.jpg', alt: 'Mogrovejo Trail 4', category: 'paisaje' },
  { id: 5, src: '/img/IMG_7706.jpg', alt: 'Mogrovejo Trail 5', category: 'carrera' },
  { id: 6, src: '/img/IMG_7722.jpg', alt: 'Mogrovejo Trail 6', category: 'paisaje' },
  { id: 7, src: '/img/IMG_7730.jpg', alt: 'Mogrovejo Trail 7', category: 'participantes' },
  { id: 8, src: '/img/IMG_7736.jpg', alt: 'Mogrovejo Trail 8', category: 'equipo' },
  { id: 9, src: '/img/IMG_7761.jpg', alt: 'Mogrovejo Trail 9', category: 'carrera' },
  { id: 10, src: '/img/IMG_7785.jpg', alt: 'Mogrovejo Trail 10', category: 'paisaje' },
  { id: 11, src: '/img/IMG_7791.jpg', alt: 'Mogrovejo Trail 11', category: 'participantes' },
  { id: 12, src: '/img/IMG_7807.jpg', alt: 'Mogrovejo Trail 12', category: 'equipo' },
  { id: 13, src: '/img/IMG_7818.jpg', alt: 'Mogrovejo Trail 13', category: 'carrera' },
  { id: 14, src: '/img/IMG_7819.jpg', alt: 'Mogrovejo Trail 14', category: 'paisaje' },
  { id: 15, src: '/img/IMG_7829.jpg', alt: 'Mogrovejo Trail 15', category: 'participantes' },
  { id: 16, src: '/img/IMG_7833.jpg', alt: 'Mogrovejo Trail 16', category: 'equipo' },
  { id: 17, src: '/img/IMG_7852.jpg', alt: 'Mogrovejo Trail 17', category: 'carrera' },
  { id: 18, src: '/img/IMG_7868.jpg', alt: 'Mogrovejo Trail 18', category: 'paisaje' },
  { id: 19, src: '/img/IMG_7873.jpg', alt: 'Mogrovejo Trail 19', category: 'participantes' },
  { id: 20, src: '/img/IMG_7882.jpg', alt: 'Mogrovejo Trail 20', category: 'equipo' },
  { id: 21, src: '/img/IMG_7890.jpg', alt: 'Mogrovejo Trail 21', category: 'carrera' },
  { id: 22, src: '/img/IMG_7897.jpg', alt: 'Mogrovejo Trail 22', category: 'paisaje' },
];

export function GallerySection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'carrera' | 'paisaje' | 'participantes' | 'equipo'>(
    'all'
  );
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isMounted] = useState(() => typeof document !== 'undefined');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredImages =
    selectedCategory === 'all' ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory);

  const categories: Array<{ id: 'all' | 'carrera' | 'paisaje' | 'participantes' | 'equipo'; label: string }> = [
    { id: 'all', label: t('galeria.all') },
    { id: 'carrera', label: 'Carrera' },
    { id: 'paisaje', label: 'Paisaje' },
    { id: 'participantes', label: 'Participantes' },
    { id: 'equipo', label: 'Equipo' },
  ];

  const handlePrevImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage?.id);
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  const handleNextImage = () => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage?.id);
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <>
      <section id="galeria" className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título */}
          <motion.h2
            className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('galeria.title')}
          </motion.h2>

          {/* Filtros */}
          <motion.div
            className="flex gap-3 mb-12 overflow-x-auto pb-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={selectedCategory === cat.id
                  ? 'px-4 py-2 rounded transition-all font-semibold whitespace-nowrap bg-[var(--accent-primary)] text-white'
                  : 'px-4 py-2 rounded transition-all font-semibold whitespace-nowrap bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'
                }
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Galería masonry */}
          <AnimatePresence mode="popLayout">
            <motion.div
              className="columns-2 md:columns-3 lg:columns-4 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key={selectedCategory}
            >
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  variants={imageVariants}
                  layout
                  className="break-inside-avoid mb-4 cursor-pointer group overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-64 md:h-72 bg-[var(--bg-secondary)] border border-[var(--border-color)] overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="text-white text-sm font-semibold">Ver</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isMounted &&
        selectedImage &&
        createPortal(
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-4xl max-h-screen flex items-center justify-center">
              {/* Botón cerrar */}
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Cerrar imagen"
                className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Imagen principal */}
              <motion.div
                className="w-full"
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-screen object-contain rounded-lg"
                />
              </motion.div>

              {/* Navegación anterior */}
              {filteredImages.findIndex((img) => img.id === selectedImage.id) > 0 && (
                <button
                  onClick={handlePrevImage}
                  aria-label="Imagen anterior"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
              )}

              {/* Navegación siguiente */}
              {filteredImages.findIndex((img) => img.id === selectedImage.id) < filteredImages.length - 1 && (
                <button
                  onClick={handleNextImage}
                  aria-label="Imagen siguiente"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              )}

              {/* Contador de imágenes */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 px-4 py-2 rounded-full text-white text-sm">
                {filteredImages.findIndex((img) => img.id === selectedImage.id) + 1} / {filteredImages.length}
              </div>
            </div>
          </motion.div>,
          document.body
        )}
    </>
  );
}
