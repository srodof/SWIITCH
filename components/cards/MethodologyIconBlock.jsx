import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function MethodologyIconBlock({ icon = 'target', title = 'Análisis', description = 'Investigamos a fondo tu marca y su contexto para identificar oportunidades reales.' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 18, maxWidth: 260 }}>
      <Icon name={icon} size={80} color="var(--color-primary)" strokeWidth={1.5} />
      <div style={{
        fontFamily: 'var(--font-body-family)', fontSize: 'var(--type-heading-sm-size)',
        fontWeight: 'var(--type-heading-sm-weight)', color: 'var(--color-heading)'
      }}>{title}</div>
      <div style={{
        fontFamily: 'var(--font-body-family)', fontSize: 'var(--type-body-size)', fontWeight: 'var(--type-body-weight)',
        lineHeight: 'var(--type-body-lh)', color: 'var(--color-body)', textAlign: 'justify'
      }}>{description}</div>
    </div>
  );
}
