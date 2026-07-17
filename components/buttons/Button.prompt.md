The single button style in the system — brand red, flat, chevron trailing the label (row-reverse, never leading).

```jsx
<Button variant="primary" href="/contacto">Conócenos</Button>
```

Variants: `primary` (16px/700, radius 5px, padding 10x35 — default site-wide CTA) and `slider-cta` (18px/700 + 1px letter-spacing, radius 3px, padding 10x18 — hero/slider only). Hover derives from the same red (darken), never a second hue. `showIcon={false}` drops the chevron for icon-less contexts (e.g. form submit).
