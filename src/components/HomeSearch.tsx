"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Fuse, { type FuseResult } from "fuse.js";
import type { FormulaEntry } from "@/lib/formulas";
import styles from "./home.module.css";

export default function HomeSearch() {
  const [results, setResults] = useState<FuseResult<FormulaEntry>[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const fuseRef = useRef<Fuse<FormulaEntry> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
      fetch("/search-index.json")
      .then((r) => r.json())
      .then((data: FormulaEntry[]) => {
        fuseRef.current = new Fuse(data, {
          shouldSort: true,
          ignoreLocation: true,
          threshold: 0.0,
          includeMatches: true,
          keys: [
            { name: "title", weight: 0.8 },
            { name: "summary", weight: 0.6 },
            { name: "content", weight: 0.4 },
          ],
        });
      });
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowDown" && results.length > 0) {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, results.length - 1));
      } else if (e.key === "ArrowUp" && results.length > 0) {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, -1));
      } else if (e.key === "Enter" && activeIndex >= 0) {
        e.preventDefault();
        router.push(results[activeIndex].item.permalink);
      } else if (e.key === "Enter" && results.length > 0) {
        e.preventDefault();
        router.push(results[0].item.permalink);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, results, router]);

  function handleInput(value: string) {
    setActiveIndex(-1);
    if (!fuseRef.current || !value.trim()) {
      setResults([]);
      return;
    }
    setResults(fuseRef.current.search(value).slice(0, 15));
  }

  return (
    <div className={styles.wrapper}>
      <img
        src="/logo.webp"
        alt="stemformulas logo"
        height={100}
        width={100}
        className={styles.logo}
      />
      <div className={styles.tagline}>
        <p>Welcome to stemformulas.com, a modern database for STEM formulas!</p>
        <p>
          Search for a formula or{" "}
          <a href="/submit">submit</a> a new one.
        </p>
      </div>
      <div className={styles.searchBox}>
        <header className={styles.searchHeader}>
          <span className={styles.searchIcon}>
            <svg width="16" height="16" viewBox="0 0 512 512" fill="currentColor">
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128S137.3 80 208 80s128 57.2 128 128-57.2 128-128 128z" />
            </svg>
          </span>
          <input
            ref={inputRef}
            type="search"
            autoComplete="off"
            className={styles.searchInput}
            placeholder="Search for a formula..."
            onChange={(e) => handleInput(e.target.value)}
            onFocus={(e) => e.target.select()}
          />
        </header>
        <section className={styles.resultsSection}>
          {results.map((r, i) => (
            <a
              key={r.item.slug}
              href={r.item.permalink}
              onClick={(e) => {
                e.preventDefault();
                router.push(r.item.permalink);
              }}
              className={`${styles.result} ${i === activeIndex ? styles.active : ""}`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className={styles.resultText}>
                <div className={styles.resultTitle}>{r.item.title}</div>
                <div className={styles.resultSummary}>{r.item.summary}</div>
              </div>
              <span className={styles.resultArrow}>&rarr;</span>
            </a>
          ))}
        </section>
      </div>
    </div>
  );
}
