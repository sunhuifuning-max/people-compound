import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const b=await req.json(); const name=String(b.name||"").trim(), email=String(b.email||"").trim(), company=String(b.company||"").trim(), message=String(b.message||"").trim(), topic=String(b.topic||"").trim();
    if(!name||!/^\S+@\S+\.\S+$/.test(email)||!message) return NextResponse.json({error:"Please provide your name, work email, and a short description of what you need."},{status:400});
    const key=process.env.RESEND_API_KEY, from=process.env.REPORT_FROM_EMAIL, to=process.env.CONTACT_TO_EMAIL || process.env.REPORT_FROM_EMAIL;
    if(!key||!from||!to) return NextResponse.json({status:"received",delivery:"not_configured"});
    const html=`<h2>New People Compound inquiry</h2><p><strong>Name:</strong> ${esc(name)}</p><p><strong>Email:</strong> ${esc(email)}</p><p><strong>Company:</strong> ${esc(company)}</p><p><strong>Starting point:</strong> ${esc(topic)}</p><p><strong>Message:</strong></p><p>${esc(message).replace(/\n/g,"<br>")}</p>`;
    const r=await fetch("https://api.resend.com/emails",{method:"POST",headers:{Authorization:`Bearer ${key}`,"Content-Type":"application/json"},body:JSON.stringify({from,to:[to],reply_to:email,subject:`People Compound inquiry — ${name}`,html})});
    if(!r.ok) return NextResponse.json({error:"We received your inquiry, but couldn't send the notification. Please email us directly."},{status:502});
    return NextResponse.json({status:"received",delivery:"sent"});
  } catch { return NextResponse.json({error:"Something went wrong. Please try again."},{status:500}); }
}
function esc(v:string){return v.replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]!))}
