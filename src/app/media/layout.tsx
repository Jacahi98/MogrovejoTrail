import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galería y Media | Mogrovejo Trail 2026',
  description: 'Fotos y vídeos del Mogrovejo Trail. Revive los mejores momentos de la carrera de trail de Mogrovejo, Cantabria.',
  openGraph: {
    title: 'Galería y Media | Mogrovejo Trail 2026',
    description: 'Fotos y vídeos del Mogrovejo Trail 2025.',
  },
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
