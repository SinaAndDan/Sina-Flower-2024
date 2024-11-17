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
      <Image
        className="w-full h-40 md: min-h-[350px] object-cover mb-3 rounded-t-2xl"
        src={flower.picture}
        alt={flower.name}
        width="300"
        height="300"
      />
      <div className="flex flex-col justify-between mb-2 px-5">
        <span className="bg-green text-white rounded-xl md:rounded-2xl text-xs md:text-sm px-5 py-1 opacity-70 w-fit">
          داخلی
        </span>
        <h3 className="text-xl md:text-2xl font-semibold font-parastoo text-start flex-grow md:mt-3">
          {flower.name}
        </h3>
        <div className="flex w-full justify-between items-center content-center md:mt-3">
          <p className="text-black text-opacity-70 text-sm md:text-base">
            فیکوس
          </p>
          <p className="text-gray-600 text-xl text-green font-semibold">
            {toPersianNumber(flower.price)}
            <span className="text-xs"> تومان</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FlowerCard;
