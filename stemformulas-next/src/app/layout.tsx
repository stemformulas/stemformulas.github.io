import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "stemformulas",
  description:
    "Stemformulas is the eventual home of every STEM formula in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav>
            <div className="brand">
              <Link href="/">
                <img src="/img/logo.png" alt="stemformulas" />
              </Link>
              <Link href="/" className="site-title">
                stemformulas
              </Link>
            </div>
            <ul className="nav-links">
              <li>
                <Link href="/formulas">formulas</Link>
              </li>
              <li>
                <Link href="/submit">submit</Link>
              </li>
              <li>
                <Link href="/tags">tags</Link>
              </li>
              <li>
                <Link href="/about">about</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main-content">{children}</main>

        <footer className="site-footer">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div />
          </div>
        </footer>
      </body>
    </html>
  );
}
