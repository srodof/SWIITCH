/* @ds-bundle: {"format":4,"namespace":"SWIITCHDesignSystem_2be436","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"MethodologyIconBlock","sourcePath":"components/cards/MethodologyIconBlock.jsx"},{"name":"PortraitImage","sourcePath":"components/cards/PortraitImage.jsx"},{"name":"ServiceTile","sourcePath":"components/cards/ServiceTile.jsx"},{"name":"Footer","sourcePath":"components/footer/Footer.jsx"},{"name":"FormInput","sourcePath":"components/forms/FormInput.jsx"},{"name":"FormSubmitButton","sourcePath":"components/forms/FormSubmitButton.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"SocialIcon","sourcePath":"components/icons/SocialIcon.jsx"},{"name":"WhatsAppButton","sourcePath":"components/misc/WhatsAppButton.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SectionCTAPhoto","sourcePath":"components/sections/SectionCTAPhoto.jsx"},{"name":"SectionSurfaceLight","sourcePath":"components/sections/SectionSurfaceLight.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ece956c4534c","components/cards/MethodologyIconBlock.jsx":"0f876a62ddbe","components/cards/PortraitImage.jsx":"6ef1b5ee3aec","components/cards/ServiceTile.jsx":"9dedc22b356a","components/footer/Footer.jsx":"080f45971ee6","components/forms/FormInput.jsx":"c8c0e3bca01d","components/forms/FormSubmitButton.jsx":"c737ed23decd","components/icons/Icon.jsx":"89670eef16f7","components/icons/SocialIcon.jsx":"debb8006045d","components/misc/WhatsAppButton.jsx":"7d057a33e6c1","components/navigation/NavBar.jsx":"78078d968902","components/sections/SectionCTAPhoto.jsx":"1f494efbb516","components/sections/SectionSurfaceLight.jsx":"ef5ff8b5319d","ui_kits/marketing-site/ContactoPage.jsx":"ba6233718591","ui_kits/marketing-site/HomePage.jsx":"e443a6a1dfc1","ui_kits/marketing-site/MarketingDigitalPage.jsx":"2219b672c85f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SWIITCHDesignSystem_2be436 = window.SWIITCHDesignSystem_2be436 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/PortraitImage.jsx
try { (() => {
function PortraitImage({
  image,
  size = 320
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--radius-circle)',
      overflow: 'hidden',
      background: image ? `url(${image}) center/cover` : 'linear-gradient(135deg,#d9d9d9,#bfbfbf)'
    }
  });
}
Object.assign(__ds_scope, { PortraitImage });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PortraitImage.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormInput.jsx
try { (() => {
function FormInput({
  label = 'Nombre',
  type = 'text',
  required = true,
  placeholder = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontFamily: 'var(--font-body-family)'
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 'var(--type-form-label-size)',
      fontWeight: 'var(--type-form-label-weight)',
      lineHeight: 'var(--type-form-label-lh)',
      color: 'var(--color-heading)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-primary)'
    }
  }, " *")), type === 'textarea' ? /*#__PURE__*/React.createElement("textarea", {
    placeholder: placeholder,
    rows: 4,
    style: {
      background: 'var(--color-surface)',
      color: 'rgba(0,0,0,0.7)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-xs)',
      padding: '10px 14px',
      fontFamily: 'inherit',
      fontSize: 16,
      boxShadow: 'none',
      resize: 'vertical'
    }
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    style: {
      background: 'var(--color-surface)',
      color: 'rgba(0,0,0,0.7)',
      border: '1px solid var(--color-hairline)',
      borderRadius: 'var(--radius-xs)',
      height: 'var(--space-form-field-height)',
      padding: '0 14px',
      fontFamily: 'inherit',
      fontSize: 16,
      boxShadow: 'none',
      boxSizing: 'border-box'
    }
  }));
}
Object.assign(__ds_scope, { FormInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormSubmitButton.jsx
try { (() => {
const {
  useState
} = React;
function FormSubmitButton({
  label = 'Enviar',
  disabled = false
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: disabled ? '#ccc' : hover ? 'var(--color-primary-hover)' : 'var(--color-primary)',
      color: 'var(--color-on-primary)',
      border: 'none',
      borderRadius: 'var(--radius-xs)',
      height: 'var(--space-form-field-height)',
      padding: '0 24px',
      fontFamily: 'var(--font-body-family)',
      fontSize: 'var(--type-button-size)',
      fontWeight: 'var(--type-button-weight)',
      boxShadow: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer'
    }
  }, label);
}
Object.assign(__ds_scope, { FormSubmitButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormSubmitButton.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
const PATHS = {
  'chevron-right': '<path d="M9 6l6 6-6 6"/>',
  'check': '<polyline points="20 6 9 17 4 12"/>',
  'x': '<path d="M18 6L6 18M6 6l12 12"/>',
  'menu': '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  'mail': '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 6l10 7 10-7"/>',
  'phone': '<path d="M4 4c0 9 7 16 16 16l1-4-5-2-2 2c-3-1-6-4-7-7l2-2-2-5z"/>',
  'map-pin': '<path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  'message-circle': '<path d="M4 12a8 8 0 1 1 3.5 6.6L4 20l1.2-3.6A7.96 7.96 0 0 1 4 12z"/>',
  'search': '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.5" y2="16.5"/>',
  'users': '<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-6 7-6s7 2.5 7 6"/><circle cx="17" cy="9" r="3"/><path d="M14 14.5c2.7.3 5 2.5 5 5.5"/>',
  'target': '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  'bar-chart': '<line x1="6" y1="20" x2="6" y2="12"/><line x1="12" y1="20" x2="12" y2="6"/><line x1="18" y1="20" x2="18" y2="15"/>',
  'trending-up': '<polyline points="3 17 9 11 13 15 21 6"/><polyline points="15 6 21 6 21 12"/>',
  'arrow-up-right': '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>'
};
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const d = PATHS[name];
  if (!d) return null;
  return React.createElement('svg', {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style,
    dangerouslySetInnerHTML: {
      __html: d
    }
  });
}
Object.assign(Icon, {
  AVAILABLE: Object.keys(PATHS)
});
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
const {
  useState
} = React;
function Button({
  children = 'Ver más',
  variant = 'primary',
  href,
  onClick,
  disabled = false,
  showIcon = true
}) {
  const [hover, setHover] = useState(false);
  const isSlider = variant === 'slider-cta';
  const bg = disabled ? '#ccc' : hover ? 'var(--color-primary-hover)' : 'var(--color-primary)';
  const style = {
    display: 'inline-flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    gap: 8,
    background: bg,
    color: 'var(--color-on-primary)',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    textTransform: 'none',
    fontFamily: 'var(--font-body-family)',
    fontSize: isSlider ? 'var(--type-button-slider-size)' : 'var(--type-button-size)',
    fontWeight: isSlider ? 'var(--type-button-slider-weight)' : 'var(--type-button-weight)',
    lineHeight: isSlider ? 'var(--type-button-slider-lh)' : 'var(--type-button-lh)',
    letterSpacing: isSlider ? 'var(--type-button-slider-ls)' : 'var(--type-button-ls)',
    borderRadius: isSlider ? 'var(--radius-xs)' : 'var(--radius-sm)',
    padding: isSlider ? 'var(--space-button-slider-pad)' : 'var(--space-button-pad)',
    boxShadow: 'none',
    transition: 'background 0.15s ease'
  };
  const Tag = href ? 'a' : 'button';
  return React.createElement(Tag, {
    href,
    onClick,
    disabled,
    style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, showIcon ? React.createElement(__ds_scope.Icon, {
    name: 'chevron-right',
    size: isSlider ? 16 : 14,
    color: '#fff'
  }) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/MethodologyIconBlock.jsx
try { (() => {
function MethodologyIconBlock({
  icon = 'target',
  title = 'Análisis',
  description = 'Investigamos a fondo tu marca y su contexto para identificar oportunidades reales.'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 18,
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 80,
    color: "var(--color-primary)",
    strokeWidth: 1.5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body-family)',
      fontSize: 'var(--type-heading-sm-size)',
      fontWeight: 'var(--type-heading-sm-weight)',
      color: 'var(--color-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body-family)',
      fontSize: 'var(--type-body-size)',
      fontWeight: 'var(--type-body-weight)',
      lineHeight: 'var(--type-body-lh)',
      color: 'var(--color-body)',
      textAlign: 'justify'
    }
  }, description));
}
Object.assign(__ds_scope, { MethodologyIconBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/MethodologyIconBlock.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceTile.jsx
try { (() => {
function ServiceTile({
  image,
  title = 'Servicios de Marketing Digital',
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-surface)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      aspectRatio: '4/3',
      background: image ? `url(${image}) center/cover` : 'linear-gradient(135deg,#d9d9d9,#bfbfbf)',
      borderRadius: 'var(--radius-none)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body-family)',
      fontSize: 'var(--type-heading-sm-size)',
      fontWeight: 'var(--type-heading-sm-weight)',
      lineHeight: 'var(--type-heading-sm-lh)',
      color: 'var(--color-heading)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: href
  }, "Ver m\xE1s")));
}
Object.assign(__ds_scope, { ServiceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceTile.jsx", error: String((e && e.message) || e) }); }

// components/icons/SocialIcon.jsx
try { (() => {
// LinkedIn was removed from Simple Icons for trademark reasons, so it's sourced from Bootstrap Icons (CDN, pinned) instead; its color can't be parameterized in the URL like the others, so a CSS filter approximates white/dark recolor.
const FALLBACK_CDN = {
  linkedin: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/linkedin.svg'
};
function SocialIcon({
  network,
  size = 20,
  color = 'FFFFFF',
  style
}) {
  if (FALLBACK_CDN[network]) {
    const isLight = /^f+$/i.test(color) || color.toLowerCase() === 'ffffff' || color.toLowerCase() === 'fff';
    return React.createElement('img', {
      src: FALLBACK_CDN[network],
      width: size,
      height: size,
      alt: network,
      style: {
        filter: isLight ? 'invert(1)' : undefined,
        ...style
      }
    });
  }
  const src = 'https://cdn.simpleicons.org/' + network + '/' + color;
  return React.createElement('img', {
    src,
    width: size,
    height: size,
    alt: network,
    style
  });
}
Object.assign(__ds_scope, { SocialIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/SocialIcon.jsx", error: String((e && e.message) || e) }); }

// components/footer/Footer.jsx
try { (() => {
const COLUMNS = [{
  title: 'Marketing Digital',
  links: ['Social Media Marketing', 'Marketing de Influencers', 'Diseño y Desarrollo Web', 'Consultoría de Marketing Digital']
}, {
  title: 'Transformación Digital',
  links: ['Consultoría de Transformación Digital', 'Consultoría e Implementación de CRM']
}, {
  title: 'Comunicación',
  links: ['Comunicación Corporativa', 'Organización de Eventos Corporativos', 'Relaciones Públicas']
}];
function Footer() {
  const eyebrow = {
    fontFamily: 'var(--font-body-family)',
    fontSize: 'var(--type-eyebrow-size)',
    fontWeight: 'var(--type-eyebrow-weight)',
    color: '#fff',
    margin: '0 0 16px'
  };
  const link = {
    display: 'block',
    fontFamily: 'var(--font-body-family)',
    fontSize: 'var(--type-link-footer-size)',
    fontWeight: 'var(--type-link-footer-weight)',
    lineHeight: 'var(--type-link-footer-lh)',
    color: 'var(--color-link-on-dark)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--color-surface-footer)',
      color: 'var(--color-body-on-dark)',
      padding: '64px 5% 32px',
      fontFamily: 'var(--font-body-family)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 700,
      color: 'var(--color-primary)',
      marginBottom: 20
    }
  }, "SWIITCH"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: '#fff',
      textTransform: 'uppercase',
      marginBottom: 6
    }
  }, "Bolivia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      fontSize: 13,
      lineHeight: 1.6,
      color: '#fff',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 15,
    color: "var(--color-primary)",
    style: {
      marginTop: 3,
      flexShrink: 0
    }
  }), "Manzana 40 Piso 9, Torre 2, Santa Cruz de la Sierra, Bolivia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: '#fff',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 15,
    color: "var(--color-primary)"
  }), " (+591) 779 44824"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: '#fff',
      textTransform: 'uppercase',
      marginBottom: 6
    }
  }, "USA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      fontSize: 13,
      lineHeight: 1.6,
      color: '#fff',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 15,
    color: "var(--color-primary)",
    style: {
      marginTop: 3,
      flexShrink: 0
    }
  }), "1900 N Bayshore Dr, Miami, FL 33132, USA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SocialIcon, {
    network: "facebook",
    size: 18
  }), /*#__PURE__*/React.createElement(__ds_scope.SocialIcon, {
    network: "instagram",
    size: 18
  }), /*#__PURE__*/React.createElement(__ds_scope.SocialIcon, {
    network: "linkedin",
    size: 18
  }), /*#__PURE__*/React.createElement(__ds_scope.SocialIcon, {
    network: "tiktok",
    size: 18
  }))), COLUMNS.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrow
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: link
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.1)',
      fontSize: 12,
      color: 'rgba(255,255,255,0.5)'
    }
  }, "\xA9 2026 SWIITCH."));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/footer/Footer.jsx", error: String((e && e.message) || e) }); }

// components/misc/WhatsAppButton.jsx
try { (() => {
function WhatsAppButton({
  tooltip = '¿Necesitas ayuda? Conversemos'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    title: tooltip
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-primary)',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "message-circle",
    size: 26,
    color: "#fff",
    strokeWidth: 2
  })));
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/misc/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const {
  useState
} = React;
const ITEMS = ['Acerca de SWIITCH', 'Marketing Digital', 'Comunicación', 'Publicidad', 'Transformación Digital', 'Contacto'];
function NavBar({
  variant = 'transparent',
  items = ITEMS
}) {
  const [open, setOpen] = useState(false);
  const solid = variant === 'solid';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      height: 85,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 5%',
      background: solid ? 'var(--color-surface)' : 'transparent',
      fontFamily: 'var(--font-body-family)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: 1,
      color: solid ? 'var(--color-primary)' : '#fff'
    }
  }, "SWIITCH"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 28,
      alignItems: 'center'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      textDecoration: 'none',
      fontSize: 14,
      fontWeight: 700,
      color: solid ? 'var(--color-heading)' : '#fff'
    }
  }, it))), /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(!open),
    style: {
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu",
    color: solid ? 'var(--color-heading)' : '#fff'
  })));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/sections/SectionCTAPhoto.jsx
try { (() => {
function SectionCTAPhoto({
  image,
  eyebrow = 'Consultoría en Transformación Digital',
  title = 'Prepárate para lo que se viene',
  body,
  buttonLabel = 'Ver más',
  buttonHref = '#',
  height = 'var(--space-section-min-h-lg)',
  navSlot
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: height,
      display: 'flex',
      flexDirection: 'column',
      background: image ? `url(${image}) center/cover` : 'linear-gradient(135deg,#3a3a3a,#1a1a1a)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--color-overlay-dark)'
    }
  }), navSlot && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2
    }
  }, navSlot), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 5%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start',
      background: 'var(--color-primary)',
      color: '#fff',
      fontSize: 13,
      fontWeight: 700,
      padding: '4px 12px',
      borderRadius: 'var(--radius-xs)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-display-lg-size)',
      fontWeight: 'var(--type-display-lg-weight)',
      lineHeight: 'var(--type-display-lg-lh)',
      color: 'var(--color-heading-on-photo)'
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body-family)',
      fontSize: 18,
      lineHeight: 1.6,
      color: 'var(--color-body-on-dark)'
    }
  }, body), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    href: buttonHref
  }, buttonLabel)))));
}
Object.assign(__ds_scope, { SectionCTAPhoto });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SectionCTAPhoto.jsx", error: String((e && e.message) || e) }); }

// components/sections/SectionSurfaceLight.jsx
try { (() => {
function SectionSurfaceLight({
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-surface-alt)',
      color: 'var(--color-heading)',
      padding: 'var(--space-section-pad-wide) 5%',
      minHeight: 'var(--space-section-min-h-sm)',
      boxSizing: 'border-box'
    }
  }, children);
}
Object.assign(__ds_scope, { SectionSurfaceLight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SectionSurfaceLight.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ContactoPage.jsx
try { (() => {
const {
  NavBar,
  SectionCTAPhoto,
  FormInput,
  FormSubmitButton,
  Footer,
  Icon
} = window.SWIITCHDesignSystem_2be436;
function ContactoPage() {
  const fam = 'var(--font-body-family)';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SectionCTAPhoto, {
    navSlot: /*#__PURE__*/React.createElement(NavBar, {
      variant: "transparent"
    }),
    eyebrow: "Hablemos",
    title: "Contacto",
    height: "40vh",
    buttonLabel: "Conversemos"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fam,
      fontSize: 31,
      fontWeight: 700,
      color: 'var(--color-heading)'
    }
  }, "Cu\xE9ntanos, \xBFc\xF3mo podemos ayudarte?"), /*#__PURE__*/React.createElement(FormInput, {
    label: "Nombre completo"
  }), /*#__PURE__*/React.createElement(FormInput, {
    label: "Correo electr\xF3nico",
    type: "email"
  }), /*#__PURE__*/React.createElement(FormInput, {
    label: "Tel\xE9fono",
    type: "tel",
    required: false
  }), /*#__PURE__*/React.createElement(FormInput, {
    label: "Mensaje",
    type: "textarea",
    required: false
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormSubmitButton, {
    label: "Enviar"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fam,
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--color-ink)',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "Bolivia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      fontFamily: fam,
      fontSize: 15,
      color: 'var(--color-body)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--color-primary)"
  }), "Manzana 40 Piso 9, Torre 2, Santa Cruz de la Sierra, Bolivia"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      fontFamily: fam,
      fontSize: 15,
      color: 'var(--color-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--color-primary)"
  }), "(+591) 779 44824")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fam,
      fontWeight: 700,
      fontSize: 13,
      color: 'var(--color-ink)',
      textTransform: 'uppercase',
      marginBottom: 8
    }
  }, "USA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      fontFamily: fam,
      fontSize: 15,
      color: 'var(--color-body)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--color-primary)"
  }), "1900 N Bayshore Dr, Miami, FL 33132, USA"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      fontFamily: fam,
      fontSize: 15,
      color: 'var(--color-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--color-primary)"
  }), "+1 (786) 438-1114")))), /*#__PURE__*/React.createElement(Footer, null));
}
window.ContactoPage = ContactoPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ContactoPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/HomePage.jsx
try { (() => {
const {
  NavBar,
  Button,
  ServiceTile,
  MethodologyIconBlock,
  SectionSurfaceLight,
  SectionCTAPhoto,
  Footer
} = window.SWIITCHDesignSystem_2be436;
const SERVICES = [{
  title: 'Servicios de Marketing Digital'
}, {
  title: 'Servicios de Comunicación'
}, {
  title: 'Servicios de Publicidad'
}, {
  title: 'Servicios de Transformación Digital'
}, {
  title: 'Servicios de Asesoría en Marketing'
}, {
  title: 'Servicios de Coaching y Workshops'
}];
const METHOD = [{
  icon: 'search',
  title: 'Análisis',
  desc: 'Investigamos a fondo tu marca y su contexto para identificar oportunidades reales de conexión con tu audiencia.'
}, {
  icon: 'target',
  title: 'Estrategia',
  desc: 'Ideamos soluciones que combinan creatividad, experiencia y orientación a resultados, alineadas a tus objetivos de marca.'
}, {
  icon: 'trending-up',
  title: 'Ejecución',
  desc: 'Acompañamos cada acción, desde campañas hasta optimización de canales, con enfoque táctico y ordenado.'
}, {
  icon: 'bar-chart',
  title: 'Medición',
  desc: 'Evaluamos el impacto, medimos KPIs y ajustamos lo necesario para garantizar un crecimiento sostenido.'
}];
const CLIENTS = ['BMW', 'Neutrogena', 'Yango', 'Essen', 'Bacardí', 'Jeep', 'Listerine', 'Embol'];
function HomePage({
  onNavigate
}) {
  const fam = 'var(--font-body-family)';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '50vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg,#4a4a4a,#1a1a1a)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,0.35)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    variant: "transparent"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '0 5%',
      gap: 16,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fam,
      color: '#fff',
      fontSize: 18,
      fontWeight: 700
    }
  }, "Somos"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      color: '#fff',
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 1.0
    }
  }, "Agencia de Marketing y Comunicaci\xF3n"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fam,
      color: '#fff',
      fontSize: 16,
      lineHeight: 1.6,
      opacity: 0.9
    }
  }, "Contamos con la experiencia y los servicios necesarios para impulsar el \xE9xito de tu empresa, ofreciendo soluciones creativas y efectivas para destacarse en el mercado."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "slider-cta",
    onClick: () => onNavigate('home')
  }, "Con\xF3cenos")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fam,
      fontSize: 31,
      fontWeight: 700,
      lineHeight: 1.51,
      color: 'var(--color-heading)'
    }
  }, "Somos SWIITCH"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fam,
      fontSize: 21,
      fontWeight: 700,
      color: 'var(--color-heading)',
      marginBottom: 14
    }
  }, "Una agencia de marketing y comunicaci\xF3n en Bolivia"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: fam,
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--color-body)',
      textAlign: 'justify'
    }
  }, "Conformada por socios con m\xE1s de 15 a\xF1os de experiencia, nuestra empresa dise\xF1a estrategias integrales que conectan con tus audiencias y generan resultados reales. Sin embargo, sabemos que cada negocio es \xFAnico, a causa de lo cual adaptamos cada soluci\xF3n a tus objetivos espec\xEDficos."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Con\xF3cenos")), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: 'linear-gradient(135deg,#e2e2e2,#c9c9c9)'
    }
  })), /*#__PURE__*/React.createElement(SectionSurfaceLight, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fam,
      fontSize: 31,
      fontWeight: 700,
      color: 'var(--color-heading)',
      marginBottom: 12
    }
  }, "Servicios Integrales de Marketing y Comunicaci\xF3n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: fam,
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--color-body)',
      maxWidth: 640,
      textAlign: 'justify',
      marginBottom: 32
    }
  }, "Nuestra experiencia y estructura nos permiten ofrecer soluciones completas que abarcan desde campa\xF1as digitales hasta estrategias de comunicaci\xF3n y transformaci\xF3n digital."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 0
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceTile, {
    key: s.title,
    title: s.title
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '5%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fam,
      fontSize: 31,
      fontWeight: 700,
      color: 'var(--color-heading)',
      textAlign: 'center',
      marginBottom: 40
    }
  }, "Nuestra Metodolog\xEDa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 40,
      flexWrap: 'wrap'
    }
  }, METHOD.map(m => /*#__PURE__*/React.createElement(MethodologyIconBlock, {
    key: m.title,
    icon: m.icon,
    title: m.title,
    description: m.desc
  })))), /*#__PURE__*/React.createElement(SectionSurfaceLight, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fam,
      fontSize: 21,
      fontWeight: 700,
      color: 'var(--color-heading)',
      textAlign: 'center',
      marginBottom: 28
    }
  }, "Algunos de Nuestros Clientes"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: 32
    }
  }, CLIENTS.map(c => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      fontFamily: fam,
      fontWeight: 700,
      fontSize: 18,
      color: '#bbb'
    }
  }, c)))), /*#__PURE__*/React.createElement(SectionCTAPhoto, {
    eyebrow: "Acompa\xF1amiento real",
    title: "\xBFQuer\xE9s una agencia que te acompa\xF1e de verdad?",
    body: "No solo dise\xF1amos estrategias: las implementamos, las optimizamos y caminamos junto a tu equipo.",
    buttonLabel: "Conversemos"
  }), /*#__PURE__*/React.createElement(Footer, null));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/MarketingDigitalPage.jsx
try { (() => {
const {
  NavBar,
  SectionCTAPhoto,
  PortraitImage,
  Button,
  Footer
} = window.SWIITCHDesignSystem_2be436;
const ROWS = [{
  title: 'Redes Sociales',
  desc: 'Conecta con tu público objetivo y haz que se enamoren de tu marca. Nuestro equipo cree firmemente en acciones 100% medibles.',
  reverse: false
}, {
  title: 'Marketing de Influencers',
  desc: 'Hoy en día los consumidores creen en un 80% en lo que dicen otras personas que lo que dice la misma marca.',
  reverse: true
}, {
  title: 'Diseño y Desarrollo Web',
  desc: 'Ya sean sitios web corporativos o e-commerce, diseñamos y desarrollamos websites de última generación.',
  reverse: false
}];
function MarketingDigitalPage() {
  const fam = 'var(--font-body-family)';
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(SectionCTAPhoto, {
    navSlot: /*#__PURE__*/React.createElement(NavBar, {
      variant: "transparent"
    }),
    eyebrow: "Marketing Digital",
    title: "Especialistas en negocios digitales",
    height: "40vh",
    buttonLabel: "Ver servicios"
  })), ROWS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.title,
    style: {
      padding: '5%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center',
      direction: r.reverse ? 'rtl' : 'ltr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'ltr',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PortraitImage, {
    size: 280
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      direction: 'ltr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: fam,
      fontSize: 21,
      fontWeight: 700,
      color: 'var(--color-heading)',
      marginBottom: 12
    }
  }, r.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: fam,
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--color-body)',
      textAlign: 'justify',
      marginBottom: 16
    }
  }, r.desc), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Ver m\xE1s")))), /*#__PURE__*/React.createElement(Footer, null));
}
window.MarketingDigitalPage = MarketingDigitalPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/MarketingDigitalPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.MethodologyIconBlock = __ds_scope.MethodologyIconBlock;

__ds_ns.PortraitImage = __ds_scope.PortraitImage;

__ds_ns.ServiceTile = __ds_scope.ServiceTile;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.FormInput = __ds_scope.FormInput;

__ds_ns.FormSubmitButton = __ds_scope.FormSubmitButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SocialIcon = __ds_scope.SocialIcon;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SectionCTAPhoto = __ds_scope.SectionCTAPhoto;

__ds_ns.SectionSurfaceLight = __ds_scope.SectionSurfaceLight;

})();
