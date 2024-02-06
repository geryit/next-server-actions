import fs from "fs";
import { Feature } from "geojson";

class Database {
  async listConstructions(): Promise<Feature[]> {
    const geojson = fs.readFileSync("./data/constructions.geojson", {
      encoding: "utf-8",
    });
    const parsed = JSON.parse(geojson);
    return parsed.features;
  }

  async findConstructions(key?: string | null) {
    const constructions = await this.listConstructions();

    if (!key) return constructions;
    return constructions.filter((feature) => {
      if (!feature.properties) return [];
      return (
        feature.properties["name"]?.toLowerCase().includes(key.toLowerCase()) ||
        feature.properties["addr:street"]
          ?.toLowerCase()
          .includes(key.toLowerCase())
      );
    });
  }

  async findConstruction(id: string | null) {
    const constructions = await this.listConstructions();

    return constructions.find((construction: any) => {
      return construction.properties["@id"] === `way/${id}`;
    });
  }
}
export const database = new Database();
