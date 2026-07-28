import fs from "fs";
import path from "path";
import Link from "next/link";
import katex from "katex";
import matter from "gray-matter";
import styles from "./page.module.css";

const PER_PAGE = 50;

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

export default async function FormulasPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const currentPage = Math.max(1, parseInt(pageParam || "1") || 1);
  const formulas = getFormulas();
  const totalPages = Math.ceil(formulas.length / PER_PAGE);
  const paginated = formulas.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE
  );

  return (
    <>
      <header>
        <h1 className={styles.heading}>formulas</h1>
      </header>

      <p className={styles.subtitle}>
        Click on any formula to visit its page for more details.
      </p>

      <section className={`grid-container ${styles.grid}`}>
        {paginated.map((formula) => {
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

      {totalPages > 1 && (
        <nav className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={p === 1 ? "/formulas" : `/formulas?page=${p}`}
              className={`${styles.pageLink} ${p === currentPage ? styles.pageActive : ""}`}
            >
              {p}
            </Link>
          ))}
        </nav>
      )}
    </>
  );
}
