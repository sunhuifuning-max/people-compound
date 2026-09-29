import { NextResponse } from "next/server";
import { buildReport, reportHtml, type ReportType } from "../../../../lib/assessmentReports";
import { configuredEmailSettings, sendResendEmail } from "../../../../lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const type = body.type as ReportType;
    const email = String(body.email || "").trim();
    const name = String(body.name || "").trim() || "there";
    const answers = Array.isArray(body.answers) ? body.answers.map(Number) : [];
    if (!["leadership", "organization-health"].includes(type)) return NextResponse.json({ error: "Invalid assessment." }, { status: 400 });
    const expected = type === "leadership" ? 18 : 27;
    if (answers.length !== expected || answers.some((n: number) => !Number.isInteger(n) || n < 1 || n > 5)) return NextResponse.json({ error: "Please complete every question." }, { status: 400 });
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });

    const report = buildReport(type, answers);
    const { from } = configuredEmailSettings();
    const subject = type === "leadership" ? "Your People Compound Leadership Assessment" : "Your People Compound Organizational Health Check";
    const result = await sendResendEmail({
      from,
      to: [email],
      subject,
      html: reportHtml(report, name),
    });

    if (!result.ok) {
      return NextResponse.json({
        error: result.status === 503
          ? "Your results were generated, but email delivery is not configured yet. Please email helen.sun@peoplecompound.com if you need help."
          : "Your results were generated, but the email could not be delivered. Please try again. If the issue continues, email helen.sun@peoplecompound.com.",
      }, { status: 502 });
    }

    return NextResponse.json({ report, delivery: "sent" });
  } catch (error) {
    console.error("Assessment report error:", error);
    return NextResponse.json({ error: "We couldn't generate the report. Please try again." }, { status: 500 });
  }
}
