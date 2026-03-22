export type Lang = 'es' | 'en';

export type NavItem = {
  id: string;
  label: { es: string; en: string };
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'home',
    label: { es: 'Inicio', en: 'Home' },
    href: '#inicio',
  },
  {
    id: 'rooms',
    label: { es: 'Habitaciones', en: 'Rooms' },
    href: '#habitaciones',
  },
  {
    id: 'dna',
    label: { es: 'Nuestro ADN', en: 'Our DNA' },
    href: '#adn',
  },
  {
    id: 'services',
    label: { es: 'Servicios', en: 'Services' },
    href: '#servicios',
  },
  {
    id: 'rankings',
    label: { es: 'Rankings', en: 'Rankings' },
    href: '#rankings',
  },
  {
    id: 'contact',
    label: { es: 'Contacto', en: 'Contact' },
    href: '#contacto',
  },
];

// ← Reemplazar con el número real de WhatsApp (formato internacional sin +)
export const WHATSAPP_NUMBER = '51950008100';

export const WHATSAPP_MESSAGE: Record<Lang, string> = {
  es: 'Hola, quiero reservar una habitación en Villa Elisa',
  en: 'Hello, I would like to book a room at Villa Elisa',
};
