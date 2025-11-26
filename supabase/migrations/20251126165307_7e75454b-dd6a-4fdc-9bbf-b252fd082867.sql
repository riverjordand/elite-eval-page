-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policy: Users can view their own roles
CREATE POLICY "Users can view own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- RLS policy: Only admins can insert roles
CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create lead_submissions table
CREATE TABLE public.lead_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name TEXT NOT NULL,
  player_name TEXT NOT NULL,
  player_age TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  primary_goal TEXT NOT NULL,
  lead_magnet_source TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable RLS on lead_submissions
ALTER TABLE public.lead_submissions ENABLE ROW LEVEL SECURITY;

-- RLS policy: Only admins can view submissions
CREATE POLICY "Admins can view all submissions"
ON public.lead_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- RLS policy: Anyone can insert submissions (for public form)
CREATE POLICY "Anyone can submit forms"
ON public.lead_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (true);