import { supabase } from "../../../lib/supabaseClient";
import { motion } from "framer-motion";
import Image from "next/image";
import Category from "../components/CategoriesPage/Category";

type CategoryProp = {
  id: number;
  bgColor: string;
  image: string;
  imagePosition: "right" | "left";
  text: string;
};

// Static data fetching
export async function fetchCategories() {
  const { data, error } = await supabase.from("categories").select("*");
  if (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
  return data as CategoryProp[];
}

// SSG function (used for build-time data fetching)
export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map((category) => ({
    id: category.id.toString(),
  }));
}

// Component
export default async function Categories() {
  const categories = await fetchCategories();

  return <Category categories={categories} />;
}
