import React from 'react';

export function SectionSurfaceLight({ children }) {
  return (
    <section style={{
      background: 'var(--color-surface-alt)', color: 'var(--color-heading)',
      padding: 'var(--space-section-pad-wide) 5%', minHeight: 'var(--space-section-min-h-sm)',
      boxSizing: 'border-box'
    }}>{children}</section>
  );
}
