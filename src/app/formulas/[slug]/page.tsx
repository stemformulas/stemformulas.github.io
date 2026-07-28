import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import formulasData from "@/data/formulas.json";
import styles from "./page.module.css";
import KatexContent from "@/components/KatexContent";
import CopyKatex from "@/components/CopyKatex";

const GITHUB_RAW =
  "https://github.com/stemformulas/stemformulas.github.io/raw/main/content/formulas";

async function getFormula(slug: string) {
  try {
    const { compileMDX } = await import("next-mdx-remote/rsc");
    const { rehypeRestoreMath } = await import("@/lib/rehype-restore-math");
    const fs = await import("fs");
    const path = await import("path");

    const filePath = path.join(
      process.cwd(),
      "src/content/formulas",
      `${slug}.mdx`
    );

    if (!fs.existsSync(filePath)) return null;

    const source = fs.readFileSync(filePath, "utf-8");

    const safeSource = source.replace(
      /(\$\$[\s\S]*?\$\$|\$[^$\n]+?\$)/g,
      (match) => match.replace(/[{}]/g, (ch) => (ch === "{" ? "\\{" : "\\}"))
    );

    const contentDir = path.join(process.cwd(), "src/content/formulas");

    function resolveImage(src: string | undefined) {
      if (!src || src.startsWith("http")) return src;
      const imgPath = path.join(contentDir, src);
      if (!fs.existsSync(imgPath)) return src;
      const buf = fs.readFileSync(imgPath);
      const ext = path.extname(src).slice(1) || "png";
      return `data:image/${ext};base64,${buf.toString("base64")}`;
    }

    const { content, frontmatter } = await compileMDX<{
      title: string;
      description: string;
      latex: string;
      tags: string[];
    }>({
      source: safeSource,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          rehypePlugins: [rehypeRestoreMath],
        },
      },
      components: {
        img: ({
          src,
          alt,
          ...rest
        }: React.ImgHTMLAttributes<HTMLImageElement>) => (
          <img
            src={resolveImage(src as string | undefined)}
            alt={alt || ""}
            {...rest}
          />
        ),
      },
    });

    return { content, frontmatter };
  } catch {
    return null;
  }
}

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
  const formula = await getFormula(slug);

  if (!formula) notFound();

  return (
    <article>
      <CopyKatex />
      <header className={styles.articleHeader}>
        <h1 className={styles.title}>{formula.frontmatter.title}</h1>
        {formula.frontmatter.tags && formula.frontmatter.tags.length > 0 && (
          <div className={styles.tags}>
            <div className={styles.tagsInner}>
              {formula.frontmatter.tags.map((tag) => (
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
              <div className={`${styles.tocContent} toc`}>
                {/* TOC will be populated later */}
              </div>
            </details>
          </div>
        </div>

        <div className={`${styles.contentArea} prose`}>
          <KatexContent>{formula.content}</KatexContent>
        </div>
      </section>

      <footer className={styles.articleFooter}>
        {/* Prev/next navigation will go here */}
      </footer>
    </article>
  );
}
