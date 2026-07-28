const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "..", "src", "content", "formulas");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
const matter = require("gray-matter");

const formulas = files.map((file) => {
  const slug = file.replace(".mdx", "");
  const source = fs.readFileSync(path.join(dir, file), "utf-8");
  const { data, content } = matter(source);
  return {
    slug,
    title: data.title || slug,
    latex: data.latex || "",
    description: data.description || "",
    summary: data.summary || data.description || "",
    tags: data.tags || [],
    section: "formulas",
    content: content.slice(0, 500),
    permalink: `/formulas/${slug}`,
  };
});

// Write to src/data for import
const dataDir = path.join(__dirname, "..", "src", "data");
fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(
  path.join(dataDir, "formulas.json"),
  JSON.stringify(formulas, null, 2)
);

// Search index: title, summary, permalink only
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

console.log(
  `Generated ${formulas.length} formulas + search index`
);
