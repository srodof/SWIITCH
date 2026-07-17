import React, { useState } from 'react';

export function FormSubmitButton({ label = 'Enviar', disabled = false }) {
  const [hover, setHover] = useState(false);
  return (
    <button disabled={disabled} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      background: disabled ? '#ccc' : hover ? 'var(--color-primary-hover)' : 'var(--color-primary)', color: 'var(--color-on-primary)',
      border: 'none', borderRadius: 'var(--radius-xs)', height: 'var(--space-form-field-height)', padding: '0 24px',
      fontFamily: 'var(--font-body-family)', fontSize: 'var(--type-button-size)', fontWeight: 'var(--type-button-weight)',
      boxShadow: 'none', cursor: disabled ? 'not-allowed' : 'pointer'
    }}>{label}</button>
  );
}
