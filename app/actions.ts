"use server";

import { database } from "@/lib/Database";
import { revalidatePath } from "next/cache";

export const search = async (formData: FormData) => {
  database.key = formData.get("key") as string;
  revalidatePath("/");
};
