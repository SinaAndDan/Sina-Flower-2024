import Image from "next/image";
import Link from "next/link";
import { GoHeart } from "react-icons/go";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

interface FlowerCardProps {
  flower: {
    id: string;
    name: string;
    price: number;
    picture: string;
    width: number;
    height: number;
  };
}

const toPersianNumber = (num: number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  // Convert the number to a string, and replace each digit with the corresponding Persian one.
  return num
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const FlowerCard: React.FC<FlowerCardProps> = ({ flower }) => {
  return (
    <Link href={`/products/${flower.id}`} className="">
      <GoHeart className="w-7 h-7" />
      <Image
        className="w-full h-40 object-cover mb-3"
        src={flower.picture}
        alt={flower.name}
        width="300"
        height="300"
      />
      <span className="bg-green text-white rounded-xl text-xs px-5 opacity-70">
        داخلی
      </span>
      <h3 className="text-xl font-semibold font-parastoo">{flower.name}</h3>
      <div className="flex w-full justify-between items-center content-center">
        <p className="text-black text-opacity-70 text-sm">فیکوس</p>
        <p className="text-gray-600 text-xl text-green font-semibold">
          {toPersianNumber(flower.price)} <span className="text-xs">تومان</span>
        </p>
      </div>
    </Link>
  );
};

export default FlowerCard;
