import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Información | Mogrovejo Trail 2026',
  description: 'Toda la información sobre el Mogrovejo Trail 2026: modalidades, reglamento, precios, avituallamiento y preguntas frecuentes.',
  openGraph: {
    title: 'Información | Mogrovejo Trail 2026',
    description: 'Modalidades, reglamento, precios y todo lo que necesitas saber.',
  },
};

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
