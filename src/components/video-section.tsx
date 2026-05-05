'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export function VideoSection() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reproducir automáticamente cuando sea visible
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              // Si la reproducción automática falla, es normal
            });
          }
        } else {
          setIsVisible(false);
          // Pausar cuando no sea visible
          if (videoRef.current) {
            videoRef.current.pause();
          }
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

  const handleClick = async () => {
    if (videoRef.current) {
      try {
        await videoRef.current.requestFullscreen();
        videoRef.current.play();
        // Habilitar sonido en fullscreen
        videoRef.current.muted = false;
        setIsFullscreen(true);

        // Detectar cuando sale del fullscreen
        const handleFullscreenChange = () => {
          if (!document.fullscreenElement) {
            // Volver a silenciar cuando sale del fullscreen (pero NO pausar)
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsFullscreen(false);
            }
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
          }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
      } catch (err) {
        console.error('Error al solicitar fullscreen:', err);
        // Fallback: abrir en modal si fullscreen no está disponible
        setIsFullscreen(true);
      }
    }
  };

  return (
    <>
      {/* Sección de video embebido */}
      <section
        ref={containerRef}
        className="w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h2
            className="font-roboto-condensed text-3xl font-bold text-[var(--text-primary)] mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          >
            Mogrovejo Trail 2025
          </motion.h2>
          <motion.div
            className="relative w-full aspect-video rounded-lg overflow-hidden cursor-pointer group"
            onClick={handleClick}
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          >
            <video
              ref={videoRef}
              src="/media/MOGROVEJO TRAIL '25 4K v2.mov"
              muted
              loop
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Modal fullscreen fallback */}
      {isFullscreen && !document.fullscreenElement && (
        <motion.div
          className="fixed inset-0 z-50 bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsFullscreen(false)}
        >
          <video
            src="/media/MOGROVEJO TRAIL '25 4K v2.mov"
            autoPlay
            muted={false}
            controls
            className="w-full h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </>
  );
}
