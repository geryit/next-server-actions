import { database } from "@/lib/Database";

export async function GET() {
  const data = await database.listConstructions();

  return Response.json({ data });
}
