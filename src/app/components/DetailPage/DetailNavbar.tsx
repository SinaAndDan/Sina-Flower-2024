import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import ficus from "../../../../public/ficus.png";

const DetailNavbar = () => {
  return (
    <div className="container mx-auto sm:px-0 px-2 h-screen">
      <IoArrowForward className="w-10 h-10 sm:mt-0 mt-8 text-gray-700" />
      <div className="flex justify-between mt-10 h-1/3">
        <div className="h-full basis-1/2 p-4">
          <h5 className="text-3xl font-bold">فیکوس لیراتا</h5>
          <div className="pt-8 flex flex-col justify-around h-full">
            <div className="">
              <p>کتگوری</p>
              <p className="text-green-500 font-semibold">داخلی</p>
            </div>
            <div className="">
              <p>کتگوری</p>
              <p className="text-green-500">داخلی</p>
            </div>
            <div className="">
              <p>کتگوری</p>
              <p className="text-green-500">داخلی</p>
            </div>
          </div>
        </div>
        <Image
          className="w-full object-cover basis-1/2 "
          width={200}
          height={200}
          src={ficus}
          alt="هیجی"
        />
      </div>
    </div>
  );
};

export default DetailNavbar;
