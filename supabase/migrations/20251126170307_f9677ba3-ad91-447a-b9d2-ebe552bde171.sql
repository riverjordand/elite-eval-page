-- Add contacted status and appointment date to lead_submissions
ALTER TABLE public.lead_submissions 
ADD COLUMN contacted BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN appointment_date TIMESTAMPTZ;

-- RLS policy: Only admins can update submissions
CREATE POLICY "Admins can update submissions"
ON public.lead_submissions
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));