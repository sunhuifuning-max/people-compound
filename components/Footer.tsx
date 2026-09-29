import Link from "next/link";
export default function Footer(){return <footer className="footer"><div className="container footer-grid">
  <div><img src="/logo.svg" className="footer-logo" alt="People Compound"/><p>People strategy and organizational capability for companies building, scaling and transforming.</p><a href="mailto:helen.sun@peoplecompound.com">helen.sun@peoplecompound.com</a></div>
  <div><h4>Explore</h4><Link href="/solutions">Solutions</Link><Link href="/services">Services</Link><Link href="/leadership">Leadership & Coaching</Link></div>
  <div><h4>Assess</h4><Link href="/assessments/organization-health">Organizational Health Check</Link><Link href="/assessments/leadership">Leadership Assessment</Link><Link href="/insights">Insights</Link></div>
  <div><h4>Connect</h4><Link href="/contact">Book a Conversation</Link><Link href="/about">About People Compound</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
</div><div className="container footer-bottom">© 2026 People Compound · People Strategy for What's Next.</div></footer>}