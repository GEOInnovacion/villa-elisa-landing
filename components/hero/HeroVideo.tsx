'use client';

import { HERO_VIDEO_SRC, HERO_VIDEO_WEBM_SRC, HERO_VIDEO_POSTER } from './hero.config';
import styles from './Hero.module.css';

export default function HeroVideo() {
  const hasVideo = Boolean(HERO_VIDEO_SRC || HERO_VIDEO_WEBM_SRC);

  if (hasVideo) {
    return (
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={HERO_VIDEO_POSTER || undefined}
      >
        {/* webm primero: mejor compresión en Chrome/Firefox */}
        {HERO_VIDEO_WEBM_SRC && (
          <source src={HERO_VIDEO_WEBM_SRC} type="video/webm" />
        )}
        {/* mp4 como fallback universal */}
        {HERO_VIDEO_SRC && (
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        )}
      </video>
    );
  }

  // Sin video: gradiente animado ken-burns
  return <div className={styles.videoFallback} aria-hidden="true" />;
}
