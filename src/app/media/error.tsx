'use client';

export default function MediaError({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4">
      <div className="text-center">
        <h2 className="font-roboto-condensed text-2xl font-bold text-[var(--text-primary)] mb-4">
          No hemos podido cargar la galería
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          Inténtalo de nuevo en unos segundos.
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
