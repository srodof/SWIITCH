import React, { useState } from 'react';
import { Icon } from '../icons/Icon.jsx';

const ITEMS = ['Acerca de SWIITCH','Marketing Digital','Comunicación','Publicidad','Transformación Digital','Contacto'];

export function NavBar({ variant = 'transparent', items = ITEMS }) {
  const [open, setOpen] = useState(false);
  const solid = variant === 'solid';
  return (
    <nav style={{
      height: 85, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 5%', background: solid ? 'var(--color-surface)' : 'transparent',
      fontFamily: 'var(--font-body-family)', boxSizing: 'border-box'
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, letterSpacing: 1,
        color: solid ? 'var(--color-primary)' : '#fff'
      }}>SWIITCH</div>
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
        {items.map(it => (
          <a key={it} href="#" style={{
            textDecoration: 'none', fontSize: 14, fontWeight: 700,
            color: solid ? 'var(--color-heading)' : '#fff'
          }}>{it}</a>
        ))}
      </div>
      <div onClick={() => setOpen(!open)} style={{ display: 'none' }}>
        <Icon name="menu" color={solid ? 'var(--color-heading)' : '#fff'} />
      </div>
    </nav>
  );
}
