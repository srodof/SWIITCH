Site header. `transparent` sits over the hero photo (white text, no background); `solid` is the scrolled-state (white background, dark text) — the only change on scroll is the surface swap, no shadow.

```jsx
<NavBar variant="solid" />
```

Logo is rendered as a plain text wordmark (no logo file was provided in source material — see README). Below 1024px this collapses to a hamburger in production; this recreation keeps the desktop layout.
