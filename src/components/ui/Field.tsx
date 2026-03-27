import { FormFieldWrapper, fieldBorderClass } from "./FormFieldWrapper";

export function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = true,
  error,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <FormFieldWrapper label={label} name={name} required={required} error={error}>
      <input
        required={required}
        name={name}
        type={type}
        placeholder={placeholder}
        className={fieldBorderClass(error)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
      />
    </FormFieldWrapper>
  );
}
