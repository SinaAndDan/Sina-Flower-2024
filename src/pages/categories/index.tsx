import { fetchCategories } from "../../../lib/api";
import Category from "../../../components/CategoriesPage/Category";
import { CategoryProp } from "src/types/category";

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
