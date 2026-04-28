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
    id: 1,
    question: '¿Cuál es la distancia máxima permitida para las zapatiillas de trail?',
    answer:
      'No hay restricción específica de marca, pero recomendamos zapatillas de trail running con buen agarre y protección. Idealmente con suela Vibram o similar para terreno técnico. Prueba tus zapatillas en entrenamientos largos antes del día de la carrera.',
  },
  {
    id: 2,
    question: '¿Puedo hacer la carrera de 25K si es mi primera vez en trail?',
    answer:
      'La categoría de 25K es Intermedia y requiere experiencia previa en trail running. Si es tu primera vez, te recomendamos empezar por los 10K. La diferencia en desnivel (+1800m vs +800m) es significativa y puede resultar excesiva sin aclimatación.',
  },
  {
    id: 3,
    question: '¿Hay servicio médico en la carrera?',
    answer:
      'Sí, tenemos equipo médico en avituallamiento principales y un helicóptero en standby para emergencias. Todos los voluntarios están entrenados en primeros auxilios. Por seguridad, es obligatorio llevar un silbato en la mochila.',
  },
  {
    id: 4,
    question: '¿Qué pasa si no hago el corte de tiempo?',
    answer:
      'Si no alcanzas el avituallamiento siguiente dentro del límite de tiempo, serás retirado de la carrera por seguridad. Los límites están establecidos considerando un ritmo sostenible. Consulta el reglamento para ver tiempos exactos por modalidad.',
  },
  {
    id: 5,
    question: '¿Puedo llevar perro o mascota?',
    answer:
      'No. Por seguridad del animal y otros participantes, no se permiten mascotas en la carrera. Si necesitas cuidado especial, contacta con organización.',
  },
  {
    id: 6,
    question: '¿Hay límite de edad?',
    answer:
      'Edad mínima: 16 años (con consentimiento parental). Edad máxima: ninguna. Hemos tenido participantes de 70+ años. Se requiere certificado médico de aptitud para todas las modalidades.',
  },
  {
    id: 7,
    question: '¿Puedo dejarme acompañar por un pacer?',
    answer:
      'Sí, pero el pacer debe estar inscrito en la misma modalidad. No está permitido que una persona acompañe a múltiples competidores. Ambos deben cumplir con todos los requisitos técnicos.',
  },
  {
    id: 8,
    question: '¿Qué debo comer en los avituallamiento?',
    answer:
      'Ofrecemos agua, bebida isotónica, plátano, barras energéticas y geles. Recomendamos probar en entrenamientos qué te sienta mejor. Algunos corredores traen sus propios geles o snacks. Nuestro equipo puede ayudarte con preferencias dietéticas especiales.',
  },
  {
    id: 9,
    question: '¿Es obligatorio llevar mochila?',
    answer:
      'Sí, mínimo 5L. Debe contener: agua (1.5L min), silbato, botiquín básico, teléfono, alimento de emergencia. En la categoría de 50K es obligatorio kit de emergencia más completo.',
  },
  {
    id: 10,
    question: '¿Cuándo se publicarán los resultados oficiales?',
    answer:
      'Los resultados provisionales se publicarán dentro de las 4 horas tras el cierre de la carrera. Los resultados oficiales, tras revisión y validación, en el plazo de 48-72 horas. Se enviará email a todos los participantes.',
  },
  {
    id: 11,
    question: '¿Se pueden cancelar las inscripciones?',
    answer:
      'Sí, hasta 2 semanas antes de la carrera. Después, solo en caso de justificante médico. El reembolso será del 80% en caso de cancelación por causas no imputables a la organización.',
  },
  {
    id: 12,
    question: '¿Hay trofeos o premios?',
    answer:
      'Sí, para los 3 primeros clasificados de cada modalidad. Además, todos los finalizadores reciben finisher medal. Hay premios especiales para oldest, youngest, y premios por club.',
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
    <section id="faq" className="py-16 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
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
            href="mailto:info@mogrovejo.com"
            className="inline-block px-6 py-2 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded transition-all"
          >
            {t('faq.email')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
