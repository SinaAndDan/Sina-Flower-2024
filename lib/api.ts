import { supabase } from "./supabaseClient";
export async function fetchCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
  return data;
}
