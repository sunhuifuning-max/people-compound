export const leadershipCompetencies = [
  "Build Relationships","Develop People","Deal with Ambiguity","Lead Change","Inspire Others",
  "Think Critically & Strategically","Communicate Clearly","Create Accountability","Active Listening"
];

export const leadership360Questions = [
  ["Build Relationships","I intentionally build and maintain productive relationships with people across my organization."],
  ["Build Relationships","I invest in relationships even when there is no immediate task or business need."],
  ["Develop People","I regularly coach people on their development and give them opportunities to stretch."],
  ["Develop People","I adapt my approach to help different people learn, grow, and become more independent."],
  ["Deal with Ambiguity","I remain effective when priorities, requirements, or information are unclear or changing."],
  ["Deal with Ambiguity","When I don't have all the information I need, I make reasonable assumptions, communicate them, and move forward."],
  ["Lead Change","I actively communicate the purpose, impact, and direction of changes I lead."],
  ["Lead Change","When people resist a change, I seek to understand their concerns and address them rather than simply pushing harder."],
  ["Inspire Others","I connect people's day-to-day work to a larger purpose or goal."],
  ["Inspire Others","I create enthusiasm and commitment around important goals, especially when the work is difficult."],
  ["Think Critically & Strategically","I consider how decisions in my area will affect other functions and the organization as a whole."],
  ["Think Critically & Strategically","Before making important decisions, I consider longer-term consequences, trade-offs, and second-order effects."],
  ["Communicate Clearly","I communicate complex ideas in a way that is clear and easy for others to understand."],
  ["Communicate Clearly","I adjust my message, level of detail, and communication style for different audiences."],
  ["Create Accountability","I set clear expectations about responsibilities, priorities, and results."],
  ["Create Accountability","I address missed commitments or performance concerns directly and constructively."],
  ["Active Listening","I listen to understand another person's perspective before explaining or defending my own."],
  ["Active Listening","When someone disagrees with me, I ask questions and explore their perspective before responding."]
];

export function envReady(){
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SECRET_KEY);
}

async function supabase(path:string, init:RequestInit={}){
  if(!envReady()) throw new Error("360 review storage is not configured.");
  const res=await fetch(`${process.env.SUPABASE_URL}/rest/v1/${path}`,{
    ...init,
    headers:{
      apikey:process.env.SUPABASE_SECRET_KEY!,
      
      "Content-Type":"application/json",
      Prefer:"return=representation",
      ...(init.headers||{})
    },cache:"no-store"
  });
  const text=await res.text();
  if(!res.ok) throw new Error(text.slice(0,500));
  return text?JSON.parse(text):null;
}

export function score360(self:number[], reviewers:number[][]){
  const scores=leadershipCompetencies.map((name,idx)=>{
    const q1=idx*2, q2=idx*2+1;
    const selfScore=(self[q1]+self[q2])/2;
    const reviewerScores=reviewers.map(a=>(a[q1]+a[q2])/2);
    const avg=reviewerScores.reduce((a,b)=>a+b,0)/reviewerScores.length;
    return {name,self:round(selfScore),reviewer:round(avg),gap:round(selfScore-avg)};
  });
  return scores;
}
function round(n:number){return Math.round(n*10)/10;}

export function integrated360Html(participant:string,scores:{name:string,self:number,reviewer:number,gap:number}[],count:number){
  const rows=scores.map(s=>`<tr><td>${s.name}</td><td>${s.self.toFixed(1)}</td><td>${s.reviewer.toFixed(1)}</td><td>${s.gap>0?"+":""}${s.gap.toFixed(1)}</td></tr>`).join("");
  const gaps=scores.filter(s=>Math.abs(s.gap)>=0.5).sort((a,b)=>Math.abs(b.gap)-Math.abs(a.gap)).slice(0,3);
  const gapHtml=gaps.length?gaps.map(s=>`<li><strong>${s.name}</strong>: self ${s.self.toFixed(1)} vs. reviewers ${s.reviewer.toFixed(1)} (${s.gap>0?"self-rating higher":"reviewer rating higher"} by ${Math.abs(s.gap).toFixed(1)}).</li>`).join(""):"<li>No material rating gaps of 0.5 points or more appeared in this response set.</li>";
  return `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#17231F;line-height:1.55"><div style="max-width:760px;margin:auto"><p style="color:#2F7D5A;font-weight:800;letter-spacing:.12em;text-transform:uppercase;font-size:12px">People Compound · People Strategy for What's Next.</p><h1 style="color:#0B3B5A">Integrated 360 Leadership Report</h1><p>Hi ${participant},</p><p>${count} invited reviewer${count===1?" has":"s have"} completed the 360 review. The table below compares your self-assessment with the average reviewer perspective by leadership capability.</p><table cellpadding="10" cellspacing="0" border="1" style="border-collapse:collapse;width:100%;border-color:#E4E7E3"><thead><tr><th align="left">Capability</th><th>Self</th><th>Reviewers</th><th>Gap</th></tr></thead><tbody>${rows}</tbody></table><h2 style="color:#0B3B5A">Gap analysis</h2><ul>${gapHtml}</ul><p style="font-size:12px;color:#66736D">This report is a development reflection tool. It should be interpreted in context and not as a psychometric diagnosis.</p></div></body></html>`;
}
