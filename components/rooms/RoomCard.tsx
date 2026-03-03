'use client';

import Image from 'next/image';
import type { RoomData } from './rooms.config';
import type { Lang } from '@/components/header/nav.config';
import styles from './Rooms.module.css';

// ─── Ícono flecha ─────────────────────────────────────────────────────────────

function ArrowIcon() {
  return (
    <svg
      className={styles.cardCtaIcon}
      width="12" height="12" viewBox="0 0 24 24"
      fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────

type RoomCardProps = {
  room: RoomData;
  lang: Lang;
  index: number;
  ctaLabel: string;
};

// ─── Componente ───────────────────────────────────────────────────────────────

export default function RoomCard({ room, lang, index, ctaLabel }: RoomCardProps) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <article
      className={styles.card}
      data-room-card
      data-room-index={index}
      aria-label={room.name[lang]}
    >
      {/* Imagen de fondo */}
      <div className={styles.cardImageWrapper}>
        <Image
          src={room.photo}
          alt={room.name[lang]}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className={styles.cardImage}
          priority={index === 0}
          quality={85}
        />
      </div>

      {/* Gradiente persistente */}
      <div className={styles.cardOverlay} aria-hidden="true" />

      {/* Número decorativo */}
      <span className={styles.cardNumber} aria-hidden="true">{num}</span>

      {/* Panel de información */}
      <div className={styles.cardPanel}>
        {/* Eyebrow — siempre visible */}
        <p className={styles.cardCategory}>{room.category[lang]}</p>

        {/* Nombre — siempre visible */}
        <h3 className={styles.cardName}>{room.name[lang]}</h3>

        {/* Contenido revelado en hover (mobile: siempre visible vía CSS) */}
        <div className={styles.cardRevealContent}>
          <p className={styles.cardDescription}>{room.description[lang]}</p>

          <ul className={styles.cardAmenities} aria-label={lang === 'es' ? 'Amenidades' : 'Amenities'}>
            {room.amenities.map((a, i) => (
              <li key={i} className={styles.cardAmenity}>
                {lang === 'es' ? a.es : a.en}
              </li>
            ))}
          </ul>

          <a
            href={room.cloudbedsHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cardCta}
            aria-label={`${ctaLabel} — ${room.name[lang]}`}
          >
            <span className={styles.cardCtaText}>{ctaLabel}</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </article>
  );
}
