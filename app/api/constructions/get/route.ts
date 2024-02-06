import { database } from "@/lib/Database";

export async function GET(request: Request) {
  const constructions = await database.listConstructions();

  const { searchParams } = new URL(request.url);
  const key = searchParams.get("key");

  if (!key) return constructions;
  const data = constructions.filter((feature) => {
    if (!feature.properties) return [];
    return (
      feature.properties["name"]?.toLowerCase().includes(key.toLowerCase()) ||
      feature.properties["addr:street"]
        ?.toLowerCase()
        .includes(key.toLowerCase())
    );
  });

  return Response.json(data);
}
