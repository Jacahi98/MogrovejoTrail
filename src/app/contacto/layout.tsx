import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto | Mogrovejo Trail 2026',
  description: 'Contacta con el equipo organizador del Mogrovejo Trail 2026. Email, teléfono y formulario de contacto.',
  openGraph: {
    title: 'Contacto | Mogrovejo Trail 2026',
    description: 'Contacta con el equipo organizador del Mogrovejo Trail.',
  },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
