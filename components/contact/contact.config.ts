import type { Lang } from '@/components/header/nav.config';
import { WHATSAPP_NUMBER } from '@/components/header/nav.config';

// ─────────────────────────────────────────────
// Datos de contacto — editar aquí
// ─────────────────────────────────────────────

export const CONTACT_INFO = {
  whatsapp: WHATSAPP_NUMBER,
  address: {
    es: 'Manuel Ugarteche 401, Cercado\nArequipa, Perú 04001',
    en: 'Manuel Ugarteche 401, Cercado\nArequipa, Peru 04001',
  },
  reference: {
    es: 'Zona de Selva Alegre, cerca del Puente Grau',
    en: 'Selva Alegre area, near Puente Grau',
  },
  phone: '+51 950 008 100',
};

// ─────────────────────────────────────────────
// Contenido bilingüe
// ─────────────────────────────────────────────

export const CONTACT_SECTION: Record<Lang, {
  eyebrow: string;
  title: string;
  subtitle: string;
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
    labelAddress: 'Address',
    labelPhone: 'Phone',
    labelHours: 'Opening hours',
    hours: 'Every day · 7:00 am – 10:00 pm',
    tagline: 'Villa Elisa Hotel Boutique · Arequipa, Peru',
  },
};
