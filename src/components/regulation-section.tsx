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
      title: t('reglamento.gear'),
      content: (
        <div className="space-y-4">
          <p className="text-[var(--text-secondary)] leading-relaxed">
            El siguiente material es <strong>obligatorio</strong> para todas las modalidades:
          </p>
          <ul className="space-y-2 list-disc list-inside text-[var(--text-secondary)]">
            <li>Mochila mínimo 5L</li>
            <li>Silbato audible</li>
            <li>Botella/reservoir con mínimo 1.5L de agua</li>
            <li>Identificación con número de participante (brazalete)</li>
            <li>Frontal o luz frontal (activado después del atardecer)</li>
            <li>Chaqueta cortavientos mínimo 200g (obligatoria de 18:00 en adelante)</li>
            <li>Botiquín básico (vendas, tiritas, analgésicos)</li>
            <li>Teléfono móvil con batería (recomendado)</li>
          </ul>
          <p className="text-sm text-[var(--text-secondary)] mt-4">
            <strong>Nota:</strong> Se hará control de material en salida y avituallamiento. Quién carezca de material
            obligatorio será rechazado o retirado.
          </p>
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
                <th className="text-left py-2 font-semibold text-[var(--text-primary)]">10K Mogrovejo Trail</th>
                <th className="text-left py-2 font-semibold text-[var(--text-primary)]">Precio Base</th>
                <th className="text-left py-2 font-semibold text-[var(--text-primary)]">Early Bird (-20%)</th>
                <th className="text-left py-2 font-semibold text-[var(--text-primary)]">Plazo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3">Inscripción</td>
                <td className="py-3">€25</td>
                <td className="py-3">€20</td>
                <td className="py-3">Hasta 15 julio</td>
              </tr>
            </tbody>
          </table>
          <p className="text-[var(--text-secondary)] text-sm mt-4">
            Incluye: seguro responsabilidad civil, timing electrónico, finisher medal, y acceso a avituallamiento.
          </p>
          <p className="text-[var(--text-secondary)] text-sm">
            Inscripción: <strong>www.gedsports.com</strong> (pago online seguro con tarjeta)
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: t('reglamento.cutoffs'),
      content: (
        <div className="space-y-4">
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Los <strong>tiempos límite</strong> son obligatorios por seguridad. Si no pasas un control dentro del plazo,
            serás retirado.
          </p>
          <div className="bg-[var(--bg-primary)] p-3 rounded border border-[var(--border-color)]">
            <h4 className="font-bold text-[var(--text-primary)] mb-2">10K Mogrovejo Trail</h4>
            <div className="text-sm text-[var(--text-secondary)]">
              <p>Control 3.5km: 1h 15m</p>
              <p>Control 7km: 2h 30m</p>
              <p>Meta 10km: 3h 30m (corte final)</p>
            </div>
          </div>
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
      className="py-16 bg-[radial-gradient(circle_at_top_left,_rgba(90,125,106,0.24),_transparent_42%),linear-gradient(180deg,var(--bg-primary),var(--bg-secondary))] border-b border-[var(--border-color)]"
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
            href="https://gedsports.com"
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
