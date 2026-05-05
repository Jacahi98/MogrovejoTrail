'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';
import { ChevronDown } from 'lucide-react';

interface RegulationPanel {
  id: number;
  title: string;
  content: React.ReactNode;
}

export function RegulationSection() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<number | null>(0);

  const regulationPanels: RegulationPanel[] = [
    {
      id: 0,
      title: 'Horarios y Recogida de Dorsales',
      content: (
        <div className="space-y-4">
          <div className="bg-[var(--bg-primary)] p-4 rounded border border-[var(--border-color)]">
            <h4 className="font-bold text-[var(--text-primary)] mb-3">Recogida de Dorsales</h4>
            <p className="text-[var(--text-secondary)] text-sm mb-3">
              <strong>Sábado 25 de julio de 2026</strong> de <strong>09:00 a 11:15 h.</strong>
            </p>
            <p className="text-[var(--text-secondary)] text-sm">
              Se retiran en el arco de salida (finca junto al pueblo de Mogrovejo)
            </p>
          </div>
          <div className="bg-[var(--bg-primary)] p-4 rounded border border-[var(--border-color)]">
            <h4 className="font-bold text-[var(--text-primary)] mb-3">Horarios de Salida</h4>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>🏃 <strong>Trail 10km:</strong> 11:30 h.</li>
              <li>🚶 <strong>Andarines 10km:</strong> 11:35 h.</li>
              <li>👶 <strong>Carreras infantiles:</strong> entre 10:30 y 11:00 h. (horario flexible)</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: t('reglamento.prices'),
      content: (
        <div className="space-y-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border-color)]">
                <th className="text-left py-2 font-semibold text-[var(--text-primary)]">Modalidad</th>
                <th className="text-left py-2 font-semibold text-[var(--text-primary)]">Hasta 25 jun</th>
                <th className="text-left py-2 font-semibold text-[var(--text-primary)]">Después 25 jun</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">10K Trail</td>
                <td className="py-3">15€</td>
                <td className="py-3">20€</td>
              </tr>
              <tr>
                <td className="py-3">10K Andarines</td>
                <td className="py-3">15€</td>
                <td className="py-3">20€</td>
              </tr>
            </tbody>
          </table>
          <p className="text-[var(--text-secondary)] text-sm mt-4">
            <strong>Incluye:</strong> seguro de accidentes, dorsal, bolsa del corredor y acceso a avituallamiento.
          </p>
          <p className="text-[var(--text-secondary)] text-sm">
            Inscripción: <strong>www.gedsports.com/race/mogrovejo-trail-2026</strong>
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Información Importante',
      content: (
        <div className="space-y-4">
          <div className="bg-[var(--bg-primary)] p-3 rounded border border-[var(--border-color)] text-sm text-[var(--text-secondary)]">
            <p className="mb-2"><strong>✓ Dorsal obligatorio:</strong> Debe llevarse visible en todo momento</p>
            <p className="mb-2"><strong>✓ Ropa obligatoria:</strong> Prohibido correr sin camiseta ni pantalón</p>
            <p className="mb-2"><strong>✓ En la marcha (Andarines):</strong> Se permite participar con animales (atados)</p>
            <p className="mb-2"><strong>✓ En el Trail:</strong> Prohibida la participación con animales</p>
            <p className="mb-2"><strong>✓ Seguro:</strong> Incluido en la inscripción para todos los participantes</p>
            <p><strong>✓ Menores:</strong> Pueden participar acompañados por un adulto responsable</p>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Avituallamientos',
      content: (
        <div className="space-y-4">
          <div className="bg-[var(--bg-primary)] p-4 rounded border border-[var(--border-color)]">
            <h4 className="font-bold text-[var(--text-primary)] mb-3">Trail 10km</h4>
            <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
              <li>• <strong>~5km:</strong> Punto de líquidos</li>
              <li>• <strong>Meta:</strong> Sólidos y líquidos</li>
            </ul>
          </div>
          <div className="bg-[var(--bg-primary)] p-4 rounded border border-[var(--border-color)]">
            <h4 className="font-bold text-[var(--text-primary)] mb-3">Marcha Andarines</h4>
            <p className="text-sm text-[var(--text-secondary)]">
              Un punto de avituallamiento al inicio/fin de la prueba
            </p>
          </div>
          <p className="text-xs text-[var(--text-secondary)] italic">
            💡 Se recomienda llevar un recipiente reutilizable para evitar residuos plásticos
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Política de Devoluciones',
      content: (
        <div className="space-y-4 text-sm text-[var(--text-secondary)]">
          <p className="leading-relaxed">
            <strong>Las inscripciones son definitivas</strong> y no se realizará devolución en caso de no poder participar.
          </p>
          <p className="leading-relaxed">
            <strong>Excepciones:</strong> Se considerará devolución en caso de suspensión de la prueba por:
          </p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Falta de permisos necesarios</li>
            <li>Prohibiciones de autoridades competentes</li>
            <li>Restricciones de tráfico</li>
          </ul>
        </div>
      ),
    },
  ];

  const panelVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
    exit: { opacity: 0, height: 0 },
  };

  return (
    <section
      id="reglamento"
      className="py-16 bg-[radial-gradient(circle_at_top_left,_rgba(44,74,111,0.24),_transparent_42%),linear-gradient(180deg,var(--bg-primary),var(--bg-secondary))] border-b border-[var(--border-color)]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <motion.h2
          className="font-roboto-condensed text-4xl font-bold text-[var(--text-primary)] mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t('reglamento.title')}
        </motion.h2>

        {/* Acordeón */}
        <div className="space-y-3 mb-12">
          {regulationPanels.map((panel) => (
            <div key={panel.id}>
              <button
                onClick={() => setOpenId(openId === panel.id ? null : panel.id)}
                className="w-full bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg px-6 py-4 text-left hover:border-[var(--text-primary)] transition-all duration-300 flex items-center justify-between group"
              >
                <span className="font-roboto-condensed font-bold text-[var(--text-primary)]">
                  {panel.title}
                </span>
                <motion.div
                  animate={{ rotate: openId === panel.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[var(--accent-primary)]" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openId === panel.id && (
                  <motion.div
                    variants={panelVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-[var(--bg-secondary)] border border-t-0 border-[var(--border-color)] rounded-b-lg"
                  >
                    <div className="px-6 py-4">{panel.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--text-secondary)] mb-6">
            ¿Listo para correr? Completa tu inscripción en GedSports
          </p>
          <a
            href="https://www.gedsports.com/race/mogrovejo-trail-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded transition-all uppercase tracking-wide"
          >
            {t('reglamento.cta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
