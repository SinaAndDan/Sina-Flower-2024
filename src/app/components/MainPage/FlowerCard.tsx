import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductCardProps } from "src/types/productcard";
import { useLanguage } from "src/app/context/LanguageContext";

const toPersianNumber = (num: number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return num
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const FlowerCard: React.FC<ProductCardProps> = ({ flower }) => {
  const { language } = useLanguage();
  return (
    <Link href={`/products/${flower.id}`} className="">
      <Image
        className="w-full h-auto object-cover mb-3 rounded-t-2xl"
        src={flower.picture}
        alt={language === "pe" ? flower.name_pe : flower.name_en}
        width="300"
        height="300"
      />
      <div className="flex flex-col justify-between mb-2 px-5">
        <span className="bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow ease-in-out hover:from-[#004d00] hover:via-[#003300] hover:to-[#002200] text-white rounded-xl md:rounded-2xl text-xs md:text-sm px-5 py-1 w-fit">
          {language === "pe" ? flower.category_pe : flower.category_en}
        </span>
        <h3 className="text-xl lg:text-2xl font-semibold font-parastoo text-start flex-grow mt-3 text-nowrap">
          {language === "pe" ? flower.name_pe : flower.name_en}
        </h3>
        <div className="flex w-full justify-between items-center content-center mt-3">
          <p className="text-black text-opacity-70 text-sm md:text-base">
            {language === "pe" ? flower.type_pe : flower.type_en}
          </p>
          <p className="text-xl text-green font-semibold">
            {language === "pe" ? toPersianNumber(flower.price) : flower.price}
            <span className="text-xs "> تومان</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default FlowerCard;
