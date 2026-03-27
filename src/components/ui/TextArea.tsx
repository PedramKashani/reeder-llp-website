import { FormFieldWrapper, fieldBorderClass } from "./FormFieldWrapper";

export function TextArea({
  label,
  name,
  placeholder,
  error,
}: {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
}) {
  return (
    <FormFieldWrapper label={label} name={name} required error={error}>
      <textarea
        required
        name={name}
        placeholder={placeholder}
        rows={7}
        className={fieldBorderClass(error)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
      />
    </FormFieldWrapper>
  );
}
