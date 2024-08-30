import { IoArrowForward } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { PiHeartbeatLight } from "react-icons/pi";
import { WiCelsius } from "react-icons/wi";
import { MdOutlineWaterDrop } from "react-icons/md";

import Image from "next/image";
import ficus from "../../../../public/ficus.png";

const DetailNavbar = () => {
  return (
    <>
      <div className="container mx-auto sm:px-0 px-2 w-full bg-gray-200 rounded-b-3xl">
        <div className="w-full">
          <div className="py-4">
            <IoArrowForward className="w-10 h-10 sm:mt-0 text-gray-800" />
          </div>
          <div className="flex justify-between">
            <div className="h-full p-4">
              <h5 className="text-5xl font-bold">فیکوس لیراتا</h5>
              <div className="flex flex-col justify-around h-64">
                <div className="">
                  <p>کتگوری</p>
                  <p className="text-green-500 font-semibold">داخلی</p>
                </div>
                <div className="">
                  <p>نوع</p>
                  <p className="text-green-500 font-semibold">کوچک</p>
                </div>
                <div className="">
                  <p>گیاه</p>
                  <p className="text-green-500 font-semibold">فیکوس</p>
                </div>
              </div>
            </div>
            <Image
              className="w-full object-cover"
              width={200}
              height={200}
              src={ficus}
              alt="هیجی"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-0 px-2">
        <p className="mt-8 px-4 text-lg font-semibold">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        </p>
        <div className="grid grid-cols-2 gap-4 px-4 my-8">
          <div className="flex">
            <div className="bg-gray-800 w-fit p-1 rounded-2xl">
              <TiWeatherSunny className="w-12 h-12 sm:mt-0 text-white" />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-green-700 font-bold text-xl">۳۲٪</p>
              <p className="text-gray-600 text-lg">نور</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-800 w-fit p-1 rounded-2xl">
              <PiHeartbeatLight className="w-12 h-12 sm:mt-0 text-white" />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-green-700 font-bold text-xl">۹۶٪</p>
              <p className="text-gray-600 text-lg">سلامتی</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-800 w-fit p-1 rounded-2xl flex items-center">
              <WiCelsius className="w-12 h-12 sm:mt-0 text-white" />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-green-700 font-bold text-xl">۲۳ درجه</p>
              <p className="text-gray-600 text-lg">دما</p>
            </div>
          </div>
          <div className="flex">
            <div className="bg-gray-800 w-fit p-1 rounded-2xl">
              <MdOutlineWaterDrop className="w-12 h-12 sm:mt-0 text-white" />
            </div>
            <div className="flex flex-col px-3">
              <p className="text-green-700 font-bold text-xl">۵۲٪</p>
              <p className="text-gray-600 text-lg">آب دهی</p>
            </div>
          </div>
        </div>
        <div className="px-4 fixed bottom-4 w-full container mx-auto">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm py-4 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full"
          >
            اضافه کردن به سبد خرید
          </button>
        </div>
        <div className="flex justify-center items-center">
          <a className="pl-3 border-l-2 border-zinc-700 border-opacity-40 text-xl cursor-pointer">
            نظرات
          </a>
          <a className="pr-3 text-lime-700 text-xl cursor-pointer">
            معرفی محصول
          </a>
        </div>
        <p className="mt-5 px-2">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
      </div>
    </>
  );
};

export default DetailNavbar;
