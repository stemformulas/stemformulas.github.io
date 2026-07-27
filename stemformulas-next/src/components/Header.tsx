"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Search from "./Search";

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (
        e.key === "/" &&
        !searchOpen &&
        !isInputFocused()
      ) {
        e.preventDefault();
        setSearchOpen(true);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [searchOpen]);

  return (
    <>
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
            <li>
              <button
                className="search-toggle"
                onClick={() => setSearchOpen(true)}
                title="Search (/)"
              >
                <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128S137.3 80 208 80s128 57.2 128 128-57.2 128-128 128z" />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {searchOpen && <Search onClose={() => setSearchOpen(false)} />}
    </>
  );
}

function isInputFocused() {
  const el = document.activeElement;
  if (!el) return false;
  const tag = el.tagName.toLowerCase();
  return (
    tag === "input" ||
    tag === "textarea" ||
    tag === "select" ||
    (el as HTMLElement).isContentEditable
  );
}
