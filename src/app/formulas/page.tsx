import Link from "next/link";
import formulasData from "@/data/formulas.json";
import styles from "./page.module.css";

interface FormulaMeta {
  slug: string;
  title: string;
  renderedLatex: string;
}

function getFormulas(): FormulaMeta[] {
  return formulasData as unknown as FormulaMeta[];
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
        {formulas.map((formula) => (
          <Link
            key={formula.slug}
            href={`/formulas/${formula.slug}`}
            className={styles.card}
          >
            <span className={styles.cardTitle}>{formula.title}</span>
            {formula.renderedLatex && (
              <div
                className={styles.cardLatex}
                dangerouslySetInnerHTML={{ __html: formula.renderedLatex }}
              />
            )}
          </Link>
        ))}
      </section>
    </>
  );
}
