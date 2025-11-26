import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const formSchema = z.object({
  parentName: z.string().trim().min(1, "Parent name is required").max(100),
  playerName: z.string().trim().min(1, "Player name is required").max(100),
  playerAge: z.string().trim().min(1, "Player age/grade is required").max(50),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(10, "Valid phone number required").max(20),
  primaryGoal: z.string().min(1, "Please select a goal"),
});

interface EvaluationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EvaluationForm = ({ open, onOpenChange }: EvaluationFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    parentName: "",
    playerName: "",
    playerAge: "",
    email: "",
    phone: "",
    primaryGoal: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      const validatedData = formSchema.parse(formData);

      // Submit to database
      const { error } = await supabase.from("lead_submissions").insert({
        parent_name: validatedData.parentName,
        player_name: validatedData.playerName,
        player_age: validatedData.playerAge,
        email: validatedData.email,
        phone: validatedData.phone,
        primary_goal: validatedData.primaryGoal,
        lead_magnet_source: "free-evaluation",
      });

      if (error) throw error;

      toast({
        title: "Success!",
        description: "We'll reach out soon to schedule your free evaluation.",
      });

      // Reset form and close modal
      setFormData({
        parentName: "",
        playerName: "",
        playerAge: "",
        email: "",
        phone: "",
        primaryGoal: "",
      });
      onOpenChange(false);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3 pb-6 border-b border-border">
          <DialogTitle className="text-3xl md:text-4xl font-bebas font-black uppercase tracking-wide text-center">
            Book Your Free <span className="text-primary">Evaluation</span>
          </DialogTitle>
          <DialogDescription className="text-center font-oswald text-base">
            Fill out the form below and our team will reach out within 24 hours to schedule your personalized college-ready player evaluation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 pt-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="parentName" className="font-oswald font-semibold uppercase text-sm tracking-wide">
                Parent Name *
              </Label>
              <Input
                id="parentName"
                value={formData.parentName}
                onChange={(e) =>
                  setFormData({ ...formData, parentName: e.target.value })
                }
                placeholder="John Smith"
                className="h-12 font-oswald"
              />
              {errors.parentName && (
                <p className="text-sm text-destructive mt-1 font-oswald">{errors.parentName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="playerName" className="font-oswald font-semibold uppercase text-sm tracking-wide">
                Player Name *
              </Label>
              <Input
                id="playerName"
                value={formData.playerName}
                onChange={(e) =>
                  setFormData({ ...formData, playerName: e.target.value })
                }
                placeholder="Mike Smith"
                className="h-12 font-oswald"
              />
              {errors.playerName && (
                <p className="text-sm text-destructive mt-1 font-oswald">{errors.playerName}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="playerAge" className="font-oswald font-semibold uppercase text-sm tracking-wide">
              Player Age/Grade *
            </Label>
            <Input
              id="playerAge"
              value={formData.playerAge}
              onChange={(e) =>
                setFormData({ ...formData, playerAge: e.target.value })
              }
              placeholder="e.g. 16 / Sophomore"
              className="h-12 font-oswald"
            />
            {errors.playerAge && (
              <p className="text-sm text-destructive mt-1 font-oswald">{errors.playerAge}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-oswald font-semibold uppercase text-sm tracking-wide">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="john@example.com"
                className="h-12 font-oswald"
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-1 font-oswald">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="font-oswald font-semibold uppercase text-sm tracking-wide">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder="(555) 123-4567"
                className="h-12 font-oswald"
              />
              {errors.phone && (
                <p className="text-sm text-destructive mt-1 font-oswald">{errors.phone}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="primaryGoal" className="font-oswald font-semibold uppercase text-sm tracking-wide">
              What is your primary goal? *
            </Label>
            <Select
              value={formData.primaryGoal}
              onValueChange={(value) =>
                setFormData({ ...formData, primaryGoal: value })
              }
            >
              <SelectTrigger id="primaryGoal" className="h-12 font-oswald">
                <SelectValue placeholder="Select your primary goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="college-recruitment" className="font-oswald">
                  College Recruitment
                </SelectItem>
                <SelectItem value="skill-development" className="font-oswald">
                  Skill Development
                </SelectItem>
                <SelectItem value="velocity-increase" className="font-oswald">
                  Velocity Increase
                </SelectItem>
                <SelectItem value="injury-prevention" className="font-oswald">
                  Injury Prevention
                </SelectItem>
                <SelectItem value="overall-improvement" className="font-oswald">
                  Overall Improvement
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.primaryGoal && (
              <p className="text-sm text-destructive mt-1 font-oswald">{errors.primaryGoal}</p>
            )}
          </div>

          <div className="pt-4 border-t border-border">
            <Button
              type="submit"
              className="w-full h-14 text-lg font-bebas uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Your Free Evaluation →"}
            </Button>
            <p className="text-center text-sm text-muted-foreground font-oswald mt-4">
              We'll contact you within 24 hours to confirm your evaluation time
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EvaluationForm;