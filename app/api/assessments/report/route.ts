import { NextResponse } from "next/server";
import { buildReport, reportHtml, type ReportType } from "../../../../lib/assessmentReports";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const type = body.type as ReportType;
    const email = String(body.email || "").trim();
    const name = String(body.name || "").trim() || "there";
    const answers = Array.isArray(body.answers) ? body.answers.map(Number) : [];
    if (!["leadership", "organization-health"].includes(type)) return NextResponse.json({error:"Invalid assessment."},{status:400});
    const expected = type === "leadership" ? 18 : 27;
    if (answers.length !== expected || answers.some((n:number)=>!Number.isInteger(n)||n<1||n>5)) return NextResponse.json({error:"Please complete every question."},{status:400});
    if (!/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({error:"Please enter a valid email address."},{status:400});
    const report = buildReport(type, answers);
    const key = process.env.RESEND_API_KEY;
    const from = process.env.REPORT_FROM_EMAIL;
    if (!key || !from) return NextResponse.json({report, delivery:"not_configured"});
    const subject = type === "leadership" ? "Your People Compound Leadership Assessment" : "Your People Compound Organizational Health Check";
    const res = await fetch("https://api.resend.com/emails", {method:"POST", headers:{"Authorization":`Bearer ${key}`,"Content-Type":"application/json"}, body:JSON.stringify({from,to:[email],subject,html:reportHtml(report,name)})});
    if (!res.ok) return NextResponse.json({error:"Your results were generated, but the email could not be delivered. Please try again."},{status:502});
    return NextResponse.json({report,delivery:"sent"});
  } catch { return NextResponse.json({error:"We couldn't generate the report. Please try again."},{status:500}); }
}
