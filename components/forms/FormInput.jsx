import React from 'react';

export function FormInput({ label = 'Nombre', type = 'text', required = true, placeholder = '' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-body-family)' }}>
      <label style={{
        fontSize: 'var(--type-form-label-size)', fontWeight: 'var(--type-form-label-weight)',
        lineHeight: 'var(--type-form-label-lh)', color: 'var(--color-heading)'
      }}>{label}{required && <span style={{ color: 'var(--color-primary)' }}> *</span>}</label>
      {type === 'textarea' ? (
        <textarea placeholder={placeholder} rows={4} style={{
          background: 'var(--color-surface)', color: 'rgba(0,0,0,0.7)', border: '1px solid var(--color-hairline)',
          borderRadius: 'var(--radius-xs)', padding: '10px 14px', fontFamily: 'inherit', fontSize: 16, boxShadow: 'none', resize: 'vertical'
        }} />
      ) : (
        <input type={type} placeholder={placeholder} style={{
          background: 'var(--color-surface)', color: 'rgba(0,0,0,0.7)', border: '1px solid var(--color-hairline)',
          borderRadius: 'var(--radius-xs)', height: 'var(--space-form-field-height)', padding: '0 14px',
          fontFamily: 'inherit', fontSize: 16, boxShadow: 'none', boxSizing: 'border-box'
        }} />
      )}
    </div>
  );
}
