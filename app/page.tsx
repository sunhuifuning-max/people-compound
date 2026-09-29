import Link from "next/link";

const challenges = [
  ["We're growing", "Our people infrastructure isn't keeping pace with the business.", "Build a foundation that can grow with you."],
  ["We're scaling", "Growth is creating complexity in structure, leadership and decision-making.", "Build the operating system for the next stage."],
  ["We're struggling with talent", "Hiring is happening, but the talent engine isn't consistent.", "Create a repeatable talent capability."],
  ["We're redesigning", "Roles, decision rights or organizational structure need to evolve.", "Design an organization built for what comes next."],
  ["We're going through change", "A transformation, integration or restructuring needs alignment.", "Move forward with people aligned around the change."],
  ["We're preparing for what's next", "The next milestone requires capabilities you don't have today.", "Turn the people strategy into business readiness."],
];

const stages = [
  ["Seed / Pre-Series A · 0–30", "Build the Foundation", "People strategy, HR infrastructure, first hires, recruiting, onboarding, compensation and culture.", "A practical people foundation that gives your company room to grow."],
  ["Series A–B · 30–150", "Build the Systems", "Talent acquisition, HR technology, performance, compensation, job architecture, manager capability and EVP.", "A people operating system that can scale with the business."],
  ["Series C+ / Pre-IPO · 150–500+", "Scale the Organization", "Workforce planning, organization design, talent strategy, succession, leadership development, rewards and people analytics.", "An organization designed to perform at its next stage of growth."],
  ["M&A / Restructuring / Transformation", "Integrate & Transform", "HR integration, organization redesign, policy harmonization, culture integration, leadership alignment and change management.", "A more aligned organization with the people foundation to move forward."],
  ["Commercialization / New Geography", "Enter a New Market", "Workforce strategy, organization design, leadership hiring, commercial organization, incentives, talent acquisition and HR infrastructure.", "The people and organizational capability needed to execute your next move."],
];

const capabilities = [
  ["01", "HR Strategy & Workforce Planning", "Connect people priorities to business strategy and the capabilities required for the next stage."],
  ["02", "HR Infrastructure, Operations & Compliance", "Build practical systems, policies, technology and processes that can scale without unnecessary complexity."],
  ["03", "Talent Acquisition & Talent Management", "Create a repeatable talent engine—from workforce planning and sourcing to assessment, development and retention."],
  ["04", "Culture, EVP & Employee Experience", "Make culture tangible through leadership behaviors, employee experience and a compelling employee value proposition."],
  ["05", "Total Rewards & People Development", "Align compensation, benefits, performance and development with the talent you need to attract and grow."],
  ["06", "Organizational & Leadership Effectiveness", "Strengthen organization design, decision rights, leadership capability and the systems that turn strategy into execution."],
];

const homeCaseStudies = [
  { category: "Talent Acquisition", title: "Building an in-house talent engine for U.S. market entry", outcome: "120+ employees scaled organically in 12 months, with clinical and commercial capabilities built for the U.S. hub." },
  { category: "Leadership & Talent", title: "Developing high-potential talent into a stronger leadership bench", outcome: "Six participants graduated in 12 months, with succession plans translated into action and a stronger leadership echelon." },
  { category: "Culture & Alignment", title: "Creating shared ways of working across countries and cultures", outcome: "A 2-day workshop plus two follow-ups produced practical team norms and charters for cross-cultural collaboration." },
  { category: "Total Rewards", title: "Building a U.S. total rewards architecture for a high-complexity pharma company", outcome: "A 7-component rewards system connected job architecture, pay, career paths, LTI, benefits, performance and recognition—with U.S. benchmarks and pay-equity reviews." },
];

export default function Home() {
  return <main>
    <section className="hero hero-home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">People & Organizational Advisory</div>
          <h1>Build the people capability for <span>what's next.</span></h1>
          <p className="lead">Strategic people leadership for companies building, scaling and transforming—connecting business strategy with the organization, talent and leadership needed to execute it.</p>
          <div className="actions">
            <Link className="btn btn-primary" href="/contact">Book a Conversation <span>→</span></Link>
            <Link className="text-link" href="/assessments/organization-health">Take the free Health Check <span>→</span></Link>
          </div>
          <p className="hero-note">Fractional leadership · Focused projects · Embedded partnership</p>
        </div>
        <div className="hero-visual" aria-label="People capability compounds over time">
          <div className="visual-label">Build. Scale. Transform.</div>
          <div className="growth-orbit">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>
            <div className="core"><span>People</span><strong>+</strong><span>Strategy</span></div>
            <span className="orbit-word word-one">Capability</span>
            <span className="orbit-word word-two">Leadership</span>
            <span className="orbit-word word-three">Organization</span>
            <span className="orbit-dot dot-one"></span><span className="orbit-dot dot-two"></span><span className="orbit-dot dot-three"></span>
          </div>
          <div className="visual-footer"><strong>People capability compounds.</strong><span>Every decision shapes what your organization can do next.</span></div>
        </div>
      </div>
    </section>

    <section className="proof-strip"><div className="container proof-grid">
      <div><strong>15+</strong><span>years in global biopharma & life sciences</span></div>
      <div><strong>120+</strong><span>employees scaled in one U.S. growth story</span></div>
      <div><strong>40+</strong><span>senior leaders recruited</span></div>
      <div><strong>$2M</strong><span>recruiting cost savings through in-house capability</span></div>
      <div><strong>Built</strong><span>HR infrastructure from scratch multiple times</span></div><div><strong>SPHR</strong><span>senior HR credential</span></div>
    </div></section>

    <section className="section section-warm">
      <div className="container">
        <div className="section-intro narrow"><div className="kicker">Start with the challenge</div><h2>You don't need more HR activity. You need the right capability.</h2><p>People Compound helps leaders solve the people and organizational problems that appear as the business changes.</p></div>
        <div className="challenge-grid">{challenges.map(([title, desc, outcome]) => <Link className="challenge-card" href="/solutions" key={title}><div className="challenge-number">{String(challenges.findIndex(x => x[0] === title) + 1).padStart(2, "0")}</div><h3>{title}</h3><p>{desc}</p><div className="mini-outcome"><span>Outcome</span>{outcome}</div><span className="arrow">Explore →</span></Link>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head"><div><div className="kicker">How we think about growth</div><h2>People strategy should evolve with the business.</h2></div><Link className="arrow" href="/solutions">Explore solutions →</Link></div>
        <div className="stage-grid">{stages.map(([stage, title, body, outcome], i) => <Link href="/solutions" className={`stage-card stage-${i + 1}`} key={stage}><span className="tag">{stage}</span><h3>{title}</h3><p>{body}</p><div className="outcome"><strong>Outcome</strong><span>{outcome}</span></div><span className="arrow">Explore →</span></Link>)}</div>
      </div>
    </section>

    <section className="section capability-section">
      <div className="container">
        <div className="section-intro narrow"><div className="kicker">People capability</div><h2>Build the system behind the strategy.</h2><p>From the foundation to leadership effectiveness, we connect the pieces so your people function becomes an organizational advantage—not a collection of disconnected programs.</p></div>
        <div className="capability-list">{capabilities.map(([num, title, body]) => <Link className="capability-row" href="/services" key={num}><span className="cap-num">{num}</span><span><strong>{title}</strong><em>{body}</em></span><span className="cap-arrow">↗</span></Link>)}</div>
      </div>
    </section>

    <section className="section case-study-home-section">
      <div className="container">
        <div className="section-head"><div><div className="kicker">Selected case studies</div><h2>Capability built for real business moments.</h2></div><Link className="arrow" href="/insights">View all case studies →</Link></div>
        <div className="home-case-grid">{homeCaseStudies.map((x, i) => <article className="home-case-card" key={x.title}><span className="home-case-number">0{i+1}</span><span className="tag">{x.category}</span><h3>{x.title}</h3><div className="home-case-outcome"><span>Outcome</span><p>{x.outcome}</p></div></article>)}</div>
      </div>
    </section>

    <section className="section section-sage">
      <div className="container assessment-feature">
        <div><div className="kicker">Free organizational health check</div><h2>Know where you are before deciding where to go.</h2><p className="lead">A practical view of nine people and organizational capabilities—from strategy and leadership to talent, culture, development and HR operations.</p><div className="assessment-meta"><strong>27 questions</strong><span>7–10 minutes</span><span>1–5 scale</span><span>Instant results</span></div><Link className="btn btn-primary" href="/assessments/organization-health">Start the Health Check <span>→</span></Link></div>
        <div className="assessment-panel"><div className="panel-top"><span>Organizational Health</span><b>01 — 09</b></div><div className="health-lines"><div><span>Strategy</span><i style={{width:"82%"}}></i></div><div><span>Leadership</span><i style={{width:"68%"}}></i></div><div><span>Talent</span><i style={{width:"54%"}}></i></div><div><span>Culture</span><i style={{width:"76%"}}></i></div><div><span>Development</span><i style={{width:"61%"}}></i></div></div><div className="panel-footer">Assess → Understand → Focus → Act</div></div>
      </div>
    </section>

    <section className="section leadership-feature">
      <div className="container leadership-grid">
        <div><div className="kicker">Leadership development</div><h2>Leaders who can lead what comes next.</h2><p className="lead">Leadership development is not about knowing more. It is about changing how leaders show up when the work gets complex.</p><Link className="arrow" href="/leadership">Explore leadership development →</Link></div>
        <div className="leadership-wheel"><div className="wheel-center"><strong>Leadership</strong><span>behavior change</span></div><div className="wheel-item wi1">Awareness</div><div className="wheel-item wi2">Practice</div><div className="wheel-item wi3">Feedback</div><div className="wheel-item wi4">Reflection</div></div>
      </div>
      <div className="container program-row">{["Manager Essentials","Emerging Leaders","Executive Accelerator","Leading Through Change","Coaching Skills for Managers"].map(x => <Link href="/leadership" key={x}>{x}<span>→</span></Link>)}</div>
    </section>

    <section className="section cta-section"><div className="container cta"><div><div className="kicker" style={{color:"var(--gold)"}}>Build. Scale. Transform.</div><h2>What's next for your organization?</h2><p>Let's talk about the people capability required to get there.</p></div><div className="actions"><Link className="btn btn-gold" href="/contact">Book a Conversation <span>→</span></Link><Link className="btn btn-dark-outline" href="/services">See how we work</Link></div></div></section>
  </main>;
}
