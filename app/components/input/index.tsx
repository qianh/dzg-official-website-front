interface IInputProps {
  label?: string;
  placeholder?: string;
  type?: "input" | "textarea";
  required?: boolean;
}

const DEFAULT_CSS = "border-neutral-200 placeholder-neutral-300 focus:ring-sky-400 focus:border-sky-400";

export default function Input({
  label,
  required,
  type,
  placeholder,
  ...props
}: IInputProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="text-sm pb-2 pl-1">
          {label}
          {required ? <span className="text-red-500">*</span> : ""}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          autoComplete="off"
          placeholder={placeholder}
          className={DEFAULT_CSS}
          {...props}
        />
      ) : (
        <input
          placeholder={placeholder}
          className={DEFAULT_CSS}
          {...props}
        />
      )}
    </div>
  );
}
