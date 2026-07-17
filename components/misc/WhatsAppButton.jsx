import React from 'react';
import { Icon } from '../icons/Icon.jsx';

export function WhatsAppButton({ tooltip = '¿Necesitas ayuda? Conversemos' }) {
  return (
    <div style={{ position: 'relative', display: 'inline-flex' }} title={tooltip}>
      <button style={{
        width: 56, height: 56, borderRadius: 'var(--radius-full)', background: 'var(--color-primary)',
        border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'none', cursor: 'pointer'
      }}>
        <Icon name="message-circle" size={26} color="#fff" strokeWidth={2} />
      </button>
    </div>
  );
}
