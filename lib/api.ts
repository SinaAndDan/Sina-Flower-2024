import { supabase } from "./supabaseClient";
import axios from "axios";

export async function fetchCategories() {
  const { data, error } = await supabase.from("categories").select("*");

  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
  return data;
}

export const fetchProductsAbout = async (productId: string) => {
  const { data, error } = await supabase
    .from("plants")
    .select("name_pe, name_en")
    .eq("id", productId)
    .single();

  if (error) {
    console.error("Error fetching product details:", error.message);
    throw new Error(error.message);
  }
  return data;
};
