const { NavBar, Button, ServiceTile, MethodologyIconBlock, SectionSurfaceLight, SectionCTAPhoto, Footer } = window.SWIITCHDesignSystem_2be436;

const SERVICES = [
  { title: 'Servicios de Marketing Digital' },
  { title: 'Servicios de Comunicación' },
  { title: 'Servicios de Publicidad' },
  { title: 'Servicios de Transformación Digital' },
  { title: 'Servicios de Asesoría en Marketing' },
  { title: 'Servicios de Coaching y Workshops' },
];

const METHOD = [
  { icon: 'search', title: 'Análisis', desc: 'Investigamos a fondo tu marca y su contexto para identificar oportunidades reales de conexión con tu audiencia.' },
  { icon: 'target', title: 'Estrategia', desc: 'Ideamos soluciones que combinan creatividad, experiencia y orientación a resultados, alineadas a tus objetivos de marca.' },
  { icon: 'trending-up', title: 'Ejecución', desc: 'Acompañamos cada acción, desde campañas hasta optimización de canales, con enfoque táctico y ordenado.' },
  { icon: 'bar-chart', title: 'Medición', desc: 'Evaluamos el impacto, medimos KPIs y ajustamos lo necesario para garantizar un crecimiento sostenido.' },
];

const CLIENTS = ['BMW','Neutrogena','Yango','Essen','Bacardí','Jeep','Listerine','Embol'];

function HomePage({ onNavigate }) {
  const fam = 'var(--font-body-family)';
  return (
    <div>
      <div style={{ position: 'relative', minHeight: '50vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,#4a4a4a,#1a1a1a)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)' }} />
        <div style={{ position: 'relative', zIndex: 1 }}><NavBar variant="transparent" /></div>
        <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 5%', gap: 16, maxWidth: 720 }}>
          <div style={{ fontFamily: fam, color: '#fff', fontSize: 18, fontWeight: 700 }}>Somos</div>
          <div style={{ fontFamily: 'var(--font-display)', color: '#fff', fontSize: 64, fontWeight: 700, lineHeight: 1.0 }}>Agencia de Marketing y Comunicación</div>
          <div style={{ fontFamily: fam, color: '#fff', fontSize: 16, lineHeight: 1.6, opacity: 0.9 }}>Contamos con la experiencia y los servicios necesarios para impulsar el éxito de tu empresa, ofreciendo soluciones creativas y efectivas para destacarse en el mercado.</div>
          <div><Button variant="slider-cta" onClick={() => onNavigate('home')}>Conócenos</Button></div>
        </div>
      </div>

      <div style={{ padding: '5%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: fam, fontSize: 31, fontWeight: 700, lineHeight: 1.51, color: 'var(--color-heading)' }}>Somos SWIITCH</div>
          <div style={{ fontFamily: fam, fontSize: 21, fontWeight: 700, color: 'var(--color-heading)', marginBottom: 14 }}>Una agencia de marketing y comunicación en Bolivia</div>
          <p style={{ fontFamily: fam, fontSize: 16, lineHeight: 1.8, color: 'var(--color-body)', textAlign: 'justify' }}>Conformada por socios con más de 15 años de experiencia, nuestra empresa diseña estrategias integrales que conectan con tus audiencias y generan resultados reales. Sin embargo, sabemos que cada negocio es único, a causa de lo cual adaptamos cada solución a tus objetivos específicos.</p>
          <Button variant="primary">Conócenos</Button>
        </div>
        <div style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg,#e2e2e2,#c9c9c9)' }} />
      </div>

      <SectionSurfaceLight>
        <div style={{ fontFamily: fam, fontSize: 31, fontWeight: 700, color: 'var(--color-heading)', marginBottom: 12 }}>Servicios Integrales de Marketing y Comunicación</div>
        <p style={{ fontFamily: fam, fontSize: 16, lineHeight: 1.8, color: 'var(--color-body)', maxWidth: 640, textAlign: 'justify', marginBottom: 32 }}>Nuestra experiencia y estructura nos permiten ofrecer soluciones completas que abarcan desde campañas digitales hasta estrategias de comunicación y transformación digital.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0 }}>
          {SERVICES.map(s => <ServiceTile key={s.title} title={s.title} />)}
        </div>
      </SectionSurfaceLight>

      <div style={{ padding: '5%' }}>
        <div style={{ fontFamily: fam, fontSize: 31, fontWeight: 700, color: 'var(--color-heading)', textAlign: 'center', marginBottom: 40 }}>Nuestra Metodología</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          {METHOD.map(m => <MethodologyIconBlock key={m.title} icon={m.icon} title={m.title} description={m.desc} />)}
        </div>
      </div>

      <SectionSurfaceLight>
        <div style={{ fontFamily: fam, fontSize: 21, fontWeight: 700, color: 'var(--color-heading)', textAlign: 'center', marginBottom: 28 }}>Algunos de Nuestros Clientes</div>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 32 }}>
          {CLIENTS.map(c => <div key={c} style={{ fontFamily: fam, fontWeight: 700, fontSize: 18, color: '#bbb' }}>{c}</div>)}
        </div>
      </SectionSurfaceLight>

      <SectionCTAPhoto
        eyebrow="Acompañamiento real"
        title="¿Querés una agencia que te acompañe de verdad?"
        body="No solo diseñamos estrategias: las implementamos, las optimizamos y caminamos junto a tu equipo."
        buttonLabel="Conversemos"
      />
      <Footer />
    </div>
  );
}

window.HomePage = HomePage;
