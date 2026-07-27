import fs from "fs";
import path from "path";
import Link from "next/link";
import katex from "katex";
import matter from "gray-matter";
import styles from "./page.module.css";

interface FormulaMeta {
  slug: string;
  title: string;
  latex: string;
}

function getFormulas(): FormulaMeta[] {
  const dir = path.join(process.cwd(), "src/content/formulas");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const source = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(source);
    return {
      slug,
      title: data.title || slug,
      latex: data.latex || "",
    };
  });
}

export default function FormulasPage() {
  const formulas = getFormulas();

  return (
    <>
      <header>
        <h1 className={styles.heading}>formulas</h1>
      </header>

      <p className={styles.subtitle}>
        Click on any formula to visit its page for more details.
      </p>

      <section className={`grid-container ${styles.grid}`}>
        {formulas.map((formula) => {
          let renderedLatex = "";
          if (formula.latex) {
            try {
              renderedLatex = katex.renderToString(formula.latex, {
                throwOnError: false,
                displayMode: true,
              });
            } catch {
              renderedLatex = formula.latex;
            }
          }

          return (
            <Link
              key={formula.slug}
              href={`/formulas/${formula.slug}`}
              className={styles.card}
            >
              <span className={styles.cardTitle}>{formula.title}</span>
              {renderedLatex && (
                <div
                  className={styles.cardLatex}
                  dangerouslySetInnerHTML={{ __html: renderedLatex }}
                />
              )}
            </Link>
          );
        })}
      </section>
    </>
  );
}
