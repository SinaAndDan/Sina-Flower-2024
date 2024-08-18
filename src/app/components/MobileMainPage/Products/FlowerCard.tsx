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
    <div className="bg-white rounded-lg shadow-md m-4 w-48 text-center overflow-hidden">
      <Image
        className="w-full h-32 object-cover"
        src={greenFlower}
        alt={flower.name}
      />
      <h3 className="text-xl font-semibold p-2">{flower.name}</h3>
      <p className="text-gray-600 pb-4">{flower.price}</p>
    </div>
  );
};

export default FlowerCard;
