import Link from "next/link";
import { database } from "../lib/Database";
import { Button } from "../lib/components/Button";
import { TextInput } from "../lib/components/TextInput";

export default async function Home() {
  const constructions = await database.listConstructions();
  return (
    <>
      <div className="flex justify-center py-4">
        <TextInput />
        <Button type="submit">search</Button>
        {/* TODO how to make this work */}
      </div>
      <div className="flex flex-col gap-2">
        {constructions.map((feature: any) => (
          <div key={feature.properties["@id"]} className="border p-2">
            <h2>
              {feature.properties["name"] ||
                feature.properties["addr:street"] ||
                feature.properties["@id"]}
            </h2>
            <Link
              href={`/constructions/${feature.properties["@id"].replace(
                "way/",
                ""
              )}`}
              prefetch={false}
            >
              view site details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
