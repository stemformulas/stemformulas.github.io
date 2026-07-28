import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "about · stemformulas",
  description: "About page",
};

export default function AboutPage() {
  return (
    <article>
      <header style={{ maxWidth: "65ch", marginBottom: 0 }}>
        <h1 className={styles.title}>about</h1>
      </header>
      <section className={`${styles.section} prose`}>
        <p>
          Stemformulas is a website dedicated to providing a single place to
          look for STEM formulas. It has a long way to go to become that, but
          the foundation is laid out.
        </p>
        <p>
          It was made by a few engineering students (lead by{" "}
          <a href="https://x.com/linguinelabs">@linguinelabs</a>) who were
          frustrated with the current state of formula searching online. This
          frustration lead to the focus of the features of the site, which
          include:
        </p>
        <ul>
          <li>
            The search bar being in focus on site load, so you can search for a
            formula quickly
          </li>
          <li>
            LaTeX being copyable by just clicking on it on any formula&apos;s
            page
          </li>
          <li>The / key being used to open the search on any page</li>
          <li>
            Formula pages having nice preview images when shared on social
            media, so people don&apos;t even need to visit the site to see the
            formula
          </li>
          <li>The mobile-friendliness of the site</li>
        </ul>
        <h2>Tech Stack</h2>
        <p>
          This site is open-source on{" "}
          <a href="https://github.com/stemformulas/stemformulas.github.io">
            GitHub
          </a>
          .
        </p>
        <p>
          It is made with the Next.js framework, rendered with MDX and KaTeX,
          and styled with CSS modules.
        </p>
        <p>
          It is hosted on{" "}
          <a href="https://pages.github.com/">GitHub Pages</a>, deployed
          conveniently with GitHub Actions.
        </p>
        <h2>Contributing</h2>
        <p>
          If you want to add a formula to this site, there are two ways you can
          do so.
        </p>
        <ol>
          <li>
            Submit a formula on our <a href="/submit">submit</a> page.
          </li>
          <li>
            Create a pull request directly on the{" "}
            <a href="https://github.com/stemformulas/stemformulas.github.io">
              GitHub repo
            </a>
            . More detailed contribution instructions can be found in the{" "}
            <a href="https://github.com/stemformulas/stemformulas.github.io?tab=readme-ov-file#adding-a-formula">
              README
            </a>
            .
          </li>
        </ol>
      </section>
    </article>
  );
}
