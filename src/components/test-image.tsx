'use client';

export function TestImage() {
  return (
    <section className="w-full bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-lg overflow-hidden">
          <img
            src="/img/IMG_7722.jpg"
            alt="Foto de prueba - Mogrovejo Trail"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
