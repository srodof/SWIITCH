/** @startingPoint section="Navigation" subtitle="Transparent-over-hero header that solidifies on scroll" viewport="1200x85" */
export interface NavBarProps {
  /** @default 'transparent' */
  variant?: 'transparent'|'solid';
  /** @default the site's real top-level nav labels */
  items?: string[];
}
export function NavBar(props: NavBarProps): JSX.Element;
