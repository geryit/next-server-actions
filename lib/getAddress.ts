import { Feature } from "geojson";

const getAddress = (properties: Feature["properties"]) => {
  if (!properties) return "";
  return `${properties["addr:street"] || ""} ${properties["addr:housenumber"] || ""} ${properties["addr:unit"] || ""} ${properties["building:levels"] ? properties["building:levels"] + ". krs." : ""} ${properties["addr:postcode"] || ""} ${properties["addr:city"] || ""}`;
};

export default getAddress;
