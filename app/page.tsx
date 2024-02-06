import { Button } from "@/lib/components/Button";
import { TextInput } from "@/lib/components/TextInput";
import Construction from "@/lib/components/Construction";
import { database } from "@/lib/Database";
import { search } from "@/app/actions";

export default async function Home({
  searchParams,
}: {
  searchParams: { key?: string };
}) {
  const constructions = await database.findConstructions();

  return (
    <>
      <div className="flex justify-center py-4">
        <form action={search} className="flex gap-2">
          <TextInput
            name="key"
            placeholder="Search a Construction"
            defaultValue={searchParams.key}
            required={!!constructions.length} // disable required if no constructions
          />
          <Button type="submit">Search</Button>
        </form>
      </div>

      <div className="flex gap-2 flex-wrap">
        {constructions.length === 0 ? (
          <p className="text-center flex-1">No constructions found.</p>
        ) : (
          constructions.map((feature) => (
            <Construction feature={feature} key={feature.properties?.["@id"]} />
          ))
        )}
      </div>
    </>
  );
}
