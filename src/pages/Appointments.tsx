import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addMonths, subMonths, isBefore, startOfDay } from "date-fns";
import { ChevronLeft, ChevronRight, Clock, CalendarIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/landing/FooterSection";
import lpaOutlawsMascot from "@/assets/lpa-outlaws-mascot.png";

const timeSlots = [
  "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM", "8:00 PM",
];

const bookingSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(50),
  last_name: z.string().trim().min(1, "Last name is required").max(50),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  address: z.string().max(200).optional(),
  parent_name: z.string().max(100).optional(),
  parent_phone: z.string().max(20).optional(),
  parent2_name: z.string().max(100).optional(),
  athlete_positions: z.string().max(100).optional(),
  athlete_dob: z.string().max(20).optional(),
  current_school: z.string().max(100).optional(),
  how_heard: z.string().max(100).optional(),
  referring_contact: z.string().max(100).optional(),
  special_requests: z.string().max(500).optional(),
  consent_sms: z.boolean().default(false),
});

type BookingForm = z.infer<typeof bookingSchema>;

const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

const Appointments = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<BookingForm>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { consent_sms: false },
  });

  const consentSms = watch("consent_sms");

  const today = startOfDay(new Date());
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });
  const startPad = getDay(monthStart);

  const onSubmit = async (data: BookingForm) => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time.");
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("tour_bookings").insert([{
        booking_date: format(selectedDate, "yyyy-MM-dd"),
        booking_time: selectedTime,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        address: data.address || null,
        parent_name: data.parent_name || null,
        parent_phone: data.parent_phone || null,
        parent2_name: data.parent2_name || null,
        athlete_positions: data.athlete_positions || null,
        athlete_dob: data.athlete_dob || null,
        current_school: data.current_school || null,
        how_heard: data.how_heard || null,
        referring_contact: data.referring_contact || null,
        special_requests: data.special_requests || null,
        consent_sms: data.consent_sms,
      }]);
      if (error) throw error;
      setIsBooked(true);
      toast.success("Tour booked successfully!");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isBooked) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-28 md:pt-36 pb-20 px-4 flex flex-col items-center justify-center text-center">
          <CheckCircle2 className="w-16 h-16 text-primary mb-6" />
          <h1 className="font-bebas text-4xl md:text-6xl uppercase mb-4">Tour Booked!</h1>
          <p className="font-oswald text-muted-foreground text-base md:text-lg max-w-md mb-2">
            Your tour is scheduled for <span className="text-foreground font-semibold">{selectedDate && format(selectedDate, "MMMM d, yyyy")}</span> at <span className="text-foreground font-semibold">{selectedTime}</span>.
          </p>
          <p className="font-oswald text-muted-foreground text-sm md:text-base max-w-md">
            We'll send a confirmation to your email. See you at the facility!
          </p>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-20 md:pt-24 overflow-hidden">
        <div className="relative h-36 md:h-64 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card via-background/80 to-background" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[160px]" />
          <h1 className="relative font-bebas text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase text-center leading-none">
            Book a <span className="text-primary">Tour</span>
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-16 pb-16 md:pb-20 max-w-4xl">
        {/* Service Card */}
        <div className="bg-card/60 border border-border/30 rounded-xl p-5 md:p-8 mb-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <img src={lpaOutlawsMascot} alt="LPA Outlaws" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          <div className="text-center sm:text-left">
            <h2 className="font-bebas text-2xl md:text-3xl uppercase">LPA Tour</h2>
            <p className="font-oswald text-sm md:text-base text-muted-foreground mt-1">
              Grab some time with us for a tour of our elite facility in Scottsdale, AZ.
            </p>
            <p className="font-oswald text-xs text-muted-foreground mt-1 flex items-center justify-center sm:justify-start gap-1.5">
              <Clock className="w-3.5 h-3.5" /> 1 hour
            </p>
          </div>
        </div>

        {/* Date & Time Picker */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Calendar */}
          <div className="bg-card/40 border border-border/20 rounded-xl p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <CalendarIcon className="w-4 h-4 text-primary" />
              <span className="font-bebas text-lg uppercase tracking-wide">Date</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="p-1 hover:text-primary transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-bebas text-base md:text-lg">{format(currentMonth, "MMMM yyyy")}</span>
              <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="p-1 hover:text-primary transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 mb-2">
              {DAYS.map((d, i) => (
                <div key={i} className="text-center font-oswald text-xs text-muted-foreground py-1">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: startPad }).map((_, i) => <div key={`pad-${i}`} />)}
              {days.map((day) => {
                const isPast = isBefore(day, today);
                const isSelected = selectedDate && format(day, "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd");
                return (
                  <button
                    key={day.toISOString()}
                    disabled={isPast}
                    onClick={() => setSelectedDate(day)}
                    className={`aspect-square rounded-full flex items-center justify-center font-oswald text-sm transition-all ${
                      isPast
                        ? "text-muted-foreground/30 cursor-not-allowed"
                        : isSelected
                          ? "bg-primary text-primary-foreground font-bold"
                          : "hover:bg-primary/20 text-foreground"
                    }`}
                  >
                    {format(day, "d")}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Slots */}
          <div className="bg-card/40 border border-border/20 rounded-xl p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-primary" />
              <span className="font-bebas text-lg uppercase tracking-wide">Time</span>
            </div>
            {!selectedDate ? (
              <p className="font-oswald text-sm text-muted-foreground text-center py-8">Select a date first</p>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`font-oswald text-sm md:text-base py-3 px-4 rounded-lg border transition-all ${
                      selectedTime === time
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border/30 hover:border-primary/50 text-foreground"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}
            {selectedDate && selectedTime && (
              <div className="mt-4 p-3 bg-primary/10 rounded-lg text-center">
                <p className="font-oswald text-sm text-foreground">
                  <span className="text-primary font-semibold">{format(selectedDate, "MMMM d, yyyy")}</span> at <span className="text-primary font-semibold">{selectedTime}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-card/40 border border-border/20 rounded-xl p-4 md:p-8">
          <h3 className="font-bebas text-xl md:text-2xl uppercase mb-5">Your Details</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">First Name *</Label>
              <Input {...register("first_name")} className="bg-background/50 font-oswald" />
              {errors.first_name && <p className="text-destructive text-xs mt-1 font-oswald">{errors.first_name.message}</p>}
            </div>
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">Last Name *</Label>
              <Input {...register("last_name")} className="bg-background/50 font-oswald" />
              {errors.last_name && <p className="text-destructive text-xs mt-1 font-oswald">{errors.last_name.message}</p>}
            </div>
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">Email *</Label>
              <Input type="email" {...register("email")} className="bg-background/50 font-oswald" />
              {errors.email && <p className="text-destructive text-xs mt-1 font-oswald">{errors.email.message}</p>}
            </div>
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">Phone *</Label>
              <Input type="tel" {...register("phone")} className="bg-background/50 font-oswald" />
              {errors.phone && <p className="text-destructive text-xs mt-1 font-oswald">{errors.phone.message}</p>}
            </div>
            <div className="sm:col-span-2">
              <Label className="font-oswald text-xs uppercase mb-1.5">Address</Label>
              <Input {...register("address")} className="bg-background/50 font-oswald" />
            </div>
          </div>

          <h3 className="font-bebas text-xl md:text-2xl uppercase mb-5">Additional Information</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">Parent/Guardian Name</Label>
              <Input {...register("parent_name")} className="bg-background/50 font-oswald" />
            </div>
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">Parent/Guardian Phone</Label>
              <Input type="tel" {...register("parent_phone")} className="bg-background/50 font-oswald" />
            </div>
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">2nd Parent/Guardian Name</Label>
              <Input {...register("parent2_name")} className="bg-background/50 font-oswald" />
            </div>
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">Athlete Positions</Label>
              <Input {...register("athlete_positions")} className="bg-background/50 font-oswald" />
            </div>
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">Athlete Date of Birth</Label>
              <Input {...register("athlete_dob")} placeholder="MM/DD/YYYY" className="bg-background/50 font-oswald" />
            </div>
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">Current/Future School</Label>
              <Input {...register("current_school")} className="bg-background/50 font-oswald" />
            </div>
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">How did you hear about us?</Label>
              <Input {...register("how_heard")} className="bg-background/50 font-oswald" />
            </div>
            <div>
              <Label className="font-oswald text-xs uppercase mb-1.5">Referring Contact Name</Label>
              <Input {...register("referring_contact")} className="bg-background/50 font-oswald" />
            </div>
            <div className="sm:col-span-2">
              <Label className="font-oswald text-xs uppercase mb-1.5">Special Requests</Label>
              <Textarea {...register("special_requests")} rows={3} className="bg-background/50 font-oswald" />
            </div>
          </div>

          {/* Consent */}
          <div className="flex items-start gap-3 mb-6">
            <Checkbox
              id="consent_sms"
              checked={consentSms}
              onCheckedChange={(v) => setValue("consent_sms", v === true)}
              className="mt-0.5"
            />
            <label htmlFor="consent_sms" className="font-oswald text-xs text-muted-foreground leading-relaxed cursor-pointer">
              By checking this box, I consent to receive transactional, marketing, and promotional messages. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
            </label>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !selectedDate || !selectedTime}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bebas uppercase tracking-widest text-lg py-6 h-auto border-glow transition-all duration-300 hover:scale-[1.02]"
          >
            {isSubmitting ? "Booking..." : "Book Tour"}
          </Button>
        </form>
      </div>

      <FooterSection />
    </div>
  );
};

export default Appointments;
