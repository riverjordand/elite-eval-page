import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import {
  Calendar,
  Clock,
  MapPin,
  Flame,
  Trophy,
  Activity,
  Dumbbell,
  CheckCircle2,
} from "lucide-react";
import logoBadge from "@/assets/lpa-badge-seafoam.png";
import heroImg from "@/assets/hero-training.jpg";
import facilityImg from "@/assets/facility-training-area.jpg";
import athleteImg from "@/assets/athlete-on-field.jpg";

const CAMP_DATE = new Date("2026-06-15T09:00:00-07:00");

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY",
];

const schema = z.object({
  parent_name: z.string().trim().min(2, "Required").max(100),
  parent_email: z.string().trim().email("Invalid email").max(255),
  parent_phone: z.string().trim().min(7, "Required").max(25),
  participant_name: z.string().trim().min(2, "Required").max(100),
  participant_age: z.coerce.number().int().min(6, "Min age 6").max(19, "Max age 19"),
  participant_grade: z.string().min(1, "Required"),
  state: z.string().length(2, "Required"),
  city: z.string().trim().min(2, "Required").max(100),
  primary_position: z.string().min(1, "Required"),
  experience_level: z.string().min(1, "Required"),
  plays_on_team: z.string().min(1, "Required"),
  goals: z.string().trim().max(500).optional().or(z.literal("")),
});

const useCountdown = (target: Date) => {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now.getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Go = () => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    parent_name: "",
    parent_email: "",
    parent_phone: "",
    participant_name: "",
    participant_age: "",
    participant_grade: "",
    state: "",
    city: "",
    primary_position: "",
    experience_level: "",
    plays_on_team: "",
    goals: "",
  });

  const { days, hours, minutes, seconds } = useCountdown(CAMP_DATE);

  useEffect(() => {
    document.title = "LPA June 15 Camp — 20% Off Limited Spots | Legendary Prep Academy";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Reserve your spot at the LPA June 15 baseball camp. Save 20% — normally $300, now $240. Limited spots. Pro coaches, elite facility, college-readiness focus.",
      );
  }, []);

  const update = (k: string, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[String(i.path[0])] = i.message;
      });
      setErrors(fieldErrors);
      toast({ title: "Please fix the highlighted fields", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("ghl-webhook", {
        body: {
          form_type: "camp_lead_june15",
          data: {
            ...parsed.data,
            camp: "LPA June 15 Camp",
            offer: "20% off — $240 (reg. $300)",
            source: "/go landing page",
            submitted_at: new Date().toISOString(),
          },
        },
      });
      if (error) throw error;
      setSubmitted(true);
      toast({ title: "You're on the list!", description: "A coach will reach out shortly." });
    } catch (err) {
      console.error(err);
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header — logo only, no nav */}
      <header className="absolute top-0 left-0 right-0 z-50 py-5 px-6 lg:px-16">
        <img src={logoBadge} alt="Legendary Prep Academy" className="h-12 md:h-14 w-auto" />
      </header>

      {/* Urgency bar */}
      <div className="bg-primary text-primary-foreground text-center py-2.5 px-4 sticky top-0 z-40">
        <p className="font-bebas uppercase tracking-[0.2em] text-xs md:text-sm">
          <Flame className="inline w-3.5 h-3.5 mr-2 -mt-1" />
          Limited Time — 20% Off June 15 Camp · Spots Filling Fast
        </p>
      </div>

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden border-b border-border/10">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="container mx-auto px-6 lg:px-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: pitch */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-primary" />
                <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">
                  June 15 · One-Day Camp
                </span>
              </div>
              <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.85] mb-5">
                Train Like A <span className="text-primary">College-Ready</span> Athlete
              </h1>
              <p className="font-oswald text-base md:text-lg text-foreground/70 mb-6 max-w-xl">
                One day. Pro-level coaching. Velocity work, mechanics review, strength assessment,
                and a personalized development snapshot — all inside Arizona's premier baseball facility.
              </p>

              {/* Price block */}
              <div className="rounded-2xl border border-primary/40 bg-card/60 p-5 mb-6 max-w-md">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Flame className="w-4 h-4" />
                  <span className="font-oswald text-[10px] uppercase tracking-[0.3em]">Limited Time Offer</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-bebas text-5xl text-primary">$240</span>
                  <span className="font-oswald text-lg text-foreground/40 line-through">$300</span>
                  <span className="font-bebas text-sm text-accent uppercase tracking-wider">Save 20%</span>
                </div>
                <p className="font-oswald text-xs text-foreground/50 mt-2">
                  Discount applied when a coach confirms your spot. Submit your info to lock in pricing.
                </p>
              </div>

              {/* Camp facts */}
              <div className="grid grid-cols-3 gap-3 max-w-md mb-6">
                <div className="rounded-lg border border-border/20 bg-card/30 p-3">
                  <Calendar className="w-4 h-4 text-primary mb-1.5" />
                  <div className="font-bebas text-sm uppercase">June 15</div>
                </div>
                <div className="rounded-lg border border-border/20 bg-card/30 p-3">
                  <Clock className="w-4 h-4 text-primary mb-1.5" />
                  <div className="font-bebas text-sm uppercase">9a–12p</div>
                </div>
                <div className="rounded-lg border border-border/20 bg-card/30 p-3">
                  <MapPin className="w-4 h-4 text-primary mb-1.5" />
                  <div className="font-bebas text-sm uppercase">Phoenix</div>
                </div>
              </div>

              {/* Countdown */}
              <div>
                <p className="font-oswald text-[10px] uppercase tracking-[0.3em] text-foreground/50 mb-2">
                  Offer ends when camp begins
                </p>
                <div className="flex gap-2">
                  {[
                    { v: days, l: "Days" },
                    { v: hours, l: "Hrs" },
                    { v: minutes, l: "Min" },
                    { v: seconds, l: "Sec" },
                  ].map((u) => (
                    <div key={u.l} className="rounded-lg border border-border/20 bg-card/40 px-3 py-2 min-w-[58px] text-center">
                      <div className="font-bebas text-2xl text-primary leading-none">
                        {String(u.v).padStart(2, "0")}
                      </div>
                      <div className="font-oswald text-[9px] uppercase tracking-widest text-foreground/50 mt-1">
                        {u.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div id="reserve" className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-primary/30 bg-card/70 backdrop-blur shadow-2xl shadow-black/40 overflow-hidden">
                <div className="bg-primary text-primary-foreground px-5 py-4">
                  <h2 className="font-bebas text-2xl md:text-3xl uppercase leading-tight">
                    Reserve Your Spot — 20% Off
                  </h2>
                  <p className="font-oswald text-xs opacity-90 mt-1">
                    A coach will reach out within 24 hrs to confirm your discounted seat.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 text-center">
                    <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
                    <h3 className="font-bebas text-3xl uppercase mb-2">You're In Line</h3>
                    <p className="font-oswald text-sm text-foreground/70">
                      An LPA coach will call or text you shortly to lock in your 20% off spot for the June 15 camp.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="p-5 md:p-6 space-y-4">
                    <div>
                      <Label htmlFor="parent_name" className="font-oswald uppercase text-xs tracking-wider">
                        Parent / Guardian Name
                      </Label>
                      <Input id="parent_name" value={form.parent_name} onChange={(e) => update("parent_name", e.target.value)} className="mt-1.5" />
                      {errors.parent_name && <p className="text-destructive text-xs mt-1">{errors.parent_name}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="parent_email" className="font-oswald uppercase text-xs tracking-wider">Email</Label>
                        <Input id="parent_email" type="email" value={form.parent_email} onChange={(e) => update("parent_email", e.target.value)} className="mt-1.5" />
                        {errors.parent_email && <p className="text-destructive text-xs mt-1">{errors.parent_email}</p>}
                      </div>
                      <div>
                        <Label htmlFor="parent_phone" className="font-oswald uppercase text-xs tracking-wider">Phone</Label>
                        <Input id="parent_phone" type="tel" value={form.parent_phone} onChange={(e) => update("parent_phone", e.target.value)} className="mt-1.5" />
                        {errors.parent_phone && <p className="text-destructive text-xs mt-1">{errors.parent_phone}</p>}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-border/20">
                      <p className="font-oswald uppercase text-[10px] tracking-[0.3em] text-accent mb-3 mt-2">
                        About the Participant
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="participant_name" className="font-oswald uppercase text-xs tracking-wider">Participant Name</Label>
                      <Input id="participant_name" value={form.participant_name} onChange={(e) => update("participant_name", e.target.value)} className="mt-1.5" />
                      {errors.participant_name && <p className="text-destructive text-xs mt-1">{errors.participant_name}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="participant_age" className="font-oswald uppercase text-xs tracking-wider">Age of Participant</Label>
                        <Input id="participant_age" type="number" min={6} max={19} value={form.participant_age} onChange={(e) => update("participant_age", e.target.value)} className="mt-1.5" />
                        {errors.participant_age && <p className="text-destructive text-xs mt-1">{errors.participant_age}</p>}
                      </div>
                      <div>
                        <Label className="font-oswald uppercase text-xs tracking-wider">Current Grade</Label>
                        <Select value={form.participant_grade} onValueChange={(v) => update("participant_grade", v)}>
                          <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                          <SelectContent>
                            {["K","1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th"].map((g) => (
                              <SelectItem key={g} value={g}>{g}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.participant_grade && <p className="text-destructive text-xs mt-1">{errors.participant_grade}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label htmlFor="city" className="font-oswald uppercase text-xs tracking-wider">City</Label>
                        <Input id="city" value={form.city} onChange={(e) => update("city", e.target.value)} className="mt-1.5" />
                        {errors.city && <p className="text-destructive text-xs mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <Label className="font-oswald uppercase text-xs tracking-wider">State</Label>
                        <Select value={form.state} onValueChange={(v) => update("state", v)}>
                          <SelectTrigger className="mt-1.5"><SelectValue placeholder="State" /></SelectTrigger>
                          <SelectContent className="max-h-64">
                            {US_STATES.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
                          </SelectContent>
                        </Select>
                        {errors.state && <p className="text-destructive text-xs mt-1">{errors.state}</p>}
                      </div>
                    </div>

                    <div>
                      <Label className="font-oswald uppercase text-xs tracking-wider">Primary Position</Label>
                      <Select value={form.primary_position} onValueChange={(v) => update("primary_position", v)}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select position" /></SelectTrigger>
                        <SelectContent>
                          {["Pitcher","Catcher","Infield","Outfield","Two-Way","Undecided"].map((p) => (
                            <SelectItem key={p} value={p}>{p}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.primary_position && <p className="text-destructive text-xs mt-1">{errors.primary_position}</p>}
                    </div>

                    <div>
                      <Label className="font-oswald uppercase text-xs tracking-wider">Experience Level</Label>
                      <Select value={form.experience_level} onValueChange={(v) => update("experience_level", v)}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          {["Beginner (Little League)","Intermediate (Travel Ball)","Advanced (HS Varsity)","Elite (Showcase / College Bound)"].map((p) => (
                            <SelectItem key={p} value={p}>{p}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.experience_level && <p className="text-destructive text-xs mt-1">{errors.experience_level}</p>}
                    </div>

                    <div>
                      <Label className="font-oswald uppercase text-xs tracking-wider">Currently Plays On A Team?</Label>
                      <Select value={form.plays_on_team} onValueChange={(v) => update("plays_on_team", v)}>
                        <SelectTrigger className="mt-1.5"><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          {["School Team","Club / Travel Team","Both","Not Currently"].map((p) => (
                            <SelectItem key={p} value={p}>{p}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.plays_on_team && <p className="text-destructive text-xs mt-1">{errors.plays_on_team}</p>}
                    </div>

                    <div>
                      <Label htmlFor="goals" className="font-oswald uppercase text-xs tracking-wider">
                        Goals (Optional)
                      </Label>
                      <Textarea
                        id="goals"
                        rows={3}
                        value={form.goals}
                        onChange={(e) => update("goals", e.target.value)}
                        placeholder="What do you want to get out of this camp?"
                        className="mt-1.5"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.2em] text-base py-6 h-auto"
                    >
                      {submitting ? "Submitting…" : "Lock In 20% Off"}
                    </Button>
                    <p className="font-oswald text-[10px] text-foreground/40 text-center">
                      No payment required. A coach will reach out to confirm your spot.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 md:py-20 border-b border-border/10">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-primary" />
            <span className="font-oswald text-[10px] text-accent uppercase tracking-[0.4em]">Inside The Camp</span>
          </div>
          <h2 className="font-bebas text-4xl md:text-5xl uppercase leading-[0.9] mb-12">
            One Day. <span className="text-primary">Real Development.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src={facilityImg} alt="LPA training facility" className="rounded-2xl border border-border/20 w-full h-auto object-cover" />
            <div className="space-y-4">
              {[
                { icon: Trophy, t: "Pro & College-Level Coaches", d: "Direct instruction from staff that has played and coached at the highest levels." },
                { icon: Activity, t: "Velocity & Mechanics Work", d: "Throwing, hitting, and movement assessments using LPA's data-driven tools." },
                { icon: Dumbbell, t: "Strength & Mobility Screen", d: "Sport-specific evaluation to spotlight weak links and unlock performance." },
                { icon: Flame, t: "Personalized Next Steps", d: "Walk away with clear, coach-backed recommendations for your athlete." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex gap-4 rounded-xl border border-border/20 bg-card/30 p-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bebas text-xl uppercase tracking-wide">{t}</h3>
                    <p className="font-oswald text-sm text-foreground/60">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={athleteImg} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/70" />
        </div>
        <div className="container mx-auto px-6 lg:px-16 relative text-center">
          <h2 className="font-bebas text-4xl md:text-6xl uppercase leading-[0.9] mb-4">
            Spots Are <span className="text-primary">Limited.</span>
          </h2>
          <p className="font-oswald text-base text-foreground/60 max-w-xl mx-auto mb-8">
            The 20% off offer disappears when the camp fills — or on June 15th, whichever comes first.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-[0.2em] text-base md:text-lg px-12 py-6 h-auto"
          >
            <a href="#reserve">Reserve My Spot</a>
          </Button>
        </div>
      </section>

      {/* Minimal footer — legal only */}
      <footer className="py-8 border-t border-border/20">
        <div className="container mx-auto px-6 lg:px-16">
          <p className="text-center text-xs text-foreground/40 font-oswald">
            © {new Date().getFullYear()} Legendary Prep Academy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Go;