import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4">
      <div className="text-center">
        <h1 className="font-roboto-condensed text-8xl font-bold text-[var(--accent-primary)] mb-4">
          404
        </h1>
        <h2 className="font-roboto-condensed text-2xl font-bold text-[var(--text-primary)] mb-4">
          Página no encontrada
        </h2>
        <p className="text-[var(--text-secondary)] mb-8">
          Esta ruta no existe. Puede que haya sido movida o eliminada.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white font-semibold rounded transition-all uppercase tracking-wide"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
