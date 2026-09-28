export type ReportType = "leadership" | "organization-health";

export const leadershipSections = [
  "Build Relationships","Develop People","Deal with Ambiguity","Lead Change","Inspire Others","Think Critically & Strategically","Communicate Clearly","Create Accountability","Active Listening"
];

export const organizationDimensions = [
  "Strategy","Leadership","Organization","Talent","Performance","Culture","Rewards","Development","HR Operations"
];

const leadershipGuidance: Record<string,string> = {
  "Build Relationships":"Create deliberate relationship-building habits across functions and invest in trust before it is urgently needed.",
  "Develop People":"Use regular coaching, stretch opportunities and tailored support to build independence and capability.",
  "Deal with Ambiguity":"Make assumptions explicit, communicate what is known and unknown, and create a path forward without waiting for perfect information.",
  "Lead Change":"Clarify the purpose and impact of change, listen to resistance, and help people translate change into action.",
  "Inspire Others":"Connect daily work to a meaningful purpose and reinforce progress, especially when goals are difficult.",
  "Think Critically & Strategically":"Step beyond the immediate decision to consider cross-functional consequences, trade-offs and longer-term effects.",
  "Communicate Clearly":"Lead with the core message, adjust detail for the audience, and check that understanding matches intent.",
  "Create Accountability":"Make ownership and expectations explicit, then address missed commitments directly and constructively.",
  "Active Listening":"Slow down before responding, ask questions to understand perspective, and demonstrate that disagreement can be explored productively."
};

const orgGuidance: Record<string,string> = {
  Strategy:"Connect workforce and capability decisions to the business plan and upcoming growth requirements.",
  Leadership:"Clarify leadership expectations, strengthen capability where needed, and reinforce the behaviors the organization wants repeated.",
  Organization:"Clarify roles, decision rights, ownership and escalation paths before complexity creates avoidable friction.",
  Talent:"Strengthen the talent engine from success profiles and sourcing through assessment, selection, onboarding and quality-of-hire measurement.",
  Performance:"Make expectations visible, equip managers to give useful feedback, and use performance management to improve performance.",
  Culture:"Translate values into observable behaviors, decision norms and mechanisms for constructive challenge.",
  Rewards:"Ensure compensation and benefits reinforce the talent strategy and that employees understand how performance and progression connect.",
  Development:"Build practical development opportunities and a repeatable approach to future leaders and critical capabilities.",
  "HR Operations":"Build reliable, scalable policies, systems, manager tools and people data that support better decisions."
};


function actionPlanText(type: ReportType, name: string, phase: "30" | "60" | "90") {
  if (type === "leadership") {
    const map: Record<string,string> = {
      "Build Relationships":"Identify three relationships that would strengthen trust or execution. Schedule deliberate touchpoints and define what a productive relationship looks like.",
      "Develop People":"Choose one person to coach. Agree on one stretch opportunity, one recurring coaching conversation, and one observable development goal.",
      "Deal with Ambiguity":"For one uncertain priority, document assumptions, what is known, what is unknown, and the next decision needed. Review the assumptions as new information arrives.",
      "Lead Change":"For one active change, clarify the purpose, impact, stakeholders, resistance points, and the behaviors required to move forward.",
      "Inspire Others":"Connect one important goal to the broader purpose. Repeat the connection in team conversations and recognize progress toward it.",
      "Think Critically & Strategically":"Take one upcoming decision and map cross-functional impacts, trade-offs, longer-term consequences, and second-order effects before deciding.",
      "Communicate Clearly":"Choose one recurring communication and redesign it around the core message, audience needs, level of detail, and a clear call to action.",
      "Create Accountability":"Make ownership, priorities, deadlines, and success measures explicit for one important commitment. Address slippage early.",
      "Active Listening":"In one disagreement each week, ask questions before advocating your position. Reflect back the other person's perspective before responding."
    };
    const base=map[name];
    if(phase==="30") return base;
    if(phase==="60") return `Practice the behavior consistently and ask a trusted colleague, manager, or coach for specific feedback on ${name}. Capture one example of what changed.`;
    return `Review the evidence from the past 90 days, identify what is becoming habitual, and choose the next leadership behavior to strengthen in the same cycle.`;
  }
  const map: Record<string,string> = {
    Strategy:"Translate the business plan into a short list of critical capabilities, workforce assumptions, and hiring priorities for the next stage.",
    Leadership:"Clarify leadership expectations and identify one or two capability gaps that could affect execution.",
    Organization:"Document the most important roles, decision rights, ownership and escalation paths where ambiguity is slowing execution.",
    Talent:"Define success profiles for critical roles and review sourcing, assessment, selection, onboarding and quality-of-hire measures.",
    Performance:"Clarify expectations for priority roles and equip managers to give timely feedback and address performance issues.",
    Culture:"Translate values into a small set of observable behaviors and team decision norms that leaders can reinforce.",
    Rewards:"Review whether pay, incentives and benefits support the talent strategy and whether employees understand progression and performance connections.",
    Development:"Identify critical capabilities and create practical development opportunities, including a focused approach for future leaders.",
    "HR Operations":"Identify the HR processes, policies, systems and people data that create the most friction and prioritize the highest-value fixes."
  };
  const base=map[name];
  if(phase==="30") return base;
  if(phase==="60") return `Implement the priority change, define an owner and measure, and gather feedback from managers and employees affected by ${name.toLowerCase()}.`;
  return `Review the evidence and operating impact, standardize what is working, and set the next improvement priority for ${name.toLowerCase()}.`;
}

export function buildReport(type: ReportType, answers: number[]) {
  const names = type === "leadership" ? leadershipSections : organizationDimensions;
  const perDimension = type === "leadership" ? 2 : 3;
  const scores = names.map((name, i) => {
    const vals = answers.slice(i * perDimension, i * perDimension + perDimension);
    const score = vals.reduce((a,b)=>a+b,0) / perDimension;
    return { name, score: Number(score.toFixed(1)) };
  });
  const sorted = [...scores].sort((a,b)=>b.score-a.score);
  const strengths = sorted.slice(0,2);
  const focus = [...sorted].reverse().slice(0, type === "leadership" ? 2 : 3);
  const guidance = type === "leadership" ? leadershipGuidance : orgGuidance;
  return {
    title: type === "leadership" ? "People Compound Leadership Assessment" : "People Compound Organizational Health Check",
    subtitle: type === "leadership" ? "A snapshot of nine leadership capabilities" : "A snapshot of nine people and organizational dimensions",
    scores, strengths, focus,
    recommendations: focus.map(x => ({name:x.name, text:guidance[x.name]})),
    actionPlan: focus.map(x => ({
      name:x.name,
      days30:actionPlanText(type,x.name,"30"),
      days60:actionPlanText(type,x.name,"60"),
      days90:actionPlanText(type,x.name,"90")
    })),
    generatedAt: new Date().toISOString()
  };
}

export function reportHtml(report: ReturnType<typeof buildReport>, recipient?: string) {
  const rows = report.scores.map(x => `<tr><td>${escapeHtml(x.name)}</td><td>${x.score}/5</td><td><div style="background:#e8ebe6;height:8px;border-radius:8px"><div style="width:${x.score/5*100}%;height:8px;background:#315b4b;border-radius:8px"></div></div></td></tr>`).join("");
  const recs = report.recommendations.map(x => `<li><strong>${escapeHtml(x.name)}:</strong> ${escapeHtml(x.text)}</li>`).join("");
  const plans = report.actionPlan.map(x => `<div style="border:1px solid #e3e5df;border-radius:14px;padding:18px;margin:12px 0"><h3 style="margin:0 0 10px;font-family:Georgia,serif;font-weight:500">${escapeHtml(x.name)}</h3><p><strong>First 30 days:</strong> ${escapeHtml(x.days30)}</p><p><strong>Days 31–60:</strong> ${escapeHtml(x.days60)}</p><p><strong>Days 61–90:</strong> ${escapeHtml(x.days90)}</p></div>`).join("");
  return `<!doctype html><html><body style="margin:0;background:#f7f5ef;color:#1d2a28;font-family:Arial,sans-serif"><div style="max-width:760px;margin:0 auto;padding:40px 24px"><div style="background:#fff;border:1px solid #e3e5df;border-radius:20px;padding:36px"><div style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#315b4b">People Compound</div><h1 style="font-family:Georgia,serif;font-size:34px;font-weight:500;margin:12px 0">${escapeHtml(report.title)}</h1><p style="color:#65716d">${escapeHtml(report.subtitle)}</p><hr style="border:0;border-top:1px solid #e3e5df;margin:28px 0"><h2 style="font-family:Georgia,serif;font-weight:500">Your profile</h2><table style="width:100%;border-collapse:collapse"><tbody>${rows}</tbody></table><h2 style="font-family:Georgia,serif;font-weight:500;margin-top:34px">What to leverage</h2><p>${strengthsText(report.strengths)}</p><h2 style="font-family:Georgia,serif;font-weight:500;margin-top:34px">Where to focus</h2><ul style="line-height:1.7">${recs}</ul><h2 style="font-family:Georgia,serif;font-weight:500;margin-top:34px">A practical 90-day action plan</h2><p style="color:#65716d">Use these as starting actions. Adapt them to your role, business stage and context.</p>${plans}<p style="margin-top:36px;color:#65716d;font-size:13px">This assessment is a development and organizational reflection tool, not a clinical or psychometric diagnosis. Results reflect the responses provided and should be interpreted in context.</p><p style="margin-top:28px;font-weight:600">People Strategy for What's Next.</p></div></div></body></html>`;
}

function strengthsText(items:{name:string;score:number}[]) { return items.map(x=>`${escapeHtml(x.name)} (${x.score}/5)`).join(" · "); }
function escapeHtml(value:string) { return value.replace(/[&<>'"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]!)); }
