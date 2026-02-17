import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { form_type, data } = body;

    if (!form_type || !data) {
      return new Response(JSON.stringify({ error: 'Missing form_type or data' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // Route to the correct GHL webhook based on form type
    const webhookUrl = form_type === 'application'
      ? Deno.env.get('GHL_APPLICATION_WEBHOOK_URL')
      : Deno.env.get('GHL_WEBHOOK_URL');

    if (!webhookUrl) {
      throw new Error(`Webhook URL not configured for form_type: ${form_type}`);
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ form_type, ...data }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`GHL webhook failed [${response.status}]: ${errorText}`);
      // Don't fail the user's submission - just log the error
    } else {
      await response.text(); // consume body
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('GHL webhook error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
