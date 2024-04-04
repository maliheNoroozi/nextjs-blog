import { FieldError, UseFormRegister } from "react-hook-form";

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type ValidFormFieldNames = keyof ContactFormData;

export interface InputFormFieldProps {
  type?: string;
  placeholder: string;
  name: ValidFormFieldNames;
  label: string;
  register: UseFormRegister<ContactFormData>;
  error: FieldError | undefined;
  className?: string;
}
