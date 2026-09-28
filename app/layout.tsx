import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Script from "next/script";
import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.peoplecompound.com";
const ga4 = process.env.NEXT_PUBLIC_GA4_ID || "G-35C7ZW5DVG";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "People Compound | People Strategy for What's Next", template: "%s | People Compound" },
  description: "People strategy, organizational capability and leadership development for companies building, scaling and transforming.",
  alternates: { canonical: siteUrl },
  openGraph: { type: "website", siteName: "People Compound", title: "People Compound | People Strategy for What's Next", description: "People strategy, organizational capability and leadership development for companies building, scaling and transforming.", url: siteUrl },
  twitter: { card: "summary_large_image", title: "People Compound | People Strategy for What's Next", description: "People strategy, organizational capability and leadership development for what's next." },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Header />{children}<Footer />{ga4&&<><Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`} strategy="afterInteractive"/><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){window.dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${ga4}');`}</Script></>}</body></html>;
}
