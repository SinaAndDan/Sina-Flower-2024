import { fetchCategories } from "../../../lib/api";
import Category from "../components/CategoriesPage/Category";

type CategoryProp = {
  id: number;
  bgColor: string;
  image: string;
  imagePosition: "right" | "left";
  text: string;
};

// SSG function (optional for static params)
export async function generateStaticParams() {
  const categories = await fetchCategories();
  return categories.map((category: CategoryProp) => ({
    id: category.id.toString(),
  }));
}

export default async function Categories() {
  const categories = await fetchCategories();

  return <Category categories={categories} />;
}
