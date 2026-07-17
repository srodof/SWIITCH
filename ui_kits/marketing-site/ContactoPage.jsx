const { NavBar, SectionCTAPhoto, FormInput, FormSubmitButton, Footer, Icon } = window.SWIITCHDesignSystem_2be436;

function ContactoPage() {
  const fam = 'var(--font-body-family)';
  return (
    <div>
      <div style={{ position: 'relative' }}>
        <SectionCTAPhoto navSlot={<NavBar variant="transparent" />} eyebrow="Hablemos" title="Contacto" height="40vh" buttonLabel="Conversemos" />
      </div>
      <div style={{ padding: '5%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ fontFamily: fam, fontSize: 31, fontWeight: 700, color: 'var(--color-heading)' }}>Cuéntanos, ¿cómo podemos ayudarte?</div>
          <FormInput label="Nombre completo" />
          <FormInput label="Correo electrónico" type="email" />
          <FormInput label="Teléfono" type="tel" required={false} />
          <FormInput label="Mensaje" type="textarea" required={false} />
          <div><FormSubmitButton label="Enviar" /></div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <div style={{ fontFamily: fam, fontWeight: 700, fontSize: 13, color: 'var(--color-ink)', textTransform: 'uppercase', marginBottom: 8 }}>Bolivia</div>
            <div style={{ display: 'flex', gap: 8, fontFamily: fam, fontSize: 15, color: 'var(--color-body)', marginBottom: 6 }}><Icon name="map-pin" size={16} color="var(--color-primary)" />Manzana 40 Piso 9, Torre 2, Santa Cruz de la Sierra, Bolivia</div>
            <div style={{ display: 'flex', gap: 8, fontFamily: fam, fontSize: 15, color: 'var(--color-body)' }}><Icon name="phone" size={16} color="var(--color-primary)" />(+591) 779 44824</div>
          </div>
          <div>
            <div style={{ fontFamily: fam, fontWeight: 700, fontSize: 13, color: 'var(--color-ink)', textTransform: 'uppercase', marginBottom: 8 }}>USA</div>
            <div style={{ display: 'flex', gap: 8, fontFamily: fam, fontSize: 15, color: 'var(--color-body)', marginBottom: 6 }}><Icon name="map-pin" size={16} color="var(--color-primary)" />1900 N Bayshore Dr, Miami, FL 33132, USA</div>
            <div style={{ display: 'flex', gap: 8, fontFamily: fam, fontSize: 15, color: 'var(--color-body)' }}><Icon name="phone" size={16} color="var(--color-primary)" />+1 (786) 438-1114</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

window.ContactoPage = ContactoPage;
