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
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=600&fit=crop',
    alt: 'Trail runner en montaña',
    category: 'carrera',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=600&fit=crop',
    alt: 'Picos de Europa paisaje',
    category: 'paisaje',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=600&fit=crop',
    alt: 'Participantes en carrera',
    category: 'participantes',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1606941614221-2667e55a3d81?w=600&h=600&fit=crop',
    alt: 'Equipo voluntarios',
    category: 'equipo',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=600&h=600&fit=crop',
    alt: 'Montaña con nieve',
    category: 'paisaje',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1601422407692-d81b3417c5eb?w=600&h=600&fit=crop',
    alt: 'Corredor en competencia',
    category: 'carrera',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1625432898548-e8c5822f7ce6?w=600&h=600&fit=crop',
    alt: 'Voluntario ayudando',
    category: 'equipo',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    alt: 'Vista panorámica montaña',
    category: 'paisaje',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=600&h=600&fit=crop',
    alt: 'Grupo de participantes',
    category: 'participantes',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1449066990857-887d1054e545?w=600&h=600&fit=crop',
    alt: 'Sendero en bosque',
    category: 'paisaje',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1552674605-5defe6aa44bb?w=600&h=600&fit=crop',
    alt: 'Competidor finalizando',
    category: 'carrera',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=600&fit=crop',
    alt: 'Premiación ganadores',
    category: 'equipo',
  },
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
                className={`px-4 py-2 rounded transition-all font-semibold whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[var(--accent-primary)] text-white'
                    : 'bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--text-primary)]'
                }`}
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
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
              )}

              {/* Navegación siguiente */}
              {filteredImages.findIndex((img) => img.id === selectedImage.id) < filteredImages.length - 1 && (
                <button
                  onClick={handleNextImage}
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
