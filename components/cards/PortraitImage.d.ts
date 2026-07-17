/** @startingPoint section="Cards" subtitle="Photo cropped to a full circle — the system's one decorative image treatment" viewport="360x360" */
export interface PortraitImageProps {
  image?: string;
  /** px, square. @default 320 */
  size?: number;
}
export function PortraitImage(props: PortraitImageProps): JSX.Element;
