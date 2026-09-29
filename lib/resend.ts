export type EmailResult = { ok: true; id?: string } | { ok: false; status: number; message: string };

export async function sendResendEmail(payload: {
  from: string;
  to: string[];
  subject: string;
  html: string;
  reply_to?: string;
}): Promise<EmailResult> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, status: 503, message: "Email delivery is not configured on this deployment." };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const raw = await response.text();
  let detail = "Resend rejected the email request.";
  try {
    const parsed = JSON.parse(raw);
    detail = parsed?.message || parsed?.error || detail;
  } catch {
    if (raw) detail = raw.slice(0, 300);
  }

  if (!response.ok) {
    console.error("Resend email error:", { status: response.status, detail });
    return { ok: false, status: response.status, message: detail };
  }

  let id: string | undefined;
  try { id = JSON.parse(raw)?.id; } catch {}
  return { ok: true, id };
}

export function configuredEmailSettings() {
  return {
    from: process.env.REPORT_FROM_EMAIL || "People Compound <helen.sun@peoplecompound.com>",
    contactTo: process.env.CONTACT_TO_EMAIL || "helen.sun@peoplecompound.com",
  };
}
