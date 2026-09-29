import {NextResponse} from "next/server";
import {configuredEmailSettings,sendResendEmail} from "../../../../lib/resend";
import {envReady} from "../../../../lib/360";
function escapeHtml(value:string){return value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#39;");}

export async function POST(req:Request){
  try{
    if(!envReady()) return NextResponse.json({error:"360 review storage is not configured yet. Add SUPABASE_URL and SUPABASE_SECRET_KEY in Vercel before sending invitations."},{status:503});
    const body=await req.json();
    const inviterName=String(body.inviterName||"").trim();
    const participantName=String(body.participantName||"").trim();
    const participantEmail=String(body.participantEmail||"").trim();
    const selfAnswers=Array.isArray(body.selfAnswers)?body.selfAnswers.map(Number):[];
    const reviewerEmails=Array.isArray(body.reviewerEmails)?Array.from(new Set(body.reviewerEmails.map((x:string)=>String(x||"").trim().toLowerCase()).filter(Boolean))):[];
    const invitationMessage=String(body.invitationMessage||"").trim();
    if(!inviterName||!participantName||!/^\S+@\S+\.\S+$/.test(participantEmail)||selfAnswers.length!==18||selfAnswers.some((n:number)=>!Number.isInteger(n)||n<1||n>5)||reviewerEmails.length<1||reviewerEmails.length>3) return NextResponse.json({error:"Please provide your name, participant name and email, a completed self-assessment, and 1–3 reviewer emails."},{status:400});
    if(reviewerEmails.some((e:string)=>!/^\S+@\S+\.\S+$/.test(e))) return NextResponse.json({error:"Please check the reviewer email addresses."},{status:400});

    const base=process.env.NEXT_PUBLIC_SITE_URL||"https://www.peoplecompound.com";
    const session=await fetch(`${process.env.SUPABASE_URL}/rest/v1/pc_360_sessions`,{method:"POST",headers:{apikey:process.env.SUPABASE_SECRET_KEY!,"Content-Type":"application/json",Prefer:"return=representation"},body:JSON.stringify({inviter_name:inviterName,participant_name:participantName,participant_email:participantEmail,self_answers:selfAnswers,invitation_message:invitationMessage})});
    if(!session.ok) throw new Error(await session.text());
    const [sessionRow]=await session.json();
    const reviewers=[];
    for(const email of reviewerEmails){
      const token=crypto.randomUUID()+crypto.randomUUID().replaceAll("-","");
      const r=await fetch(`${process.env.SUPABASE_URL}/rest/v1/pc_360_reviewers`,{method:"POST",headers:{apikey:process.env.SUPABASE_SECRET_KEY!,"Content-Type":"application/json",Prefer:"return=representation"},body:JSON.stringify({session_id:sessionRow.id,reviewer_email:email,token})});
      if(!r.ok) throw new Error(await r.text());
      const [rr]=await r.json(); reviewers.push(rr);
      const personalized=invitationMessage.replaceAll("{{INVITER_NAME}}",inviterName).replaceAll("{{PARTICIPANT_NAME}}",participantName);
      const safeMessage=escapeHtml(personalized);
      const html=`<div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#17231F"><p style="color:#2F7D5A;font-weight:800">People Compound — People Strategy for What's Next.</p><h2 style="color:#0B3B5A">360 Leadership Review Invitation</h2><p>${safeMessage.replace(/\n/g,"<br/>")}</p><p><a href="${base}/assessments/leadership/360/review?token=${encodeURIComponent(token)}" style="display:inline-block;padding:12px 18px;background:#2F7D5A;color:#fff;border-radius:999px;text-decoration:none;font-weight:700">Complete the 360 Review →</a></p><p style="font-size:12px;color:#66736D">Please provide candid, behavior-based feedback. Your responses will be combined with the participant's self-assessment and other completed reviewer responses.</p></div>`;
      const mail=await sendResendEmail({from:configuredEmailSettings().from,to:[email],subject:`360 Leadership Review invitation for ${participantName}`,html,reply_to:participantEmail});
      if(!mail.ok) return NextResponse.json({error:`The 360 session was created, but an invitation could not be sent to ${email}. ${mail.message}`},{status:502});
    }
    return NextResponse.json({ok:true,sessionId:sessionRow.id,invited:reviewers.length});
  }catch(e:any){console.error("360 invite error",e);return NextResponse.json({error:"We couldn't create the 360 review. Please try again."},{status:500});}
}
