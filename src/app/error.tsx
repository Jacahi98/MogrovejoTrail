'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log to external service in production if needed
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4">
      <div className="text-center">
        <h1 className="font-roboto-condensed text-6xl font-bold text-[var(--accent-primary)] mb-4">
          Error
        </h1>
        <h2 className="font-roboto-condensed text-2xl font-bold text-[var(--text-primary)] mb-4">
          Algo ha salido mal
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo.
        </p>
        <button
          onClick={reset}
          className="px-8 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded transition-all uppercase tracking-wide"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}
