import type { Lang } from '@/components/header/nav.config';
import { WHATSAPP_NUMBER } from '@/components/header/nav.config';

// ─────────────────────────────────────────────
// Datos de contacto — editar aquí
// ─────────────────────────────────────────────

export const CONTACT_INFO = {
  whatsapp: WHATSAPP_NUMBER,
  email: 'reservas@villaelisa.pe',           // ← reemplazar
  address: {
    es: 'Calle Consuelo 114, Yanahuara\nArequipa, Perú',
    en: 'Consuelo St. 114, Yanahuara\nArequipa, Peru',
  },
  phone: '+51 999 999 999',                  // ← reemplazar
  // Google Maps embed URL — reemplazar con el embed real de Villa Elisa
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.5!2d-71.544!3d-16.396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVmlsbGEgRWxpc2E!5e0!3m2!1ses!2spe!4v1700000000000',
};

export const WHATSAPP_RESERVATION_MSG: Record<Lang, string> = {
  es: 'Hola, quisiera hacer una reserva en Villa Elisa Hotel Boutique',
  en: 'Hello, I would like to make a reservation at Villa Elisa Hotel Boutique',
};

export function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─────────────────────────────────────────────
// Contenido bilingüe
// ─────────────────────────────────────────────

export const CONTACT_SECTION: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaWhatsapp: string;
  ctaEmail: string;
  labelAddress: string;
  labelPhone: string;
  labelHours: string;
  hours: string;
  tagline: string;
}> = {
  es: {
    eyebrow: 'Contacto',
    title: 'Reserva tu\nexperiencia.',
    subtitle: 'Estamos disponibles para ayudarte a planificar tu estancia perfecta en Arequipa.',
    ctaWhatsapp: 'Reservar por WhatsApp',
    ctaEmail: 'Escribirnos',
    labelAddress: 'Dirección',
    labelPhone: 'Teléfono',
    labelHours: 'Horario de atención',
    hours: 'Todos los días · 7:00 am – 10:00 pm',
    tagline: 'Villa Elisa Hotel Boutique · Arequipa, Perú',
  },
  en: {
    eyebrow: 'Contact',
    title: 'Book your\nexperience.',
    subtitle: 'We are available to help you plan your perfect stay in Arequipa.',
    ctaWhatsapp: 'Book via WhatsApp',
    ctaEmail: 'Send us an email',
    labelAddress: 'Address',
    labelPhone: 'Phone',
    labelHours: 'Opening hours',
    hours: 'Every day · 7:00 am – 10:00 pm',
    tagline: 'Villa Elisa Hotel Boutique · Arequipa, Peru',
  },
};
