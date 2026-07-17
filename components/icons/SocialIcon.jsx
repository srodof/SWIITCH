import React from 'react';
// LinkedIn was removed from Simple Icons for trademark reasons, so it's sourced from Bootstrap Icons (CDN, pinned) instead; its color can't be parameterized in the URL like the others, so a CSS filter approximates white/dark recolor.
const FALLBACK_CDN = { linkedin: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/linkedin.svg' };
export function SocialIcon({ network, size = 20, color = 'FFFFFF', style }) {
  if (FALLBACK_CDN[network]) {
    const isLight = /^f+$/i.test(color) || color.toLowerCase() === 'ffffff' || color.toLowerCase() === 'fff';
    return React.createElement('img', { src: FALLBACK_CDN[network], width: size, height: size, alt: network, style: { filter: isLight ? 'invert(1)' : undefined, ...style } });
  }
  const src = 'https://cdn.simpleicons.org/' + network + '/' + color;
  return React.createElement('img', { src, width: size, height: size, alt: network, style });
}
