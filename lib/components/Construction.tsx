import { memo, PropsWithChildren } from "react";
import Link from "next/link";
import { Feature } from "geojson";

type Props = {
  feature: Feature;
};

export const Constuction = ({ feature }: PropsWithChildren<Props>) => {
  if (!feature.properties) return null;
  return (
    <div key={feature.properties["@id"]} className="border p-2">
      <h2 className="font-bold">
        {feature.properties["name"] ||
          feature.properties["addr:street"] ||
          feature.properties["@id"]}
      </h2>
      <Link
        href={`/constructions/${feature.properties["@id"].replace("way/", "")}`}
        className="underline hover:text-blue-500"
      >
        view site details
      </Link>
    </div>
  );
};

export default memo(Constuction);
