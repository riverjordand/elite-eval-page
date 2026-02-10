
-- Create applications table for student-athlete applications
CREATE TABLE public.applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Student Info
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  date_of_birth TEXT NOT NULL,
  
  -- Address
  street_address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'United States',
  postal_code TEXT NOT NULL,
  
  -- Dates
  projected_start_date TEXT NOT NULL,
  
  -- Parent/Guardian
  guardian1_name TEXT NOT NULL,
  guardian1_phone TEXT NOT NULL,
  guardian1_email TEXT NOT NULL,
  guardian2_name TEXT,
  guardian2_phone TEXT,
  guardian2_email TEXT,
  
  -- Academics
  hs_grad_year TEXT NOT NULL,
  grade_level TEXT NOT NULL,
  current_school TEXT NOT NULL,
  gpa TEXT NOT NULL,
  
  -- Athletics
  sport TEXT NOT NULL,
  primary_position TEXT NOT NULL,
  secondary_position TEXT NOT NULL,
  bats TEXT NOT NULL,
  throws TEXT NOT NULL,
  best_60_yard TEXT,
  max_exit_velo TEXT,
  max_pitching_speed TEXT,
  player_video_url TEXT,
  sport_experience TEXT NOT NULL,
  short_term_goals TEXT NOT NULL,
  long_term_goals TEXT NOT NULL,
  verbal_commitment BOOLEAN NOT NULL DEFAULT false,
  commitment_details TEXT,
  additional_info TEXT,
  extracurricular TEXT NOT NULL,
  community_service TEXT,
  host_family_needed BOOLEAN NOT NULL DEFAULT false,
  tour_status TEXT NOT NULL DEFAULT 'Needed',
  dietary_restrictions TEXT,
  medical_conditions TEXT,
  
  -- Consent
  consent_transactional BOOLEAN NOT NULL DEFAULT false,
  consent_marketing BOOLEAN NOT NULL DEFAULT false,
  
  -- Admin
  reviewed BOOLEAN NOT NULL DEFAULT false
);

-- Enable RLS
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Anyone can submit applications
CREATE POLICY "Anyone can submit applications"
ON public.applications
FOR INSERT
WITH CHECK (true);

-- Admins can view all applications
CREATE POLICY "Admins can view all applications"
ON public.applications
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update applications
CREATE POLICY "Admins can update applications"
ON public.applications
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));
