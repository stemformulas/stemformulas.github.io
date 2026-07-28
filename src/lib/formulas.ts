import formulasData from "@/data/formulas.json";

export interface FormulaEntry {
  slug: string;
  title: string;
  summary: string;
  section: string;
  content: string;
  permalink: string;
}

export function getAllFormulas(): FormulaEntry[] {
  return formulasData as unknown as FormulaEntry[];
}
