"use client";

import { IoArrowForward } from "react-icons/io5";
import { TiWeatherSunny } from "react-icons/ti";
import { PiHeartbeatLight } from "react-icons/pi";
import { WiCelsius } from "react-icons/wi";
import { MdOutlineWaterDrop } from "react-icons/md";
import "../../../styles/fonts.css";
import Image from "next/image";
import ficus from "../../../../public/ficus.png";
import { useState } from "react";
import { DiVim } from "react-icons/di";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { SlLike } from "react-icons/sl";
import { BiSolidLike } from "react-icons/bi";

const DetailNavbar = () => {
  const [about, setAbout] = useState(false);
  const [liked, setIsLiked] = useState(false);

  const switchToCmsHandler = () => {
    if (about) {
      setAbout(false);
    }
    return;
  };
  const switchToaboutHandler = () => {
    if (!about) {
      setAbout(true);
    }
    return;
  };

  const giveLikeHandler = () => {
    setIsLiked((liked) => !liked);
  };
  return (
    <div className="font-yekan w-full">
      <div className="container mx-auto sm:px-0 px-2 w-full bg-gray-200 relative notched-corner">
        <div className="w-full content-notch">
          <div className="pt-4">
            <IoArrowForward className="w-10 h-10 text-gray-800" />
          </div>
          <div className="h-full px-4 pb-6 mt-3 flex justify-between">
            <div className="flex flex-col justify-around">
              <h5 className="font-bold font-abasan text-2xl sm:text-4xl md:text-5xl xl:text-7xl">
                فیکوس لیراتا
              </h5>
              <div className="">
                <p className="opacity-65 text-xs sm:text-base md:text-lg xl:text-xl">
                  کتگوری
                </p>
                <p className="text-green-500 font-semibold text-base sm:text-lg md:text-2xl xl:text-3xl">
                  داخلی
                </p>
              </div>
              <div className="">
                <p className="opacity-65 text-xs sm:text-base md:text-lg xl:text-xl">
                  نوع
                </p>
                <p className="text-green-500 font-semibold text-base sm:text-lg md:text-2xl xl:text-3xl">
                  کوچک
                </p>
              </div>
              <div className="">
                <p className="opacity-65 text-xs sm:text-base md:text-lg xl:text-xl">
                  گیاه
                </p>
                <p className="text-green-500 font-semibold text-base sm:text-lg md:text-2xl xl:text-3xl">
                  فیکوس
                </p>
              </div>
            </div>
            <Image
              width={500}
              height={200}
              src={ficus}
              alt="هیجی"
              className="md:w-full lg:w-1/2 saturate-150 shadow-gray-100 image-shadow"
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
              <p className="text-green-700 font-bold lg:text-2xl">۳۲٪</p>
              <p className="opacity-75 lg:text-xl lg:opacity-60">نور</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-800 w-fit p-1 rounded-2xl">
              <PiHeartbeatLight className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col px-3 text-sm sm:text-base">
              <p className="text-green-700 font-bold lg:text-2xl">۹۶٪</p>
              <p className="opacity-75 lg:text-xl lg:opacity-60">سلامتی</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-800 w-fit p-1 rounded-2xl flex items-center">
              <WiCelsius className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col px-3 text-sm sm:text-base">
              <p className="text-green-700 font-bold lg:text-2xl">℃ ۲۳</p>
              <p className="opacity-75 lg:text-xl lg:opacity-60">دما</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-gray-800 w-fit p-1 rounded-2xl">
              <MdOutlineWaterDrop className="sm:w-12 sm:h-12 w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col px-3 text-sm sm:text-base">
              <p className="text-green-700 font-bold lg:text-2xl">۵۲٪</p>
              <p className="opacity-75 lg:text-xl lg:opacity-60">آب دهی</p>
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
          <a
            className={`pl-3 border-l-2 border-zinc-700 border-opacity-40 text-xl cursor-pointer transition ease-in delay-75 ${
              !about && "text-lime-700"
            }`}
            onClick={switchToCmsHandler}
          >
            نظرات
          </a>
          <a
            className={`pr-3 transition ease-in delay-75 ${
              about && "text-lime-700"
            } text-xl cursor-pointer`}
            onClick={switchToaboutHandler}
          >
            معرفی محصول
          </a>
        </div>
        {about && (
          <p className="mt-5 px-4 mb-32  opacity-75 leading-loose">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. از طراحان
            گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
            که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
            با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
            درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا
            با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
            طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. چاپگرها و متون
            بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
            فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
            کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
            شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
            بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
            پیشرو در زبان فارسی ایجاد کرد.
          </p>
        )}
        {!about && (
          <div className="pb-32">
            <div className=" pt-5 flex border-b-2 border-slate-700 border-opacity-20 pb-8">
              <div className="h-12 w-12 bg-red-300 rounded-full"></div>
              <input
                type="text"
                placeholder="نظر شما"
                className=" bg-slate-200 w-full h-12 outline-none px-3 mr-6"
              />
            </div>
            <div className="pt-5 flex">
              <p className="w-10 h-10 bg-black rounded-full"></p>
              <div className="flex justify-between w-full items-start">
                <div className="flex items-start">
                  <p className="px-4">علی قلی</p>
                  <p className=" opacity-75">۲ ساعت پیش</p>
                </div>
                <BsThreeDots />
              </div>
            </div>
            <p className="opacity-90 px-14 relative">
              بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط
              فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
              کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
              شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
              بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ
              پیشرو در زبان فارسی ایجاد کرد.
              <span className="absolute -bottom-10 left-0 mx-14 flex items-center">
                <button className="mx-3 text-green-600">پاسخ</button>
                <button
                  className={`w-16 h-10 bg-slate-300 rounded-3xl flex items-center justify-center ${
                    liked && "bg-blue-800"
                  }`}
                  onClick={giveLikeHandler}
                >
                  <BiSolidLike className={`${liked && "text-white"} mx-1 `} />
                  <p className={`${liked && "text-white"}`}>
                    {liked ? "۳" : "۲"}
                  </p>
                </button>
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailNavbar;
