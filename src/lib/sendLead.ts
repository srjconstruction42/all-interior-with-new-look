export const LEAD_EMAIL = "srjconstruction42@gmail.com";

// Sends the form to LEAD_EMAIL through FormSubmit (no backend needed).
// First time only: FormSubmit emails an activation link to LEAD_EMAIL. Click it once.
export async function sendLead(subject: string, fields: Record<string, string>) {
  const r = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _subject: subject, _template: "table", _captcha: "false", _honey: "", ...fields }),
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok || String(d.success) === "false") throw new Error("send failed");
}
