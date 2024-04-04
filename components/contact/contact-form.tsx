"use client";

import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData } from "@/types";
import { postRequest } from "@/utils/requests";
import { useNotificatios } from "@/contexts/notifications";
import { InputFormField } from "@/components/ui/input-form-field";
import { TextareaFormField } from "@/components/ui/textarea-form-field";

export const ContactSchema: ZodType<ContactFormData> = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be 3 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string(),
});

export const ContactForm = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const { addNotification } = useNotificatios();

  const onSubmit = async (formData: ContactFormData) => {
    try {
      const data = await postRequest("/contact", formData);
      addNotification({
        id: Date.now().toString(),
        message: "Contact form has been submitted successfully.",
        type: "SUCCESS",
      });
    } catch (error) {
      addNotification({
        id: Date.now().toString(),
        message:
          error instanceof Error ? error.message : "Unexpected error happened",
        type: "ERROR",
      });
    }
  };

  return (
    <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit(onSubmit)}>
      <InputFormField
        type="text"
        name="name"
        label="Name"
        placeholder="Name"
        register={register}
        error={errors.name}
      />
      <InputFormField
        type="text"
        name="email"
        label="Email"
        placeholder="Email"
        register={register}
        error={errors.email}
      />
      <TextareaFormField
        type="text"
        name="message"
        label="Message"
        placeholder="Message"
        register={register}
        error={errors.message}
        className="col-span-2"
      />
      <button
        type="submit"
        className="bg-black text-white opacity-80 rounded-md px-4 py-2 col-span-2 place-self-end"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Loading..." : "Let us talk"}
      </button>
    </form>
  );
};
