import type { Lang } from '@/components/header/nav.config';

// ─────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────

export type RoomData = {
  id: string;
  name: Record<Lang, string>;
  category: Record<Lang, string>;
  description: Record<Lang, string>;
  amenities: Array<{ es: string; en: string; icon: string }>;
  photo: string;
  cloudbedsHref: string;
};

// ─────────────────────────────────────────────
// WhatsApp — CTA de cada habitación
// ─────────────────────────────────────────────
const WA_NUMBER = '51950008100';

export function buildRoomWhatsappHref(roomName: string, lang: Lang): string {
  const msg = lang === 'es'
    ? `Hola, me gustaría reservar la ${roomName} en Villa Elisa`
    : `Hello, I'd like to book the ${roomName} at Villa Elisa`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ─────────────────────────────────────────────
// Habitaciones
// ─────────────────────────────────────────────

export const ROOMS: RoomData[] = [
  {
    id: 'vip',
    name: { es: 'Habitación VIP', en: 'VIP Room' },
    category: { es: 'Exclusivo e inigualable', en: 'Exclusive & unmatched' },
    description: {
      es: 'Experiencia única en una acogedora habitación de 36 m². Ideal para ejecutivos, parejas que buscan el máximo confort, lunas de miel y noches románticas.',
      en: 'Unique experience in a cozy 36 m² room. Ideal for executives, couples seeking maximum comfort, honeymoons and romantic nights.',
    },
    amenities: [
      { icon: 'Users',        es: 'Dos huéspedes',          en: 'Two guests' },
      { icon: 'BedDouble',    es: 'Cama king',               en: 'King bed' },
      { icon: 'Wine',         es: 'Minibar',                 en: 'Minibar' },
      { icon: 'Leaf',         es: 'Vista al jardín',         en: 'Garden view' },
      { icon: 'Baby',         es: 'Cuna para bebés',         en: 'Baby crib' },
      { icon: 'Wifi',         es: 'Wi-Fi',                   en: 'Wi-Fi' },
      { icon: 'ShowerHead',   es: 'Ducha española 3 puntos', en: 'Spanish 3-point shower' },
      { icon: 'Coffee',       es: 'Desayuno buffet',         en: 'Buffet breakfast' },
    ],
    photo: '/images/rooms/vip.jpg',
    cloudbedsHref: 'https://us2.cloudbeds.com/es/reservation/N9kuZu?currency=usd',
  },
  {
    id: 'matrimonial',
    name: { es: 'Habitación Matrimonial', en: 'Matrimonial Room' },
    category: { es: 'Disfruta con tu pareja', en: 'Enjoy with your partner' },
    description: {
      es: 'Habitación amplia de 24 m² con cama queen. Ideal para parejas en viaje de turismo. Posibilidad de añadir una cama para menor de edad.',
      en: 'Spacious 24 m² room with queen bed. Ideal for couples traveling. Option to add a bed for a minor.',
    },
    amenities: [
      { icon: 'Users',      es: 'Dos huéspedes',   en: 'Two guests' },
      { icon: 'BedDouble',  es: 'Cama queen',       en: 'Queen bed' },
      { icon: 'Wine',       es: 'Minibar',          en: 'Minibar' },
      { icon: 'Leaf',       es: 'Vista al jardín',  en: 'Garden view' },
      { icon: 'Baby',       es: 'Cuna para bebés',  en: 'Baby crib' },
      { icon: 'Wifi',       es: 'Wi-Fi',            en: 'Wi-Fi' },
      { icon: 'ShowerHead', es: 'Ducha',            en: 'Shower' },
      { icon: 'Coffee',     es: 'Desayuno buffet',  en: 'Buffet breakfast' },
    ],
    photo: '/images/rooms/matrimonial.jpg',
    cloudbedsHref: 'https://us2.cloudbeds.com/es/reservation/N9kuZu?currency=usd',
  },
  {
    id: 'single',
    name: { es: 'Habitación Simple', en: 'Single Room' },
    category: { es: 'Con la misma comodidad', en: 'Same comfort' },
    description: {
      es: 'Habitación simple y amplia de 24 m². Acogedora e ideal para viajeros de negocios. Posibilidad de añadir una cama para menor de edad.',
      en: 'Simple and spacious 24 m² room. Cozy and ideal for business travelers. Option to add a bed for a minor.',
    },
    amenities: [
      { icon: 'User',       es: 'Un huésped',      en: 'One guest' },
      { icon: 'BedDouble',  es: 'Cama queen',       en: 'Queen bed' },
      { icon: 'Wine',       es: 'Minibar',          en: 'Minibar' },
      { icon: 'Leaf',       es: 'Vista al jardín',  en: 'Garden view' },
      { icon: 'Baby',       es: 'Cuna para bebés',  en: 'Baby crib' },
      { icon: 'Wifi',       es: 'Wi-Fi',            en: 'Wi-Fi' },
      { icon: 'ShowerHead', es: 'Ducha',            en: 'Shower' },
      { icon: 'Coffee',     es: 'Desayuno buffet',  en: 'Buffet breakfast' },
    ],
    photo: '/images/rooms/single.jpg',
    cloudbedsHref: 'https://us2.cloudbeds.com/es/reservation/N9kuZu?currency=usd',
  },
  {
    id: 'doble',
    name: { es: 'Habitación Doble', en: 'Double Room' },
    category: { es: 'Comparte con tu acompañante', en: 'Share with your companion' },
    description: {
      es: 'Habitación doble de 24 m² con 2 camas plaza y media. Acogedora y amplia. Posibilidad de añadir una cama para menor de edad.',
      en: 'Double room of 24 m² with 2 full-size beds. Cozy and spacious. Option to add a bed for a minor.',
    },
    amenities: [
      { icon: 'Users',      es: 'Dos huéspedes',       en: 'Two guests' },
      { icon: 'BedDouble',  es: 'Cama plaza y media',  en: 'Full-size beds' },
      { icon: 'Wine',       es: 'Minibar',             en: 'Minibar' },
      { icon: 'Leaf',       es: 'Vista al jardín',     en: 'Garden view' },
      { icon: 'Baby',       es: 'Cuna para bebés',     en: 'Baby crib' },
      { icon: 'Wifi',       es: 'Wi-Fi',               en: 'Wi-Fi' },
      { icon: 'ShowerHead', es: 'Ducha',               en: 'Shower' },
      { icon: 'Coffee',     es: 'Desayuno buffet',     en: 'Buffet breakfast' },
    ],
    photo: '/images/rooms/doble.jpg',
    cloudbedsHref: 'https://us2.cloudbeds.com/es/reservation/N9kuZu?currency=usd',
  },
  {
    id: 'family',
    name: { es: 'Habitación Triple / Cuádruple', en: 'Triple / Quadruple Room' },
    category: { es: 'Exclusivo e inigualable', en: 'Exclusive & unmatched' },
    description: {
      es: 'Habitación muy amplia de 36 m² con 1 cama king y 2 camas plaza y media. Ideal para familias con 2 niños. Cunas disponibles para bebés.',
      en: 'Very spacious 36 m² room with 1 king bed and 2 full-size beds. Ideal for families with 2 children. Cribs available for babies.',
    },
    amenities: [
      { icon: 'Users',      es: 'Tres / Cuatro huéspedes',  en: 'Three / Four guests' },
      { icon: 'BedDouble',  es: 'Dos camas plaza y media',  en: 'Two full-size beds' },
      { icon: 'Wine',       es: 'Minibar',                  en: 'Minibar' },
      { icon: 'Leaf',       es: 'Vista al jardín',          en: 'Garden view' },
      { icon: 'Baby',       es: 'Cuna para bebés',          en: 'Baby crib' },
      { icon: 'Wifi',       es: 'Wi-Fi',                    en: 'Wi-Fi' },
      { icon: 'Coffee',     es: 'Desayuno buffet',          en: 'Buffet breakfast' },
    ],
    photo: '/images/rooms/family.jpg',
    cloudbedsHref: 'https://us2.cloudbeds.com/es/reservation/N9kuZu?currency=usd',
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
    ctaLabel: 'Reservar ahora',
    counterLabel: { es: 'de', en: 'of' },
  },
  en: {
    eyebrow: 'Our Spaces',
    title: 'Each room,\na story.',
    subtitle: 'Five unique experiences crafted in Arequipa white volcanic stone, where art and silence are part of the stay.',
    ctaLabel: 'Book now',
    counterLabel: { es: 'de', en: 'of' },
  },
};
