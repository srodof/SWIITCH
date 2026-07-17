import React from 'react';
import { SocialIcon } from '../icons/SocialIcon.jsx';
import { Icon } from '../icons/Icon.jsx';

const COLUMNS = [
  { title: 'Marketing Digital', links: ['Social Media Marketing','Marketing de Influencers','Diseño y Desarrollo Web','Consultoría de Marketing Digital'] },
  { title: 'Transformación Digital', links: ['Consultoría de Transformación Digital','Consultoría e Implementación de CRM'] },
  { title: 'Comunicación', links: ['Comunicación Corporativa','Organización de Eventos Corporativos','Relaciones Públicas'] },
];

export function Footer() {
  const eyebrow = { fontFamily: 'var(--font-body-family)', fontSize: 'var(--type-eyebrow-size)', fontWeight: 'var(--type-eyebrow-weight)', color: '#fff', margin: '0 0 16px' };
  const link = { display: 'block', fontFamily: 'var(--font-body-family)', fontSize: 'var(--type-link-footer-size)', fontWeight: 'var(--type-link-footer-weight)', lineHeight: 'var(--type-link-footer-lh)', color: 'var(--color-link-on-dark)', textDecoration: 'none' };
  return (
    <footer style={{ background: 'var(--color-surface-footer)', color: 'var(--color-body-on-dark)', padding: '64px 5% 32px', fontFamily: 'var(--font-body-family)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 40 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--color-primary)', marginBottom: 20 }}>SWIITCH</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', textTransform: 'uppercase', marginBottom: 6 }}>Bolivia</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, lineHeight: 1.6, color: '#fff', marginBottom: 12 }}>
            <Icon name="map-pin" size={15} color="var(--color-primary)" style={{ marginTop: 3, flexShrink: 0 }} />
            Manzana 40 Piso 9, Torre 2, Santa Cruz de la Sierra, Bolivia
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#fff', marginBottom: 20 }}>
            <Icon name="phone" size={15} color="var(--color-primary)" /> (+591) 779 44824
          </div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', textTransform: 'uppercase', marginBottom: 6 }}>USA</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, lineHeight: 1.6, color: '#fff', marginBottom: 20 }}>
            <Icon name="map-pin" size={15} color="var(--color-primary)" style={{ marginTop: 3, flexShrink: 0 }} />
            1900 N Bayshore Dr, Miami, FL 33132, USA
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            <SocialIcon network="facebook" size={18} />
            <SocialIcon network="instagram" size={18} />
            <SocialIcon network="linkedin" size={18} />
            <SocialIcon network="tiktok" size={18} />
          </div>
        </div>
        {COLUMNS.map(col => (
          <div key={col.title}>
            <div style={eyebrow}>{col.title}</div>
            {col.links.map(l => <a key={l} href="#" style={link}>{l}</a>)}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>© 2026 SWIITCH.</div>
    </footer>
  );
}
