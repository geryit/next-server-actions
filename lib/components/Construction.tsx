import { memo, PropsWithChildren } from "react";
import Link from "next/link";
import { Feature } from "geojson";
import getAddress from "@/lib/getAddress";

type Props = {
  feature: Feature;
};

export const Constuction = ({ feature }: PropsWithChildren<Props>) => {
  const properties = feature.properties;
  if (!properties) return null;

  const address = getAddress(properties);

  return (
    <div key={properties["@id"]} className="border p-4">
      <h2 className="font-bold">
        {properties["name"] || properties["addr:street"] || properties["@id"]}
      </h2>
      <p>{address}</p>

      <Link
        href={`/constructions/${properties["@id"].replace("way/", "")}`}
        className="underline hover:text-blue-500"
      >
        view site details
      </Link>
    </div>
  );
};

export default memo(Constuction);
