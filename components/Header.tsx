"use client";
import { useState } from "react";
import Link from "next/link";

const nav = [
  ["/solutions", "Solutions"],
  ["/services", "Services"],
  ["/leadership", "Leadership"],
  ["/assessments", "Assessments"],
  ["/insights", "Insights"],
  ["/about", "About"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="container nav">
      <Link className="logo" href="/" aria-label="People Compound home"><img src="/logo.svg" alt="People Compound" /></Link>
      <nav className="navlinks">{nav.map(([href, label]) => <Link href={href} key={href}>{label}</Link>)}</nav>
      <Link className="btn btn-primary nav-cta" href="/contact">Book a Conversation</Link>
      <button className="mobile" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
    </div>
    {open && <div className="mobile-menu container">{nav.map(([href, label]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="btn btn-primary" href="/contact" onClick={() => setOpen(false)}>Book a Conversation</Link></div>}
  </header>;
}
