import { notFound } from "next/navigation";
import { database } from "@/lib/Database";
import Link from "next/link";
import getAddress from "@/lib/getAddress";

export default async function ConstructionPage({
  params,
}: {
  params: { id: string };
}) {
  const construction = await database.findConstruction(params.id);

  if (!construction) {
    return notFound();
  }

  const { properties } = construction;

  if (!properties) return null;

  const title =
    properties["name"] || properties["addr:street"] || properties["@id"];

  const address = getAddress(properties);

  return (
    <div className="p-4">
      <Link href="/" className="hover:text-blue-600 underline">
        ← Go Back
      </Link>
      <h2 className="text-xl mt-4">{title}</h2>
      <a
        href={`https://www.google.com/maps/dir/${address}`}
        className="underline"
      >
        {address}
      </a>

      <iframe
        className="mt-4"
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=${address}`}
      ></iframe>
    </div>
  );
}
