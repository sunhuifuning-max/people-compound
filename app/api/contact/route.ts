import { NextResponse } from "next/server";
import { configuredEmailSettings, sendResendEmail } from "../../../lib/resend";

export async function POST(req: Request) {
  try {
    const b = await req.json();
    const name = String(b.name || "").trim();
    const email = String(b.email || "").trim();
    const company = String(b.company || "").trim();
    const message = String(b.message || "").trim();
    const topic = String(b.topic || "").trim();
    if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
      return NextResponse.json({ error: "Please provide your name, work email, and a short description of what you need." }, { status: 400 });
    }

    const { from, contactTo } = configuredEmailSettings();
    const html = `<h2>New People Compound inquiry</h2><p><strong>Name:</strong> ${esc(name)}</p><p><strong>Email:</strong> ${esc(email)}</p><p><strong>Company:</strong> ${esc(company)}</p><p><strong>Starting point:</strong> ${esc(topic)}</p><p><strong>Message:</strong></p><p>${esc(message).replace(/\n/g, "<br>")}</p>`;
    const result = await sendResendEmail({
      from,
      to: [contactTo],
      reply_to: email,
      subject: `People Compound inquiry — ${name}`,
      html,
    });

    if (!result.ok) {
      return NextResponse.json({
        error: result.status === 503
          ? "Email delivery is not configured yet. Please email helen.sun@peoplecompound.com directly."
          : "We received your inquiry, but the email notification could not be sent. Please try again or email helen.sun@peoplecompound.com directly.",
      }, { status: 502 });
    }

    return NextResponse.json({ status: "received", delivery: "sent" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again or email helen.sun@peoplecompound.com directly." }, { status: 500 });
  }
}

function esc(v: string) {
  return v.replace(/[&<>'"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]!));
}
