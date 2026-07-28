"use client";

import { useEffect, useRef, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import styles from "./page.module.css";

declare global {
  interface Window {
    renderMathInElement: (
      el: HTMLElement,
      opts?: Record<string, unknown>
    ) => void;
  }
}

export default function SubmitPage() {
  const [katexReady, setKatexReady] = useState(false);
  const [title, setTitle] = useState("Gaussian/Normal Distribution");
  const [description, setDescription] = useState("The formula for the normal distribution.");
  const [tags, setTags] = useState("math, statistics, probability theory");
  const [latex, setLatex] = useState(
    "f(x) = \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2}"
  );
  const [body, setBody] = useState(
    "The formula for the normal distribution as a function of the variable x is:\n$$ \\frac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}\\left(\\frac{x-\\mu}{\\sigma}\\right)^2} $$\n\nWhere\n\n* $e$ is Euler's number,\n* $\\mu$ is the mean of the distribution, and\n* $\\sigma$ is the standard deviation of the distribution.\n\n## Sources\n\n- [Wikipedia](https://en.wikipedia.org/wiki/Normal_distribution)\n- [Britannica](https://www.britannica.com/topic/uniform-distribution-statistics)"
  );
  const [showPreview, setShowPreview] = useState(false);
  const [sending, setSending] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css";
    document.head.appendChild(link);

    const katexScript = document.createElement("script");
    katexScript.src = "https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js";
    katexScript.onload = () => {
      const autoRender = document.createElement("script");
      autoRender.src = "https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/auto-render.min.js";
      autoRender.onload = () => setKatexReady(true);
      document.head.appendChild(autoRender);
    };
    document.head.appendChild(katexScript);
  }, []);

  const tagList = tags.split(",").map((t) => t.trim()).filter(Boolean);

  function renderPreview() {
    const sanitized = DOMPurify.sanitize(marked.parse(body) as string);
    const tagsHTML = tagList
      .map((tag) => `<a class="tag">${tag}</a>`)
      .join(" ");

    const html = `
      <article>
        <header style="max-width:65ch;margin-bottom:0">
          <h1 style="font-size:2.25rem;font-weight:800;line-height:2.5rem;color:var(--color-neutral-900);margin:0">${DOMPurify.sanitize(title)}</h1>
          <div style="margin:0.5rem 0;font-size:0.75rem;color:var(--color-neutral-500)">${tagsHTML}</div>
        </header>
        <div class="prose" style="margin-top:0">${sanitized}</div>
      </article>
    `;

    setShowPreview(true);

    requestAnimationFrame(() => {
      if (previewRef.current) {
        previewRef.current.innerHTML = html;
        if (window.renderMathInElement) {
          window.renderMathInElement(previewRef.current, {
            delimiters: [
              { left: "$$", right: "$$", display: true },
              { left: "$", right: "$", display: false },
            ],
          });
        }
      }
    });
  }

  async function handleSubmit() {
    try {
      setSending(true);
      const lastSubmit = localStorage.getItem("lastSubmissionTime");
      if (lastSubmit) {
        const elapsed = Date.now() - parseInt(lastSubmit);
        if (elapsed < 120000) {
          alert(
            `Please wait ${Math.ceil((120000 - elapsed) / 1000)} seconds before submitting again.`
          );
          setSending(false);
          return;
        }
      }

      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description, tags, latex, body }),
      });

      if (res.ok) {
        localStorage.setItem("lastSubmissionTime", String(Date.now()));
        alert("Submission sent successfully. Thank you!");
      } else {
        alert("Failed to send submission. Please try again.");
      }
    } catch {
      alert("An error occurred. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <article className={styles.wrapper}>
        <header className={styles.header}>
          <h1 className={styles.title}>submit a formula</h1>
          <p className={styles.subtitle}>
            Replace the example fields below, preview your submission, and then
            submit!
          </p>
        </header>

        <section className={styles.formSection}>
          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              renderPreview();
            }}
          >
            <label htmlFor="title" className={styles.label}>
              Title
            </label>
            <input
              id="title"
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label htmlFor="description" className={styles.label}>
              Short Description (used in search results only)
            </label>
            <input
              id="description"
              className={styles.input}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

            <label htmlFor="tags" className={styles.label}>
              Tags (comma-separated)
            </label>
            <input
              id="tags"
              className={styles.input}
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              required
            />

            <label htmlFor="latex" className={styles.label}>
              LaTeX for card preview
            </label>
            <textarea
              id="latex"
              className={styles.textarea}
              rows={2}
              value={latex}
              onChange={(e) => setLatex(e.target.value)}
              required
            />

            <label htmlFor="body" className={styles.label}>
              Body Text (Markdown, LaTeX)
            </label>
            <textarea
              id="body"
              className={styles.textarea}
              rows={8}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />

            <button type="submit" className={styles.btn}>
              Preview
            </button>
          </form>
        </section>

        {showPreview && (
          <section className={styles.previewSection}>
            <h2 className={styles.previewHeading}>Preview</h2>
            <div ref={previewRef} className={styles.previewContent} />
            <button
              className={styles.btn}
              onClick={handleSubmit}
              disabled={sending}
              style={{ marginTop: "1.5rem" }}
            >
              {sending ? "Sending..." : "Submit"}
            </button>
          </section>
        )}
      </article>
    );
}
