'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
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
              Política de Privacidad
            </h1>
            <p className="text-[var(--text-secondary)] text-sm">
              Última actualización: Mayo 2026
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              1. Responsable del tratamiento
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Mogrovejo Trail es responsable del tratamiento de tus datos personales. Puedes contactar con nosotros en:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>Email: Mogrovejo10ktrail@gmail.com</li>
              <li>Teléfono: 633 165 086</li>
              <li>Ubicación: Mogrovejo, Cantabria, España</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              2. Datos que recopilamos
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Recopilamos datos personales durante el proceso de inscripción, incluyendo:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>Nombre completo</li>
              <li>Email y teléfono de contacto</li>
              <li>Edad y datos de identificación</li>
              <li>Información de pago y facturación</li>
              <li>Datos de salud/lesiones (si aplica)</li>
              <li>Datos técnicos de navegación (cookies, IP)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              3. Propósito del tratamiento
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Usamos tus datos para:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>Procesar tu inscripción a la prueba</li>
              <li>Gestionar y confirmar tu participación</li>
              <li>Enviar comunicaciones relacionadas con el evento</li>
              <li>Procesar pagos y facturas</li>
              <li>Cumplir obligaciones legales y de seguro</li>
              <li>Mejorar la experiencia en la web (datos técnicos)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              4. Base legal
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              El tratamiento de tus datos se basa en:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>Tu consentimiento explícito para la inscripción</li>
              <li>La necesidad de cumplir un contrato (tu participación)</li>
              <li>Obligaciones legales (seguro, autoridades)</li>
              <li>Interés legítimo (comunicaciones del evento)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              5. Compartición de datos
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Tus datos pueden compartirse con:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li><strong>Plataforma de inscripción:</strong> GedSports (procesador de pagos)</li>
              <li><strong>Seguros:</strong> Empresa de seguros del evento</li>
              <li><strong>Autoridades:</strong> Cuando la ley lo requiera</li>
              <li><strong>Patrocinadores:</strong> Solo con tu consentimiento explícito</li>
            </ul>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
              No vendemos tus datos a terceros.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              6. Tus derechos
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Bajo la legislación GDPR y CCPA, tienes derecho a:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li><strong>Acceso:</strong> Solicitar qué datos tenemos sobre ti</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
              <li><strong>Portabilidad:</strong> Obtener tus datos en formato portátil</li>
              <li><strong>Oposición:</strong> Objetar al tratamiento en ciertos casos</li>
              <li><strong>Limitación:</strong> Limitar cómo usamos tus datos</li>
            </ul>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
              Para ejercer estos derechos, contacta a: <a href="mailto:Mogrovejo10ktrail@gmail.com" className="text-[var(--accent-primary)] hover:underline">
                Mogrovejo10ktrail@gmail.com
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              7. Retención de datos
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Rettenemos tus datos solo durante el tiempo necesario:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>Datos de inscripción: Hasta 3 años después del evento (requiere ley)</li>
              <li>Datos de contacto: Hasta que solicites la eliminación</li>
              <li>Datos técnicos: Según política de cookies (generalmente 1 año)</li>
              <li>Datos financieros: Según normativa fiscal (6 años en España)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              8. Seguridad
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Implementamos medidas técnicas y organizativas para proteger tus datos:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>Conexión HTTPS cifrada</li>
              <li>Bases de datos protegidas</li>
              <li>Control de acceso restringido</li>
              <li>Auditorías de seguridad regulares</li>
            </ul>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
              Sin embargo, ningún sistema es 100% seguro. Si detectas una brecha, contacta inmediatamente a Mogrovejo10ktrail@gmail.com.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              9. Cambios a esta política
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Podemos actualizar esta política en cualquier momento. Los cambios significativos se notificarán por email. Tu uso continuado de la web implica aceptación de los cambios.
            </p>
          </section>

          <section className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border-color)]">
            <h3 className="font-roboto-condensed font-bold text-[var(--text-primary)] mb-3">
              ¿Preguntas o quejas?
            </h3>
            <p className="text-[var(--text-secondary)] text-sm mb-3">
              Si tienes dudas sobre cómo tratamos tus datos, contacta:
            </p>
            <ul className="text-[var(--text-secondary)] text-sm space-y-2">
              <li><strong>Email:</strong> Mogrovejo10ktrail@gmail.com</li>
              <li><strong>Teléfono:</strong> 633 165 086</li>
              <li><strong>Autoridad de protección de datos (España):</strong> www.aepd.es</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
