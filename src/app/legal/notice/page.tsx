'use client';

import { motion } from 'framer-motion';

export default function LegalNotice() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div>
            <h1 className="font-roboto-condensed text-4xl font-bold mb-4">
              Aviso Legal
            </h1>
            <p className="text-[var(--text-secondary)] text-sm">
              Última actualización: Mayo 2026
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              1. Identificación del responsable del sitio
            </h2>
            <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)] text-[var(--text-secondary)]">
              <p className="mb-2"><strong>Denominación:</strong> Mogrovejo Trail</p>
              <p className="mb-2"><strong>Ubicación:</strong> Mogrovejo, Cantabria, España</p>
              <p className="mb-2"><strong>Email de contacto:</strong> Mogrovejo10ktrail@gmail.com</p>
              <p className="mb-2"><strong>Teléfono:</strong> 633 165 086</p>
              <p><strong>Responsable del sitio web:</strong> Equipo de Mogrovejo Trail</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              2. Condiciones de uso
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              El acceso y uso de este sitio web implica la aceptación total de este aviso legal. Si no estás de acuerdo con alguno de los términos, te pedimos que no uses el sitio.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Mogrovejo Trail se reserva el derecho a modificar, suspender o discontinuar el sitio en cualquier momento, con o sin previo aviso.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              3. Propiedad intelectual
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Todos los contenidos de este sitio web (textos, imágenes, logotipos, gráficos, videos) son propiedad de Mogrovejo Trail o están autorizados para su uso. Están protegidos por leyes de propiedad intelectual.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              No está permitido reproducir, distribuir, modificar, comunicar públicamente o transformar estos contenidos sin autorización explícita, excepto para uso personal y no comercial.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              4. Responsabilidad de enlaces externos
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Este sitio puede contener enlaces a sitios web externos (como GedSports, redes sociales, etc.). Mogrovejo Trail no es responsable del contenido, disponibilidad o precisión de estos sitios externos.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              El acceso a estos enlaces es bajo tu propio riesgo y responsabilidad. Te recomendamos revisar los términos de servicio de esos sitios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              5. Exención de responsabilidad
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              El contenido de este sitio se proporciona &quot;tal cual&quot;, sin garantías de ningún tipo. Mogrovejo Trail no garantiza:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>La exactitud, integridad o actualización del contenido</li>
              <li>La disponibilidad continua del sitio web</li>
              <li>La ausencia de errores, virus o código malicioso</li>
              <li>Los resultados o beneficios derivados del uso del sitio</li>
            </ul>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
              El uso del sitio es bajo tu riesgo. Mogrovejo Trail no se responsabiliza de daños directos, indirectos, incidentales o consecuentes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              6. Inscripción a la prueba
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              La inscripción a Mogrovejo Trail 2026 se realiza a través de GedSports. Al inscribirse, aceptas:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>Las <strong>reglas de la prueba</strong> publicadas en este sitio</li>
              <li>Los <strong>términos de pago</strong> (no reembolsables salvo excepciones)</li>
              <li>La <strong>responsabilidad sobre tu salud</strong> - eres responsable de verificar que estás en condiciones físicas para participar</li>
              <li>Declaras que <strong>NO tienes contraindicaciones médicas</strong> para la prueba</li>
              <li>Aceptas participar bajo tu propio riesgo</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              7. Seguro y cobertura
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Mogrovejo Trail 2026 incluye un seguro de accidentes básico para todos los participantes, tal como se describe en el reglamento.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Este seguro cubre lesiones accidentales durante la prueba dentro de los términos y limitaciones especificados por la aseguradora. No cubre reclamaciones por negligencia, riesgo asumido voluntariamente o incumplimiento de las reglas.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Te recomendamos revisar el reglamento para más detalles sobre la cobertura del seguro.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              8. Fotografía y videofilmación
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Mogrovejo Trail puede fotografiar y grabar video durante el evento para fines de promoción y documentación. Al inscribirse, autorizas el uso de tu imagen en estos materiales, a menos que indiques lo contrario por escrito.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Tu imagen puede usarse en:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>El sitio web oficial</li>
              <li>Redes sociales</li>
              <li>Materiales de promoción</li>
              <li>Reportajes de medios</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              9. Cumplimiento de leyes
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Mogrovejo Trail se compromete a cumplir toda la legislación aplicable, incluyendo:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>Reglamento (UE) 2016/679 (GDPR) - Protección de datos</li>
              <li>Ley Orgánica 3/2018 (LOPDGDD) - Protección de datos en España</li>
              <li>Normativa de eventos deportivos en Cantabria</li>
              <li>Leyes de protección del consumidor</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              10. Jurisdicción y ley aplicable
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Este aviso legal se rige por la ley española. Cualquier disputa se resolverá ante los juzgados competentes de Cantabria, España.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Si tienes alguna reclamación, por favor contacta primero a Mogrovejo10ktrail@gmail.com para intentar resolverla amistosamente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              11. Contacto
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Para preguntas sobre este aviso legal o la prueba en general:
            </p>
            <ul className="text-[var(--text-secondary)] space-y-2">
              <li><strong>Email:</strong> Mogrovejo10ktrail@gmail.com</li>
              <li><strong>Teléfono:</strong> 633 165 086</li>
              <li><strong>Ubicación:</strong> Mogrovejo, Cantabria, España</li>
            </ul>
          </section>

          <section className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border-color)]">
            <p className="text-[var(--text-secondary)] text-sm">
              Este aviso legal es vinculante y forma parte de los términos de uso de mogrovejo-trail.com. Mogrovejo Trail se reserva el derecho a actualizar este aviso en cualquier momento. Los cambios son efectivos una vez publicados en este sitio.
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
