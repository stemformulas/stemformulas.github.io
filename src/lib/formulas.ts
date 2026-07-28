import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface FormulaEntry {
  slug: string;
  title: string;
  summary: string;
  section: string;
  content: string;
  permalink: string;
}

export function getAllFormulas(): FormulaEntry[] {
  const dir = path.join(process.cwd(), "src/content/formulas");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const source = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data, content } = matter(source);

    return {
      slug,
      title: data.title || slug,
      summary: data.summary || data.description || "",
      section: "formulas",
      content: content.slice(0, 500),
      permalink: `/formulas/${slug}`,
    };
  });
}
