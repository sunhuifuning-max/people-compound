import Link from "next/link";

const organization = [
  {
    title: "Fractional HR Leadership",
    label: "Strategic partnership",
    description:
      "Senior human capital leadership for companies that need an experienced HR leader before they need another full-time executive.",
    points: ["People strategy & workforce planning", "HR infrastructure, talent, culture & rewards", "Leadership partnership and decision support"],
    outcome: "A stronger people function that supports today and evolves with what’s next.",
    href: "/services/fractional-hr",
  },
  {
    title: "Focused People Projects",
    label: "Defined scope",
    description:
      "Focused expertise for a priority people challenge—designed to solve the immediate problem while leaving the organization more capable afterward.",
    points: ["HR function & operating model design", "Talent, compensation, job architecture & EVP", "HRIS, policies, performance, organization effectiveness"],
    outcome: "A focused solution that solves the problem and leaves the organization stronger.",
    href: "/services/fractional-hr",
  },
  {
    title: "Embedded People Partner",
    label: "High-touch support",
    description:
      "An experienced people leader embedded with your team during moments when the organization is moving faster or changing more than usual.",
    points: ["Rapid growth or a new market", "M&A, restructuring or transformation", "Commercialization and major business milestones"],
    outcome: "Senior people expertise inside the business when the moment demands it.",
    href: "/services/fractional-hr",
  },
];

const leadership = [
  {
    title: "Leadership Development",
    description: "Practical programs that turn leadership concepts into observable behavior and stronger day-to-day leadership.",
    points: ["Manager Essentials", "Emerging Leaders", "Executive Accelerator", "Leading Through Change", "Coaching Skills for Managers"],
    outcome: "Leaders who don’t just know more—but lead differently.",
    href: "/leadership",
  },
  {
    title: "Executive Coaching",
    description: "Confidential, focused coaching for leaders navigating complexity, transition, growth, or a demanding next chapter.",
    points: ["Leadership effectiveness", "Transitions & expanded scope", "Influence, relationships & communication"],
    outcome: "Greater awareness, clearer choices, and more intentional leadership behavior.",
    href: "/services/executive-coaching",
  },
  {
    title: "Career Coaching",
    description: "Structured support for professionals making an important career decision or preparing for what comes next.",
    points: ["Career direction & positioning", "Leadership presence & confidence", "Interview, transition & next-step strategy"],
    outcome: "A clearer direction and a practical plan for the next move.",
    href: "/services/career-coaching",
  },
];

const engagement = [
  ["Project-based", "A defined outcome, clear scope and focused timeline."],
  ["Retainer", "Ongoing access to senior people expertise as priorities evolve."],
  ["Embedded fractional", "A deeper partnership when the business needs a people leader at the table."],
];

export default function ServicesPage() {
  return (
    <main>
      <section className="services-hero">
        <div className="container">
          <div className="kicker">Services</div>
          <h1>How People Compound works with you.</h1>
          <p className="lead services-hero-lead">
            The right level of people expertise for the moment you’re in—from a defined project to an ongoing strategic partnership.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" href="/contact">Book a Conversation →</Link>
            <Link className="text-link" href="/solutions">Start with your challenge →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-intro narrow">
            <div className="kicker">For organizations</div>
            <h2>People leadership at the level you need.</h2>
            <p>
              You may not need a full-time HR executive. You may need someone who can step in, see the whole system, make the right calls, and build capability that lasts.
            </p>
          </div>
          <div className="service-grid">
            {organization.map((item, i) => (
              <Link className="service-card" href={item.href} key={item.title}>
                <div className="service-card-top"><span>0{i + 1}</span><span className="service-label">{item.label}</span></div>
                <h3>{item.title}</h3>
                <p className="service-description">{item.description}</p>
                <div className="service-points">
                  {item.points.map((point) => <span key={point}>{point}</span>)}
                </div>
                <div className="service-outcome"><span>Outcome</span><strong>{item.outcome}</strong></div>
                <span className="arrow">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-sage">
        <div className="container">
          <div className="section-intro narrow">
            <div className="kicker">For leaders</div>
            <h2>Leadership capability compounds too.</h2>
            <p>
              Leadership development is not just about learning a framework. It is about building awareness, practicing new behaviors, getting feedback, and applying what you learn to real work.
            </p>
          </div>
          <div className="service-grid">
            {leadership.map((item, i) => (
              <Link className="service-card service-card-light" href={item.href} key={item.title}>
                <div className="service-card-top"><span>0{i + 1}</span><span className="service-label">Leadership</span></div>
                <h3>{item.title}</h3>
                <p className="service-description">{item.description}</p>
                <div className="service-points">
                  {item.points.map((point) => <span key={point}>{point}</span>)}
                </div>
                <div className="service-outcome"><span>Outcome</span><strong>{item.outcome}</strong></div>
                <span className="arrow">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="engagement-grid">
            <div>
              <div className="kicker">Engagement models</div>
              <h2>Flexible by design.</h2>
              <p className="lead small-lead">Start with the outcome you need. We can shape the engagement around the work—not force the work into a fixed model.</p>
            </div>
            <div className="engagement-list">
              {engagement.map(([title, description], i) => (
                <div className="engagement-row" key={title}>
                  <span className="engagement-num">0{i + 1}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta">
            <div>
              <div className="kicker" style={{color:"#A9D2BE"}}>What’s next?</div>
              <h2>Let’s start with the business problem.</h2>
              <p>Tell us what you’re building, scaling, changing, or preparing for. We’ll help you think through the people implications.</p>
            </div>
            <div className="actions">
              <Link className="btn btn-gold" href="/contact">Book a Conversation →</Link>
              <Link className="btn btn-dark-outline" href="/assessments">Take an Assessment</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
