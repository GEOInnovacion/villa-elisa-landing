import type { Lang } from '@/components/header/nav.config';

// ─────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────

export type DnaPhoto = {
  id: string;
  photo: string;
  alt: Record<Lang, string>;
};

// ─────────────────────────────────────────────
// Fotos — 3 espacios del hotel
// ─────────────────────────────────────────────

export const DNA_PHOTOS: DnaPhoto[] = [
  {
    id: 'restaurante-museo',
    photo: '/images/dna/restaurante-museo.jpg',
    alt: {
      es: 'Restaurante museo de Villa Elisa',
      en: 'Villa Elisa museum restaurant',
    },
  },
  {
    id: 'recepcion',
    photo: '/images/dna/recepcion.jpg',
    alt: {
      es: 'Recepción y salón principal',
      en: 'Reception and main hall',
    },
  },
  {
    id: 'fachada',
    photo: '/images/dna/fachada.jpg',
    alt: {
      es: 'Fachada de la casona colonial',
      en: 'Colonial house facade',
    },
  },
];

// ─────────────────────────────────────────────
// Contenido bilingüe de la sección
// ─────────────────────────────────────────────

export type DnaSectionContent = {
  eyebrow: string;
  title: string;
  epigraphAttribution: string;
  epigraph: string;
  paragraphs: string[];
  closing: string;
};

export const DNA_SECTION: Record<Lang, DnaSectionContent> = {
  es: {
    eyebrow: 'ADN',
    title: 'De historia\na una novela.',
    epigraphAttribution: 'Claude Adrien Helvétius, filósofo francés (1715–1771)',
    epigraph: '"La historia es la novela de los hechos, y la novela es la historia de los sentimientos."',
    paragraphs: [
      'La casona, construida en 1947 por la familia Heineberg, emigrantes de Alemania, lanza esta novela. El Sr. Wilfort, austriaco, llegó a Arequipa en 1939 cuando Europa escribía otra historia. Compraron la casa en 1957 y ya era un punto de parada conocido de los viajeros extranjeros. En 1977, volvieron a Austria.',
      'Luego, el Sr. Castro, arequipeño, con su esposa alemana Sra. Blumel, empezaron a escribir un nuevo capítulo, conservando la tradición de hospitalidad de este lugar, conocido como Baden-Baden.',
      'En 1978, Jean-Louis llegó a Arequipa sin saber que un día iba a escribir otro capítulo. Después de 2 años en la Universidad San Agustín, se enamoró de Arequipa y de su Chuquibambina Rosa Elisa. Se fueron por varios continentes durante 35 años. En 2007, pensando en un futuro menos nómade, compraron esa casona.',
      'Después de 2 años de construcción del edificio nuevo y de decoración, VILLA ELISA nació en septiembre 2011. Ana-María, hermana de Rosa Elisa, se juntó al proyecto, con un corazón grande como el Misti.',
    ],
    closing: 'Así comienza la novela de Villa Elisa, un lugar donde los sentimientos están siempre presentes con los huéspedes. Muchas gracias a todos ustedes por los nuevos capítulos a escribir en esta novela.',
  },
  en: {
    eyebrow: 'DNA',
    title: 'From history\nto a novel.',
    epigraphAttribution: 'Claude Adrien Helvétius, French philosopher (1715–1771)',
    epigraph: '"History is the novel of facts, and the novel is the history of feelings."',
    paragraphs: [
      'The house, built in 1947 by the Heineberg family, German emigrants, opens this novel. Mr. Wilfort, an Austrian, arrived in Arequipa in 1939 when Europe was writing another story. They bought the house in 1957 and it was already a well-known stopover for foreign travelers. In 1977, they returned to Austria.',
      'Then, Mr. Castro, from Arequipa, and his German wife Mrs. Blumel, began writing a new chapter, preserving the hospitality tradition of this place, known as Baden-Baden.',
      'In 1978, Jean-Louis arrived in Arequipa not knowing that one day he would write another chapter. After 2 years at the Universidad San Agustín, he fell in love with Arequipa and with his Chuquibambina Rosa Elisa. They traveled across several continents for 35 years. In 2007, thinking of a less nomadic future, they bought this house.',
      'After 2 years of construction of the new building and decoration, VILLA ELISA was born in September 2011. Ana-María, Rosa Elisa\'s sister, joined the project, with a heart as big as the Misti.',
    ],
    closing: 'So begins the novel of Villa Elisa, a place where feelings are always present with the guests. Thank you all for the new chapters to be written in this novel.',
  },
};
