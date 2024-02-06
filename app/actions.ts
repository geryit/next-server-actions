import { Feature } from "geojson";

const rootUrl = "http://localhost:3000";

export async function getAll(): Promise<Feature[]> {
  const res = await fetch(`${rootUrl}/api/constructions/all`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getFiltered(key?: string): Promise<Feature[]> {
  const res = await fetch(`${rootUrl}/api/constructions/filter?key=${key}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getSingle(id?: string): Promise<Feature> {
  const res = await fetch(`${rootUrl}/api/constructions/get?id=${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
