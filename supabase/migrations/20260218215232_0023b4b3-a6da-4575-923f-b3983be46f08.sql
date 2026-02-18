CREATE TABLE public.liability_waivers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  athlete_first_name TEXT NOT NULL,
  athlete_last_name TEXT NOT NULL,
  athlete_phone TEXT NOT NULL,
  athlete_email TEXT NOT NULL,
  date_of_birth TEXT NOT NULL,
  primary_position TEXT NOT NULL,
  state TEXT NOT NULL,
  usage_type TEXT NOT NULL,
  other_usage_type TEXT,
  coach_instructor_name TEXT,
  team_org_name TEXT,
  parent_guardian_name TEXT,
  parent_guardian_phone TEXT,
  parent_guardian_email TEXT,
  signature TEXT NOT NULL,
  consent_marketing BOOLEAN NOT NULL DEFAULT false
);

ALTER TABLE public.liability_waivers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit a waiver (public form)
CREATE POLICY "Anyone can submit a liability waiver"
  ON public.liability_waivers
  FOR INSERT
  WITH CHECK (true);

-- Only admins can view waivers
CREATE POLICY "Admins can view liability waivers"
  ON public.liability_waivers
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );
