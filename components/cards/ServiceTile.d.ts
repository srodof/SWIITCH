/** @startingPoint section="Cards" subtitle="Full-bleed photo tile + centered title + Ver más button, 0 radius" viewport="360x420" */
export interface ServiceTileProps {
  /** Photo URL; omitted renders a neutral placeholder */
  image?: string;
  /** @default 'Servicios de Marketing Digital' */
  title?: string;
  /** @default '#' */
  href?: string;
}
export function ServiceTile(props: ServiceTileProps): JSX.Element;
