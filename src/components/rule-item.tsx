'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface RuleItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  index: number;
}

/**
 * Componente para mostrar una regla o sección del reglamento
 * Incluye: icono, título, descripción e items
 */
export function RuleItem({
  icon,
  title,
  description,
  items,
  index,
}: RuleItemProps) {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="relative pl-8 sm:pl-12"
    >
      {/* Icono */}
      <div className="absolute left-0 top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white shadow-lg">
        {icon}
      </div>

      {/* Contenido */}
      <div>
        <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
          {title}
        </h4>
        <p className="text-gray-400 text-sm sm:text-base mb-4">
          {description}
        </p>

        {/* Items */}
        {items.length > 0 && (
          <ul className="space-y-2">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                className="flex items-start gap-2 text-gray-300 text-sm"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
