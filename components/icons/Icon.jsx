import React from 'react';
const PATHS = {
'chevron-right':'<path d="M9 6l6 6-6 6"/>',
'check':'<polyline points="20 6 9 17 4 12"/>',
'x':'<path d="M18 6L6 18M6 6l12 12"/>',
'menu':'<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
'mail':'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/>',
'phone':'<path d="M4 4c0 9 7 16 16 16l1-4-5-2-2 2c-3-1-6-4-7-7l2-2-2-5z"/>',
'map-pin':'<path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
'message-circle':'<path d="M4 12a8 8 0 1 1 3.5 6.6L4 20l1.2-3.6A7.96 7.96 0 0 1 4 12z"/>',
'search':'<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
'users':'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/><circle cx="17" cy="9" r="3"/><path d="M14 14.5c2.7.3 5 2.5 5 5.5"/>',
'target':'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
'bar-chart':'<line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="18" y1="20" x2="18" y2="15"/>',
'trending-up':'<polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>',
'arrow-up-right':'<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>'
};
export function Icon({ name, size = 20, color = 'currentColor', strokeWidth = 2, style }) {
  const d = PATHS[name];
  if (!d) return null;
  return React.createElement('svg', {
    width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
    stroke: color, strokeWidth, strokeLinecap: 'round', strokeLinejoin: 'round',
    style, dangerouslySetInnerHTML: { __html: d }
  });
}
Object.assign(Icon, { AVAILABLE: Object.keys(PATHS) });
