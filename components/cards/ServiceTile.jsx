import React from 'react';
import { Button } from '../buttons/Button.jsx';

export function ServiceTile({ image, title = 'Servicios de Marketing Digital', href = '#' }) {
  return (
    <div style={{ background: 'var(--color-surface)', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        width: '100%', aspectRatio: '4/3', background: image ? `url(${image}) center/cover` : 'linear-gradient(135deg,#d9d9d9,#bfbfbf)',
        borderRadius: 'var(--radius-none)'
      }} />
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, textAlign: 'center' }}>
        <div style={{
          fontFamily: 'var(--font-body-family)', fontSize: 'var(--type-heading-sm-size)',
          fontWeight: 'var(--type-heading-sm-weight)', lineHeight: 'var(--type-heading-sm-lh)', color: 'var(--color-heading)'
        }}>{title}</div>
        <Button variant="primary" href={href}>Ver más</Button>
      </div>
    </div>
  );
}
