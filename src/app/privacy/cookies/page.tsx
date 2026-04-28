'use client';

import { motion } from 'framer-motion';

export default function CookiesPolicy() {
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
              Política de Cookies
            </h1>
            <p className="text-[var(--text-secondary)] text-sm">
              Última actualización: Abril 2026
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              1. Introducción
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Mogrovejo Trail 2026 (&quot;nosotros&quot; o &quot;la app&quot;) utiliza cookies y tecnologías similares
              para mejorar tu experiencia. Esta política explica cómo y por qué.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              2. Qué son las cookies
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Las cookies son pequeños archivos de texto almacenados en tu dispositivo. Se usan
              para recordar preferencias, mejorar funcionalidad y entender cómo usas la app.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              3. Cookies que usamos
            </h2>
            <div className="space-y-3">
              <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                <h3 className="font-semibold text-[var(--accent-primary)] mb-2">
                  mgt-theme
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  <strong>Tipo:</strong> localStorage (no cookie)
                  <br />
                  <strong>Propósito:</strong> Recordar si prefieres modo claro u oscuro
                  <br />
                  <strong>Duración:</strong> Indefinida (hasta limpiar datos)
                  <br />
                  <strong>Sensible:</strong> No
                </p>
              </div>

              <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                <h3 className="font-semibold text-[var(--accent-primary)] mb-2">
                  mgt-language
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  <strong>Tipo:</strong> localStorage (no cookie)
                  <br />
                  <strong>Propósito:</strong> Recordar tu idioma preferido (ES/EN/FR)
                  <br />
                  <strong>Duración:</strong> Indefinida
                  <br />
                  <strong>Sensible:</strong> No
                </p>
              </div>

              <div className="bg-[var(--bg-secondary)] p-4 rounded-lg border border-[var(--border-color)]">
                <h3 className="font-semibold text-[var(--accent-primary)] mb-2">
                  mgt-cookies
                </h3>
                <p className="text-[var(--text-secondary)] text-sm">
                  <strong>Tipo:</strong> localStorage (no cookie)
                  <br />
                  <strong>Propósito:</strong> Recordar tu consentimiento a cookies
                  <br />
                  <strong>Duración:</strong> Indefinida
                  <br />
                  <strong>Sensible:</strong> No
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              4. Consentimiento
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Usamos un banner en la parte inferior para obtener tu consentimiento explícito.
              Puedes:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>
                <strong>Aceptar:</strong> Permitimos usar localStorage para tus preferencias
              </li>
              <li>
                <strong>Rechazar:</strong> No almacenamos nada (pero la app será menos personalizada)
              </li>
              <li>
                <strong>Cambiar tu decisión:</strong> Abre DevTools → Application → localStorage
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              5. Tus derechos (GDPR/CCPA)
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Tienes derecho a:
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>Acceder a tus datos almacenados</li>
              <li>Solicitar la eliminación de datos</li>
              <li>Portabilidad de datos</li>
              <li>Retirar consentimiento en cualquier momento</li>
            </ul>
            <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
              Contacta: <a href="mailto:privacy@mogrovejo.com" className="text-[var(--accent-primary)] hover:underline">
                privacy@mogrovejo.com
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-roboto-condensed text-2xl font-bold">
              6. Cambios a esta política
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Actualizaremos esta política si nuestras prácticas cambian. Te notificaremos
              cambios significativos por email.
            </p>
          </section>

          <section className="bg-[var(--bg-secondary)] p-6 rounded-lg border border-[var(--border-color)]">
            <p className="text-[var(--text-secondary)] text-sm">
              <strong>¿Dudas?</strong> Contacta a nuestro equipo legal en{' '}
              <a href="mailto:legal@mogrovejo.com" className="text-[var(--accent-primary)] hover:underline">
                legal@mogrovejo.com
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
