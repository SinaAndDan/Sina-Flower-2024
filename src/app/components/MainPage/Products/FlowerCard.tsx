import Image from "next/image";
import greenFlower from "../../../../../public/green flowe.png";
interface FlowerCardProps {
  flower: {
    name: string;
    price: string;
    image: string;
    width: number;
    height: number;
  };
}

const FlowerCard: React.FC<FlowerCardProps> = ({ flower }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md m-3 w-48 text-right overflow-hidden ">
      <Image
        className="w-full h-40 object-cover p-1"
        src={flower.image}
        alt={flower.name}
        width="300"
        height="200"
      />
      <h3 className="text-xl font-semibold p-2 font-abasan">{flower.name}</h3>
      <p className="text-gray-600 pb-4">{flower.price}</p>
    </div>
  );
};

export default FlowerCard;
