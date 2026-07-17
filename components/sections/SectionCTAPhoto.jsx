import React from 'react';
import { Button } from '../buttons/Button.jsx';

export function SectionCTAPhoto({ image, eyebrow = 'Consultoría en Transformación Digital', title = 'Prepárate para lo que se viene', body, buttonLabel = 'Ver más', buttonHref = '#', height = 'var(--space-section-min-h-lg)', navSlot }) {
  return (
    <section style={{
      position: 'relative', minHeight: height, display: 'flex', flexDirection: 'column',
      background: image ? `url(${image}) center/cover` : 'linear-gradient(135deg,#3a3a3a,#1a1a1a)',
      boxSizing: 'border-box'
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'var(--color-overlay-dark)' }} />
      {navSlot && <div style={{ position: 'relative', zIndex: 2 }}>{navSlot}</div>}
      <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', padding: '0 5%', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 640 }}>
        <div style={{
          alignSelf: 'flex-start', background: 'var(--color-primary)', color: '#fff', fontSize: 13, fontWeight: 700,
          padding: '4px 12px', borderRadius: 'var(--radius-xs)'
        }}>{eyebrow}</div>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 'var(--type-display-lg-size)', fontWeight: 'var(--type-display-lg-weight)',
          lineHeight: 'var(--type-display-lg-lh)', color: 'var(--color-heading-on-photo)'
        }}>{title}</div>
        {body && <div style={{ fontFamily: 'var(--font-body-family)', fontSize: 18, lineHeight: 1.6, color: 'var(--color-body-on-dark)' }}>{body}</div>}
        <div><Button variant="primary" href={buttonHref}>{buttonLabel}</Button></div>
      </div>
      </div>
    </section>
  );
}
