import Hero from '@/components/hero/Hero';

export default function Home() {
  return (
    <main>
      <Hero />

      {/* Próximas secciones — se irán construyendo en ramas separadas */}
      <section
        id="habitaciones"
        style={{ minHeight: '100vh', background: 'var(--color-blanco-sillar)' }}
        aria-label="Habitaciones"
      />
      <section
        id="adn"
        style={{ minHeight: '100vh', background: 'var(--color-crema)' }}
        aria-label="Nuestro ADN"
      />
    </main>
  );
}
