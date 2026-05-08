import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resultados | Mogrovejo Trail 2026',
  description: 'Clasificaciones y resultados de todas las ediciones del Mogrovejo Trail. Consulta los tiempos y posiciones de los participantes.',
  openGraph: {
    title: 'Resultados | Mogrovejo Trail 2026',
    description: 'Clasificaciones y resultados del Mogrovejo Trail.',
  },
};

export default function ResultadosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
