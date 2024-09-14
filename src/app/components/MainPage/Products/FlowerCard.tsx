import Image from "next/image";
import Link from "next/link";

interface FlowerCardProps {
  flower: {
    id: number;
    name: string;
    price: string;
    picture: string;
    width: number;
    height: number;
  };
}

const FlowerCard: React.FC<FlowerCardProps> = ({ flower }) => {
  return (
    <Link
      href={`/products/${flower.id}`}
      className="bg-white rounded-2xl shadow-md m-3 w-48 text-right overflow-hidden block"
    >
      <Image
        className="w-full h-40 object-cover p-1"
        src={flower.picture}
        alt={flower.name}
        width="300"
        height="300"
      />
      <h3 className="text-xl font-semibold p-2 font-abasan">{flower.name}</h3>
      <p className="text-gray-600 pb-4">{flower.price}</p>
    </Link>
  );
};

export default FlowerCard;
