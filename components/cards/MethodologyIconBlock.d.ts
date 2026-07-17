/** @startingPoint section="Cards" subtitle="Bare red line-icon (80px) + title + justified body — the 4-up differentiator block" viewport="300x320" */
export interface MethodologyIconBlockProps {
  /** @default 'target' */
  icon?: 'target'|'trending-up'|'bar-chart'|'search'|'users'|'check';
  /** @default 'Análisis' */
  title?: string;
  description?: string;
}
export function MethodologyIconBlock(props: MethodologyIconBlockProps): JSX.Element;
