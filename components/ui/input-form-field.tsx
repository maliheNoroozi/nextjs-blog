import { InputFormFieldProps } from "@/types";

export const InputFormField = ({
  name,
  label,
  placeholder,
  type,
  register,
  error,
}: InputFormFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="border rounded border-gray-300 py-2 px-4"
      />
      {error && <span className="error-message">{error.message}</span>}
    </div>
  );
};
