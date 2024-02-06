import { database } from "@/lib/Database";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const data = await database.findConstruction(id);

  return Response.json(data);
}
