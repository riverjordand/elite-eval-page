
-- Create tour_bookings table
CREATE TABLE public.tour_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  booking_date DATE NOT NULL,
  booking_time TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  address TEXT,
  parent_name TEXT,
  parent_phone TEXT,
  parent2_name TEXT,
  athlete_positions TEXT,
  athlete_dob TEXT,
  current_school TEXT,
  how_heard TEXT,
  referring_contact TEXT,
  special_requests TEXT,
  consent_sms BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Enable RLS
ALTER TABLE public.tour_bookings ENABLE ROW LEVEL SECURITY;

-- Anyone can submit a booking
CREATE POLICY "Anyone can submit tour bookings"
ON public.tour_bookings
FOR INSERT
WITH CHECK (true);

-- Admins can view all bookings
CREATE POLICY "Admins can view tour bookings"
ON public.tour_bookings
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update bookings
CREATE POLICY "Admins can update tour bookings"
ON public.tour_bookings
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));
