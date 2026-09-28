import Link from "next/link";

const challenges = [
  {
    n: "01",
    title: "We’re growing",
    description: "The business is moving faster than the people infrastructure behind it.",
    help: ["People strategy", "HR infrastructure", "Workforce planning", "Recruiting & onboarding", "Manager capability"],
    outcome: "People infrastructure that grows with the business.",
  },
  {
    n: "02",
    title: "We’re building",
    description: "We need the right foundation before growth creates unnecessary complexity.",
    help: ["HR operating model", "First hires", "Policies & compliance", "Compensation", "Culture foundations"],
    outcome: "A scalable people foundation built right from the beginning.",
  },
  {
    n: "03",
    title: "We’re scaling",
    description: "Growth is creating more people, more managers, and more organizational complexity.",
    help: ["Talent systems", "Job architecture", "Organization design", "Workforce planning", "Talent reviews & rewards"],
    outcome: "A people operating system that can scale with the business.",
  },
  {
    n: "04",
    title: "We’re struggling with talent",
    description: "Hiring feels inconsistent—or quality of hire is becoming too important to leave to chance.",
    help: ["TA strategy", "Success profiles", "Employer brand", "Sourcing & assessment", "Quality-of-hire metrics"],
    outcome: "A repeatable talent capability that improves quality of hire.",
  },
  {
    n: "05",
    title: "We’re redesigning",
    description: "Roles, decision rights, structure, or leadership responsibilities need to evolve.",
    help: ["Organization design", "Decision rights", "Operating model", "Leadership alignment", "Manager capability"],
    outcome: "An organization designed for the next stage.",
  },
  {
    n: "06",
    title: "We’re going through change",
    description: "A transformation, restructuring, or integration requires alignment—not just a project plan.",
    help: ["M&A integration", "Restructuring", "Culture integration", "Change leadership", "Communication"],
    outcome: "A more aligned organization with the people foundation to move forward.",
  },
  {
    n: "07",
    title: "We’re entering a new market",
    description: "The next move requires new organizational and commercial capability.",
    help: ["Workforce strategy", "Commercial organization", "Leadership hiring", "Incentives", "Talent acquisition & HR infrastructure"],
    outcome: "The people and organizational capability needed to execute the next move.",
  },
];

const stages = [
  ["Build the Foundation", "Seed / Pre-Series A · 0–30", "People strategy, HR infrastructure, first hires, recruiting, onboarding, compensation and culture.", "A practical people foundation that gives your company room to grow."],
  ["Build the Systems", "Series A–B · 30–150", "Talent acquisition, HR technology, performance, compensation, job architecture, manager capability and EVP.", "A people operating system that can scale with the business."],
  ["Scale the Organization", "Series C+ / Pre-IPO · 150–500+", "Workforce planning, organization design, talent strategy, succession, leadership development, rewards and analytics.", "An organization designed to perform at its next stage of growth."],
  ["Integrate & Transform", "M&A / Restructuring / Transformation", "HR integration, organization redesign, policy and benefit harmonization, culture integration, leadership alignment and change management.", "A more aligned organization with the people foundation to move forward."],
  ["Enter a New Market", "Commercialization / New Geography / New Business Model", "Workforce strategy, organization design, leadership hiring, commercial organization, incentives, talent acquisition and HR infrastructure.", "The people and organizational capability needed to execute your next move."],
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="pagehero solutions-hero">
        <div className="container solutions-hero-grid">
          <div>
            <div className="kicker">Solutions</div>
            <h1>People strategy for the moment your business is in.</h1>
            <p className="lead">You don’t need more HR activity. You need the people capability to solve what the business is facing now—and prepare for what comes next.</p>
            <div className="actions">
              <a className="btn btn-primary" href="#challenges">Find your challenge <span>→</span></a>
              <a className="text-link" href="#growth-stage">Explore by growth stage <span>↓</span></a>
            </div>
          </div>
          <div className="solutions-map" aria-label="People Compound solution journey">
            <div className="map-label">From challenge to capability</div>
            <div className="map-step"><span>01</span><strong>Challenge</strong><em>What is changing?</em></div>
            <div className="map-line" />
            <div className="map-step"><span>02</span><strong>Capability</strong><em>What needs to be built?</em></div>
            <div className="map-line" />
            <div className="map-step"><span>03</span><strong>Outcome</strong><em>What becomes possible?</em></div>
          </div>
        </div>
      </section>

      <section className="section" id="challenges">
        <div className="container">
          <div className="section-intro narrow">
            <div className="kicker">By challenge</div>
            <h2>Start with what’s happening in the business.</h2>
            <p>Choose the situation that feels closest to yours. We’ll work backward from the business need—not from a predefined HR package.</p>
          </div>
          <div className="solution-challenge-grid">
            {challenges.map((x) => (
              <article className="solution-challenge-card" key={x.title}>
                <div className="solution-card-top"><span>{x.n}</span><span className="solution-card-arrow">↗</span></div>
                <h3>{x.title}</h3>
                <p className="solution-description">{x.description}</p>
                <div className="help-block">
                  <div className="help-label">What we help with</div>
                  <div className="help-list">{x.help.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="solution-outcome"><span>Outcome</span><strong>{x.outcome}</strong></div>
                <Link className="arrow" href="/contact">Talk about this challenge →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm" id="growth-stage">
        <div className="container">
          <div className="section-intro narrow">
            <div className="kicker">By growth stage</div>
            <h2>Build what your next stage requires.</h2>
            <p>The people systems that work at 20 people are different from those needed at 200. The goal is not to overbuild—it’s to build what the next stage requires.</p>
          </div>
          <div className="stage-solution-grid">
            {stages.map((x, i) => (
              <article className={`stage-solution-card ${i === 4 ? "stage-feature" : ""}`} key={x[0]}>
                <div className="stage-number">0{i + 1}</div>
                <div className="tag">{x[1]}</div>
                <h3>{x[0]}</h3>
                <p>{x[2]}</p>
                <div className="solution-outcome"><span>Outcome</span><strong>{x[3]}</strong></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="container">
          <div className="section-intro narrow">
            <div className="kicker">What sits underneath</div>
            <h2>Six capabilities. One connected people strategy.</h2>
            <p>Most growth problems cross more than one HR discipline. We connect the pieces so the organization gets stronger—not just the individual project.</p>
          </div>
          <div className="capability-list">
            {[
              ["01", "HR Strategy & Workforce Planning", "Connect business priorities to workforce, capability and people decisions."],
              ["02", "HR Infrastructure, Operations & Compliance", "Build the policies, processes, systems and operating foundation that can scale."],
              ["03", "Talent Acquisition & Talent Management", "Create a repeatable talent engine—from workforce planning and sourcing through development and succession."],
              ["04", "Culture, EVP & Employee Experience", "Turn values and employee experience into something people can actually see and feel."],
              ["05", "Total Rewards & People Development", "Align compensation, benefits, performance and development with the talent strategy."],
              ["06", "Organizational & Leadership Effectiveness", "Strengthen organization design, decision-making, leadership and manager capability."],
            ].map((x) => <div className="capability-row" key={x[0]}><span className="cap-num">{x[0]}</span><div><strong>{x[1]}</strong><em>{x[2]}</em></div><span className="cap-arrow">→</span></div>)}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta">
            <div><div className="kicker" style={{color:"#C8A66A"}}>What’s next?</div><h2>Not sure which path fits?</h2><p>Start with a conversation. We can diagnose the people challenge, identify the capability gap, and determine what needs to happen first.</p></div>
            <div className="actions"><Link className="btn btn-gold" href="/contact">Book a Conversation <span>→</span></Link><Link className="btn btn-dark-outline" href="/assessments/organization-health">Take the Health Check <span>→</span></Link></div>
          </div>
        </div>
      </section>
    </main>
  );
}
