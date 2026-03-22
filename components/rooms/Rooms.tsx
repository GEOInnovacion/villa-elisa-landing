'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { useLang } from '@/components/header/LangContext';
import { ROOMS, ROOMS_SECTION } from './rooms.config';
import RoomCard from './RoomCard';
import styles from './Rooms.module.css';

export default function Rooms() {
  const { lang } = useLang();
  const content  = ROOMS_SECTION[lang];
  const n        = ROOMS.length;

  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // ── Ir a una card concreta ──────────────────────────────────────────────
  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(`[data-room-index="${index}"]`);
    if (!card) return;
    card.scrollIntoView({ inline: 'start', behavior: 'smooth', block: 'nearest' });
    setActive(index);
  }, []);

  const prev = useCallback(() => goTo(Math.max(0, active - 1)), [active, goTo]);
  const next = useCallback(() => goTo(Math.min(n - 1, active + 1)), [active, n, goTo]);

  // ── Sincronizar active con IntersectionObserver ─────────────────────────
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>('[data-room-card]'));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.roomIndex));
          }
        }
      },
      { threshold: 0.55, root: track }
    );
    cards.forEach(c => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="habitaciones"
      className={styles.rooms}
      aria-label={lang === 'es' ? 'Habitaciones' : 'Rooms'}
    >
      <div className={styles.stickyViewport}>

        {/* Panel izquierdo */}
        <div className={styles.leftPanel}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 className={styles.sectionTitle}>{content.title}</h2>
          <p className={styles.sectionSubtitle}>{content.subtitle}</p>

          {/* Contador */}
          <div className={styles.cardCounter} aria-live="polite">
            <span className={styles.counterCurrent}>{String(active + 1).padStart(2, '0')}</span>
            <span className={styles.counterSeparator}>/</span>
            <span className={styles.counterTotal}>{String(n).padStart(2, '0')}</span>
          </div>

          {/* Flechas de navegación */}
          <div className={styles.arrows}>
            <button
              className={styles.arrowBtn}
              onClick={prev}
              disabled={active === 0}
              aria-label={lang === 'es' ? 'Anterior' : 'Previous'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              className={styles.arrowBtn}
              onClick={next}
              disabled={active === n - 1}
              aria-label={lang === 'es' ? 'Siguiente' : 'Next'}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Track de cards */}
        <div className={styles.rightPane}>
          <div ref={trackRef} className={styles.track}>
            {ROOMS.map((room, i) => (
              <RoomCard
                key={room.id}
                room={room}
                lang={lang}
                index={i}
                ctaLabel={content.ctaLabel}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
