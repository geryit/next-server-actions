import fs from "fs";
import { Feature } from "geojson";

class Database {
  private _key: string | null; // Rename the key property to _key to indicate it's private and should be accessed via getter/setter

  constructor() {
    this._key = null; // Initialize _key with null
  }
  get key() {
    return this._key;
  }
  set key(value: string | null) {
    this._key = value;
  }

  async listConstructions(): Promise<Feature[]> {
    const geojson = fs.readFileSync("./data/constructions.geojson", {
      encoding: "utf-8",
    });
    const parsed = JSON.parse(geojson);
    return parsed.features.filter(
      (feature: Feature) => feature.properties?.["addr:street"],
    );
  }

  async findConstructions(): Promise<Feature[]> {
    const constructions = await this.listConstructions();

    // Early return if this.key is null
    if (!this.key) return constructions;

    const keyLowercased = this.key.toLowerCase(); // Ensure this.key is not null before calling toLowerCase

    return constructions.filter((feature) => {
      const properties = feature.properties;
      if (!properties || !properties["addr:street"]) return [];
      return (
        properties["name"]?.toLowerCase().includes(keyLowercased) ||
        properties["addr:street"]?.toLowerCase().includes(keyLowercased)
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
