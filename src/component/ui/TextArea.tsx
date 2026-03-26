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
    <label className="block">
      <span className="block text-xs uppercase tracking-[0.35em] text-neutral-500">
        {label} <span className="text-neutral-400">*</span>
      </span>
      <textarea
        required
        name={name}
        placeholder={placeholder}
        rows={7}
        className={
          "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-400 " +
          (error ? "border-red-400" : "border-neutral-200")
        }
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error ? (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </label>
  );
}
