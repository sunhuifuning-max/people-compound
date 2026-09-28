import Link from "next/link";

const featured = {
  slug: "people-strategy-for-whats-next",
  category: "People Strategy",
  title: "People Strategy for What's Next: What Changes as Your Company Grows",
  description: "A practical framework for connecting business strategy, workforce planning, leadership, talent and HR infrastructure to the next stage of growth.",
  read: "8 min read",
};

const insights = [
  { slug: "stop-rolling-the-dice-on-quality-of-hire", category: "Talent Acquisition", title: "Stop Rolling the Dice on Quality of Hire", description: "A repeatable talent acquisition system connects role clarity, sourcing, assessment, closing, onboarding and quality-of-hire data.", read: "7 min read" },
  { slug: "when-hr-needs-to-scale", category: "HR Strategy", title: "When Does HR Need to Scale With the Business?", description: "The signals that your people infrastructure, manager capability and operating model are becoming constraints on growth.", read: "6 min read" },
  { slug: "from-founder-led-to-leader-led", category: "Leadership", title: "From Founder-Led to Leader-Led: Building Management Capability", description: "How organizations can move from heroic individual leadership toward clear accountability, stronger managers and scalable decision-making.", read: "8 min read" },
  { slug: "culture-is-a-system", category: "Culture", title: "Culture Is a System, Not a Poster", description: "Values become culture when they shape decisions, behaviors, incentives, meetings and the everyday employee experience.", read: "6 min read" },
  { slug: "the-people-operating-system", category: "HR Infrastructure", title: "The People Operating System: What Growing Companies Actually Need", description: "A practical view of the policies, processes, systems and governance that make people operations scalable without unnecessary bureaucracy.", read: "9 min read" },
  { slug: "leadership-capability-compounds", category: "Leadership Development", title: "Leadership Capability Compounds", description: "Why leadership development works best as an ongoing cycle of awareness, practice, feedback, reflection and application.", read: "7 min read" },
];

const categories = ["All insights", "People Strategy", "Talent Acquisition", "Leadership", "Culture", "HR Infrastructure", "Leadership Development"];

export default function InsightsPage() {
  return <main>
    <section className="insights-hero">
      <div className="container">
        <div className="kicker">Insights</div>
        <div className="insights-hero-grid">
          <div>
            <h1>Ideas for building organizations that can grow.</h1>
            <p className="lead">Practical perspectives, frameworks and tools for leaders navigating growth, talent, leadership, culture and organizational change.</p>
            <div className="actions"><Link className="btn btn-primary" href="/assessments">Start with an assessment <span>→</span></Link><Link className="text-link" href="/contact">Talk through a challenge <span>→</span></Link></div>
          </div>
          <div className="insights-principle">
            <span className="visual-label">The People Compound lens</span>
            <div className="insight-stack"><span>Business strategy</span><b>→</b><span>People capability</span><b>→</b><span>Organizational performance</span></div>
            <p>Strong organizations don't rely on isolated HR programs. They build connected capabilities that reinforce one another over time.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section section-warm">
      <div className="container">
        <div className="section-head"><div><div className="kicker">Explore</div><h2>Choose the question you're working through.</h2></div><p className="small-note">New perspectives will be added regularly.</p></div>
        <div className="insight-categories">{categories.map((x,i)=><span className={i===0 ? "active" : ""} key={x}>{x}</span>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head"><div><div className="kicker">Featured</div><h2>Start here.</h2></div></div>
        <Link href={`/insights/${featured.slug}`} className="featured-insight">
          <div><span className="tag">{featured.category}</span><h3>{featured.title}</h3><p>{featured.description}</p><span className="insight-meta">{featured.read} · People Compound</span></div><span className="featured-arrow">→</span>
        </Link>
      </div>
    </section>

    <section className="section section-sage">
      <div className="container">
        <div className="section-head"><div><div className="kicker">Latest thinking</div><h2>Useful ideas, not generic HR advice.</h2></div></div>
        <div className="grid3">{insights.map(x=><Link href={`/insights/${x.slug}`} className="insight-card" key={x.slug}><div><span className="tag">{x.category}</span><h3>{x.title}</h3><p>{x.description}</p></div><div className="insight-card-bottom"><span>{x.read}</span><strong>Read insight →</strong></div></Link>)}</div>
      </div>
    </section>

    <section className="section">
      <div className="container assessment-insight-cta">
        <div><div className="kicker">Turn insight into action</div><h2>Know where to focus before you start building.</h2><p className="lead">Use the free Organizational Health Check or Leadership Assessment to identify strengths, priority areas and practical next steps.</p></div>
        <div className="assessment-insight-actions"><Link className="btn btn-primary" href="/assessments">Explore assessments <span>→</span></Link><Link className="btn btn-outline" href="/contact">Book a Conversation</Link></div>
      </div>
    </section>
  </main>;
}
