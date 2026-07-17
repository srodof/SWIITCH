const { NavBar, SectionCTAPhoto, PortraitImage, Button, Footer } = window.SWIITCHDesignSystem_2be436;

const ROWS = [
  { title: 'Redes Sociales', desc: 'Conecta con tu público objetivo y haz que se enamoren de tu marca. Nuestro equipo cree firmemente en acciones 100% medibles.', reverse: false },
  { title: 'Marketing de Influencers', desc: 'Hoy en día los consumidores creen en un 80% en lo que dicen otras personas que lo que dice la misma marca.', reverse: true },
  { title: 'Diseño y Desarrollo Web', desc: 'Ya sean sitios web corporativos o e-commerce, diseñamos y desarrollamos websites de última generación.', reverse: false },
];

function MarketingDigitalPage() {
  const fam = 'var(--font-body-family)';
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <SectionCTAPhoto navSlot={<NavBar variant="transparent" />} eyebrow="Marketing Digital" title="Especialistas en negocios digitales" height="40vh" buttonLabel="Ver servicios" />
      </div>
      {ROWS.map(r => (
        <div key={r.title} style={{ padding: '5%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', direction: r.reverse ? 'rtl' : 'ltr' }}>
          <div style={{ direction: 'ltr', display: 'flex', justifyContent: 'center' }}><PortraitImage size={280} /></div>
          <div style={{ direction: 'ltr' }}>
            <div style={{ fontFamily: fam, fontSize: 21, fontWeight: 700, color: 'var(--color-heading)', marginBottom: 12 }}>{r.title}</div>
            <p style={{ fontFamily: fam, fontSize: 16, lineHeight: 1.8, color: 'var(--color-body)', textAlign: 'justify', marginBottom: 16 }}>{r.desc}</p>
            <Button variant="primary">Ver más</Button>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

window.MarketingDigitalPage = MarketingDigitalPage;
