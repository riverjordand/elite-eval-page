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
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black uppercase">
            Book Your Free Evaluation
          </DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll reach out to schedule your free
            college-ready player evaluation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="parentName">Parent Name *</Label>
            <Input
              id="parentName"
              value={formData.parentName}
              onChange={(e) =>
                setFormData({ ...formData, parentName: e.target.value })
              }
              placeholder="John Smith"
            />
            {errors.parentName && (
              <p className="text-sm text-destructive mt-1">{errors.parentName}</p>
            )}
          </div>

          <div>
            <Label htmlFor="playerName">Player Name *</Label>
            <Input
              id="playerName"
              value={formData.playerName}
              onChange={(e) =>
                setFormData({ ...formData, playerName: e.target.value })
              }
              placeholder="Mike Smith"
            />
            {errors.playerName && (
              <p className="text-sm text-destructive mt-1">{errors.playerName}</p>
            )}
          </div>

          <div>
            <Label htmlFor="playerAge">Player Age/Grade *</Label>
            <Input
              id="playerAge"
              value={formData.playerAge}
              onChange={(e) =>
                setFormData({ ...formData, playerAge: e.target.value })
              }
              placeholder="16 / Sophomore"
            />
            {errors.playerAge && (
              <p className="text-sm text-destructive mt-1">{errors.playerAge}</p>
            )}
          </div>

          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone">Phone *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="(555) 123-4567"
            />
            {errors.phone && (
              <p className="text-sm text-destructive mt-1">{errors.phone}</p>
            )}
          </div>

          <div>
            <Label htmlFor="primaryGoal">Primary Goal *</Label>
            <Select
              value={formData.primaryGoal}
              onValueChange={(value) =>
                setFormData({ ...formData, primaryGoal: value })
              }
            >
              <SelectTrigger id="primaryGoal">
                <SelectValue placeholder="Select a goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="college-recruitment">
                  College Recruitment
                </SelectItem>
                <SelectItem value="skill-development">
                  Skill Development
                </SelectItem>
                <SelectItem value="velocity-increase">
                  Velocity Increase
                </SelectItem>
                <SelectItem value="injury-prevention">
                  Injury Prevention
                </SelectItem>
                <SelectItem value="overall-improvement">
                  Overall Improvement
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.primaryGoal && (
              <p className="text-sm text-destructive mt-1">{errors.primaryGoal}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            size="lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Book Free Evaluation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EvaluationForm;