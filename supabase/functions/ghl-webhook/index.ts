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

    // Also notify Slack for camp leads
    if (form_type === 'camp_lead_june15') {
      try {
        await postToSlack(data);
      } catch (slackErr) {
        console.error('Slack notify failed:', slackErr);
      }
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

async function postToSlack(data: Record<string, any>) {
  const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
  const SLACK_API_KEY = Deno.env.get('SLACK_API_KEY');
  if (!LOVABLE_API_KEY || !SLACK_API_KEY) {
    console.warn('Slack not configured');
    return;
  }

  const channel = '#new-leads';
  const fields = Object.entries(data)
    .filter(([, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `*${k}:* ${typeof v === 'string' ? v : JSON.stringify(v)}`)
    .join('\n');

  const text = `:baseball: *New LPA Camp Lead (June 15)*\n${fields}`;

  const res = await fetch('https://connector-gateway.lovable.dev/slack/api/chat.postMessage', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${LOVABLE_API_KEY}`,
      'X-Connection-Api-Key': SLACK_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ channel, text, unfurl_links: false }),
  });
  const body = await res.text();
  if (!res.ok) {
    console.error(`Slack postMessage HTTP ${res.status}: ${body}`);
    return;
  }
  try {
    const json = JSON.parse(body);
    if (!json.ok) console.error(`Slack API error: ${json.error}`);
  } catch {
    console.error(`Slack non-JSON response: ${body.slice(0, 300)}`);
  }
}
