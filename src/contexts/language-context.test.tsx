import { describe, it, expect } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './language-context';

function Probe() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <span data-testid="title">{t('hero.title')}</span>
      <span data-testid="missing">{t('this.key.does.not.exist')}</span>
      <button onClick={() => setLanguage('en')}>EN</button>
      <button onClick={() => setLanguage('fr')}>FR</button>
    </div>
  );
}

describe('language-context', () => {
  it('lanza error si useLanguage se usa fuera del provider', () => {
    const consoleError = console.error;
    console.error = () => {};
    expect(() => render(<Probe />)).toThrow(/LanguageProvider/);
    console.error = consoleError;
  });

  it('t() devuelve la propia key cuando no existe traducción', () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );
    expect(screen.getByTestId('missing')).toHaveTextContent('this.key.does.not.exist');
  });

  it('setLanguage cambia el idioma activo', () => {
    render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );
    expect(screen.getByTestId('lang')).toHaveTextContent('es');
    act(() => screen.getByText('EN').click());
    expect(screen.getByTestId('lang')).toHaveTextContent('en');
    act(() => screen.getByText('FR').click());
    expect(screen.getByTestId('lang')).toHaveTextContent('fr');
  });
});
