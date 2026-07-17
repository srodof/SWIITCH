import React, { useState } from 'react';
import { Icon } from '../icons/Icon.jsx';

export function Button({ children = 'Ver más', variant = 'primary', href, onClick, disabled = false, showIcon = true }) {
  const [hover, setHover] = useState(false);
  const isSlider = variant === 'slider-cta';
  const bg = disabled ? '#ccc' : hover ? 'var(--color-primary-hover)' : 'var(--color-primary)';
  const style = {
    display: 'inline-flex', flexDirection: 'row-reverse', alignItems: 'center', gap: 8,
    background: bg, color: 'var(--color-on-primary)', border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none', textTransform: 'none',
    fontFamily: 'var(--font-body-family)',
    fontSize: isSlider ? 'var(--type-button-slider-size)' : 'var(--type-button-size)',
    fontWeight: isSlider ? 'var(--type-button-slider-weight)' : 'var(--type-button-weight)',
    lineHeight: isSlider ? 'var(--type-button-slider-lh)' : 'var(--type-button-lh)',
    letterSpacing: isSlider ? 'var(--type-button-slider-ls)' : 'var(--type-button-ls)',
    borderRadius: isSlider ? 'var(--radius-xs)' : 'var(--radius-sm)',
    padding: isSlider ? 'var(--space-button-slider-pad)' : 'var(--space-button-pad)',
    boxShadow: 'none', transition: 'background 0.15s ease'
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, { href, onClick, disabled, style, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) },
    showIcon ? React.createElement(Icon, { name: 'chevron-right', size: isSlider ? 16 : 14, color: '#fff' }) : null, children);
}
