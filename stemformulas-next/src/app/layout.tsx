import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "stemformulas",
  description:
    "Stemformulas is the eventual home of every STEM formula in the world.",
  openGraph: {
    title: "stemformulas",
    description: "All of the STEM formulas, eventually",
    url: "https://stemformulas.com",
    siteName: "stemformulas.com",
    type: "website",
    images: [
      {
        url: "https://github.com/stemformulas/stemformulas.github.io/raw/main/equalsicon-wide.png",
        width: 1500,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "stemformulas",
    description: "All of the STEM formulas, eventually",
    images: [
      "https://github.com/stemformulas/stemformulas.github.io/raw/main/equalsicon-wide.png",
    ],
    site: "stemformulas.com",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ url: "/favicon.ico" }],
  },
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
