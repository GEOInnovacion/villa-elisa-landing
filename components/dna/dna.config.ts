import type { Lang } from '@/components/header/nav.config';

// ─────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────

export type DnaPhoto = {
  id: string;
  photo: string;         // '/images/dna/{id}.jpg'
  alt: Record<Lang, string>;
};

export type DnaReason = {
  id: string;
  icon: string;          // SVG path string
  title: Record<Lang, string>;
  body: Record<Lang, string>;
};

// ─────────────────────────────────────────────
// Fotos — 3 espacios del hotel
// ─────────────────────────────────────────────

export const DNA_PHOTOS: DnaPhoto[] = [
  {
    id: 'restaurante-museo',
    photo: '/images/dna/restaurante-museo.jpg',
    alt: {
      es: 'Restaurante museo de Villa Elisa',
      en: 'Villa Elisa museum restaurant',
    },
  },
  {
    id: 'recepcion',
    photo: '/images/dna/recepcion.jpg',
    alt: {
      es: 'Recepción y salón principal',
      en: 'Reception and main hall',
    },
  },
  {
    id: 'fachada',
    photo: '/images/dna/fachada.jpg',
    alt: {
      es: 'Fachada de la casona colonial',
      en: 'Colonial house facade',
    },
  },
];

// ─────────────────────────────────────────────
// Razones — por qué Villa Elisa es diferente
// ─────────────────────────────────────────────

export const DNA_REASONS: DnaReason[] = [
  {
    id: 'arte',
    // Ícono: cuadro / pincel
    icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
    title: { es: 'Arte vivo', en: 'Living art' },
    body: {
      es: 'Cada rincón es una galería. Piezas de artistas arequipeños conviven con la arquitectura colonial de sillar blanco, convirtiendo el hotel en un museo habitable.',
      en: 'Every corner is a gallery. Works by Arequipeño artists coexist with colonial white volcanic stone architecture, turning the hotel into a liveable museum.',
    },
  },
  {
    id: 'historia',
    // Ícono: edificio / columna
    icon: 'M3 21h18M3 7l9-4 9 4M4 7v14m16-14v14M8 21V11m4 10V11m4 10V11M8 7h.01M12 7h.01M16 7h.01',
    title: { es: 'Historia en cada piedra', en: 'History in every stone' },
    body: {
      es: 'Casona colonial del siglo XIX restaurada con rigor. El sillar de los volcanes Chachani y Misti sigue siendo el protagonista, ahora con el confort de un boutique de lujo.',
      en: '19th-century colonial mansion meticulously restored. Volcanic stone from Chachani and Misti remains the protagonist, now paired with luxury boutique comfort.',
    },
  },
  {
    id: 'silencio',
    // Ícono: hoja / naturaleza
    icon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
    title: { es: 'Silencio de autor', en: 'Curated silence' },
    body: {
      es: 'Sin eventos masivos ni grupos turísticos. Villa Elisa es un espacio de 5 habitaciones pensado para quienes valoran la intimidad, el detalle y la calma como lujo supremo.',
      en: 'No mass events or tour groups. Villa Elisa is a 5-room space designed for those who value intimacy, detail and calm as the ultimate luxury.',
    },
  },
];

// ─────────────────────────────────────────────
// Contenido bilingüe de la sección
// ─────────────────────────────────────────────

export type DnaSectionContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  pullquote: string;
  pullquoteAuthor: string;
};

export const DNA_SECTION: Record<Lang, DnaSectionContent> = {
  es: {
    eyebrow: 'Nuestro ADN',
    title: '¿Por qué\nVilla Elisa?',
    subtitle: 'No somos solo un lugar para dormir. Somos una experiencia diseñada para quienes viajan diferente.',
    pullquote: 'El lujo verdadero no grita. Susurra en sillar blanco.',
    pullquoteAuthor: 'Villa Elisa Hotel Boutique · Arequipa',
  },
  en: {
    eyebrow: 'Our DNA',
    title: 'Why\nVilla Elisa?',
    subtitle: 'We are not just a place to sleep. We are an experience designed for those who travel differently.',
    pullquote: 'True luxury does not shout. It whispers in white stone.',
    pullquoteAuthor: 'Villa Elisa Hotel Boutique · Arequipa',
  },
};
