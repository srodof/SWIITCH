/** @startingPoint section="Buttons" subtitle="Brand-red CTA with trailing chevron; two size/radius variants" viewport="700x140" */
export interface ButtonProps {
  children?: React.ReactNode;
  /** @default 'primary' */
  variant?: 'primary'|'slider-cta';
  href?: string;
  onClick?: () => void;
  /** @default false */
  disabled?: boolean;
  /** @default true */
  showIcon?: boolean;
}
export function Button(props: ButtonProps): JSX.Element;
