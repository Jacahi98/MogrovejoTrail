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

const faqData: FAQItem[] = [
  {
    id: 4,
    question: '¿Qué pasa si no hago el corte de tiempo?',
    answer:
      'La organización se reserva el derecho a retirar de la prueba a los corredores y andarines que no cumplan con las expectativas de los tiempos en los controles de cronometraje, por razones de seguridad.',
  },
  {
    id: 5,
    question: '¿Puedo llevar perro o mascota?',
    answer:
      'En la modalidad de Andarines (marcha a pie), sí se pueden llevar animales atados, siempre que no molesten al resto de participantes. En el Trail de 10km está prohibida la participación con animales.',
  },
  {
    id: 6,
    question: '¿Hay límite de edad?',
    answer:
      'Debes ser mayor de 18 años para participar. Los menores de edad pueden participar en ambas modalidades (Trail y Andarines) siempre acompañados de un adulto responsable que firme una autorización previa.',
  },
  {
    id: 7,
    question: '¿Qué material recomendado debo llevar en Andarines?',
    answer:
      'Para la marcha de Andarines (9km) recomendamos: Agua: Lleva una botella reutilizable (recomendado en nuestro reglamento para evitar residuos plásticos). Comida: Energéticos como frutos secos, barras energéticas, frutas o sandwiches ligeros. Protección solar: Protector solar, gorro o gafas de sol. Ropa cómoda: Ropa transpirable y calzado de montaña cómodo. Mochila ligera: Para llevar tus pertenencias. Botiquín básico: Tiritas, analgésicos y vendas. Identificación: Lleva tu DNI o documento de identidad. El dorsal es obligatorio y debe estar visible en todo momento.',
  },
  {
    id: 8,
    question: '¿Cuáles son los tiempos récord del Mogrovejo Trail?',
    answer:
      'Los tiempos récord en la modalidad de 10K Trail son: Masculino: 0:34:48 y Femenino: 0:44:46. Si consigues batir estos tiempos, ¡podrías ganar un premio especial! Consulta con la organización para más detalles sobre los premios a tiempo récord.',
  },
  {
    id: 9,
    question: '¿Hay premios y trofeos?',
    answer:
      'En la modalidad de 10K Trail hay reconocimientos en las siguientes categorías: Categoría Absoluta (masculino y femenino): 1º, 2º y 3º puesto. Categoría Sub-21 (masculino y femenino): 1º, 2º y 3º puesto. Categoría Veteranos +45 años (masculino y femenino): 1º, 2º y 3º puesto. Además, hay un premio especial de 100€ patrocinado por Materiales de Construcción Zurro para quien bata el récord en 10K. En cambio, la marcha de Andarines no tiene reconocimientos por posiciones, ya que es una actividad lúdica enfocada en el disfrute y la convivencia, no en la competencia.',
  },
];

export function FAQSection() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(0);

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
