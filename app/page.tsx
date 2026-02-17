export default function Home() {
  return (
    <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-crema)' }}>
      {/* Hero placeholder — próxima sección */}
      <section
        id="inicio"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-title)',
          fontSize: '48px',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--color-tierra)',
        }}
      >
        Villa Elisa
      </section>

      <section id="habitaciones" style={{ minHeight: '100vh', background: 'var(--color-blanco-sillar)' }} />
      <section id="adn" style={{ minHeight: '100vh', background: 'var(--color-crema)' }} />
    </main>
  );
}
