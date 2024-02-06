import { notFound } from "next/navigation";
import { database } from "@/lib/Database";

export default async function ConstructionPage({
  params,
}: {
  params: { id: string };
}) {
  const construction = await database.findConstruction(params.id);

  if (!construction) {
    return notFound();
  }

  if (!construction.properties) return null;

  return (
    <div className="max-w-lg m-auto p-8">
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
