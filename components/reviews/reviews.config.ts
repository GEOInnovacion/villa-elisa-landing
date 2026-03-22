import type { Lang } from '@/components/header/nav.config';

// ─────────────────────────────────────────────
// Plataformas
// ─────────────────────────────────────────────

export type Platform = {
  id: string;
  name: string;
  score: string;
  scoreLabel: Record<Lang, string>;
  maxScore: string;
  reviewCount: Record<Lang, string>;
  href: string;
  logo: string;
};

export const PLATFORMS: Platform[] = [
  {
    id: 'tripadvisor',
    name: 'TripAdvisor',
    score: '4.9',
    scoreLabel: { es: 'Excelente · #4 de 144', en: 'Excellent · #4 of 144' },
    maxScore: '/5',
    reviewCount: { es: '689 reseñas', en: '689 reviews' },
    href: 'https://www.tripadvisor.com/Hotel_Review-g294313-d2367023-Reviews-Hotel_Boutique_Villa_Elisa-Arequipa_Arequipa_Region.html',
    logo: 'tripadvisor',
  },
  {
    id: 'booking',
    name: 'Booking.com',
    score: '9.3',
    scoreLabel: { es: 'Fantástico', en: 'Fantastic' },
    maxScore: '/10',
    reviewCount: { es: 'Reseñas verificadas', en: 'Verified reviews' },
    href: 'https://www.booking.com/hotel/pe/villa-elisa-boutique.html',
    logo: 'booking',
  },
  {
    id: 'expedia',
    name: 'Expedia',
    score: '9.8',
    scoreLabel: { es: 'Excepcional', en: 'Exceptional' },
    maxScore: '/10',
    reviewCount: { es: '133 opiniones', en: '133 reviews' },
    href: 'https://www.expedia.com/Arequipa-Hotels-Hotel-Boutique-Villa-Elisa.h10517032.Hotel-Information',
    logo: 'expedia',
  },
];

// ─────────────────────────────────────────────
// Comentarios — combinados de varias plataformas
// ─────────────────────────────────────────────

export type Review = {
  id: string;
  author: string;
  country: Record<Lang, string>;
  platform: string;
  rating: number;
  text: Record<Lang, string>;
};

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Michael',
    country: { es: 'Estados Unidos', en: 'United States' },
    platform: 'expedia',
    rating: 5,
    text: {
      es: 'Fantástico oasis boutique en Arequipa — a poca distancia del centro histórico pero en un lugar realmente tranquilo. Disfrutamos mucho la hospitalidad increíble del personal y del dueño.',
      en: 'Fantastic boutique hotel oasis — walking distance to the historical centre but in a really quiet location. Really enjoyed the incredible hospitality of the staff and owner.',
    },
  },
  {
    id: 'r2',
    author: 'Barbara',
    country: { es: 'España', en: 'Spain' },
    platform: 'booking',
    rating: 5,
    text: {
      es: 'El hotel es un oasis en la ciudad. La atención del personal inmejorable. Su desayuno es de 100, volveríamos sin dudarlo. Hemos estado como en casa.',
      en: 'The hotel is an oasis in the city. The staff attention is unbeatable. Their breakfast is perfect — we would return without hesitation. We felt completely at home.',
    },
  },
  {
    id: 'r3',
    author: 'Shariq',
    country: { es: 'Reino Unido', en: 'United Kingdom' },
    platform: 'expedia',
    rating: 5,
    text: {
      es: 'Habitación muy limpia, personal amable. Como alojarse en una hermosa villa colonial con exuberantes jardines y hermosas antigüedades.',
      en: 'Very clean room, friendly staff. Like staying in a beautiful colonial villa with lush gardens and beautiful antiques.',
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
