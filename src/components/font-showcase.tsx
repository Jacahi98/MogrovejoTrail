'use client';

import { Bebas_Neue, Oswald, Righteous, Space_Grotesk, Roboto_Flex } from "next/font/google";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const oswald = Oswald({ weight: "700", subsets: ["latin"] });
const righteous = Righteous({ weight: "400", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ weight: "700", subsets: ["latin"] });
const robotoFlex = Roboto_Flex({ subsets: ["latin"] });

export function FontShowcase() {
  const fonts = [
    { name: "Bebas Neue", className: bebasNeue.className, phrase: "MOGROVEJO TRAIL 2026" },
    { name: "Oswald", className: oswald.className, phrase: "MOGROVEJO TRAIL 2026" },
    { name: "Righteous", className: righteous.className, phrase: "MOGROVEJO TRAIL 2026" },
    { name: "Space Grotesk", className: spaceGrotesk.className, phrase: "MOGROVEJO TRAIL 2026" },
    { name: "Roboto Flex", className: robotoFlex.className, phrase: "MOGROVEJO TRAIL 2026" },
  ];

  return (
    <section className="py-20 bg-[var(--bg-primary)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-16 text-center">
          Selecciona una tipografía
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fonts.map((font) => (
            <div
              key={font.name}
              className="bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-lg p-8 hover:border-[var(--accent-primary)] transition-colors cursor-pointer group"
            >
              <p className="text-sm text-[var(--text-secondary)] mb-4 font-semibold">
                {font.name}
              </p>
              <h3 className={`text-5xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors ${font.className}`}>
                {font.phrase}
              </h3>
            </div>
          ))}
        </div>

        <p className="text-center text-[var(--text-secondary)] mt-12 text-sm">
          ¿Cuál te gusta? Dime el nombre de la fuente que prefieres.
        </p>
      </div>
    </section>
  );
}
