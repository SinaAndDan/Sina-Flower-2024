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
    <div className="container mx-auto sm:px-0 w-full">
      <div className="w-full content-notch">
        <div className="h-full pb-6 flex justify-between relative">
          <Image
            width={250}
            height={300}
            src={selectedProduct?.picture || "/ficus.png"}
            alt="هیجی"
            className="w-full rounded-br-[80px] min-h-[40vh] object-cover"
            layout="'intrinsic"
          />
          <IoArrowForward
            className="absolute w-10 h-10 text-darkGray cursor-pointer md:hidden right-5 top-5"
            onClick={backToMainPage}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
