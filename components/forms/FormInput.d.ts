/** @startingPoint section="Forms" subtitle="43px-tall flat input, hairline border, bold label with red required-marker" viewport="360x100" */
export interface FormInputProps {
  /** @default 'Nombre' */
  label?: string;
  /** @default 'text' */
  type?: 'text'|'email'|'tel'|'textarea';
  /** @default true */
  required?: boolean;
  placeholder?: string;
}
export function FormInput(props: FormInputProps): JSX.Element;
