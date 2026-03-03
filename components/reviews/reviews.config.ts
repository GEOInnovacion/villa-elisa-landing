import type { Lang } from '@/components/header/nav.config';

// ─────────────────────────────────────────────
// Plataformas — agregar/quitar aquí
// ─────────────────────────────────────────────

export type Platform = {
  id: string;
  name: string;
  score: string;       // ej. "9.4"
  scoreLabel: Record<Lang, string>; // ej. "Excepcional"
  maxScore: string;    // ej. "/10" o "/5"
  reviewCount: Record<Lang, string>; // ej. "248 reseñas"
  href: string;        // ← reemplazar con URL real del perfil
  logo: string;        // SVG inline path id
};

export const PLATFORMS: Platform[] = [
  {
    id: 'tripadvisor',
    name: 'TripAdvisor',
    score: '5.0',
    scoreLabel: { es: 'Excelente', en: 'Excellent' },
    maxScore: '/5',
    reviewCount: { es: '186 reseñas', en: '186 reviews' },
    href: 'https://www.tripadvisor.com', // ← reemplazar
    logo: 'tripadvisor',
  },
  {
    id: 'booking',
    name: 'Booking.com',
    score: '9.4',
    scoreLabel: { es: 'Excepcional', en: 'Exceptional' },
    maxScore: '/10',
    reviewCount: { es: '312 reseñas', en: '312 reviews' },
    href: 'https://www.booking.com', // ← reemplazar
    logo: 'booking',
  },
  {
    id: 'expedia',
    name: 'Expedia',
    score: '4.8',
    scoreLabel: { es: 'Maravilloso', en: 'Wonderful' },
    maxScore: '/5',
    reviewCount: { es: '97 reseñas', en: '97 reviews' },
    href: 'https://www.expedia.com', // ← reemplazar
    logo: 'expedia',
  },
  {
    id: 'airbnb',
    name: 'Airbnb',
    score: '4.97',
    scoreLabel: { es: 'Destacado', en: 'Outstanding' },
    maxScore: '/5',
    reviewCount: { es: '74 reseñas', en: '74 reviews' },
    href: 'https://www.airbnb.com', // ← reemplazar
    logo: 'airbnb',
  },
];

// ─────────────────────────────────────────────
// Comentarios destacados
// ─────────────────────────────────────────────

export type Review = {
  id: string;
  author: string;
  country: Record<Lang, string>;
  platform: string;    // id de PLATFORMS
  rating: number;      // sobre 5
  text: Record<Lang, string>;
};

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'María L.',
    country: { es: 'Lima, Perú', en: 'Lima, Peru' },
    platform: 'booking',
    rating: 5,
    text: {
      es: 'Un lugar absolutamente mágico. El desayuno con vista al jardín, el silencio, el arte en cada rincón... Villa Elisa no es un hotel, es una experiencia que te cambia.',
      en: 'An absolutely magical place. Breakfast with a garden view, the silence, art in every corner... Villa Elisa is not a hotel, it\'s an experience that changes you.',
    },
  },
  {
    id: 'r2',
    author: 'James K.',
    country: { es: 'Londres, Reino Unido', en: 'London, UK' },
    platform: 'tripadvisor',
    rating: 5,
    text: {
      es: 'El mejor boutique que he visitado en Sudamérica. La arquitectura colonial restaurada con impecable gusto. El equipo anticipa cada necesidad sin que tengas que pedirlo.',
      en: 'The best boutique I\'ve visited in South America. Colonial architecture restored with impeccable taste. The team anticipates every need before you even ask.',
    },
  },
  {
    id: 'r3',
    author: 'Sophie M.',
    country: { es: 'París, Francia', en: 'Paris, France' },
    platform: 'airbnb',
    rating: 5,
    text: {
      es: 'Vine por una noche y me quedé tres. El sillar blanco, la luz de Arequipa y la calma del jardín hacen que no quieras irte. Volveré cada vez que pueda.',
      en: 'I came for one night and stayed three. The white volcanic stone, Arequipa\'s light and the garden calm make you never want to leave. I\'ll return whenever I can.',
    },
  },
];

// ─────────────────────────────────────────────
// Contenido de la sección
// ─────────────────────────────────────────────

export const REVIEWS_SECTION = {
  eyebrow: { es: 'Rankings', en: 'Rankings' },
  title: { es: 'Lo que dicen\nde nosotros.', en: 'What guests\nsay about us.' },
  ctaLabel: { es: 'Ver todas las reseñas', en: 'See all reviews' },
};
