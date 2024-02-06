import fs from "fs";

class Database {
  async listConstructions() {
    const geojson = fs.readFileSync("./data/constructions.geojson", {
      encoding: "utf-8",
    });
    const parsed = JSON.parse(geojson);
    return parsed.features;
  }

  async findConstruction(id: string) {
    const constructions = await this.listConstructions();

    return constructions.find((construction: any) => {
      return construction.properties["@id"] === `way/${id}`;
    });
  }
}
export const database = new Database();
