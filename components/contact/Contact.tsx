'use client';

import { useLang } from '@/components/header/LangContext';
import {
  CONTACT_INFO,
  CONTACT_SECTION,
  WHATSAPP_RESERVATION_MSG,
  buildWhatsappUrl,
} from './contact.config';
import styles from './Contact.module.css';

// ─── Íconos ───────────────────────────────────────────────────────────────────

function WhatsappIcon() {
  return (
    <svg className={styles.btnIcon} width="16" height="16" viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.854L.054 23.447a.5.5 0 00.606.607l5.67-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.875 9.875 0 01-5.031-1.374l-.361-.214-3.736.978.997-3.645-.235-.374A9.838 9.838 0 012.118 12C2.118 6.52 6.52 2.118 12 2.118S21.882 6.52 21.882 12 17.48 21.882 12 21.882z"/>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className={styles.btnIcon} width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M2 7l10 7 10-7" />
    </svg>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function Contact() {
  const { lang } = useLang();
  const content  = CONTACT_SECTION[lang];
  const waUrl    = buildWhatsappUrl(WHATSAPP_RESERVATION_MSG[lang]);
  const year     = new Date().getFullYear();

  return (
    <footer id="contacto" className={styles.contact}>

      {/* Grid info + CTAs */}
      <div className={styles.inner}>

        {/* Columna izquierda */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 className={styles.title}>{content.title}</h2>
          <p className={styles.subtitle}>{content.subtitle}</p>

          <div className={styles.ctas}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer"
              className={styles.btnWhatsapp}
              aria-label={content.ctaWhatsapp}>
              <WhatsappIcon />
              {content.ctaWhatsapp}
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`}
              className={styles.btnEmail}
              aria-label={content.ctaEmail}>
              <EmailIcon />
              {content.ctaEmail}
            </a>
          </div>
        </div>

        {/* Columna derecha — datos */}
        <div className={styles.right}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>{content.labelAddress}</span>
            <span className={styles.infoValue}>{CONTACT_INFO.address[lang]}</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>{content.labelPhone}</span>
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className={styles.infoValue}>
              {CONTACT_INFO.phone}
            </a>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Email</span>
            <a href={`mailto:${CONTACT_INFO.email}`} className={styles.infoValue}>
              {CONTACT_INFO.email}
            </a>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>{content.labelHours}</span>
            <span className={styles.infoValue}>{content.hours}</span>
          </div>
        </div>
      </div>

      {/* Mapa */}
      <div className={styles.mapWrapper}>
        <iframe
          src={CONTACT_INFO.mapEmbedUrl}
          title={lang === 'es' ? 'Ubicación de Villa Elisa' : 'Villa Elisa location'}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label={lang === 'es' ? 'Mapa de ubicación' : 'Location map'}
        />
      </div>

      {/* Footer strip */}
      <div className={styles.footer}>
        <span className={styles.footerTagline}>{content.tagline}</span>
        <span className={styles.footerCopy}>© {year} Villa Elisa Hotel Boutique</span>
      </div>

    </footer>
  );
}
