// Fotos de la edicion 2025. Ya estaban en public/img desde antes (nombres
// IMG_xxxx originales de camara); aqui solo se les pone orden y texto
// alternativo para poder mostrarlas como apartado propio dentro de /media.

export interface Photo2025 {
  src: string;
  alt: string;
}

// El orden sigue la jornada: antes de la salida, carrera, meta y premios.
export const PHOTOS_2025: Photo2025[] = [
  { src: '/img/IMG_7659.webp', alt: 'Equipo de organización en la mesa de inscripciones' },
  { src: '/img/IMG_7699.webp', alt: 'Participantes agrupados en la línea de salida' },
  { src: '/img/IMG_7701.webp', alt: 'Corredores esperando el inicio de la prueba' },
  { src: '/img/IMG_7706.webp', alt: 'Foto de grupo de participantes antes de correr' },
  { src: '/img/IMG_7702.webp', alt: 'Corredor pasando junto al arco de salida' },
  { src: '/img/IMG_7722.webp', alt: 'Corredor por un sendero entre la vegetación' },
  { src: '/img/IMG_7730.webp', alt: 'Corredor saludando a cámara durante la carrera' },
  { src: '/img/IMG_7736.webp', alt: 'Corredor de espaldas subiendo por el camino' },
  { src: '/img/IMG_7852.webp', alt: 'Corredor bajo un gran árbol con las montañas al fondo' },
  { src: '/img/IMG_7818.webp', alt: 'Dos corredores llegando a las casas del pueblo' },
  { src: '/img/IMG_7791.webp', alt: 'Corredor recibido a su llegada a meta' },
  { src: '/img/IMG_7819.webp', alt: 'Llegada a meta con los brazos en alto' },
  { src: '/img/IMG_7829.webp', alt: 'Celebración al cruzar el arco de meta' },
  { src: '/img/IMG_7833.webp', alt: 'Participante celebrando tras cruzar la meta' },
  { src: '/img/IMG_7761.webp', alt: 'Dos participantes posan en el arco del Camino Lebaniego' },
  { src: '/img/IMG_7807.webp', alt: 'Tres participantes posando en la zona de meta' },
  { src: '/img/IMG_7873.webp', alt: 'Retrato de un corredor tras la carrera' },
  { src: '/img/IMG_7868.webp', alt: 'Foto de grupo de participantes en la carpa de meta' },
  { src: '/img/IMG_7785.webp', alt: 'Podio masculino de la edición 2025' },
  { src: '/img/IMG_7882.webp', alt: 'Podio femenino de la edición 2025' },
  { src: '/img/IMG_7890.webp', alt: 'Entrega de premios con ramos de flores' },
  { src: '/img/IMG_7897.webp', alt: 'Ceremonia de entrega de premios' },
];
