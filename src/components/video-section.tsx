'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export function VideoSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
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
          className="relative w-full aspect-video rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/LOchXZ-JBSk?autoplay=1&mute=1&loop=1&playlist=LOchXZ-JBSk"
            title="Mogrovejo Trail 2025"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
