import Image from "next/image";
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

const caseStudies = [
  {
    number: "01",
    category: "Talent Acquisition & Capability Building",
    title: "Building an in-house talent engine for a U.S. market entry",
    client: "Multinational pharmaceutical company entering the U.S. market",
    challenge: "Build clinical and commercial capability in the U.S. organically while creating a repeatable recruiting function that could scale with the business.",
    approach: "Built the recruiting operating model from the ground up: workforce planning, requisition governance, structured hiring kickoffs, sourcing strategy, structured interviews, role-specific scorecards, recruiting SLAs, talent intelligence, employer branding, TA capability development and commercialization-aligned workforce planning.",
    outcome: "Grew the organization to 120+ employees organically within 12 months, while building the clinical and commercial capabilities needed for the U.S. hub.",
    sourceNote: "The TA work included a standardized operating model, recruiting SOP and governance, structured interview framework, recruiting dashboard, TA competency framework and workforce planning roadmap.",
  },
  {
    number: "02",
    category: "Leadership & Talent Development",
    title: "Turning high-potential talent into a stronger leadership bench",
    client: "High-growth biopharma organization",
    challenge: "Create a structured high-potential program that develops future leaders while connecting development to succession planning and organizational needs.",
    approach: "Designed a 12-month development journey combining assessment, individualized development plans, coaching and mentoring, stretch assignments, leadership learning, feedback and progress measurement. The model connected talent assessment with succession and workforce planning rather than treating development as a standalone program.",
    outcome: "Six high-potential participants graduated the program. Succession plans were translated into action plans, leadership capability was strengthened, and the organization moved forward with a stronger talent bench.",
    sourceNote: "The program framework included defined potential, assessment, customized development plans, 360 feedback, coaching/mentoring, stretch assignments and post-program succession and career actions.",
  },
  {
    number: "03",
    category: "Culture & Organizational Alignment",
    title: "Creating shared ways of working across countries and cultures",
    client: "Organization entering the U.S. market",
    challenge: "Build stronger cross-country, cross-cultural collaboration as a new U.S. organization worked with its global counterparts.",
    approach: "Facilitated a two-day culture and values alignment workshop followed by two structured follow-up sessions. The work translated values and collaboration challenges into practical team norms, working agreements and team charters.",
    outcome: "Teams left with shared norms and charters that clarified how they would collaborate, communicate, make decisions and work across cultures—creating a stronger foundation for the U.S. market entry.",
    sourceNote: "Designed to move culture from stated values into practical behaviors and repeatable ways of working.",
  },  {
    number: "04",
    category: "Total Rewards",
    title: "Building a U.S. total rewards architecture for a high-complexity pharmaceutical growth story",
    client: "Fast-growing pharmaceutical company entering the U.S. market",
    challenge: "Create a U.S. compensation and rewards architecture without an existing global compensation structure, while meeting exceptionally high talent standards created by a complex pipeline.",
    approach: "Built a comprehensive seven-component total rewards architecture covering job architecture, salary grades and bands, career paths, ESOP/LTI design using foreign-listed stock rather than a U.S.-listed equity program, benefits, performance and recognition. Built U.S. benchmarks using weighted data from three compensation surveys and established biannual pay-equity reviews.",
    outcome: "A structured rewards system designed to support talent attraction and retention, with clearer career and pay architecture, market-informed U.S. benchmarks, and a recurring pay-equity review process.",
    sourceNote: "Client outcome and project details supplied for this case study.",
  },

];

const categories = ["All insights", "Case Studies", "People Strategy", "Talent Acquisition", "Leadership", "Culture", "HR Infrastructure", "Leadership Development"];

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

    <section className="section page-image-section" aria-label="People Compound insights">
      <div className="container">
        <div className="page-image-frame">
          <Image src="/images/insights.webp" alt="Ideas, strategy, and organizational insight" fill sizes="(max-width: 900px) 100vw, 1180px" />
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-intro narrow">
          <div className="kicker">Selected case studies</div>
          <h2>What people strategy looks like in practice.</h2>
          <p>Examples of building talent capability, developing leadership pipelines, creating organizational alignment, and designing rewards systems for growth.</p>
        </div>
        <div className="case-study-grid">
          {caseStudies.map((x) => (
            <article className="case-study-card" key={x.number}>
              <div className="case-study-top"><span>{x.number}</span><span className="tag">{x.category}</span></div>
              <h3>{x.title}</h3>
              <div className="case-study-client"><strong>Client</strong><span>{x.client}</span></div>
              <div className="case-study-block"><strong>Challenge</strong><p>{x.challenge}</p></div>
              <div className="case-study-block"><strong>What we did</strong><p>{x.approach}</p></div>
              <div className="case-study-outcome"><span>Outcome</span><p>{x.outcome}</p></div>
              <div className="case-study-source">{x.sourceNote}</div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="template-image-frame">
          <Image src="/images/templates.webp" alt="HR standard operating procedures and practical HR templates" fill sizes="(max-width: 900px) 100vw, 1180px" />
        </div>
        <div className="section-intro narrow" style={{marginTop: 38}}>
          <div className="kicker">Practical HR templates</div>
          <h2>Useful tools you can put to work.</h2>
          <p>Selected People Compound templates for building consistent HR practices. Request a template by email and tell us which one you need.</p>
        </div>
        <div className="template-categories">
          {[
            { title: "Talent Acquisition", items: [
              ["Recruiting Kickoff Questions", "A structured intake guide covering business need, success profile, scope, sourcing and interview process."],
              ["Job Description Template", "A practical structure for role purpose, responsibilities, qualifications, success measures and reporting relationships."],
              ["Interview Rubric Template", "A consistent scorecard structure for competency-based, technical and situational assessment."]
            ]},
            { title: "Onboarding & Orientation", items: [
              ["Pre-Onboarding & First Day Checklist", "A practical checklist for pre-start communications, access, equipment, introductions and first-day readiness."],
              ["Onboarding 30-60-90 Day Template", "A simple framework for role clarity, priorities, relationships, capability building and milestones."],
              ["Organization Announcement Template", "A clear communication structure for welcoming new employees and explaining role, team and business context."]
            ]},
            { title: "Performance Management", items: [
              ["Annual Performance Review SOP", "A repeatable process covering timing, manager preparation, calibration, employee conversations and documentation."],
              ["Performance Improvement Plan (PIP) Template", "A structured framework for expectations, measurable improvement goals, support, checkpoints and documentation."]
            ]},
            { title: "Employee Relations", items: [
              ["Grievance Handling SOP", "A consistent approach to receiving, assessing, documenting and resolving employee grievances."],
              ["Workplace Investigation Procedure", "A structured approach to intake, planning, interviews, evidence, findings, documentation and follow-up."],
              ["Conflict Resolution Template", "A practical framework for preparing, facilitating and documenting constructive workplace conflict resolution."],
              ["Discipline Procedure Template", "A consistent framework for documenting expectations, investigation, decision-making and follow-through."],
              ["Offboarding Checklist", "A structured checklist for manager, HR, access, payroll, benefits, equipment, knowledge transfer and communications."],
              ["Exit Interview Template", "Questions to understand employee experience, leadership, culture, development, rewards and reasons for leaving."]
            ]},
            { title: "Compliance & Records", items: [
              ["HR Audit Checklist", "A practical checklist for reviewing HR policies, records, processes, compliance controls and documentation readiness."],
              ["HR SOP Template", "A practical structure for documenting repeatable HR processes, ownership, SLAs and controls."],
              ["Travel & Expense Policy Template", "A practical policy structure covering eligible expenses, approvals, documentation and reimbursement."]
            ]},
            { title: "HR Data & Reporting", items: [
              ["Workforce Insights Report Template", "A leadership-ready structure for headcount, hiring, turnover, workforce trends, talent and people metrics."],
              ["HR Department Budget Template", "A planning structure for HR operating costs, people programs, systems, vendors and workforce-related spend."],
              ["Employee Satisfaction Survey", "A practical survey structure covering engagement, leadership, culture, communication, development and employee experience."]
            ]}
          ].map((category) => <div className="template-category" key={category.title}>
            <div className="template-category-head"><h3>{category.title}</h3><span>{category.items.length} templates</span></div>
            <div className="template-grid">
              {category.items.map(([title, desc]) => <article className="template-card" key={title}>
                <span className="tag">Template</span><h4>{title}</h4><p>{desc}</p>
                <a href={`mailto:helen.sun@peoplecompound.com?subject=${encodeURIComponent(`People Compound template request — ${title}`)}`}>Request this template →</a>
              </article>)}
            </div>
          </div>)}
        </div>
        <div className="template-note"><strong>Request by email:</strong> helen.sun@peoplecompound.com — include the template name and a little context about your organization so we can point you to the most useful version.</div>
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
