/** Form submit CTA — same red/flat treatment as Button, but fixed to the 43px form-field height so it lines up with inputs. The live site's WPForms default renders this blue; unified to brand red here. */
export interface FormSubmitButtonProps {
  /** @default 'Enviar' */
  label?: string;
  /** @default false */
  disabled?: boolean;
}
export function FormSubmitButton(props: FormSubmitButtonProps): JSX.Element;
