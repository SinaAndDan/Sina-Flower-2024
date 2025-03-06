import React, { useEffect } from "react";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { PlantProps } from "../../types/plant";
import { useGlobalContext } from "context/GlobalContext";

interface DetailHeroProps {
  selectedProduct: PlantProps | null
}

const DetailHero: React.FC<DetailHeroProps> = ({
  selectedProduct
}) => {
  const { stopLoading } = useGlobalContext();
  const router = useRouter();

  const backToMainPage = () => {
    router.push("/");
  };

  const handleImageLoad = () => {
    stopLoading(); // Stop the loading state from the context
  };
  return (
    <div className="container mx-auto sm:px-0 w-full">
      <div className="w-full">
        <div className="h-full pb-6 flex justify-between relative ">
          <Image
            width={1000}
            height={2000}
            src={selectedProduct?.picture || "/images/golesina.png"}
            alt="هیجی"
            className="w-full h-auto min-h-[40vh] md:max-h-[80vh] sm:object-contain object-cover rounded-br-[80px]"
            layout="intrinsic"
            onLoad={handleImageLoad}
          />
          <IoArrowForward
            className="absolute w-10 h-10 text-greenlogIn cursor-pointer md:hidden right-5 top-5"
            onClick={backToMainPage}
          />
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
