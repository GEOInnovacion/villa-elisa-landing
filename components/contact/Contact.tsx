'use client';

import { useLang } from '@/components/header/LangContext';
import {
  CONTACT_INFO,
  CONTACT_SECTION,
} from './contact.config';
import styles from './Contact.module.css';

// ─── Componente principal ─────────────────────────────────────────────────────

export default function Contact() {
  const { lang } = useLang();
  const content  = CONTACT_SECTION[lang];
  const year     = new Date().getFullYear();

  return (
    <footer id="contacto" className={styles.contact}>

      {/* Grid info + formulario */}
      <div className={styles.inner}>

        {/* Columna izquierda */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{content.labelAddress}</span>
              <span className={styles.infoValue}>{CONTACT_INFO.address[lang]}</span>
              <span className={styles.infoRef}>{CONTACT_INFO.reference[lang]}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{content.labelPhone}</span>
              <a href={`tel:${CONTACT_INFO.phone}`} className={`${styles.infoValue} ${styles.infoLink}`}>
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{content.labelHours}</span>
              <span className={styles.infoValue}>{content.hours}</span>
            </div>
          </div>

        </div>

        {/* Columna derecha — formulario */}
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="contact-name">
              {lang === 'es' ? 'Nombres' : 'Full name'} <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              className={styles.formInput}
              placeholder={lang === 'es' ? 'Tu nombre completo' : 'Your full name'}
            />
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="contact-country">
              {lang === 'es' ? 'País' : 'Country'} <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-country"
              type="text"
              required
              className={styles.formInput}
              placeholder={lang === 'es' ? 'Tu país de origen' : 'Your country'}
            />
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="contact-phone">
              {lang === 'es' ? 'Teléfono' : 'Phone'} <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              className={styles.formInput}
              placeholder={lang === 'es' ? '+51 999 999 999' : '+1 555 000 0000'}
            />
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="contact-email">
              E-mail <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              className={styles.formInput}
              placeholder={lang === 'es' ? 'tu@correo.com' : 'your@email.com'}
            />
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel} htmlFor="contact-message">
              {lang === 'es' ? 'Consulta' : 'Message'}
            </label>
            <textarea
              id="contact-message"
              rows={4}
              className={styles.formTextarea}
              placeholder={lang === 'es' ? '¿En qué podemos ayudarte?' : 'How can we help you?'}
            />
          </div>

          <button type="submit" className={styles.formSubmit}>
            {lang === 'es' ? 'Enviar consulta' : 'Send message'}
          </button>
        </form>
      </div>

      {/* Footer strip */}
      <div className={styles.footer}>
        <span className={styles.footerTagline}>{content.tagline}</span>

        <span className={styles.footerCopy}>© {year} Villa Elisa Hotel Boutique</span>
      </div>

    </footer>
  );
}
