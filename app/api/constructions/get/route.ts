import { database } from "@/lib/Database";

export async function GET(request: Request) {
  const constructions = await database.listConstructions();

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const data = constructions.find((construction: any) => {
    return construction.properties["@id"] === `way/${id}`;
  });

  return Response.json(data);
}
