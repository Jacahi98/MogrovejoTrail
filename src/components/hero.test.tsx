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

describe('Hero', () => {
  it('muestra el indicador de carrera finalizada y el enlace a la clasificación', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );

    expect(screen.getByText('Carrera finalizada')).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /Ver clasificación/i });
    expect(link).toHaveAttribute(
      'href',
      'https://sportmaniacs.com/es/races/mogrovejo-trail-2026/6a64b778-a614-46e2-9dc6-43f7ac1f2075/results#rankings'
    );
  });
});
