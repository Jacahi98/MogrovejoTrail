import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider } from '@/contexts/language-context';
import { PhotoCarousel } from './photo-carousel';

// El carrusel lee sus titulos con useLanguage(), asi que necesita el provider
// alrededor; sin el, el contexto lanza y no se renderiza nada.
const renderCarousel = () =>
  render(
    <LanguageProvider>
      <PhotoCarousel />
    </LanguageProvider>,
  );

describe('PhotoCarousel', () => {
  it('muestra la foto 1/N por defecto', () => {
    renderCarousel();
    const counter = screen.getByText(/^1 \/ \d+$/);
    expect(counter).toBeInTheDocument();
  });

  it('avanza al pulsar "Foto siguiente"', () => {
    renderCarousel();
    const next = screen.getByLabelText('Foto siguiente');
    fireEvent.click(next);
    expect(screen.getByText(/^2 \/ \d+$/)).toBeInTheDocument();
  });

  it('salta a una foto concreta al pulsar su indicador', () => {
    renderCarousel();
    const indicator = screen.getByLabelText('Ir a foto 5');
    fireEvent.click(indicator);
    expect(screen.getByText(/^5 \/ \d+$/)).toBeInTheDocument();
  });

  it('ofrece el enlace de descarga del album completo', () => {
    renderCarousel();
    const link = screen.getByRole('link', { name: /descargar todas las fotos/i });
    expect(link).toHaveAttribute('href', expect.stringContaining('drive.google.com'));
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });
});
