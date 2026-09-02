import { useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  mobile: z
    .string()
    .trim()
    .regex(/^[+]?[0-9\s-]{10,15}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email address").max(255),
  city: z.string().trim().min(2, "Please enter your city").max(80),
  requirement: z.string().trim().min(2, "Please enter your requirement").max(150),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

type Field = keyof z.infer<typeof schema>;

const fields: { name: Field; label: string; type?: string; placeholder: string }[] = [
  { name: "name", label: "Name", placeholder: "Your full name" },
  { name: "company", label: "Company Name", placeholder: "Your company (optional)" },
  { name: "mobile", label: "Mobile Number", type: "tel", placeholder: "+91 00000 00000" },
  { name: "email", label: "Email", type: "email", placeholder: "you@company.com" },
  { name: "city", label: "City", placeholder: "City" },
  { name: "requirement", label: "Requirement", placeholder: "e.g. 500ml cartons, monthly supply" },
];

export function EnquiryForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="h-12 w-12 text-leaf" />
        <p className="max-w-md text-lg font-semibold text-foreground">
          Thank you for contacting CRISPPURE BEVERAGES. Our team will get back to you soon.
        </p>
        <Button
          variant="outline"
          className="rounded-full"
          onClick={() => {
            setValues({});
            setSubmitted(false);
          }}
        >
          Submit another enquiry
        </Button>
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of parsed.error.issues) {
        next[issue.path[0] as Field] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className="space-y-2">
            <Label htmlFor={f.name} className="text-sm font-semibold">
              {f.label}
            </Label>
            <Input
              id={f.name}
              type={f.type ?? "text"}
              placeholder={f.placeholder}
              value={values[f.name] ?? ""}
              onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
              aria-invalid={Boolean(errors[f.name])}
              className="h-12 rounded-xl bg-background"
            />
            {errors[f.name] && (
              <p className="text-xs font-medium text-destructive">{errors[f.name]}</p>
            )}
          </div>
        ))}
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message" className="text-sm font-semibold">
            Message
          </Label>
          <Textarea
            id="message"
            rows={4}
            placeholder="Tell us about your requirement"
            value={values.message ?? ""}
            onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
            className="rounded-xl bg-background"
          />
          {errors.message && (
            <p className="text-xs font-medium text-destructive">{errors.message}</p>
          )}
        </div>
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full rounded-full font-semibold sm:w-auto">
        Submit Enquiry
      </Button>
    </form>
  );
}
