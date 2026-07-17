import React from 'react';

export function PortraitImage({ image, size = 320 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: 'var(--radius-circle)', overflow: 'hidden',
      background: image ? `url(${image}) center/cover` : 'linear-gradient(135deg,#d9d9d9,#bfbfbf)'
    }} />
  );
}
