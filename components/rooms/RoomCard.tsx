'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as LucideIcons from 'lucide-react';
import type { RoomData } from './rooms.config';
import { buildRoomWhatsappHref } from './rooms.config';
import type { Lang } from '@/components/header/nav.config';
import styles from './Rooms.module.css';

// ─── Ícono de amenidad (Lucide dinámico) ──────────────────────────────────────

function AmenityIcon({ name }: { name: string }) {
  const Icon = (LucideIcons as unknown as Record<string, React.ElementType>)[name];
  if (!Icon) return null;
  return <Icon size={12} strokeWidth={1.75} aria-hidden="true" />;
}

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

type RoomCardProps = {
  room: RoomData;
  lang: Lang;
  index: number;
  ctaLabel: string;
};

export default function RoomCard({ room, lang, index, ctaLabel }: RoomCardProps) {
  const num    = String(index + 1).padStart(2, '0');
  const waHref = buildRoomWhatsappHref(room.name[lang], lang);
  const photos = room.photos;
  const [activePhoto, setActivePhoto] = useState(0);

  return (
    <article
      className={styles.card}
      data-room-card
      data-room-index={index}
      aria-label={room.name[lang]}
    >
      {/* Imágenes — solo se muestra la activa */}
      <div className={styles.cardImageWrapper}>
        {photos.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`${room.name[lang]} — foto ${i + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className={`${styles.cardImage} ${i === activePhoto ? styles.cardImageActive : styles.cardImageHidden}`}
            priority={index === 0 && i === 0}
            quality={85}
          />
        ))}
      </div>

      {/* Dots de fotos — solo si hay más de una */}
      {photos.length > 1 && (
        <div className={styles.photoDots} aria-label="Fotos de la habitación">
          {photos.map((_, i) => (
            <button
              key={i}
              className={`${styles.photoDot} ${i === activePhoto ? styles.photoDotActive : ''}`}
              onClick={(e) => { e.stopPropagation(); setActivePhoto(i); }}
              aria-label={`Foto ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Gradiente persistente */}
      <div className={styles.cardOverlay} aria-hidden="true" />

      {/* Número decorativo */}
      <span className={styles.cardNumber} aria-hidden="true">{num}</span>

      {/* Panel de información */}
      <div className={styles.cardPanel}>
        <p className={styles.cardCategory}>{room.category[lang]}</p>
        <h3 className={styles.cardName}>{room.name[lang]}</h3>

        <div className={styles.cardRevealContent}>
          <p className={styles.cardDescription}>{room.description[lang]}</p>

          <ul className={styles.cardAmenities} aria-label={lang === 'es' ? 'Amenidades' : 'Amenities'}>
            {room.amenities.map((a, i) => (
              <li key={i} className={styles.cardAmenity}>
                <span className={styles.cardAmenityIcon}>
                  <AmenityIcon name={a.icon} />
                </span>
                {lang === 'es' ? a.es : a.en}
              </li>
            ))}
          </ul>

          <a
            href={waHref}
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
