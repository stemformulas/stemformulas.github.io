import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import Header from "@/components/Header";

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
        <Header />

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
