/** @startingPoint section="Sections" subtitle="Full-bleed photo band, dark overlay, white Heavitas headline + eyebrow chip + CTA — used as page hero and closing CTA" viewport="1280x500" */
export interface SectionCTAPhotoProps {
  image?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  /** @default 'Ver más' */
  buttonLabel?: string;
  buttonHref?: string;
  /** CSS length. @default '50vh' */
  height?: string;
  /** Optional in-flow header (e.g. <NavBar variant="transparent"/>) rendered above the copy, over the same photo/overlay — use this instead of absolutely positioning a nav on top, so headline copy doesn't collide with nav links. */
  navSlot?: React.ReactNode;
}
export function SectionCTAPhoto(props: SectionCTAPhotoProps): JSX.Element;
