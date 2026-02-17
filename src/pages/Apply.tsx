import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";
import { Link } from "react-router-dom";

const positions = ["P", "C", "1B", "2B", "SS", "3B", "LF", "CF", "RF"];
const secondaryPositions = [...positions, "UT", "N/A"];
const gradYears = ["2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033", "2034", "2035"];
const gradeLevels = ["6", "7", "8", "9", "10", "11", "12", "Post Grad"];

const formSchema = z.object({
  firstName: z.string().trim().min(1, "Required").max(100),
  lastName: z.string().trim().min(1, "Required").max(100),
  phone: z.string().trim().min(10, "Valid phone required").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  dateOfBirth: z.string().min(1, "Required"),
  streetAddress: z.string().trim().min(1, "Required").max(255),
  city: z.string().trim().min(1, "Required").max(100),
  state: z.string().trim().min(1, "Required").max(100),
  country: z.string().trim().min(1, "Required").max(100),
  postalCode: z.string().trim().min(1, "Required").max(20),
  projectedStartDate: z.string().min(1, "Required"),
  guardian1Name: z.string().trim().min(1, "Required").max(100),
  guardian1Phone: z.string().trim().min(10, "Valid phone required").max(20),
  guardian1Email: z.string().trim().email("Invalid email").max(255),
  guardian2Name: z.string().optional(),
  guardian2Phone: z.string().optional(),
  guardian2Email: z.string().optional(),
  hsGradYear: z.string().min(1, "Required"),
  gradeLevel: z.string().min(1, "Required"),
  currentSchool: z.string().trim().min(1, "Required").max(200),
  gpa: z.string().trim().min(1, "Required").max(10),
  sport: z.string().min(1, "Required"),
  primaryPosition: z.string().min(1, "Required"),
  secondaryPosition: z.string().min(1, "Required"),
  bats: z.string().min(1, "Required"),
  throws: z.string().min(1, "Required"),
  best60Yard: z.string().optional(),
  maxExitVelo: z.string().optional(),
  maxPitchingSpeed: z.string().optional(),
  playerVideoUrl: z.string().optional(),
  sportExperience: z.string().trim().min(1, "Required").max(2000),
  shortTermGoals: z.string().trim().min(1, "Required").max(2000),
  longTermGoals: z.string().trim().min(1, "Required").max(2000),
  verbalCommitment: z.boolean(),
  commitmentDetails: z.string().optional(),
  additionalInfo: z.string().optional(),
  extracurricular: z.string().trim().min(1, "Required").max(2000),
  communityService: z.string().optional(),
  hostFamilyNeeded: z.boolean(),
  tourStatus: z.string().min(1, "Required"),
  dietaryRestrictions: z.string().optional(),
  medicalConditions: z.string().optional(),
  consentTransactional: z.boolean(),
  consentMarketing: z.boolean(),
});

type FormData = z.infer<typeof formSchema>;

const initialFormData: FormData = {
  firstName: "", lastName: "", phone: "", email: "", dateOfBirth: "",
  streetAddress: "", city: "", state: "", country: "United States", postalCode: "",
  projectedStartDate: "",
  guardian1Name: "", guardian1Phone: "", guardian1Email: "",
  guardian2Name: "", guardian2Phone: "", guardian2Email: "",
  hsGradYear: "", gradeLevel: "", currentSchool: "", gpa: "",
  sport: "", primaryPosition: "", secondaryPosition: "", bats: "", throws: "",
  best60Yard: "", maxExitVelo: "", maxPitchingSpeed: "", playerVideoUrl: "",
  sportExperience: "", shortTermGoals: "", longTermGoals: "",
  verbalCommitment: false, commitmentDetails: "", additionalInfo: "",
  extracurricular: "", communityService: "",
  hostFamilyNeeded: false, tourStatus: "", dietaryRestrictions: "", medicalConditions: "",
  consentTransactional: false, consentMarketing: false,
};

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-bebas text-2xl sm:text-3xl uppercase tracking-wide text-primary border-b border-primary/20 pb-2 mb-6">
    {children}
  </h3>
);

const FieldLabel = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <Label className="font-oswald font-semibold uppercase text-xs sm:text-sm tracking-wide text-foreground/80">
    {children} {required && <span className="text-primary">*</span>}
  </Label>
);

const Apply = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [field]: e.target.value });

  const setSelect = (field: keyof FormData) => (value: string) =>
    setFormData({ ...formData, [field]: value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      const validated = formSchema.parse(formData);

      const { error } = await supabase.from("applications").insert({
        first_name: validated.firstName,
        last_name: validated.lastName,
        phone: validated.phone,
        email: validated.email,
        date_of_birth: validated.dateOfBirth,
        street_address: validated.streetAddress,
        city: validated.city,
        state: validated.state,
        country: validated.country,
        postal_code: validated.postalCode,
        projected_start_date: validated.projectedStartDate,
        guardian1_name: validated.guardian1Name,
        guardian1_phone: validated.guardian1Phone,
        guardian1_email: validated.guardian1Email,
        guardian2_name: validated.guardian2Name || null,
        guardian2_phone: validated.guardian2Phone || null,
        guardian2_email: validated.guardian2Email || null,
        hs_grad_year: validated.hsGradYear,
        grade_level: validated.gradeLevel,
        current_school: validated.currentSchool,
        gpa: validated.gpa,
        sport: validated.sport,
        primary_position: validated.primaryPosition,
        secondary_position: validated.secondaryPosition,
        bats: validated.bats,
        throws: validated.throws,
        best_60_yard: validated.best60Yard || null,
        max_exit_velo: validated.maxExitVelo || null,
        max_pitching_speed: validated.maxPitchingSpeed || null,
        player_video_url: validated.playerVideoUrl || null,
        sport_experience: validated.sportExperience,
        short_term_goals: validated.shortTermGoals,
        long_term_goals: validated.longTermGoals,
        verbal_commitment: validated.verbalCommitment,
        commitment_details: validated.commitmentDetails || null,
        additional_info: validated.additionalInfo || null,
        extracurricular: validated.extracurricular,
        community_service: validated.communityService || null,
        host_family_needed: validated.hostFamilyNeeded,
        tour_status: validated.tourStatus,
        dietary_restrictions: validated.dietaryRestrictions || null,
        medical_conditions: validated.medicalConditions || null,
        consent_transactional: validated.consentTransactional,
        consent_marketing: validated.consentMarketing,
      });

      if (error) throw error;

      // Forward to GHL (fire-and-forget, don't block submission)
      supabase.functions.invoke("ghl-webhook", {
        body: {
          form_type: "application",
          data: {
            first_name: validated.firstName,
            last_name: validated.lastName,
            phone: validated.phone,
            email: validated.email,
            date_of_birth: validated.dateOfBirth,
            street_address: validated.streetAddress,
            city: validated.city,
            state: validated.state,
            postal_code: validated.postalCode,
            country: validated.country,
            grade_level: validated.gradeLevel,
            hs_grad_year: validated.hsGradYear,
            current_school: validated.currentSchool,
            gpa: validated.gpa,
            sport: validated.sport,
            primary_position: validated.primaryPosition,
            secondary_position: validated.secondaryPosition,
            bats: validated.bats,
            throws: validated.throws,
            best_60_yard: validated.best60Yard || "",
            max_exit_velo: validated.maxExitVelo || "",
            max_pitching_speed: validated.maxPitchingSpeed || "",
            player_video_url: validated.playerVideoUrl || "",
            sport_experience: validated.sportExperience,
            short_term_goals: validated.shortTermGoals,
            long_term_goals: validated.longTermGoals,
            verbal_commitment: validated.verbalCommitment ? "Yes" : "No",
            commitment_details: validated.commitmentDetails || "",
            additional_info: validated.additionalInfo || "",
            extracurricular: validated.extracurricular,
            community_service: validated.communityService || "",
            host_family_needed: validated.hostFamilyNeeded ? "Yes" : "No",
            tour_status: validated.tourStatus,
            dietary_restrictions: validated.dietaryRestrictions || "",
            medical_conditions: validated.medicalConditions || "",
            projected_start_date: validated.projectedStartDate,
            guardian1_name: validated.guardian1Name,
            guardian1_phone: validated.guardian1Phone,
            guardian1_email: validated.guardian1Email,
            guardian2_name: validated.guardian2Name || "",
            guardian2_phone: validated.guardian2Phone || "",
            guardian2_email: validated.guardian2Email || "",
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
              Application <span className="text-primary">Submitted</span>
            </h1>
            <p className="font-oswald text-lg text-muted-foreground mb-8">
              Thank you for applying to Legendary Prep Academy. Our team will review your application and reach out within 48 hours.
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
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bebas text-4xl sm:text-5xl md:text-7xl uppercase text-center mb-3 sm:mb-4 leading-none">
            Student-Athlete <span className="text-primary">Application</span>
          </h1>
          <p className="font-oswald text-center text-muted-foreground text-sm sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto">
            Complete the form below to begin your journey at Legendary Prep Academy.
          </p>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Student Info */}
            <section>
              <SectionHeading>Student Information</SectionHeading>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <FieldLabel required>First Name</FieldLabel>
                    <Input value={formData.firstName} onChange={set("firstName")} className="h-11 font-oswald" />
                    <ErrorMsg field="firstName" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel required>Last Name</FieldLabel>
                    <Input value={formData.lastName} onChange={set("lastName")} className="h-11 font-oswald" />
                    <ErrorMsg field="lastName" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <FieldLabel required>Phone</FieldLabel>
                    <Input type="tel" value={formData.phone} onChange={set("phone")} placeholder="(555) 123-4567" className="h-11 font-oswald" />
                    <ErrorMsg field="phone" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel required>Email</FieldLabel>
                    <Input type="email" value={formData.email} onChange={set("email")} className="h-11 font-oswald" />
                    <ErrorMsg field="email" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <FieldLabel required>Date of Birth</FieldLabel>
                  <Input type="date" value={formData.dateOfBirth} onChange={set("dateOfBirth")} className="h-11 font-oswald" />
                  <ErrorMsg field="dateOfBirth" />
                </div>
              </div>
            </section>

            {/* Address */}
            <section>
              <SectionHeading>Address</SectionHeading>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <FieldLabel required>Street Address</FieldLabel>
                  <Input value={formData.streetAddress} onChange={set("streetAddress")} className="h-11 font-oswald" />
                  <ErrorMsg field="streetAddress" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <FieldLabel required>City</FieldLabel>
                    <Input value={formData.city} onChange={set("city")} className="h-11 font-oswald" />
                    <ErrorMsg field="city" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel required>State</FieldLabel>
                    <Input value={formData.state} onChange={set("state")} className="h-11 font-oswald" />
                    <ErrorMsg field="state" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <FieldLabel required>Country</FieldLabel>
                    <Input value={formData.country} onChange={set("country")} className="h-11 font-oswald" />
                    <ErrorMsg field="country" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel required>Postal Code</FieldLabel>
                    <Input value={formData.postalCode} onChange={set("postalCode")} className="h-11 font-oswald" />
                    <ErrorMsg field="postalCode" />
                  </div>
                </div>
              </div>
            </section>

            {/* Projected Start */}
            <section>
              <div className="space-y-1.5">
                <FieldLabel required>Projected Start Date</FieldLabel>
                <Input type="date" value={formData.projectedStartDate} onChange={set("projectedStartDate")} className="h-11 font-oswald" />
                <ErrorMsg field="projectedStartDate" />
              </div>
            </section>

            {/* Parent/Guardian */}
            <section>
              <SectionHeading>Parent / Guardian Info</SectionHeading>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <FieldLabel required>Guardian #1 Name</FieldLabel>
                    <Input value={formData.guardian1Name} onChange={set("guardian1Name")} className="h-11 font-oswald" />
                    <ErrorMsg field="guardian1Name" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel required>Guardian #1 Phone</FieldLabel>
                    <Input type="tel" value={formData.guardian1Phone} onChange={set("guardian1Phone")} className="h-11 font-oswald" />
                    <ErrorMsg field="guardian1Phone" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel required>Guardian #1 Email</FieldLabel>
                    <Input type="email" value={formData.guardian1Email} onChange={set("guardian1Email")} className="h-11 font-oswald" />
                    <ErrorMsg field="guardian1Email" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <FieldLabel>Guardian #2 Name</FieldLabel>
                    <Input value={formData.guardian2Name} onChange={set("guardian2Name")} className="h-11 font-oswald" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel>Guardian #2 Phone</FieldLabel>
                    <Input type="tel" value={formData.guardian2Phone} onChange={set("guardian2Phone")} className="h-11 font-oswald" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel>Guardian #2 Email</FieldLabel>
                    <Input type="email" value={formData.guardian2Email} onChange={set("guardian2Email")} className="h-11 font-oswald" />
                  </div>
                </div>
              </div>
            </section>

            {/* Academics */}
            <section>
              <SectionHeading>Academics</SectionHeading>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <FieldLabel required>HS Grad Year</FieldLabel>
                    <Select value={formData.hsGradYear} onValueChange={setSelect("hsGradYear")}>
                      <SelectTrigger className="h-11 font-oswald"><SelectValue placeholder="Select year" /></SelectTrigger>
                      <SelectContent>
                        {gradYears.map(y => <SelectItem key={y} value={y} className="font-oswald">{y}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <ErrorMsg field="hsGradYear" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel required>Grade Level Applying For</FieldLabel>
                    <Select value={formData.gradeLevel} onValueChange={setSelect("gradeLevel")}>
                      <SelectTrigger className="h-11 font-oswald"><SelectValue placeholder="Select grade" /></SelectTrigger>
                      <SelectContent>
                        {gradeLevels.map(g => <SelectItem key={g} value={g} className="font-oswald">{g}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <ErrorMsg field="gradeLevel" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <FieldLabel required>Current School</FieldLabel>
                    <Input value={formData.currentSchool} onChange={set("currentSchool")} className="h-11 font-oswald" />
                    <ErrorMsg field="currentSchool" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel required>GPA</FieldLabel>
                    <Input value={formData.gpa} onChange={set("gpa")} placeholder="e.g. 3.5" className="h-11 font-oswald" />
                    <ErrorMsg field="gpa" />
                  </div>
                </div>
              </div>
            </section>

            {/* Athletics */}
            <section>
              <SectionHeading>Athletics</SectionHeading>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <FieldLabel required>Sport</FieldLabel>
                    <Select value={formData.sport} onValueChange={setSelect("sport")}>
                      <SelectTrigger className="h-11 font-oswald"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Baseball" className="font-oswald">Baseball</SelectItem>
                        <SelectItem value="Softball" className="font-oswald">Softball</SelectItem>
                      </SelectContent>
                    </Select>
                    <ErrorMsg field="sport" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel required>Primary Position</FieldLabel>
                    <Select value={formData.primaryPosition} onValueChange={setSelect("primaryPosition")}>
                      <SelectTrigger className="h-11 font-oswald"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {positions.map(p => <SelectItem key={p} value={p} className="font-oswald">{p}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <ErrorMsg field="primaryPosition" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel required>Secondary Position</FieldLabel>
                    <Select value={formData.secondaryPosition} onValueChange={setSelect("secondaryPosition")}>
                      <SelectTrigger className="h-11 font-oswald"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {secondaryPositions.map(p => <SelectItem key={p} value={p} className="font-oswald">{p}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <ErrorMsg field="secondaryPosition" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <FieldLabel required>Bats</FieldLabel>
                    <Select value={formData.bats} onValueChange={setSelect("bats")}>
                      <SelectTrigger className="h-11 font-oswald"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {["Right", "Left", "Switch"].map(b => <SelectItem key={b} value={b} className="font-oswald">{b}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <ErrorMsg field="bats" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel required>Throws</FieldLabel>
                    <Select value={formData.throws} onValueChange={setSelect("throws")}>
                      <SelectTrigger className="h-11 font-oswald"><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>
                        {["Right", "Left"].map(t => <SelectItem key={t} value={t} className="font-oswald">{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <ErrorMsg field="throws" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <FieldLabel>Best 60 Yard Dash</FieldLabel>
                    <Input value={formData.best60Yard} onChange={set("best60Yard")} placeholder="e.g. 6.8" className="h-11 font-oswald" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel>Max Exit Velocity</FieldLabel>
                    <Input value={formData.maxExitVelo} onChange={set("maxExitVelo")} placeholder="e.g. 92" className="h-11 font-oswald" />
                  </div>
                  <div className="space-y-1.5">
                    <FieldLabel>Max Pitching Speed</FieldLabel>
                    <Input value={formData.maxPitchingSpeed} onChange={set("maxPitchingSpeed")} placeholder="e.g. 85" className="h-11 font-oswald" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <FieldLabel>Player Video URL</FieldLabel>
                  <Input value={formData.playerVideoUrl} onChange={set("playerVideoUrl")} placeholder="YouTube or Hudl link" className="h-11 font-oswald" />
                </div>
                <div className="space-y-1.5">
                  <FieldLabel required>Sport Experience</FieldLabel>
                  <Textarea value={formData.sportExperience} onChange={set("sportExperience")} className="font-oswald min-h-[100px]" placeholder="Describe your playing history, teams, and achievements..." />
                  <ErrorMsg field="sportExperience" />
                </div>
              </div>
            </section>

            {/* Goals */}
            <section>
              <SectionHeading>Goals & Commitment</SectionHeading>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <FieldLabel required>Short-Term Goals</FieldLabel>
                  <Textarea value={formData.shortTermGoals} onChange={set("shortTermGoals")} className="font-oswald min-h-[100px]" />
                  <ErrorMsg field="shortTermGoals" />
                </div>
                <div className="space-y-1.5">
                  <FieldLabel required>Long-Term Goals</FieldLabel>
                  <Textarea value={formData.longTermGoals} onChange={set("longTermGoals")} className="font-oswald min-h-[100px]" />
                  <ErrorMsg field="longTermGoals" />
                </div>
                <div className="space-y-3">
                  <FieldLabel required>Verbal College Commitment</FieldLabel>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 font-oswald cursor-pointer">
                      <input type="radio" name="verbalCommitment" checked={formData.verbalCommitment === true} onChange={() => setFormData({ ...formData, verbalCommitment: true })} className="accent-primary" /> Yes
                    </label>
                    <label className="flex items-center gap-2 font-oswald cursor-pointer">
                      <input type="radio" name="verbalCommitment" checked={formData.verbalCommitment === false} onChange={() => setFormData({ ...formData, verbalCommitment: false })} className="accent-primary" /> No
                    </label>
                  </div>
                </div>
                {formData.verbalCommitment && (
                  <div className="space-y-1.5">
                    <FieldLabel>Commitment Details</FieldLabel>
                    <Textarea value={formData.commitmentDetails} onChange={set("commitmentDetails")} className="font-oswald" placeholder="School name, scholarship details, etc." />
                  </div>
                )}
                <div className="space-y-1.5">
                  <FieldLabel>Additional Info</FieldLabel>
                  <Textarea value={formData.additionalInfo} onChange={set("additionalInfo")} className="font-oswald" />
                </div>
              </div>
            </section>

            {/* Activities & Logistics */}
            <section>
              <SectionHeading>Activities & Logistics</SectionHeading>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <FieldLabel required>Extracurricular Activities</FieldLabel>
                  <Textarea value={formData.extracurricular} onChange={set("extracurricular")} className="font-oswald min-h-[100px]" />
                  <ErrorMsg field="extracurricular" />
                </div>
                <div className="space-y-1.5">
                  <FieldLabel>Community Service</FieldLabel>
                  <Textarea value={formData.communityService} onChange={set("communityService")} className="font-oswald" />
                </div>
                <div className="space-y-3">
                  <FieldLabel required>Host Family Needed</FieldLabel>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 font-oswald cursor-pointer">
                      <input type="radio" name="hostFamily" checked={formData.hostFamilyNeeded === true} onChange={() => setFormData({ ...formData, hostFamilyNeeded: true })} className="accent-primary" /> Yes
                    </label>
                    <label className="flex items-center gap-2 font-oswald cursor-pointer">
                      <input type="radio" name="hostFamily" checked={formData.hostFamilyNeeded === false} onChange={() => setFormData({ ...formData, hostFamilyNeeded: false })} className="accent-primary" /> No
                    </label>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <FieldLabel required>Tour Status</FieldLabel>
                  <Select value={formData.tourStatus} onValueChange={setSelect("tourStatus")}>
                    <SelectTrigger className="h-11 font-oswald"><SelectValue placeholder="Have you toured our facility?" /></SelectTrigger>
                    <SelectContent>
                      {["Needed", "Scheduled", "Completed"].map(s => <SelectItem key={s} value={s} className="font-oswald">{s}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <ErrorMsg field="tourStatus" />
                </div>
                <div className="space-y-1.5">
                  <FieldLabel>Dietary Restrictions</FieldLabel>
                  <Input value={formData.dietaryRestrictions} onChange={set("dietaryRestrictions")} className="h-11 font-oswald" />
                </div>
                <div className="space-y-1.5">
                  <FieldLabel>Medical Conditions</FieldLabel>
                  <Textarea value={formData.medicalConditions} onChange={set("medicalConditions")} className="font-oswald" />
                </div>
              </div>
            </section>

            {/* Consent & Submit */}
            <section className="space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consentTransactional"
                  checked={formData.consentTransactional}
                  onCheckedChange={(checked) => setFormData({ ...formData, consentTransactional: !!checked })}
                  className="mt-1"
                />
                <label htmlFor="consentTransactional" className="font-oswald text-sm text-muted-foreground cursor-pointer">
                  By checking this box, I consent to receive transactional messages related to my account, application, or services I have requested. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                </label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="consentMarketing"
                  checked={formData.consentMarketing}
                  onCheckedChange={(checked) => setFormData({ ...formData, consentMarketing: !!checked })}
                  className="mt-1"
                />
                <label htmlFor="consentMarketing" className="font-oswald text-sm text-muted-foreground cursor-pointer">
                  By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, and new product updates. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                </label>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full h-14 text-lg font-bebas uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg border-glow"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </section>
          </form>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Apply;
