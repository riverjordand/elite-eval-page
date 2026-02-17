import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";
import { Link } from "react-router-dom";

const formSchema = z.object({
  athleteFirstName: z.string().trim().min(1, "Required").max(100),
  athleteLastName: z.string().trim().min(1, "Required").max(100),
  phone: z.string().trim().min(10, "Valid phone required").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  parentGuardianName: z.string().optional(),
  notes: z.string().max(2000).optional(),
  consentSms: z.boolean(),
  consentMarketing: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

const initialFormData: FormData = {
  athleteFirstName: "",
  athleteLastName: "",
  phone: "",
  email: "",
  parentGuardianName: "",
  notes: "",
  consentSms: false,
  consentMarketing: false,
};

const FieldLabel = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <Label className="font-oswald font-semibold uppercase text-xs sm:text-sm tracking-wide text-foreground/80">
    {children} {required && <span className="text-primary">*</span>}
  </Label>
);

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validated = formSchema.parse(formData);

      const { error } = await supabase.from("contact_submissions").insert({
        athlete_first_name: validated.athleteFirstName,
        athlete_last_name: validated.athleteLastName,
        phone: validated.phone,
        email: validated.email,
        parent_guardian_name: validated.parentGuardianName || null,
        notes: validated.notes || null,
        consent_sms: validated.consentSms,
        consent_marketing: validated.consentMarketing,
      });

      if (error) throw error;

      // Forward to GHL (fire-and-forget, don't block submission)
      supabase.functions.invoke("ghl-webhook", {
        body: {
          form_type: "contact",
          data: {
            first_name: validated.athleteFirstName,
            last_name: validated.athleteLastName,
            phone: validated.phone,
            email: validated.email,
            parent_guardian_name: validated.parentGuardianName || "",
            notes: validated.notes || "",
            consent_sms: validated.consentSms ? "Yes" : "No",
            consent_marketing: validated.consentMarketing ? "Yes" : "No",
          },
        },
      }).catch((err) => console.error("GHL webhook error:", err));

      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
        });
        setErrors(fieldErrors);
        toast({ title: "Please fix the errors below", variant: "destructive" });
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const ErrorMsg = ({ field }: { field: keyof FormData }) =>
    errors[field] ? <p className="text-xs text-destructive mt-1 font-oswald">{errors[field]}</p> : null;

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-24 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl uppercase mb-6">
              Message <span className="text-primary">Sent</span>
            </h1>
            <p className="font-oswald text-lg text-muted-foreground mb-8">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-wider text-lg px-10 py-6">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <h1 className="font-bebas text-4xl sm:text-5xl md:text-7xl uppercase text-center mb-3 sm:mb-4 leading-none">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="font-oswald text-center text-muted-foreground text-sm sm:text-lg mb-8 sm:mb-10 max-w-md mx-auto">
            Have questions? Fill out the form below and our team will get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <FieldLabel required>Athlete First Name</FieldLabel>
                <Input value={formData.athleteFirstName} onChange={set("athleteFirstName")} placeholder="First Name" className="h-11 font-oswald" />
                <ErrorMsg field="athleteFirstName" />
              </div>
              <div className="space-y-1.5">
                <FieldLabel required>Athlete Last Name</FieldLabel>
                <Input value={formData.athleteLastName} onChange={set("athleteLastName")} placeholder="Last Name" className="h-11 font-oswald" />
                <ErrorMsg field="athleteLastName" />
              </div>
            </div>

            <div className="space-y-1.5">
              <FieldLabel required>Phone</FieldLabel>
              <Input type="tel" value={formData.phone} onChange={set("phone")} placeholder="Phone" className="h-11 font-oswald" />
              <ErrorMsg field="phone" />
            </div>

            <div className="space-y-1.5">
              <FieldLabel required>Email</FieldLabel>
              <Input type="email" value={formData.email} onChange={set("email")} placeholder="Email" className="h-11 font-oswald" />
              <ErrorMsg field="email" />
            </div>

            <div className="space-y-1.5">
              <FieldLabel>Parent / Guardian Name</FieldLabel>
              <Input value={formData.parentGuardianName} onChange={set("parentGuardianName")} className="h-11 font-oswald" />
            </div>

            <div className="space-y-1.5">
              <FieldLabel>Notes / Questions (optional)</FieldLabel>
              <Textarea value={formData.notes} onChange={set("notes")} className="font-oswald min-h-[100px]" />
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consentSms"
                  checked={formData.consentSms}
                  onCheckedChange={(checked) => setFormData({ ...formData, consentSms: !!checked })}
                  className="mt-1"
                />
                <label htmlFor="consentSms" className="font-oswald text-sm text-muted-foreground cursor-pointer italic">
                  I Consent to Receive SMS Notifications, Alerts & Upcoming Event Details from Legendary Prep Academy LLC. Message frequency may vary. Message & data rates may apply. Text HELP for assistance. You may reply STOP to unsubscribe at any time.
                </label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consentMarketing"
                  checked={formData.consentMarketing}
                  onCheckedChange={(checked) => setFormData({ ...formData, consentMarketing: !!checked })}
                  className="mt-1"
                />
                <label htmlFor="consentMarketing" className="font-oswald text-sm text-muted-foreground cursor-pointer italic">
                  I Consent to Receive the Occasional Marketing Messages from Legendary Prep Academy LLC. You can Reply STOP to unsubscribe at any time.
                </label>
              </div>
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full h-14 text-lg font-bebas uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg border-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Contact;
