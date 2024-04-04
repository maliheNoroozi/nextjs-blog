import { ContactCards } from "@/components/contact/contact-card";
import { ContactForm } from "@/components/contact/contact-form";
import { Heading } from "@/components/ui/heading";

export default function Page() {
  return (
    <div className="flex flex-col gap-12 max-w-[740px] mx-auto">
      <Heading title="Let us talk" description="Let us talk" />
      <ContactCards />
      <ContactForm />
    </div>
  );
}
