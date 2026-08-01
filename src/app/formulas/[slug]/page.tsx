import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import formulasData from "@/data/formulas.json";
import { getFormulaComponent } from "@/data/formula-components";
import styles from "./page.module.css";
import KatexContent from "@/components/KatexContent";
import CopyKatex from "@/components/CopyKatex";

const GITHUB_RAW =
  "https://github.com/stemformulas/stemformulas.github.io/raw/main/content/formulas";

export async function generateStaticParams() {
  return (formulasData as { slug: string }[]).map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = formulasData.find((f) => f.slug === slug);

  return {
    title: `${meta?.title || slug} · stemformulas`,
    description: meta?.description || meta?.summary || "",
    openGraph: {
      title: `${meta?.title || slug} · stemformulas`,
      description: meta?.description || meta?.summary || "",
      type: "website",
      images: [
        {
          url: `${GITHUB_RAW}/${slug}/preview.png`,
          width: 1500,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${meta?.title || slug} · stemformulas`,
      description: meta?.description || meta?.summary || "",
      images: [`${GITHUB_RAW}/${slug}/preview.png`],
    },
  };
}

export default async function FormulaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = formulasData.find(
    (f: { slug: string; title: string; description?: string; summary?: string; tags?: string[] }) =>
      f.slug === slug
  );
  const PostContent = getFormulaComponent(slug);

  if (!meta || !PostContent) notFound();

  return (
    <article>
      <CopyKatex />
      <header className={styles.articleHeader}>
        <h1 className={styles.title}>{meta.title}</h1>
        {meta.tags && meta.tags.length > 0 && (
          <div className={styles.tags}>
            <div className={styles.tagsInner}>
              {meta.tags.map((tag) => (
                <Link key={tag} href={`/tags/${tag}`} className="tag">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <section className={styles.articleLayout}>
        <div className={styles.tocSidebar}>
          <div className={styles.tocSticky}>
            <details open className={styles.tocDetails}>
              <summary className={styles.tocSummary}>
                Table of Contents
              </summary>
              <div className={`${styles.tocContent} toc`} />
            </details>
          </div>
        </div>

        <div className={`${styles.contentArea} prose`}>
          <KatexContent>
            <PostContent />
          </KatexContent>
        </div>
      </section>

      <footer className={styles.articleFooter} />
    </article>
  );
}
