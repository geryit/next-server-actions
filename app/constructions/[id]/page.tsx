import { notFound } from "next/navigation";
import { database } from "@/lib/Database";
import { Feature } from "geojson";

const rootUrl = "http://localhost:3000";

async function getData(id?: string): Promise<Feature> {
  const res = await fetch(`${rootUrl}/api/constructions/get?id=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ConstructionPage({
  params,
}: {
  params: { id: string };
}) {
  const construction = await getData(params.id);

  if (!construction) {
    return notFound();
  }

  if (!construction.properties) return null;

  return (
    <div>
      <h2 className="text-xl">
        {construction.properties["name"] ||
          construction.properties["addr:street"] ||
          construction.properties["@id"]}
      </h2>
      <p className="whitespace-pre">
        {JSON.stringify(construction.properties, undefined, 2)}
      </p>
    </div>
  );
}
