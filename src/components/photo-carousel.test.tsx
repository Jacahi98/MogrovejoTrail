import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PhotoCarousel } from './photo-carousel';

describe('PhotoCarousel', () => {
  it('muestra la foto 1/N por defecto', () => {
    render(<PhotoCarousel />);
    const counter = screen.getByText(/^1 \/ \d+$/);
    expect(counter).toBeInTheDocument();
  });

  it('avanza al pulsar "Foto siguiente"', () => {
    render(<PhotoCarousel />);
    const next = screen.getByLabelText('Foto siguiente');
    fireEvent.click(next);
    expect(screen.getByText(/^2 \/ \d+$/)).toBeInTheDocument();
  });

  it('salta a una foto concreta al pulsar su indicador', () => {
    render(<PhotoCarousel />);
    const indicator = screen.getByLabelText('Ir a foto 5');
    fireEvent.click(indicator);
    expect(screen.getByText(/^5 \/ \d+$/)).toBeInTheDocument();
  });
});
