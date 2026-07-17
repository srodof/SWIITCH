/** Floating circular WhatsApp entry point — the site's one truly floating UI element (fixed bottom-right in production). Icon substituted with a generic message-circle glyph pending the real WhatsApp mark — see README. */
export interface WhatsAppButtonProps {
  /** @default '¿Necesitas ayuda? Conversemos' */
  tooltip?: string;
}
export function WhatsAppButton(props: WhatsAppButtonProps): JSX.Element;
