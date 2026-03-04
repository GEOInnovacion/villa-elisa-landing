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
  {
    id: 'hotels',
    name: 'Hotels.com',
    score: '9.8',
    scoreLabel: { es: 'Excepcional', en: 'Exceptional' },
    maxScore: '/10',
    reviewCount: { es: '133 opiniones', en: '133 reviews' },
    href: 'https://www.hotels.com/ho509948/hotel-boutique-villa-elisa-arequipa-peru/',
    logo: 'hotels',
  },
  {
    id: 'kayak',
    name: 'Kayak',
    score: '9.3',
    scoreLabel: { es: 'Excelente', en: 'Excellent' },
    maxScore: '/10',
    reviewCount: { es: '247 opiniones', en: '247 reviews' },
    href: 'https://www.es.kayak.com/Arequipa-Hoteles-Villa-Elisa-Boutique.653171.ksp',
    logo: 'kayak',
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
  {
    id: 'r4',
    author: 'D33P4K',
    country: { es: 'Internacional', en: 'International' },
    platform: 'tripadvisor',
    rating: 5,
    text: {
      es: 'Gran hotel boutique, tranquilo, perfecto para descansar. El dormitorio y el baño son grandes y cómodos. Recomiendo el primer piso: consigues la terraza.',
      en: 'Great boutique hotel, quiet, perfect for resting. The bedroom and bathroom are large and comfortable. I recommend the first floor — you get the terrace.',
    },
  },
  {
    id: 'r5',
    author: 'Vicente',
    country: { es: 'España', en: 'Spain' },
    platform: 'booking',
    rating: 5,
    text: {
      es: 'La construcción combina lo tradicional con la comodidad en su justa medida. Te sientes en casa. Es realmente acogedor.',
      en: 'The building combines the traditional with comfort in just the right measure. You feel at home. It is truly welcoming.',
    },
  },
  {
    id: 'r6',
    author: 'Jamie Lee',
    country: { es: 'Estados Unidos', en: 'United States' },
    platform: 'expedia',
    rating: 5,
    text: {
      es: 'Volvería aquí una y otra vez. Es una propiedad encantadora y el personal es excelente.',
      en: 'I would come back here to stay over and over. It\'s a lovely property and the staff are excellent!',
    },
  },
  {
    id: 'r7',
    author: 'KenA',
    country: { es: 'Internacional', en: 'International' },
    platform: 'tripadvisor',
    rating: 5,
    text: {
      es: 'Tranquilo, gran servicio, terrenos maravillosos, gran relación calidad-precio.',
      en: 'Quiet, great service, wonderful grounds, great value for money.',
    },
  },
  {
    id: 'r8',
    author: 'Isabel',
    country: { es: 'Panamá', en: 'Panama' },
    platform: 'booking',
    rating: 5,
    text: {
      es: 'El trato del personal fue sobresaliente. Tiene un jardín muy agradable — nos contaron que los higos de la mermelada son de cosecha propia.',
      en: 'The staff treatment was outstanding. It has a lovely garden — they told us the figs in the jam are home-grown.',
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
