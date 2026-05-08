import { describe, it, expect, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '@/contexts/language-context';
import { Hero } from './hero';

beforeAll(() => {
  // jsdom no implementa IntersectionObserver — mock mínimo para que Hero monte.
  if (!('IntersectionObserver' in window)) {
    class MockObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    Object.defineProperty(window, 'IntersectionObserver', { value: MockObserver, writable: true });
  }
});

describe('Hero countdown', () => {
  it('muestra los 4 paneles del countdown con valores formateados a 2 dígitos', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );

    // Cada panel renderiza un número de 2 dígitos (días/horas/minutos/segundos).
    const panels = screen.getAllByText(/^\d{2}$/);
    expect(panels.length).toBeGreaterThanOrEqual(4);
  });
});
