'use client';

import { useLang } from './LangContext';
import styles from './Header.module.css';

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className={styles.langToggle} aria-label="Cambiar idioma">
      <button
        className={`${styles.langBtn} ${lang === 'es' ? styles.langActive : ''}`}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
      <span className={styles.langSeparator}>|</span>
      <button
        className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
