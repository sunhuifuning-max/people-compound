import Link from "next/link";

const assessments = [
  {
    tag: "Organization",
    title: "Organizational Health Check",
    desc: "See how your people and organizational systems are supporting the business today—and where capability may need to catch up with growth.",
    meta: ["27 questions", "7–10 minutes", "1–5 scale", "Instant results"],
    items: ["9 organizational dimensions", "Strengths and priority opportunities", "Pattern-based interpretation", "Optional detailed report"],
    href: "/assessments/organization-health",
    cta: "Start Health Check →"
  },
  {
    tag: "Individual",
    title: "Leadership Assessment",
    desc: "Understand how your leadership behaviors show up today across nine capabilities that shape how you lead yourself, people, the business, and change.",
    meta: ["18 questions", "5–7 minutes", "1–5 scale", "Instant results"],
    items: ["9 leadership capabilities", "Strengths and development focus", "Behavior-based questions", "Optional detailed report"],
    href: "/assessments/leadership",
    cta: "Start Leadership Assessment →"
  }
];

export default function Page(){
  return <main>
    <section className="pagehero">
      <div className="container">
        <div className="kicker">Assessments</div>
        <h1>Know where you are before deciding where to go.</h1>
        <p className="lead">Free, practical assessments designed to turn people questions into clear development priorities.</p>
        <div className="assessment-hub-meta">Both assessments use a 1–5 scale, show the structure before you begin, and give you an initial result immediately.</div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="grid2 assessment-hub-grid">
          {assessments.map(a => <article className="card assessment-hub-card" key={a.title}>
            <span className="tag">{a.tag}</span>
            <h2 style={{fontSize:32}}>{a.title}</h2>
            <p>{a.desc}</p>
            <div className="assessment-meta">{a.meta.map((m,i)=><span key={m} className={i===0?"meta-strong":""}>{m}</span>)}</div>
            <div className="assessment-hub-list">{a.items.map(item=><div key={item}><span>✓</span>{item}</div>)}</div>
            <Link className="btn btn-primary" href={a.href}>{a.cta}</Link>
          </article>)}
        </div>
      </div>
    </section>

    <section className="section section-warm">
      <div className="container grid2">
        <div><div className="kicker">How it works</div><h2>Assess → Understand → Focus → Act.</h2><p className="lead">The assessment is the starting point—not the answer. Use the pattern in your results to decide where deeper conversation, development, or action may be useful.</p></div>
        <div className="card">
          <div className="assessment-flow"><div><strong>01</strong><span>Assess</span><small>Answer based on today</small></div><div><strong>02</strong><span>Understand</span><small>See your profile</small></div><div><strong>03</strong><span>Focus</span><small>Identify priorities</small></div><div><strong>04</strong><span>Act</span><small>Choose a next step</small></div></div>
          <p className="small-note" style={{marginBottom:0}}>No email is required to start. You can choose to provide an email after seeing your initial results if you want a more detailed report.</p>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container cta">
        <div><div className="kicker" style={{color:"#C8A66A"}}>From insight to action</div><h2>Use the data to start a better people conversation.</h2><p>Explore the results yourself, use them as a leadership discussion starter, or bring the pattern into a People Compound engagement.</p></div>
        <div className="actions"><Link className="btn btn-gold" href="/contact">Discuss Your Results</Link><Link className="btn btn-dark-outline" href="/solutions">Explore Solutions</Link></div>
      </div>
    </section>
  </main>
}
