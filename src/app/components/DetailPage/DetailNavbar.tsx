import { IoArrowForward } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { PiHeartbeatLight } from "react-icons/pi";
import { WiCelsius } from "react-icons/wi";
import { MdOutlineWaterDrop } from "react-icons/md";
import "../../../styles/fonts.css";

import Image from "next/image";
import ficus from "../../../../public/ficus.png";

const DetailNavbar = () => {
  return (
    <div className="font-yekan w-full">
      <div className="container mx-auto sm:px-0 px-2 w-full bg-gray-200 rounded-b-3xl notched-corner">
        <div className="w-full content-notch">
          <div className="pt-4">
            <IoArrowForward className="w-10 h-10 text-gray-800" />
          </div>
          <div className="h-full px-4 pb-6 mt-3 flex justify-between">
            <div className="flex flex-col justify-around">
              <h5 className="font-bold font-abasan text-2xl sm:text-4xl">
                فیکوس لیراتا
              </h5>
              <div className="">
                <p className="opacity-65 text-xs sm:text-base">کتگوری</p>
                <p className="text-green-500 font-semibold text-base sm:text-lg">
                  داخلی
                </p>
              </div>
              <div className="">
                <p className="opacity-65 text-xs sm:text-base">نوع</p>
                <p className="text-green-500 font-semibold text-base sm:text-lg">
                  کوچک
                </p>
              </div>
              <div className="">
                <p className="opacity-65 text-xs sm:text-base">گیاه</p>
                <p className="text-green-500 font-semibold text-base sm:text-lg">
                  فیکوس
                </p>
              </div>
            </div>
            <Image
              width={500}
              height={200}
              src={ficus}
              alt="هیجی"
              className="drop-shadow-2xl saturate-150 shadow-gray-100"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto sm:px-0 px-2">
        <p className="mt-8 px-4 font-semibold sm:text-xl">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        </p>
        <div className="grid grid-cols-2 gap-4 px-4 my-8">
          <div className="flex items-center">
            <div className="bg-gray-800 w-fit p-1 rounded-2xl">
              <TiWeatherSunny className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col px-3 text-sm sm:text-base">
              <p className="text-green-700 font-bold">۳۲٪</p>
              <p className="opacity-75">نور</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-800 w-fit p-1 rounded-2xl">
              <PiHeartbeatLight className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col px-3 text-sm sm:text-base">
              <p className="text-green-700 font-bold">۹۶٪</p>
              <p className="opacity-75">سلامتی</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-800 w-fit p-1 rounded-2xl flex items-center">
              <WiCelsius className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col px-3 text-sm sm:text-base">
              <p className="text-green-700 font-bold">℃ ۲۳</p>
              <p className="opacity-75">دما</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-800 w-fit p-1 rounded-2xl">
              <MdOutlineWaterDrop className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col px-3 text-sm sm:text-base">
              <p className="text-green-700 font-bold">۵۲٪</p>
              <p className="opacity-75">آب دهی</p>
            </div>
          </div>
        </div>
        <div className="px-4 fixed bottom-4 w-full container mx-auto z-20">
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm py-4 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full"
          >
            اضافه به سبد
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
        <p className="mt-5 px-4 mb-32 text-sm sm:text-base opacity-75">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. از طراحان گرافیک است.
          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
          ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و
          آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
          بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
          در زبان فارسی ایجاد کرد. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </p>
      </div>
    </div>
  );
};

export default DetailNavbar;
