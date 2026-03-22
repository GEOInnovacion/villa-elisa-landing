'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { useLang } from '@/components/header/LangContext';
import { DNA_PHOTOS, DNA_SECTION } from './dna.config';
import styles from './Dna.module.css';

const AUTOPLAY_MS = 4500;

export default function Dna() {
  const { lang } = useLang();
  const content = DNA_SECTION[lang];
  const total = DNA_PHOTOS.length;

  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((i: number) => {
    setActive(((i % total) + total) % total);
  }, [total]);

  useEffect(() => {
    timerRef.current = setTimeout(() => goTo(active + 1), AUTOPLAY_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [active, goTo]);

  return (
    <section id="adn" className={styles.dna} aria-label={content.eyebrow}>
      <div className={styles.body}>

        {/* ── Columna izquierda: texto ── */}
        <div className={styles.textCol}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 className={styles.title}>{content.title}</h2>

          <div className={styles.divider} aria-hidden="true" />

          <p className={styles.epigraphText}>{content.epigraph}</p>
          <span className={styles.epigraphAuthor}>— {content.epigraphAttribution}</span>

          <div className={styles.paragraphs}>
            {content.paragraphs.map((p, i) => (
              <p key={i} className={styles.paragraph}>{p}</p>
            ))}
            <p className={styles.paragraphClosing}>{content.closing}</p>
          </div>
        </div>

        {/* ── Columna derecha: carrusel ── */}
        <div className={styles.carouselCol} aria-label="Galería de fotos">

          {/* Contador */}
          <span className={styles.slideCounter} aria-hidden="true">
            {String(active + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>

          {/* Track */}
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {DNA_PHOTOS.map((item, i) => (
              <div
                key={item.id}
                className={`${styles.slide}${i === active ? ` ${styles.active}` : ''}`}
                aria-hidden={i !== active}
              >
                <Image
                  src={item.photo}
                  alt={item.alt[lang]}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.photo}
                  quality={90}
                  priority={i === 0}
                />
                <span className={styles.slideLabel}>{item.alt[lang]}</span>
              </div>
            ))}
          </div>

          {/* Flecha prev */}
          <button
            className={styles.arrowPrev}
            onClick={() => goTo(active - 1)}
            aria-label="Foto anterior"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Flecha next */}
          <button
            className={styles.arrowNext}
            onClick={() => goTo(active + 1)}
            aria-label="Siguiente foto"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className={styles.controls} role="tablist" aria-label="Seleccionar foto">
            {DNA_PHOTOS.map((item, i) => (
              <button
                key={item.id}
                role="tab"
                aria-selected={i === active}
                aria-label={item.alt[lang]}
                className={`${styles.dot}${i === active ? ` ${styles.dotActive}` : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
