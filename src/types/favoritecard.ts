export type FavoriteCardProps = {
  flower: {
    id: string;
    name_pe: string;
    name_en: string;
    price: number;
    picture: string;
  };
  onRemove: () => void;
};
