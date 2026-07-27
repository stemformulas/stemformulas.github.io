import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import Link from "next/link";
import styles from "./page.module.css";

async function getFormula(slug: string) {
  const filePath = path.join(
    process.cwd(),
    "src/content/formulas",
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
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
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
    components: {
      img: ({ src, alt, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={resolveImage(src)} alt={alt || ""} {...rest} />
      ),
    },
  });

  return { content, frontmatter };
}

export async function generateStaticParams() {
  const formulasDir = path.join(process.cwd(), "src/content/formulas");
  const files = fs.readdirSync(formulasDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(".mdx", ""),
    }));
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
          {formula.content}
        </div>
      </section>

      <footer className={styles.articleFooter}>
        {/* Prev/next navigation will go here */}
      </footer>
    </article>
  );
}
