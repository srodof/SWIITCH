/** Generic outline UI glyph (chevron, check, mail, phone, map-pin, etc) — 24x24 stroke icon in the brand's line-icon style. Not for brand/social marks, use SocialIcon for those. */
export interface IconProps {
  /** @default 'chevron-right' */
  name: 'chevron-right'|'check'|'x'|'menu'|'mail'|'phone'|'map-pin'|'message-circle'|'search'|'users'|'target'|'bar-chart'|'trending-up'|'arrow-up-right';
  /** @default 20 */
  size?: number;
  /** @default 'currentColor' */
  color?: string;
  /** @default 2 */
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
