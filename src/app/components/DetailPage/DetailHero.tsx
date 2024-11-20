import React from "react";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface Plant {
  id: string;
  name: string;
  price: number;
  picture: string;
  category: string;
  type: string;
  plant: string;
}

const DetailHero: React.FC<{ selectedProduct: Plant | null }> = ({
  selectedProduct,
}) => {
  const router = useRouter();

  const backToMainPage = () => {
    router.push("/");
  };
  return (
    <div className="container mx-auto sm:px-0 w-full bg-[#C4BDB2] relative notched-corner">
      <div className="w-full content-notch">
        <div className="pt-4">
          <IoArrowForward
            className="w-10 h-10 text-darkGray cursor-pointer md:hidden"
            onClick={backToMainPage}
          />
        </div>
        <div className="h-full pb-6 mt-3 flex justify-between">
          <div className="flex flex-col justify-around px-4 w-[20%] ">
            <h5 className="font-bold font-abasan text-2xl sm:text-4xl md:text-5xl xl:text-7xl">
              {selectedProduct?.name}
            </h5>
            <div className="">
              <p className="opacity-65 text-xs sm:text-base md:text-lg xl:text-xl">
                کتگوری
              </p>
              <p className="text-green font-semibold text-base sm:text-lg md:text-2xl xl:text-3xl">
                {selectedProduct?.category}
              </p>
            </div>
            <div className="">
              <p className="opacity-65 text-xs sm:text-base md:text-lg xl:text-xl">
                نوع
              </p>
              <p className="text-green font-semibold text-base sm:text-lg md:text-2xl xl:text-3xl">
                {selectedProduct?.type}
              </p>
            </div>
            <div className="">
              <p className="opacity-65 text-xs sm:text-base md:text-lg xl:text-xl">
                گیاه
              </p>
              <p className="text-green font-semibold text-base sm:text-lg md:text-2xl xl:text-3xl">
                {selectedProduct?.plant}
              </p>
            </div>
          </div>
          <Image
            width={250}
            height={300}
            src={selectedProduct?.picture || "/ficus.png"}
            alt="هیجی"
            className="w-full"
            layout="'intrinsic"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
