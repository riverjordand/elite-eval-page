import { useState } from "react";
import { useForm } from "react-hook-form";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const waiverSections = [
  {
    num: "1",
    title: "Assumption of Risk",
    content: `I understand that baseball, weight lifting, exercise, and training are physical activities that, by their very nature carry certain INHERENT RISKS OF INJURY THAT CANNOT BE ELIMINATED regardless of the care taken to avoid injuries. The use of LPA's facilities, training services, weight room, exercise room, and equipment of any kind or nature involves close encounters with solid, fast moving objects and projectiles, such as bats and hard balls. Also baseball activities involve strenuous exertions of physical strength, use of various and multiple muscle groups, quick movement involving speed and change of direction, and sustained physical activity placing stress on joints and the cardiovascular system. The specific risks of injury include but are not limited to: 1) minor injuries such as scratches, bruises, and sprains; 2) serious injuries such as broken bones, broken teeth, concussion, eye injuries or loss of eyesight, joint injuries, back injuries or heart attacks; and 3) catastrophic injuries, including paralysis and death. I HAVE READ THE PREVIOUS PROVISIONS AND I KNOWINGLY ASSUME ALL SUCH RISKS.`,
  },
  {
    num: "2",
    title: "Additional Helmet Waiver of Liability",
    content: `I understand that for my safety LPA requires me to wear a helmet when using the facilities, training services and equipment. In consideration of LPA waiving the requirement to wear a helmet when I use the tee or slow pitch batting or pitching cages, I ASSUME THE RISK OF NOT WEARING A HELMET, AND DO HEREBY RELEASE, WAIVE, DISCHARGE, AND COVENANT NOT TO SUE LPA or any of the LPA PARTIES, from liability FROM ANY AND ALL CLAIMS, resulting in personal injury, accidents, illnesses (including death), or property damage or monetary loss, arising from my not using a helmet. I agree to INDEMNIFY AND HOLD LPA AND THE LPA PARTIES HARMLESS from any and all claims, actions, suits, procedures, costs, expenses, damages and liabilities, including attorney's fees, brought as a result of my use of LPA provided facilities, training services or equipment without a helmet.`,
  },
  {
    num: "3",
    title: "Indemnification and Hold Harmless",
    content: `I agree to INDEMNIFY AND HOLD LPA AND THE LPA PARTIES HARMLESS from any and all claims, actions, suits, procedures, costs, expenses, damages and liabilities, including attorney's fees, brought by minors of whom I am the parent or guardian, or guests accompanying me, as a result of my actions or the actions of those individuals. I acknowledge that I am responsible for the conduct and behavior of all minors and guests that accompany me regardless of whether or not they use the facilities, training services, or equipment.`,
  },
  {
    num: "4",
    title: "Safety",
    content: `LPA may prescribe safety guidelines and instructions. I agree to comply with all of LPA's safety rules, procedures and requirements, including but not limited to wearing protective gear. I understand that failure to comply may result in LPA terminating my use of the facilities, training services, and equipment and requiring me to leave the premises, at LPA's sole and absolute discretion.`,
  },
  {
    num: "5",
    title: "Governing Law, Venue and Jurisdiction",
    content: `This Waiver of Liability Agreement is governed by Arizona law. In the event of a dispute, the exclusive venue and jurisdiction for any lawsuit arising out of such dispute shall be the Superior Court of the State of Arizona in and for the County of Maricopa.`,
  },
  {
    num: "6",
    title: "Severability",
    content: `If any provision of this Waiver of Liability Agreement is determined to be invalid for any reason, such invalidity shall not affect the validity of any of the other provisions, which other provisions shall remain in full force and effect.`,
  },
  {
    num: "7",
    title: "Further Acknowledgement of Understanding",
    content: `I have read this Waiver of Liability Agreement. I fully understand its terms. I UNDERSTAND THAT BY SIGNING THIS WAIVER OF LIABILITY AGREEMENT THAT I AM GIVING UP SUBSTANTIAL RIGHTS, INCLUDING MY RIGHT TO SUE. I acknowledge that I am signing this waiver freely and voluntarily, and that I INTEND BY MY SIGNATURE, FOR THIS TO BE A COMPLETE AND UNCONDITIONAL RELEASE OF ALL LIABILITY to the greatest extent allowed by law.`,
  },
];

const positions = ["P", "C", "1B", "2B", "SS", "3B", "LF", "CF", "RF"];
const usageTypes = ["Team / Group Rental", "Private Lesson", "Camp / Clinic", "Other"];

type FormData = {
  athlete_first_name: string;
  athlete_last_name: string;
  athlete_phone: string;
  athlete_email: string;
  date_of_birth: string;
  primary_position: string;
  state: string;
  usage_type: string;
  other_usage_type?: string;
  coach_instructor_name?: string;
  team_org_name?: string;
  parent_guardian_name?: string;
  parent_guardian_phone?: string;
  parent_guardian_email?: string;
  signature: string;
};

const LiabilityWaiver = () => {
  const { toast } = useToast();
  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [agreedToWaiver, setAgreedToWaiver] = useState(false);
  const [agreedToMarketing, setAgreedToMarketing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const usageType = watch("usage_type");

  const onSubmit = async (data: FormData) => {
    if (!agreedToWaiver) {
      toast({ title: "Please agree to the waiver terms before submitting.", variant: "destructive" });
      return;
    }

    try {
      const { error } = await supabase.from("liability_waivers").insert({
        athlete_first_name: data.athlete_first_name,
        athlete_last_name: data.athlete_last_name,
        athlete_phone: data.athlete_phone,
        athlete_email: data.athlete_email,
        date_of_birth: data.date_of_birth,
        primary_position: data.primary_position,
        state: data.state,
        usage_type: data.usage_type,
        other_usage_type: data.other_usage_type || null,
        coach_instructor_name: data.coach_instructor_name || null,
        team_org_name: data.team_org_name || null,
        parent_guardian_name: data.parent_guardian_name || null,
        parent_guardian_phone: data.parent_guardian_phone || null,
        parent_guardian_email: data.parent_guardian_email || null,
        signature: data.signature,
        consent_marketing: agreedToMarketing,
      });

      if (error) throw error;
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border/10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Legal</span>
          </div>
          <h1 className="font-bebas text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.88] mb-4">
            Liability <span className="text-primary">Waiver</span>
          </h1>
          <p className="font-oswald text-sm text-foreground/30 uppercase tracking-wider">
            Please read carefully before signing
          </p>
        </div>
      </section>

      {/* Warning Banner */}
      <div className="bg-primary/10 border-y border-primary/20 py-4">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
          <p className="font-bebas text-sm md:text-base text-primary uppercase tracking-widest text-center">
            Waiver of Liability — Please Read Carefully Before Signing. This Agreement Provides for a Release of Liability, Waiver of Certain Rights, and Assumption of Risks and Indemnity.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-12 border-b border-border/10">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
          <p className="font-oswald text-sm text-foreground/50 leading-relaxed">
            In consideration of being permitted to use today, and on all future dates, the facilities, gym, weight room, exercise room, training services, and equipment of any kind or nature provided by LEGENDARY PREP ACADEMY, LLC, an Arizona limited liability company ("LPA"), I, for myself, my heirs, personal representatives or assigns, minors of whom I am the parent or guardian or have responsibility for, and players, coaches, or other guests accompanying me, whether or not they make use of the facilities, training service, or equipment (collectively the "PARTICIPANTS"), DO HEREBY COVENANT NOT TO SUE LPA OR ANY OF ITS MEMBERS, AGENTS, DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, PARTNERS, SPONSORS, VOLUNTEERS, CONTRACTORS, CONTRACTED ENTITIES AND FACILITIES, AND THE OWNERS AND LESSORS THEREOF (COLLECTIVELY, THE "LPA PARTIES"), AND FURTHER DO HEREBY RELEASE, WAIVE, DISCHARGE FROM ALL LIABILITY LPA AND THE LPA PARTIES FROM AND FOR ANY AND ALL CLAIMS, resulting in personal injury, accidents, illnesses (including death), or property damage or monetary loss, arising from participation in or observation of the use of baseball, weight room and training facilities, training services or equipment provided by LPA.
          </p>
          <p className="font-oswald text-sm text-foreground/50 leading-relaxed mt-4 font-semibold">
            I UNDERSTAND THAT BY SIGNING THIS WAIVER OF LIABILITY, THAT I AM GIVING UP SUBSTANTIAL RIGHTS, INCLUDING MY RIGHT TO SUE.
          </p>
        </div>
      </section>

      {/* Waiver Sections */}
      <section className="py-16 border-b border-border/10">
        <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
          <div className="divide-y divide-border/10">
            {waiverSections.map((s) => (
              <div key={s.num} className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-2">
                  <span className="font-bebas text-4xl text-foreground/10">{s.num.padStart(2, "0")}</span>
                </div>
                <div className="md:col-span-10">
                  <h2 className="font-bebas text-xl md:text-2xl uppercase text-foreground mb-3 tracking-wide">{s.title}</h2>
                  <p className="font-oswald text-sm text-foreground/40 leading-relaxed">{s.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E-Sign Form */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Electronic Signature</span>
          </div>
          <h2 className="font-bebas text-3xl md:text-4xl uppercase mb-3">Liability Waiver Form</h2>
          <p className="font-oswald text-sm text-foreground/40 leading-relaxed mb-10">
            By typing your full name and submitting this form, you intend to sign this Liability Waiver electronically. Your electronic signature is the legally binding equivalent of your handwritten signature, governed by UETA and the E-SIGN Act.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <CheckCircle className="w-14 h-14 text-primary" />
              <h3 className="font-bebas text-3xl uppercase">Waiver Submitted</h3>
              <p className="font-oswald text-sm text-foreground/40">Thank you. Your liability waiver has been recorded.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Athlete First Name *</Label>
                  <Input {...register("athlete_first_name", { required: true })} className="bg-card border-border/20 font-oswald" />
                  {errors.athlete_first_name && <p className="text-xs text-destructive font-oswald">Required</p>}
                </div>
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Athlete Last Name *</Label>
                  <Input {...register("athlete_last_name", { required: true })} className="bg-card border-border/20 font-oswald" />
                  {errors.athlete_last_name && <p className="text-xs text-destructive font-oswald">Required</p>}
                </div>
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Athlete Phone *</Label>
                  <Input {...register("athlete_phone", { required: true })} className="bg-card border-border/20 font-oswald" />
                  {errors.athlete_phone && <p className="text-xs text-destructive font-oswald">Required</p>}
                </div>
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Athlete Email *</Label>
                  <Input type="email" {...register("athlete_email", { required: true })} className="bg-card border-border/20 font-oswald" />
                  {errors.athlete_email && <p className="text-xs text-destructive font-oswald">Required</p>}
                </div>
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Date of Birth *</Label>
                  <Input type="date" {...register("date_of_birth", { required: true })} className="bg-card border-border/20 font-oswald" />
                  {errors.date_of_birth && <p className="text-xs text-destructive font-oswald">Required</p>}
                </div>
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Primary Position *</Label>
                  <select {...register("primary_position", { required: true })} className="w-full bg-card border border-border/20 rounded-md px-3 py-2 font-oswald text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Select position</option>
                    {positions.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.primary_position && <p className="text-xs text-destructive font-oswald">Required</p>}
                </div>
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">State *</Label>
                  <Input {...register("state", { required: true })} className="bg-card border-border/20 font-oswald" placeholder="e.g. AZ" />
                  {errors.state && <p className="text-xs text-destructive font-oswald">Required</p>}
                </div>
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Usage Type *</Label>
                  <select {...register("usage_type", { required: true })} className="w-full bg-card border border-border/20 rounded-md px-3 py-2 font-oswald text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="">Select usage type</option>
                    {usageTypes.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                  {errors.usage_type && <p className="text-xs text-destructive font-oswald">Required</p>}
                </div>
              </div>

              {usageType === "Other" && (
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">"Other" Usage Type</Label>
                  <Input {...register("other_usage_type")} className="bg-card border-border/20 font-oswald" />
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Coach / Instructor Name</Label>
                  <Input {...register("coach_instructor_name")} className="bg-card border-border/20 font-oswald" />
                </div>
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Team / Organization Name</Label>
                  <Input {...register("team_org_name")} className="bg-card border-border/20 font-oswald" />
                </div>
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Parent / Guardian Name</Label>
                  <Input {...register("parent_guardian_name")} className="bg-card border-border/20 font-oswald" />
                </div>
                <div className="space-y-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Parent / Guardian Phone</Label>
                  <Input {...register("parent_guardian_phone")} className="bg-card border-border/20 font-oswald" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">Parent / Guardian Email</Label>
                  <Input type="email" {...register("parent_guardian_email")} className="bg-card border-border/20 font-oswald" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="font-oswald text-xs uppercase tracking-wider text-foreground/50">
                  Signature — Type Full Name (if under 18, parent/guardian must sign) *
                </Label>
                <Input {...register("signature", { required: true })} className="bg-card border-border/20 font-oswald italic text-lg" placeholder="Full legal name" />
                {errors.signature && <p className="text-xs text-destructive font-oswald">Required</p>}
              </div>

              <div className="space-y-4 pt-4 border-t border-border/10">
                <div className="flex items-start gap-3">
                  <Checkbox id="waiver-agree" checked={agreedToWaiver} onCheckedChange={(v) => setAgreedToWaiver(!!v)} className="mt-0.5" />
                  <label htmlFor="waiver-agree" className="font-oswald text-xs text-foreground/40 leading-relaxed cursor-pointer">
                    I have read the LPA Liability Waiver and fully understand its terms. By checking this box and e-signing above, I agree that my electronic signature is the legally binding equivalent of my handwritten signature. I further acknowledge that, by signing, I knowingly and voluntarily release LPA and the LPA PARTIES from liability to the maximum extent permitted by law.
                  </label>
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox id="marketing-agree" checked={agreedToMarketing} onCheckedChange={(v) => setAgreedToMarketing(!!v)} className="mt-0.5" />
                  <label htmlFor="marketing-agree" className="font-oswald text-xs text-foreground/40 leading-relaxed cursor-pointer">
                    I consent to receive occasional marketing messages from Legendary Prep Academy LLC. Reply STOP to unsubscribe at any time.
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !agreedToWaiver}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-lg py-6 h-auto"
              >
                {isSubmitting ? "Submitting..." : "Submit Waiver"}
              </Button>
            </form>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default LiabilityWaiver;
