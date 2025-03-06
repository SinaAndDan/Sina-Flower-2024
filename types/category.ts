export type CategoryProp = {
  id: number;
  bgColor: string;
  image: string;
  imagePosition: "right" | "left";
  text_pe: string;
  text_en: string;
};
export type CategoryArrayProp = {
  categories: CategoryProp[];
};

export type SelectedCategoryProps = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

export type CategoryDisplayProp = {
  selectedCategory: string;
};
