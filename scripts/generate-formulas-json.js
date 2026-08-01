const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const katex = require("katex");

const contentDir = path.join(__dirname, "..", "src", "content", "formulas");
const dataDir = path.join(__dirname, "..", "src", "data");
const safeDir = path.join(__dirname, "..", "src", "data", "safe-formulas");
const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(safeDir, { recursive: true });

const formulas = [];
const imports = [];

files.forEach((file, i) => {
  const slug = file.replace(".mdx", "");
  const source = fs.readFileSync(path.join(contentDir, file), "utf-8");
  const { data, content } = matter(source);

  let renderedLatex = "";
  if (data.latex) {
    try {
      renderedLatex = katex.renderToString(data.latex, {
        throwOnError: false, displayMode: true,
      });
    } catch { renderedLatex = data.latex; }
  }

  formulas.push({
    slug,
    title: data.title || slug,
    latex: data.latex || "",
    renderedLatex,
    description: data.description || "",
    summary: data.summary || data.description || "",
    tags: data.tags || [],
    date: data.date || "",
    section: "formulas",
    content: content.slice(0, 500),
    permalink: `/formulas/${slug}`,
  });

  // Strip frontmatter and escape braces for MDX component import
  const bodyOnly = source.replace(/^---\n[\s\S]*?\n---\n?/, "");
  const safeSource = bodyOnly.replace(/[{}]/g, (ch) => ch === "{" ? "\\{" : "\\}");
  fs.writeFileSync(path.join(safeDir, file), safeSource);

  const varName = `Post${i}`;
  imports.push({ varName, slug });
});

// Formula metadata
fs.writeFileSync(
  path.join(dataDir, "formulas.json"),
  JSON.stringify(formulas, null, 2)
);

// MDX component registry (imports from safe directory)
const importLines = imports
  .map(({ varName }, i) => {
    const fileName = files[i];
    return `import ${varName} from "./safe-formulas/${fileName}";`;
  })
  .join("\n");

const registryLines = imports
  .map(({ varName, slug }) => `  "${slug}": ${varName},`)
  .join("\n");

const componentFile = `${importLines}

import type { ComponentType } from "react";

const formulaComponents: Record<string, ComponentType> = {
${registryLines}
};

export function getFormulaComponent(slug: string): ComponentType | null {
  return formulaComponents[slug] ?? null;
}
`;

fs.writeFileSync(
  path.join(dataDir, "formula-components.ts"),
  componentFile
);

// Search index
const searchIndex = formulas.map((f) => ({
  title: f.title,
  summary: f.summary,
  content: f.content,
  permalink: f.permalink,
}));
fs.writeFileSync(
  path.join(__dirname, "..", "public", "search-index.json"),
  JSON.stringify(searchIndex)
);

console.log(`Generated ${formulas.length} formulas + component registry`);
