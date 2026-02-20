import type { Lang } from '@/components/header/nav.config';

// ─────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────

export type RoomData = {
  id: string;
  name: Record<Lang, string>;
  category: Record<Lang, string>;
  description: Record<Lang, string>;
  amenities: Array<{ es: string; en: string }>;
  photo: string;         // '/images/rooms/{id}.jpg'
  cloudbedsHref: string; // ← reemplazar con deep-link real de Cloudbeds
};

// ─────────────────────────────────────────────
// Habitaciones — agregar un objeto para añadir más
// ─────────────────────────────────────────────

export const ROOMS: RoomData[] = [
  {
    id: 'single',
    name: { es: 'Habitación Single', en: 'Single Room' },
    category: { es: 'Confort · 1 persona', en: 'Comfort · 1 guest' },
    description: {
      es: 'Un espacio íntimo donde el sillar blanco y la luz natural crean una atmósfera de calma absoluta. Perfecta para viajeros que buscan descanso genuino.',
      en: 'An intimate space where white volcanic stone and natural light create an atmosphere of absolute calm. Perfect for travelers seeking genuine rest.',
    },
    amenities: [
      { es: 'Cama individual premium', en: 'Premium single bed' },
      { es: 'Baño privado', en: 'Private bathroom' },
      { es: 'WiFi de alta velocidad', en: 'High-speed WiFi' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    photo: '/images/rooms/single.jpg',
    cloudbedsHref: 'https://hotels.cloudbeds.com/reservation/XXXXXXX#room-single', // ← reemplazar
  },
  {
    id: 'doble',
    name: { es: 'Habitación Doble', en: 'Double Room' },
    category: { es: 'Estándar · 2 personas', en: 'Standard · 2 guests' },
    description: {
      es: 'Dos camas individuales enmarcadas por jardines de pericón y lavanda. El equilibrio perfecto entre funcionalidad y la calidez boutique de Villa Elisa.',
      en: 'Two single beds framed by marigold and lavender gardens. The perfect balance between functionality and the boutique warmth of Villa Elisa.',
    },
    amenities: [
      { es: '2 camas individuales', en: '2 single beds' },
      { es: 'Vista al jardín', en: 'Garden view' },
      { es: 'Baño privado', en: 'Private bathroom' },
      { es: 'WiFi de alta velocidad', en: 'High-speed WiFi' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    photo: '/images/rooms/doble.jpg',
    cloudbedsHref: 'https://hotels.cloudbeds.com/reservation/XXXXXXX#room-doble', // ← reemplazar
  },
  {
    id: 'matrimonial',
    name: { es: 'Habitación Matrimonial', en: 'Matrimonial Room' },
    category: { es: 'Superior · 2 personas', en: 'Superior · 2 guests' },
    description: {
      es: 'Nuestra habitación más romántica: cama queen size, terraza privada con vista a los volcanes y detalles en sillar tallado a mano. Una noche que no olvidarás.',
      en: 'Our most romantic room: queen size bed, private terrace with volcano views and hand-carved sillar stone details. A night you won\'t forget.',
    },
    amenities: [
      { es: 'Cama queen size', en: 'Queen size bed' },
      { es: 'Terraza privada', en: 'Private terrace' },
      { es: 'Vista a los volcanes', en: 'Volcano view' },
      { es: 'Baño con ducha lluvia', en: 'Rain shower bathroom' },
      { es: 'Minibar', en: 'Minibar' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    photo: '/images/rooms/matrimonial.jpg',
    cloudbedsHref: 'https://hotels.cloudbeds.com/reservation/XXXXXXX#room-matrimonial', // ← reemplazar
  },
  {
    id: 'vip',
    name: { es: 'Suite VIP', en: 'VIP Suite' },
    category: { es: 'Suite · 2 personas', en: 'Suite · 2 guests' },
    description: {
      es: 'La experiencia definitiva en Villa Elisa. Sala de estar independiente, jacuzzi privado exterior, arte original en las paredes y mayordomía personalizada las 24 horas.',
      en: 'The ultimate Villa Elisa experience. Separate living area, outdoor private jacuzzi, original artwork on the walls and 24-hour personalized butler service.',
    },
    amenities: [
      { es: 'Cama king size', en: 'King size bed' },
      { es: 'Jacuzzi privado exterior', en: 'Outdoor private jacuzzi' },
      { es: 'Sala de estar', en: 'Living area' },
      { es: 'Arte original', en: 'Original artwork' },
      { es: 'Mayordomía 24h', en: '24h butler service' },
      { es: 'Desayuno + cena incluidos', en: 'Breakfast + dinner included' },
    ],
    photo: '/images/rooms/vip.jpg',
    cloudbedsHref: 'https://hotels.cloudbeds.com/reservation/XXXXXXX#room-vip', // ← reemplazar
  },
  {
    id: 'family',
    name: { es: 'Suite Familiar', en: 'Family Suite' },
    category: { es: 'Familiar · 4 personas', en: 'Family · 4 guests' },
    description: {
      es: 'Dos habitaciones conectadas que abrazan un jardín privado. Diseñada para que las familias vivan la magia de Arequipa sin renunciar al confort de un hotel boutique.',
      en: 'Two connected rooms embracing a private garden. Designed for families to experience the magic of Arequipa without sacrificing boutique hotel comfort.',
    },
    amenities: [
      { es: '2 habitaciones conectadas', en: '2 connected rooms' },
      { es: 'Jardín privado', en: 'Private garden' },
      { es: '2 baños completos', en: '2 full bathrooms' },
      { es: 'Sala de estar', en: 'Living area' },
      { es: 'Cunas disponibles', en: 'Cribs available' },
      { es: 'Desayuno incluido', en: 'Breakfast included' },
    ],
    photo: '/images/rooms/family.jpg',
    cloudbedsHref: 'https://hotels.cloudbeds.com/reservation/XXXXXXX#room-family', // ← reemplazar
  },
];

// ─────────────────────────────────────────────
// Contenido bilingüe de la sección
// ─────────────────────────────────────────────

export type RoomsSectionContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  counterLabel: Record<Lang, string>;
};

export const ROOMS_SECTION: Record<Lang, RoomsSectionContent> = {
  es: {
    eyebrow: 'Nuestros Espacios',
    title: 'Cada habitación,\nuna historia.',
    subtitle: 'Cinco experiencias únicas diseñadas en sillar blanco arequipeño, donde el arte y el silencio son parte del alojamiento.',
    ctaLabel: 'Reservar',
    counterLabel: { es: 'de', en: 'of' },
  },
  en: {
    eyebrow: 'Our Spaces',
    title: 'Each room,\na story.',
    subtitle: 'Five unique experiences crafted in Arequipa white volcanic stone, where art and silence are part of the stay.',
    ctaLabel: 'Book',
    counterLabel: { es: 'de', en: 'of' },
  },
};
