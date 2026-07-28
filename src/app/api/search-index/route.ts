import { getAllFormulas } from "@/lib/formulas";

export async function GET() {
  const formulas = getAllFormulas();
  return Response.json(formulas);
}
