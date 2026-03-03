'use client';

import Image from 'next/image';
import { useLang } from '@/components/header/LangContext';
import { DNA_PHOTOS, DNA_REASONS, DNA_SECTION } from './dna.config';
import styles from './Dna.module.css';

// ─── Ícono SVG genérico ───────────────────────────────────────────────────────

function Icon({ path }: { path: string }) {
  return (
    <svg
      className={styles.reasonIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function Dna() {
  const { lang } = useLang();
  const content  = DNA_SECTION[lang];

  return (
    <section id="adn" className={styles.dna} aria-label={content.eyebrow}>

      {/* Cabecera */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 className={styles.title}>{content.title}</h2>
        </div>
        <p className={styles.subtitle}>{content.subtitle}</p>
      </div>

      {/* Galería de 3 fotos */}
      <div className={styles.gallery}>
        {DNA_PHOTOS.map((item) => (
          <div key={item.id} className={styles.photoItem}>
            <Image
              src={item.photo}
              alt={item.alt[lang]}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.photo}
              quality={85}
            />
            <span className={styles.photoLabel}>{item.alt[lang]}</span>
          </div>
        ))}
      </div>

      {/* Razones */}
      <div className={styles.reasons}>
        {DNA_REASONS.map((reason) => (
          <div key={reason.id} className={styles.reasonItem}>
            <Icon path={reason.icon} />
            <h3 className={styles.reasonTitle}>{reason.title[lang]}</h3>
            <p className={styles.reasonBody}>{reason.body[lang]}</p>
          </div>
        ))}
      </div>

      {/* Pullquote */}
      <div className={styles.pullquoteBlock}>
        <p className={styles.pullquoteText}>{content.pullquote}</p>
        <span className={styles.pullquoteAuthor}>{content.pullquoteAuthor}</span>
      </div>

    </section>
  );
}
