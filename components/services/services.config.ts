import type { Lang } from '@/components/header/nav.config';
import { WHATSAPP_NUMBER } from '@/components/header/nav.config';

// ─────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────

export type Service = {
  id: string;
  photo: string;          // '/images/services/{id}.jpg'
  alt: Record<Lang, string>;
  tag: Record<Lang, string>;        // eyebrow small label
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  whatsappMessage: Record<Lang, string>;
  pdfHref: string;        // ← reemplazar con URL real del PDF de precios
  accent: string;         // color CSS del acento visual de la carta
};

// ─── Helpers para construir el link de WhatsApp ───────────────────────────────

export function buildWhatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ─────────────────────────────────────────────
// Servicios — agregar un objeto para añadir más
// ─────────────────────────────────────────────

export const SERVICES: Service[] = [
  {
    id: 'restaurante',
    photo: '/images/services/restaurante.webp',
    alt: {
      es: 'Restaurante museo de Villa Elisa',
      en: 'Villa Elisa museum restaurant',
    },
    tag: { es: 'Gastronomía', en: 'Gastronomy' },
    title: { es: 'Restaurante Museo', en: 'Museum Restaurant' },
    description: {
      es: 'Cocina novoandina con ingredientes de temporada en un ambiente donde el arte arequipeño es el comensal de honor. Abierto para huéspedes y público general.',
      en: 'Novo-Andean cuisine with seasonal ingredients in a setting where Arequipeño art is the guest of honor. Open to guests and the public.',
    },
    whatsappMessage: {
      es: 'Hola, quisiera hacer una reserva en el Restaurante Museo de Villa Elisa',
      en: 'Hello, I would like to make a reservation at Villa Elisa Museum Restaurant',
    },
    accent: '#C9A96E', // dorado — gastronomía premium
    pdfHref: '/docs/precios-restaurante.pdf', // ← reemplazar
  },
  {
    id: 'piscina',
    photo: '/images/services/piscina.webp',
    alt: {
      es: 'Piscina privada de Villa Elisa',
      en: 'Villa Elisa private pool',
    },
    tag: { es: 'Bienestar', en: 'Wellness' },
    title: { es: 'Piscina Privada', en: 'Private Pool' },
    description: {
      es: 'Piscina climatizada con vista al jardín de lavanda, exclusiva para huéspedes. El silencio, el agua y el sol de Arequipa como lujo cotidiano.',
      en: 'Heated pool overlooking the lavender garden, exclusive to guests. Silence, water and Arequipa sunshine as everyday luxury.',
    },
    whatsappMessage: {
      es: 'Hola, quisiera información sobre la piscina privada de Villa Elisa',
      en: 'Hello, I would like information about the Villa Elisa private pool',
    },
    accent: '#7BA7B5', // azul agua — bienestar
    pdfHref: '/docs/precios-piscina.pdf', // ← reemplazar
  },
  {
    id: 'reuniones',
    photo: '/images/services/reuniones.webp',
    alt: {
      es: 'Sala de reuniones y eventos corporativos',
      en: 'Meeting room and corporate events',
    },
    tag: { es: 'Corporativo', en: 'Corporate' },
    title: { es: 'Sala de Reuniones', en: 'Meeting Room' },
    description: {
      es: 'Espacio privado para reuniones ejecutivas, workshops o presentaciones de hasta 20 personas. Proyector, WiFi empresarial y catering a medida.',
      en: 'Private space for executive meetings, workshops or presentations for up to 20 people. Projector, business WiFi and tailored catering.',
    },
    whatsappMessage: {
      es: 'Hola, quisiera cotizar el espacio de reuniones de Villa Elisa',
      en: 'Hello, I would like a quote for the Villa Elisa meeting room',
    },
    accent: '#A8956A', // ocre — corporativo cálido
    pdfHref: '/docs/precios-reuniones.pdf', // ← reemplazar
  },
  {
    id: 'bodas',
    photo: '/images/services/bodas.webp',
    alt: {
      es: 'Noche de bodas y celebraciones románticas',
      en: 'Wedding night and romantic celebrations',
    },
    tag: { es: 'Celebraciones', en: 'Celebrations' },
    title: { es: 'Noche de Bodas', en: 'Wedding Night' },
    description: {
      es: 'Suite VIP decorada con flores de temporada, cena privada a la luz de velas y servicio de mayordomía 24h. El inicio perfecto de una nueva vida.',
      en: 'VIP suite decorated with seasonal flowers, private candlelit dinner and 24h butler service. The perfect start to a new life.',
    },
    whatsappMessage: {
      es: 'Hola, quisiera información sobre el paquete de noche de bodas en Villa Elisa',
      en: 'Hello, I would like information about the Villa Elisa wedding night package',
    },
    accent: '#D4A5B5', // rosa empolvado — celebraciones
    pdfHref: '/docs/precios-bodas.pdf', // ← reemplazar
  },
  {
    id: 'sesion-fotos',
    photo: '/images/services/sesion-fotos.webp',
    alt: {
      es: 'Sesión de fotos profesional en Villa Elisa',
      en: 'Professional photo session at Villa Elisa',
    },
    tag: { es: 'Fotografía', en: 'Photography' },
    title: { es: 'Sesión de Fotos', en: 'Photo Session' },
    description: {
      es: 'Los jardines, patios y salones coloniales de Villa Elisa son el set perfecto para sesiones de fotos, quinceañeros, prebodas o producciones editoriales.',
      en: 'Villa Elisa\'s gardens, patios and colonial halls are the perfect backdrop for photo sessions, quinceañeras, pre-weddings or editorial shoots.',
    },
    whatsappMessage: {
      es: 'Hola, quisiera cotizar una sesión de fotos en Villa Elisa',
      en: 'Hello, I would like a quote for a photo session at Villa Elisa',
    },
    accent: '#B8A080', // arena — fotografía artística
    pdfHref: '/docs/precios-sesion-fotos.pdf', // ← reemplazar
  },
  {
    id: 'tours-moto',
    photo: '/images/services/tours-moto.webp',
    alt: {
      es: 'Tours en moto por Arequipa',
      en: 'Motorcycle tours around Arequipa',
    },
    tag: { es: 'Aventura', en: 'Adventure' },
    title: { es: 'Tours en Moto', en: 'Motorcycle Tours' },
    description: {
      es: 'Recorre el Valle del Colca, el Cañón y los volcanes en moto con guías especializados. Salida directa desde Villa Elisa, equipo incluido.',
      en: 'Explore the Colca Valley, the Canyon and volcanoes by motorcycle with specialist guides. Departure directly from Villa Elisa, gear included.',
    },
    whatsappMessage: {
      es: 'Hola, quisiera información sobre los tours en moto desde Villa Elisa',
      en: 'Hello, I would like information about motorcycle tours from Villa Elisa',
    },
    accent: '#8FA882', // verde montaña — aventura
    pdfHref: '/docs/precios-tours-moto.pdf', // ← reemplazar
  },
];

// ─────────────────────────────────────────────
// Contenido bilingüe de la sección
// ─────────────────────────────────────────────

export type ServicesSectionContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaWhatsapp: string;
  ctaDownload: string;
};

export const SERVICES_SECTION: Record<Lang, ServicesSectionContent> = {
  es: {
    eyebrow: 'Servicios',
    title: 'Más que\nun hotel.',
    subtitle: 'Cada experiencia está diseñada para que tu estancia en Arequipa sea irrepetible.',
    ctaWhatsapp: 'Consultar por WhatsApp',
    ctaDownload: 'Descargar precios',
  },
  en: {
    eyebrow: 'Services',
    title: 'More than\na hotel.',
    subtitle: 'Each experience is designed to make your stay in Arequipa truly unique.',
    ctaWhatsapp: 'Ask on WhatsApp',
    ctaDownload: 'Download pricing',
  },
};
