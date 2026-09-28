import Link from "next/link";

const capabilities = [
  ["Build Relationships", "Proactively invest in connections and build trust with diverse stakeholders.", "Lead People"],
  ["Develop People", "Coach, mentor, and create meaningful opportunities for growth.", "Lead People"],
  ["Deal with Ambiguity", "Remain effective when priorities, requirements, or information are unclear.", "Lead Self"],
  ["Lead Change", "Drive and sustain transformation while working thoughtfully with resistance.", "Lead Change"],
  ["Inspire Others", "Create purpose, energy, and commitment around shared goals.", "Lead People"],
  ["Think Critically & Strategically", "See the bigger picture and connect decisions across functions and time horizons.", "Lead the Business"],
  ["Communicate Clearly", "Convey ideas with precision and confidence across different audiences.", "Lead Change"],
  ["Create Accountability", "Set clear expectations and address commitments constructively.", "Lead the Business"],
  ["Active Listening", "Listen to understand and make people feel genuinely heard.", "Lead Self"],
];

const dimensions = [
  ["Lead Self", "Active Listening", "Deal with Ambiguity"],
  ["Lead People", "Build Relationships", "Develop People", "Inspire Others"],
  ["Lead the Business", "Think Critically & Strategically", "Create Accountability"],
  ["Lead Change", "Lead Change", "Communicate Clearly"],
];

const programs = [
  ["01", "Manager Essentials", "Build the core behaviors managers need to lead people well."],
  ["02", "Emerging Leaders", "Prepare high-potential leaders for broader scope and influence."],
  ["03", "Executive Accelerator", "Strengthen leadership effectiveness as complexity and stakes increase."],
  ["04", "Leading Through Change", "Help leaders create clarity, alignment, and momentum through change."],
  ["05", "Coaching Skills for Managers", "Turn everyday management conversations into opportunities for growth."],
];

export default function Page() {
  return (
    <main>
      <section className="leadership-hero">
        <div className="container leadership-hero-grid">
          <div>
            <div className="kicker">Leadership Development</div>
            <h1>Leaders who don't just know more. <span>They lead differently.</span></h1>
            <p className="lead">Leadership development designed around observable behaviors, real work, practice, feedback, and reflection—so development becomes something leaders apply, not something they complete.</p>
            <div className="actions">
              <Link className="btn btn-primary" href="/assessments/leadership">Take the Leadership Assessment →</Link>
              <Link className="btn btn-outline" href="/contact">Discuss a Program</Link>
            </div>
            <div className="assessment-strip"><strong>18 questions</strong><span>·</span><strong>5–7 minutes</strong><span>·</span><strong>1–5 scale</strong><span>·</span><strong>Instant results</strong></div>
          </div>
          <div className="leadership-hero-card">
            <div className="hero-card-kicker">The development cycle</div>
            <div className="flywheel">
              <div className="flywheel-ring"></div>
              <div className="flywheel-center"><strong>Leadership<br/>Capability</strong><small>compounds</small></div>
              <div className="flywheel-node fn1">Awareness</div>
              <div className="flywheel-node fn2">Practice</div>
              <div className="flywheel-node fn3">Feedback</div>
              <div className="flywheel-node fn4">Reflection</div>
            </div>
            <p>Each cycle creates the awareness needed for the next one.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head leadership-section-head">
            <div><div className="kicker">The framework</div><h2>Nine capabilities. Four dimensions of leadership.</h2></div>
            <p>Leadership is not one skill. It is a connected set of behaviors that show up differently when you lead yourself, people, the business, and change.</p>
          </div>
          <div className="leadership-dimensions">
            {dimensions.map((d, i) => <div className="dimension-card" key={d[0]}><div className="dimension-num">0{i+1}</div><h3>{d[0]}</h3><div className="dimension-items">{d.slice(1).map(x => <span key={x}>{x}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section className="section section-sage">
        <div className="container">
          <div className="kicker">Nine leadership capabilities</div>
          <h2>From insight to behavior.</h2>
          <p className="section-intro">The capabilities are assessed as behaviors—not as personality traits or abstract leadership ideals.</p>
          <div className="capability-grid">
            {capabilities.map((c, i) => <div className="capability-card" key={c[0]}><div className="capability-top"><span>0{i+1}</span><em>{c[2]}</em></div><h3>{c[0]}</h3><p>{c[1]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container leadership-approach-grid">
          <div>
            <div className="kicker">Our approach</div>
            <h2>Development happens between the sessions.</h2>
            <p className="lead">A strong leadership program creates insight. A useful one changes what happens in the next meeting, decision, conversation, and challenge.</p>
            <div className="approach-list">
              <div><b>01</b><span><strong>Awareness</strong> — understand your current patterns and their impact.</span></div>
              <div><b>02</b><span><strong>Practice</strong> — apply a specific behavior in real situations.</span></div>
              <div><b>03</b><span><strong>Feedback</strong> — learn what worked and what others experienced.</span></div>
              <div><b>04</b><span><strong>Reflection</strong> — turn experience into learning and choose the next behavior to practice.</span></div>
            </div>
          </div>
          <div className="approach-quote">
            <div className="quote-mark">“</div>
            <p>Leadership development is not a program you complete. It is a practice you continue.</p>
            <div className="quote-line"></div>
            <span>People Compound approach</span>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="section-head"><div><div className="kicker">Programs</div><h2>Built around the leadership moment.</h2></div><Link className="text-link" href="/contact">Design a custom program →</Link></div>
          <div className="program-grid">
            {programs.map(p => <div className="program-card" key={p[1]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p><Link href="/contact" className="arrow">Explore →</Link></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container assessment-cta-grid">
          <div><div className="kicker">Start with insight</div><h2>Know where your leadership capability is today.</h2><p className="lead">The free Leadership Assessment measures nine capabilities across 18 behavioral questions. See your profile first, then decide where to focus.</p><Link className="btn btn-primary" href="/assessments/leadership">Start the 5-minute assessment →</Link></div>
          <div className="assessment-preview"><div className="preview-top"><span>Leadership Profile</span><b>1–5</b></div>{capabilities.slice(0,5).map((c,i)=><div className="mini-bar" key={c[0]}><div><span>{c[0]}</span><b>{[4.2,3.8,4.5,3.4,4.1][i]}</b></div><i><em style={{width:`${[84,76,90,68,82][i]}%`}}></em></i></div>)}<small>Example visualization · individual results vary</small></div>
        </div>
      </section>

      <section className="section cta-section"><div className="container"><div className="cta"><div><div className="kicker" style={{color:'#9ac7b2'}}>What's next</div><h2>Build leaders who can grow with the organization.</h2><p>Start with an assessment, a focused program, or a conversation about what your leaders need next.</p></div><div className="actions"><Link className="btn btn-gold" href="/assessments/leadership">Take the Assessment</Link><Link className="btn btn-dark-outline" href="/contact">Book a Conversation</Link></div></div></div></section>
    </main>
  );
}
