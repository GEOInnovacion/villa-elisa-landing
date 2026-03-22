# Manual de Mantenimiento
## Villa Elisa Hotel Boutique — Landing Page

> Proyecto: Next.js 16 · React 19 · TypeScript · CSS Modules
> Última actualización: Marzo 2026

---

## Índice

1. [Estructura del proyecto](#1-estructura-del-proyecto)
2. [Cómo actualizar contenido](#2-cómo-actualizar-contenido)
   - 2.1 [Texto e idiomas (ES / EN)](#21-texto-e-idiomas-es--en)
   - 2.2 [Navegación y WhatsApp](#22-navegación-y-whatsapp)
   - 2.3 [Hero (portada)](#23-hero-portada)
   - 2.4 [Habitaciones](#24-habitaciones)
   - 2.5 [ADN del Hotel](#25-adn-del-hotel)
   - 2.6 [Servicios](#26-servicios)
   - 2.7 [Rankings y reseñas](#27-rankings-y-reseñas)
   - 2.8 [Contacto](#28-contacto)
   - 2.9 [SEO y metadatos](#29-seo-y-metadatos)
3. [Cómo actualizar imágenes](#3-cómo-actualizar-imágenes)
4. [Cómo actualizar el video hero](#4-cómo-actualizar-el-video-hero)
5. [Cómo agregar un nuevo servicio](#5-cómo-agregar-un-nuevo-servicio)
6. [Cómo agregar una habitación](#6-cómo-agregar-una-habitación)
7. [Despliegue](#7-despliegue)
8. [Tecnologías y dependencias](#8-tecnologías-y-dependencias)
9. [Referencia de archivos](#9-referencia-de-archivos)

---

## 1. Estructura del proyecto

```
villa-elisa-landing/
│
├── app/                        # Núcleo de Next.js (App Router)
│   ├── layout.tsx              # Layout raíz: fonts, metadata SEO, JSON-LD, LangProvider
│   ├── page.tsx                # Página principal (todas las secciones)
│   ├── globals.css             # Variables CSS globales (colores, tipografías)
│   ├── sitemap.ts              # Sitemap automático para Google
│   ├── robots.ts               # Reglas para bots (Google, ChatGPT, Claude, etc.)
│   └── manifest.ts             # Configuración PWA
│
├── components/                 # Un componente por sección
│   ├── header/
│   │   ├── nav.config.ts       ★ Navegación, número WhatsApp
│   │   ├── LangContext.tsx     ★ Sistema de idiomas ES/EN
│   │   └── ...
│   ├── hero/
│   │   ├── hero.config.ts      ★ Textos portada, video, WhatsApp
│   │   └── ...
│   ├── rooms/
│   │   ├── rooms.config.ts     ★ Habitaciones, fotos, amenidades
│   │   └── ...
│   ├── dna/
│   │   ├── dna.config.ts       ★ Historia del hotel, fotos ADN
│   │   └── ...
│   ├── services/
│   │   ├── services.config.ts  ★ Servicios, fotos, colores
│   │   └── ...
│   ├── reviews/
│   │   ├── reviews.config.ts   ★ Plataformas, reseñas
│   │   └── ...
│   └── contact/
│       ├── contact.config.ts   ★ Dirección, teléfono, horarios
│       └── ...
│
├── lib/
│   └── seo.config.ts           ★ SEO central: metadatos, JSON-LD, info del hotel
│
└── public/
    ├── images/
    │   ├── rooms/              Fotos habitaciones (.webp)
    │   ├── dna/                Fotos ADN/historia (.webp)
    │   ├── services/           Fotos servicios (.webp)
    │   ├── og-image.webp       Imagen para redes sociales
    │   └── hero-poster.webp    Póster del video hero
    └── videos/
        ├── villa-elisa-hero.mp4    Video principal
        └── villa-elisa-hero.webm   Video alternativo (Chrome/Firefox)
```

> **Regla de oro:** Todo el contenido editable está en archivos `*.config.ts`. Nunca hay que tocar los componentes `.tsx` para cambiar textos, fotos o datos.

---

## 2. Cómo actualizar contenido

### 2.1 Texto e idiomas (ES / EN)

El sitio es **completamente bilingüe**. Todos los textos siguen esta estructura:

```typescript
// Ejemplo de campo bilingüe
title: {
  es: 'Título en español',
  en: 'Title in English',
}
```

El usuario cambia de idioma con el botón **ES / EN** en el header. La selección se guarda en el navegador (localStorage) y persiste entre visitas.

**Para editar cualquier texto:** abre el archivo `.config.ts` de la sección correspondiente y modifica los campos `es` y `en`.

---

### 2.2 Navegación y WhatsApp

**Archivo:** `components/header/nav.config.ts`

```typescript
// Cambiar número de WhatsApp (sin espacios ni +)
export const WHATSAPP_NUMBER = '51950008100';

// Cambiar mensaje pre-cargado al abrir WhatsApp
export const WHATSAPP_MESSAGE = {
  es: 'Hola, me gustaría hacer una reserva...',
  en: 'Hello, I would like to make a reservation...',
};

// Agregar o quitar ítems del menú
export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio',       label: { es: 'Inicio',       en: 'Home'      }, href: '#inicio'       },
  { id: 'habitaciones', label: { es: 'Habitaciones', en: 'Rooms'     }, href: '#habitaciones' },
  // ... más ítems
];
```

---

### 2.3 Hero (portada)

**Archivo:** `components/hero/hero.config.ts`

```typescript
// Número de WhatsApp del botón hero (sin espacios ni +)
export const WA_NUMBER = '51950008100';

// Ruta al video y póster
export const HERO_VIDEO_MP4_SRC  = '/videos/villa-elisa-hero.mp4';
export const HERO_VIDEO_WEBM_SRC = '/videos/villa-elisa-hero.webm';
export const HERO_VIDEO_POSTER   = '/images/hero-poster.webp';

// Textos de la portada (bilingüe)
export const HERO_CONTENT: Record<Lang, HeroContent> = {
  es: {
    eyebrow: 'Arequipa, Perú',
    titleLines: ['Villa Elisa', 'Hotel', 'Boutique'],
    cta: 'Reservar ahora',
    // ...
  },
  en: { /* misma estructura en inglés */ },
};
```

---

### 2.4 Habitaciones

**Archivo:** `components/rooms/rooms.config.ts`

Cada habitación tiene esta estructura:

```typescript
{
  id: 'vip',
  name:        { es: 'Suite VIP',     en: 'VIP Suite'    },
  category:    { es: 'Suite · 36 m²', en: 'Suite · 36 m²' },
  description: { es: 'Descripción...', en: 'Description...' },
  amenities: [
    { es: 'Cama king', en: 'King bed', icon: 'BedDouble' },
    // Iconos disponibles: Users, BedDouble, Wine, Leaf, Baby, WiFi, ShowerHead, Coffee
  ],
  photos: [
    '/images/rooms/vip.webp',
    '/images/rooms/vip-2.webp',  // Segunda foto activa el carrusel de puntos
  ],
}
```

**Para cambiar fotos de habitaciones:**
1. Convertir la foto a `.webp` (ver [Sección 3](#3-cómo-actualizar-imágenes))
2. Copiar al directorio `public/images/rooms/`
3. Actualizar la ruta en el array `photos[]`

---

### 2.5 ADN del Hotel

**Archivo:** `components/dna/dna.config.ts`

```typescript
// Fotos del carrusel ADN
export const DNA_PHOTOS: DnaPhoto[] = [
  { id: 'restaurante', photo: '/images/dna/restaurante-museo.webp', alt: { es: '...', en: '...' } },
  { id: 'recepcion',   photo: '/images/dna/recepcion.webp',         alt: { es: '...', en: '...' } },
  { id: 'fachada',     photo: '/images/dna/fachada.webp',           alt: { es: '...', en: '...' } },
];

// Textos de la sección (historia, párrafos, cita)
export const DNA_SECTION = {
  eyebrow: 'Nuestra historia',
  title:   { es: 'El ADN\nde Villa Elisa.', en: 'The DNA\nof Villa Elisa.' },
  epigraph: '...',
  paragraphs: { es: ['párrafo 1', 'párrafo 2', ...], en: [...] },
  closing:    { es: '...', en: '...' },
};
```

---

### 2.6 Servicios

**Archivo:** `components/services/services.config.ts`

Cada servicio tiene esta estructura:

```typescript
{
  id: 'restaurante',
  photo:       '/images/services/restaurante.webp',
  alt:         { es: 'Restaurante Museo', en: 'Museum Restaurant' },
  tag:         { es: 'Gastronomía',       en: 'Gastronomy'        },
  title:       { es: 'Restaurante Museo', en: 'Museum Restaurant' },
  description: { es: 'Descripción...',   en: 'Description...'    },
  whatsappMessage: { es: 'Hola, consulto por el restaurante...', en: '...' },
  pdfHref:  '/docs/restaurante.pdf',  // Dejarlo vacío ('') si no hay PDF
  accent:   '#C9A96E',               // Color de acento de la tarjeta
}
```

**Colores de acento disponibles por servicio:**

| Servicio         | Color    |
|------------------|----------|
| Restaurante      | `#C9A96E` (dorado) |
| Piscina          | `#7BA7B5` (celeste) |
| Sala Reuniones   | `#A8956A` (arena) |
| Bodas            | `#D4A5B5` (rosa) |
| Sesión Fotos     | `#B8A080` (siena) |
| Tours Moto       | `#8FA882` (verde) |

---

### 2.7 Rankings y reseñas

**Archivo:** `components/reviews/reviews.config.ts`

**Plataformas** (actualmente: TripAdvisor, Booking.com, Expedia):

```typescript
export const PLATFORMS: Platform[] = [
  {
    id:           'tripadvisor',
    name:         'TripAdvisor',
    score:        '4.9',
    scoreLabel:   { es: 'Excelente · #4 de 144', en: 'Excellent · #4 of 144' },
    maxScore:     '/5',
    reviewCount:  { es: '689 reseñas', en: '689 reviews' },
    href:         'https://www.tripadvisor.com/...',
    logo:         'tripadvisor',
  },
  // ...
];
```

**Reseñas de huéspedes** (actualmente: 3 reseñas):

```typescript
export const REVIEWS: Review[] = [
  {
    id:       'r1',
    author:   'Michael',
    country:  { es: 'Estados Unidos', en: 'United States' },
    platform: 'expedia',   // Debe coincidir con un id de PLATFORMS
    rating:   5,
    text: {
      es: 'Texto de la reseña en español...',
      en: 'Review text in English...',
    },
  },
];
```

> **Tip:** Mantener entre 3 y 5 reseñas para que la sección se vea limpia en mobile.

---

### 2.8 Contacto

**Archivo:** `components/contact/contact.config.ts`

```typescript
export const CONTACT_INFO = {
  whatsapp: WHATSAPP_NUMBER,      // Importado de nav.config.ts
  address:  { es: 'Calle Consuelo 114, Yanahuara, Arequipa', en: '...' },
  phone:    '+51 950 008 100',
};

export const CONTACT_SECTION = {
  // Textos de la sección, etiquetas del formulario, horarios, pie de página...
};
```

---

### 2.9 SEO y metadatos

**Archivo:** `lib/seo.config.ts` — Fuente única de verdad para todo el SEO.

**Datos del hotel** (actualizar cuando cambien):

```typescript
export const HOTEL_INFO = {
  phone:        '+51950008100',
  phoneDisplay: '+51 950 008 100',
  email:        'reservas@villaelisahotel.com',  // ← Confirmar email real
  address: {
    street:   'Calle Consuelo 114',
    district: 'Yanahuara',
    city:     'Arequipa',
    country:  'PE',
    postal:   '04013',
  },
  geo: { lat: -16.396, lng: -71.544 },
  checkin:       '14:00',
  checkout:      '12:00',
  numberOfRooms: 5,
  ratings: {
    tripadvisor: { score: '4.9', max: '5',  reviews: 689 },
    booking:     { score: '9.3', max: '10', reviews: 0   },
    expedia:     { score: '9.8', max: '10', reviews: 133 },
  },
};

// URL del sitio (actualizar cuando se tenga el dominio definitivo)
export const SITE_URL = 'https://www.villaelisahotel.com';
```

**Pendientes de SEO:**
- [ ] Confirmar dominio definitivo en `SITE_URL`
- [ ] Confirmar email real en `HOTEL_INFO.email`
- [ ] Registrar en Google Search Console y descomentar `verification` en `app/layout.tsx`

---

## 3. Cómo actualizar imágenes

> **Formato obligatorio:** Todas las imágenes deben estar en **WebP**. No usar JPG ni PNG.

### Convertir una imagen a WebP (con ffmpeg)

```bash
# Imagen normal (calidad 92)
ffmpeg -i foto-original.jpg -quality 92 foto-nueva.webp

# Verificar dimensiones mínimas recomendadas:
ffprobe -v error -select_streams v:0 -show_entries stream=width,height foto-nueva.webp
```

### Dimensiones recomendadas por sección

| Sección       | Archivo destino            | Dimensiones mínimas | Ratio   |
|---------------|----------------------------|---------------------|---------|
| Hero poster   | `public/images/hero-poster.webp` | 1920 × 1080    | 16:9    |
| OG Image      | `public/images/og-image.webp`    | 1200 × 630     | 1.91:1  |
| Habitaciones  | `public/images/rooms/*.webp`     | 900 × 600      | 3:2     |
| ADN/Historia  | `public/images/dna/*.webp`       | 1000 × 700     | libre   |
| Servicios     | `public/images/services/*.webp`  | 900 × 600      | 3:2     |

### Pasos para reemplazar una imagen

1. Convertir a `.webp` con el comando de arriba
2. Copiar al directorio correcto dentro de `public/images/`
3. Actualizar la ruta en el archivo `.config.ts` correspondiente
4. Borrar la imagen antigua si ya no se usa

---

## 4. Cómo actualizar el video hero

El video de portada necesita **dos formatos** para compatibilidad:

| Formato | Uso          | Archivo                          |
|---------|--------------|----------------------------------|
| MP4     | Todos los navegadores (fallback) | `public/videos/villa-elisa-hero.mp4`  |
| WebM    | Chrome / Firefox (prioritario)   | `public/videos/villa-elisa-hero.webm` |

### Convertir un nuevo video

```bash
# Paso 1 — Generar WebM (VP9, sin audio)
ffmpeg -i nuevo-video.mp4 \
  -c:v libvpx-vp9 -crf 33 -b:v 0 \
  -an -movflags +faststart \
  public/videos/villa-elisa-hero.webm

# Paso 2 — Copiar o recomprimir el MP4 de respaldo
cp nuevo-video.mp4 public/videos/villa-elisa-hero.mp4

# Paso 3 — Generar el póster (frame del segundo 0)
ffmpeg -i nuevo-video.mp4 -vframes 1 -q:v 2 public/images/hero-poster.webp
```

Si se cambian los nombres de archivo, actualizar en `components/hero/hero.config.ts`:

```typescript
export const HERO_VIDEO_MP4_SRC  = '/videos/villa-elisa-hero.mp4';
export const HERO_VIDEO_WEBM_SRC = '/videos/villa-elisa-hero.webm';
export const HERO_VIDEO_POSTER   = '/images/hero-poster.webp';
```

---

## 5. Cómo agregar un nuevo servicio

1. **Preparar la foto** → `public/images/services/nombre-servicio.webp`

2. **Agregar al config** `components/services/services.config.ts`:

```typescript
{
  id: 'nuevo-servicio',
  photo: '/images/services/nombre-servicio.webp',
  alt:   { es: 'Descripción alt', en: 'Alt description' },
  tag:   { es: 'Categoría', en: 'Category' },
  title: { es: 'Nombre del servicio', en: 'Service Name' },
  description: {
    es: 'Descripción breve en español...',
    en: 'Short description in English...',
  },
  whatsappMessage: {
    es: 'Hola, consulto por el servicio de...',
    en: 'Hello, I would like to inquire about...',
  },
  pdfHref: '',         // Ruta al PDF si existe, si no dejar vacío
  accent:  '#C9A96E',  // Color de acento de la tarjeta
},
```

3. **Ajustar el grid** si se agregan más de 6 servicios, revisar el CSS del bento grid en `components/services/Services.module.css`.

---

## 6. Cómo agregar una habitación

1. **Preparar fotos** → `public/images/rooms/nombre.webp` (y `nombre-2.webp` para segunda foto)

2. **Agregar al config** `components/rooms/rooms.config.ts`:

```typescript
{
  id: 'nueva-hab',
  name:        { es: 'Nombre ES',      en: 'Name EN'       },
  category:    { es: 'Tipo · XXm²',    en: 'Type · XXm²'   },
  description: { es: 'Descripción...', en: 'Description...' },
  amenities: [
    { es: 'Cama king',  en: 'King bed',  icon: 'BedDouble' },
    { es: 'Wi-Fi',      en: 'Wi-Fi',     icon: 'Wifi'      },
    // Iconos disponibles: Users, BedDouble, Wine, Leaf, Baby, WiFi, ShowerHead, Coffee
  ],
  photos: [
    '/images/rooms/nombre.webp',
    '/images/rooms/nombre-2.webp',  // Opcional: activa el mini carrusel
  ],
},
```

> La habitación aparecerá automáticamente en el carrusel. El contador (01/05) se actualiza solo.

---

## 7. Despliegue

### Desarrollo local

```bash
npm run dev
# Abre http://localhost:3000
```

### Producción (build)

```bash
npm run build   # Compila y optimiza
npm run start   # Inicia servidor de producción
```

### Recomendación de hosting

El proyecto está optimizado para **Vercel** (la plataforma oficial de Next.js):
- Despliegue automático al hacer push a `main`
- CDN global incluido
- Compresión de imágenes automática
- Variables de entorno desde el dashboard

### Variables de entorno

Actualmente el proyecto no requiere variables de entorno. Si en el futuro se añade un backend para el formulario de contacto, crear un archivo `.env.local`:

```env
# Ejemplo futuro
CONTACT_FORM_EMAIL=reservas@villaelisahotel.com
```

---

## 8. Tecnologías y dependencias

| Tecnología       | Versión  | Uso                                   |
|------------------|----------|---------------------------------------|
| Next.js          | 16.1.6   | Framework React (App Router)          |
| React            | 19.2.3   | Librería UI                           |
| TypeScript       | 5.x      | Tipado estático                       |
| lucide-react     | ^0.576.0 | Iconos para amenidades de habitaciones |
| CSS Modules      | —        | Estilos encapsulados por componente   |

**Fuentes tipográficas** (Google Fonts, cargadas en `globals.css`):
- `Cormorant Garamond` — títulos principales
- `Playfair Display` — subtítulos
- `Inter` — texto cuerpo
- `Montserrat` — etiquetas y botones

**Paleta de colores** (variables CSS en `globals.css`):

| Variable              | Valor     | Uso                        |
|-----------------------|-----------|----------------------------|
| `--color-tierra`      | `#4A2C17` | Fondo principal (marrón)   |
| `--color-dorado`      | `#C9A96E` | Acento principal           |
| `--color-sillar`      | `#D4B896` | Sillar de Arequipa         |
| `--color-crema`       | `#F5EDE0` | Fondo claro                |
| `--color-blanco-sillar`| `#FAF6F1`| Texto sobre fondo oscuro   |
| `--color-verde`       | `#5A7A5A` | Verde jardín               |

---

## 9. Referencia de archivos

| Archivo                                      | Qué controla                                      |
|----------------------------------------------|---------------------------------------------------|
| `lib/seo.config.ts`                          | SEO, JSON-LD, info del hotel, palabras clave      |
| `components/header/nav.config.ts`            | Menú de navegación, número WhatsApp global        |
| `components/hero/hero.config.ts`             | Textos portada, rutas de video y póster           |
| `components/rooms/rooms.config.ts`           | Habitaciones, fotos, amenidades, precios          |
| `components/dna/dna.config.ts`               | Historia del hotel, fotos ADN                     |
| `components/services/services.config.ts`     | Servicios, colores, mensajes WhatsApp, PDFs       |
| `components/reviews/reviews.config.ts`       | Plataformas de reseña, testimonios de huéspedes   |
| `components/contact/contact.config.ts`       | Dirección, teléfono, horarios, textos formulario  |
| `app/layout.tsx`                             | Metadata global, JSON-LD, fuentes, LangProvider   |
| `app/globals.css`                            | Variables de color y tipografía                   |
| `app/sitemap.ts`                             | URLs para Google Search Console                   |
| `app/robots.ts`                              | Permisos para bots (Google, ChatGPT, Claude...)   |
| `public/images/`                             | Todas las imágenes en formato WebP                |
| `public/videos/`                             | Video hero en MP4 y WebM                          |

---

*Manual generado para el equipo de Villa Elisa Hotel Boutique.*
*Ante dudas técnicas o cambios mayores, consultar con el desarrollador del proyecto.*
