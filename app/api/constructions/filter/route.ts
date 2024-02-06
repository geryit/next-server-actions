import { database } from "@/lib/Database";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  const data = await database.findConstructions(key);

  return Response.json(data);
}
