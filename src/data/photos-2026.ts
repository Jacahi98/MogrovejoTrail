// Fotos de la edicion 2026, cedidas por la organizacion (carpeta de Drive
// "Mogrovejo 26", 76 JPG en calidad original). En el repo solo viven los WebP
// de 1920 px generados por scripts/import-mogrovejo-2026.mjs; los originales
// se descargan desde DRIVE_ALBUM_2026.

export const DRIVE_ALBUM_2026 =
  'https://drive.google.com/drive/folders/1PvHgx2-5CaAu8Rxic2csGaqCUaLYg9t6?usp=sharing';

export const PHOTO_COUNT_2026 = 76;

export interface Photo2026 {
  /** Numero de la foto en la carpeta original (1..76). */
  n: number;
  src: string;
  alt: string;
}

const src = (n: number) => `/img/mogrovejo-2026-${String(n).padStart(2, '0')}.webp`;

// Textos alternativos para las fotos con un motivo reconocible; el resto usa
// una descripcion generica generada mas abajo. Se describe la escena, no
// "foto 34": un lector de pantalla no saca nada de un numero.
const ALT: Record<number, string> = {
  1: 'Un perro acompaña a un corredor en Mogrovejo',
  2: 'Participante con su perro antes de la salida',
  3: 'Salida bajo el arco del Camino Lebaniego',
  6: 'Corredores con las montañas de Liébana al fondo',
  9: 'Corredor a toda velocidad, captado en barrido',
  10: 'Paso por la pasarela de madera del bosque',
  14: 'Corredor celebrando entre el arbolado',
  60: 'Llegada con los brazos en alto',
  67: 'Salto sobre el arroyo en plena bajada',
  71: 'Meta bajo el arco de Liébana',
  68: 'Corredora con los brazos abiertos en el hayedo',
  73: 'La torre medieval de Mogrovejo',
  74: 'Corredora junto a la torre de Mogrovejo',
  75: 'Grupo de participantes celebrando la carrera',
  76: 'Dos participantes posan tras cruzar la meta',
};

export const PHOTOS_2026: Photo2026[] = Array.from(
  { length: PHOTO_COUNT_2026 },
  (_, i) => {
    const n = i + 1;
    return {
      n,
      src: src(n),
      alt: ALT[n] ?? `Participante en el Mogrovejo Trail 2026 (foto ${n})`,
    };
  },
);

/**
 * Seleccion destacada para el carrusel, ordenada como un recorrido de la
 * jornada: salida, carrera, bosque, celebracion, meta y el pueblo.
 */
export const FEATURED_2026_NUMBERS = [3, 6, 1, 9, 10, 14, 67, 60, 68, 71, 76, 75, 74];

export const FEATURED_2026: Photo2026[] = FEATURED_2026_NUMBERS.map(
  (n) => PHOTOS_2026[n - 1],
);
