export type FavoriteCardProps = {
  flower: {
    id: string;
    name: string;
    price: number;
    picture: string;
  };
  onRemove: () => void;
};
