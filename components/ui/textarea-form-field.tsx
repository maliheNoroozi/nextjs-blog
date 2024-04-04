import { InputFormFieldProps } from "@/types";

export const TextareaFormField = ({
  name,
  label,
  placeholder,
  register,
  error,
  className,
}: InputFormFieldProps) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={name}>{label}</label>
      <textarea
        id={name}
        placeholder={placeholder}
        {...register(name)}
        className="border rounded border-gray-300 py-2 px-4 h-32"
      />
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
};
