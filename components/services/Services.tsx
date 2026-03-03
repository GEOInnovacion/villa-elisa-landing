'use client';

import Image from 'next/image';
import { useLang } from '@/components/header/LangContext';
import { SERVICES, SERVICES_SECTION, buildWhatsappUrl } from './services.config';
import styles from './Services.module.css';

// ─── Íconos ───────────────────────────────────────────────────────────────────

function WhatsappIcon() {
  return (
    <svg className={styles.btnIcon} width="12" height="12" viewBox="0 0 24 24"
      fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.854L.054 23.447a.5.5 0 00.606.607l5.67-1.484A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.875 9.875 0 01-5.031-1.374l-.361-.214-3.736.978.997-3.645-.235-.374A9.838 9.838 0 012.118 12C2.118 6.52 6.52 2.118 12 2.118S21.882 6.52 21.882 12 17.48 21.882 12 21.882z"/>
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className={styles.btnIcon} width="12" height="12" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function Services() {
  const { lang } = useLang();
  const content  = SERVICES_SECTION[lang];

  return (
    <section id="servicios" className={styles.services}
      aria-label={lang === 'es' ? 'Servicios' : 'Services'}>

      {/* Cabecera */}
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <p className={styles.eyebrow}>{content.eyebrow}</p>
          <h2 className={styles.title}>{content.title}</h2>
        </div>
        <p className={styles.subtitle}>{content.subtitle}</p>
      </div>

      {/* Bento grid */}
      <div className={styles.grid}>
        {SERVICES.map((service, index) => {
          const waUrl = buildWhatsappUrl(service.whatsappMessage[lang]);
          return (
            <article
              key={service.id}
              className={styles.card}
              style={{ '--accent': service.accent } as React.CSSProperties}
            >

              {/* Número decorativo */}
              <span className={styles.cardNumber} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Foto */}
              <div className={styles.cardImageWrapper}>
                <Image
                  src={service.photo}
                  alt={service.alt[lang]}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.cardImage}
                  quality={85}
                />
              </div>

              {/* Overlay */}
              <div className={styles.cardOverlay} aria-hidden="true" />

              {/* Contenido */}
              <div className={styles.cardContent}>
                <span className={styles.cardTag}>{service.tag[lang]}</span>
                <h3 className={styles.cardTitle}>{service.title[lang]}</h3>
                <p className={styles.cardDescription}>{service.description[lang]}</p>

                <div className={styles.cardActions}>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnWhatsapp}
                    aria-label={`${content.ctaWhatsapp} — ${service.title[lang]}`}
                  >
                    <WhatsappIcon />
                    {content.ctaWhatsapp}
                  </a>
                  <a
                    href={service.pdfHref}
                    download
                    className={styles.btnDownload}
                    aria-label={`${content.ctaDownload} — ${service.title[lang]}`}
                  >
                    <DownloadIcon />
                    {content.ctaDownload}
                  </a>
                </div>
              </div>

            </article>
          );
        })}
      </div>

    </section>
  );
}
