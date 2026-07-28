import { visit } from "unist-util-visit";
import type { Root } from "hast";

export function rehypeRestoreMath() {
  return (tree: Root) => {
    visit(tree, "text", (node) => {
      if (node.value.includes("\\{") || node.value.includes("\\}")) {
        node.value = node.value.replace(/\\\{/g, "{").replace(/\\\}/g, "}");
      }
    });
  };
}
