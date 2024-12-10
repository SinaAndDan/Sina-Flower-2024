import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ProductCardProps } from "src/types/productcard";
import { useLanguage } from "src/app/context/LanguageContext";
import { Poppins } from "next/font/google";

const toPersianNumber = (num: number): string => {
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

  return num
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const FlowerCard: React.FC<ProductCardProps> = ({ flower }) => {
  const { language } = useLanguage();
  return (
    <Link
      href={`/products/${flower.id}`}
      dir={language === "pe" ? "rtl" : "ltr"}
    >
      <Image
        className="w-full h-auto object-cover mb-3 rounded-t-2xl"
        src={flower.picture}
        alt={language === "pe" ? flower.name_pe : flower.name_en}
        width="300"
        height="300"
      />
      <div className="flex flex-col justify-between mb-2 px-5">
        <span
          className={`bg-gradient-to-r from-[#006400] via-[#004d00] to-[#003300] shadow ease-in-out text-white rounded-xl md:rounded-2xl text-xs md:text-sm px-5 py-1 w-fit ${
            language === "pe" ? "font-yekan" : poppins.className
          }`}
        >
          {language === "pe" ? flower.category_pe : flower.category_en}
        </span>
        <h3
          className={`text-xl font-semibold font-parastoo text-start flex-grow mt-3 text-nowrap ${
            language === "pe" ? "font-yekan lg:text-2xl" : poppins.className
          } `}
        >
          {language === "pe" ? flower.name_pe : flower.name_en}
        </h3>
        <div className="flex w-full justify-between items-center content-center mt-3">
          <p
            className={`text-black text-opacity-70 text-sm md:text-base ${
              language === "pe" ? "font-yekan" : poppins.className
            }`}
          >
            {language === "pe" ? flower.type_pe : flower.type_en}
          </p>
          <div
            className={`flex items-center text-green ${
              language === "pe"
                ? "flex-row font-yekan"
                : poppins.className + " flex-row-reverse"
            }`}
          >
            <p className={`text-xl  font-semibold`}>
              {language === "pe"
                ? toPersianNumber(flower.price_pe)
                : flower.price_en}
            </p>
            <span
              className={`mx-0.5 ${language === "pe" ? "mt-1 text-xs" : ""}`}
            >
              {language === "pe" ? "تومان" : "$"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FlowerCard;
