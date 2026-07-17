/** Real brand mark (Facebook, Instagram, LinkedIn, TikTok) loaded from the Simple Icons CDN — never hand-drawn. */
export interface SocialIconProps {
  network: 'facebook'|'instagram'|'linkedin'|'tiktok';
  /** @default 20 */
  size?: number;
  /** Hex without '#', per Simple Icons CDN convention. @default 'FFFFFF' */
  color?: string;
  style?: React.CSSProperties;
}
export function SocialIcon(props: SocialIconProps): JSX.Element;
