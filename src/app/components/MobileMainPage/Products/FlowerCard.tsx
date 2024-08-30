import Image from "next/image";
import greenFlower from "../../../../../public/green flowe.png";
interface FlowerCardProps {
  flower: {
    name: string;
    price: string;
    image: string;
  };
}

const FlowerCard: React.FC<FlowerCardProps> = ({ flower }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md m-2 w-48 text-right overflow-hidden">
      <Image
        className="w-full h-40 object-cover"
        src={greenFlower}
        alt={flower.name}
      />
      <h3 className="text-xl font-semibold p-2 font-aref">{flower.name}</h3>
      <p className="text-gray-600 pb-4 font-aref">{flower.price}</p>
    </div>
  );
};

export default FlowerCard;
