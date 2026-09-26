import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { siteOrigin } from "./site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "I CAN | Beginner Courses in Code, Editing & Data",
  description: "Explore practical beginner courses in Python coding, video editing and data analytics. Learn in a small group and build a real project.",
  alternates: { canonical: "/" },
  robots: { index: false, follow: false },
  openGraph: { type: "website", siteName: "I CAN", title: "I CAN | Beginner Courses", description: "Try a new skill and build something real with I CAN.", url: siteOrigin },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body>
    <header className="site-header"><div className="container nav-inner">
      <Link className="brand" href="/" aria-label="I CAN home"><strong>I C<span>A</span>N</strong><small>CODE · EDIT · DATA</small></Link>
      <nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/#choose">Courses</Link></nav>
      <Link className="nav-cta" href="/#choose">Choose a course <span aria-hidden="true">→</span></Link>
    </div></header>
    {children}
    <footer className="site-footer"><div className="container footer-inner"><Link className="footer-brand" href="/">I CAN</Link><p>Discover what you can do.</p><span>© 2026 I CAN</span></div></footer>
  </body></html>;
}
